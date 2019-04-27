---
title: (DRAFT FOR REVIEW) Dimensionality Reduction for scATAC Data
layout: post
tags: analysis scATAC
---
There have been many efforts to improve dimensionality reduction methods for scATAC data, particularly considering that it is a relatively underexplored datatype when compared to scRNA-seq. With the many different potential options, it can be somewhat confusing to follow the differences and pros/cons behind each method. The purpose of this post is to:
1. Highlight the major classes of methods
2. Show examples of their performance on real-world data
3. Point out a very simple modification of LSI/LSA that we find works much better than the version most groups use in benchmarking
4. Discuss the tradeoffs between sample-specific features and sample-agnostic features

I've also provided an R markdown file that enables reproduction of all the analyses here (including data downloads), which I hope is useful for exploring the methods discussed in this post:

<span class="downloadLink"><a class="downloadLink" href="/images/posts/2019-4-23-dimensionality-reduction-for-scatac-data/analysis.html">R Markdown (HTML)</a></span>

## Review of methods
At least in my view, there are two main classes of methods that exist currently, although each class is made up of different potential approaches.

### Dimensionality through scoring of metafeatures
I believe the first method developed that fell into this category was [chromVar](https://www.nature.com/articles/nmeth.4401). The idea is that you can choose a set of features such as peak sets, kmers, motif hits, etc. and use a normalized/scaled version of the feature by cell count matrix as a reduced dimension representation of the dataset. This representation can then be used as input to t-SNE/UMAP. These representations can also be interpreted directly as enrichments of motifs in many (but not all) cases, which can be useful independent of dimensionality reduction.

Other methods that fall into this category include [BROCKMAN](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-018-2255-6) and [SCRAT](https://academic.oup.com/bioinformatics/article/33/18/2930/3823309). [Lareau, Duarte, Chew, et al.](https://www.biorxiv.org/content/10.1101/612713v1) also recently applied similar methods in their study.

### Dimensionality reduction via genomic features
One of the challenges of scATAC-seq data is that the choice of features is not nearly as obvious as the choice in scRNA-seq data (genes). Much of the useful information contained in scATAC-seq data isn't overlapping or easy to associate with specific genes. In our experience using genes as features in dimensionality reduction via a few different methods tends to result in substantial loss of resolution in dimensionality reduction.

A number of different types of "features" have been used:
1. Coverage within windows of the genome (generally 5kb in width)
2. Coverage within peaks (either derived from bulk data or merged peaks from across clustered subsets of the data)
3. Extended fragment overlaps

1 and 2 leave you with what is effectively a binary (due to sparse sampling of the genome) window/peak by cell matrix. Pretty much all methods that I am aware of then attempt to transform this matrix in some way prior to doing a first round of linear dimensionality reduction, usually via a fast matrix factorization approach like SVD to do PCA, which can then be used as input to clustering/further dimensionality reduction, etc. However, there are several ways that different groups have gone about this, all of which are geared towards the binary nature of the data.

#### LSI/LSA
LSI/LSA or Latent Semantic Indexing/Analysis is a very simple approach borrowed from the topic modeling field. The idea is that in a binarized window/peak by cell matrix, you can do a transformation called term-frequency inverse-document-frequency (TF-IDF) to provide some depth normalization and upweight windows/peaks that appear less frequently in the population (the reasoning being that these are more likely to be informative). Generally, you would impose some minnimum threshold for the rate of detection of a window/peak in a population to avoid introducing noise. This transformed matrix can then be fed directly into SVD to do PCA. This method is fast

As I will discuss later, there are several different ways out there to perform TF-IDF and the choice of method has a substantial impact on performance, particularly for sparser datasets.

#### LDA/PLSI
Latent Dirichlet Allocation (LDA) and probabalistic LSI/LSA (PLSI/PLSA) are two other approaches borrowed from the topic modeling field. 

PLSI is a probabilitic version of LSI that can be approached from either an expectation maximization (EM) approach or a non-negative matrix factorization (NNMF) approach. Rather than doing TF-IDF followed by SVD/PCA, you use EM or NNMF to find matrices that correspond to `P(topic | document)` and `P(word | topic)`. You would pick the number of topics in advance (much like one would pick a number of principal components). More details can be found in a number of places, including [towards data science](https://towardsdatascience.com/topic-modelling-with-plsa-728b92043f41). One of the potential benefits of PLSI/PLSA is that both matrices are very readily interpretable as probabilities, which is not quite so much the case in LSI/LSA (although the loadings from PCA can used to aid in interpretation).

LDA has a very similar goal to PLSI, but rather than using EM or NNMF, it places a direchlet priors over the `P(topic | document)` and `P(word | topic)` distributions and uses a Bayesian approach (usually some variant of Gibbs sampling) to solving the problem.

In the end, `P(topic | document)` or in the case of scATAC `P(topic | cell)` matrix is a cell by topic matrix of probabilities which can then be used as a reduced dimension space. In practice this can then be used as something equivalent to the PCA space obtained from LSI/LSA. PLSI/PLSA and LDA are each much slower than LSI/LSA (LDA more so than PLSI), but are generally thought to be more accurate. More on these points later.

To my knowledge, [Cusanovich, et al. (Science 2015)](https://science.sciencemag.org/content/348/6237/910) was the first to use LSI/LSA on scATAC data (although the technique has been established for quite some time and applied in many other fields). Several other papers such as [Cusanovich, Reddington, Garfield, et al. (Nature 2018)](https://www.nature.com/articles/nature25981), [Cusanovich, Hill, et al. (Cell 2018)](https://www.cell.com/cell/fulltext/S0092-8674(18)30855-9), [Chen, et al. (Nature Communications 2018)](https://www.nature.com/articles/s41467-018-07771-0), [Satpathy, Granga, et al. (bioRxiv 2019)](https://www.biorxiv.org/content/biorxiv/early/2019/04/18/610550.full.pdf), and the [10X genomics cellranger ATAC pipeline](https://support.10xgenomics.com/single-cell-atac/software/pipelines/latest/algorithms/overview) (implements LSI/LSA and PLSI). Note that this list may not be comprehensive.

LDA is used in a tool called [cisTopic](http://github.com/aertslab/cistopic) described in [González-Blas, Minnoye, et al. (Nature Methods 2019)](https://www.nature.com/articles/s41592-019-0367-1).

Since LSI/LSA can be used on either windows or peaks, the specific uses in the literature mentioned above may vary with respect this choice. In our experience, LDA is slow enough that one would likely only want to apply it to peaks in practice (since they are less numerous), although in principle one could apply LDA to a window by cell matrix.

#### Jaccard distances
Another alternative to LSI/LSA and LDA is to compute the Jaccard index (a metric meant for binary data) as a measure of similarity and use the pairwise Jaccard index matrix as input into PCA (this would be, I believe, equivalent to classical multi-dimensional scaling although typically this would only be a euclidean distance matrix). There are two main flavors of Jaccard-based approaches with which I am familiar:
1. Compute pairwise jaccard index (similarity) based on window by cell matrix, performing post-hoc normalization to account for this metric being highly sensitive to differences in total reads per cell.
2. Extending all fragments to a larger length (say 1kb) and computing Jaccard indices directly based on extended fragment overlaps. One could argue that this is technically not based on "features", but I found it similar enough to the above that I've included it here. One could use post-hoc normalization on the pairwise Jaccard index matrix or downsample cells to equal depth beforehand.

1 has been implemented in a recent pair of tools called [SnapATAC/SnapTools](https://github.com/r3fang/SnapTools), described in [Fang, et al. (bioRxiv 2019)](https://www.biorxiv.org/content/biorxiv/early/2019/04/22/615179.full.pdf). I'll also comment on SnapTools/SnapATAC more later, as it is a really nice tool more generally! In this instance the authors us the normalized pairwise Jaccard index matrix as input to PCA. Bing Ren's group has had different flavors of this method in earlier work like [Preissl et al. (Nature Neuroscience 2018)](https://www.nature.com/articles/s41593-018-0079-3)

2 was described in [Graybuck, et al. (bioRxiv 2019)](https://www.biorxiv.org/content/biorxiv/early/2019/01/20/525014.full.pdf) and the authors downsample cells to 10,000 fragments each rather than performing normalization before using this matrix as input to t-SNE directly.

#### Other approaches based on genomic features
I found at least one other approach described in [Lake, Chen, Sos, Fan, et al. (Nature Biotechnology 2018)](https://www.nature.com/articles/nbt.4038), that models scATAC-seq data as a right-censored Poisson process (to account for the the binary nature of the data), and then uses the censored Poisson deviance residual matrix as input to PCA.

There are likely other approaches out there that I'm not aware of or ones that havne't been published yet. You could imagine approaches like [scVI](https://github.com/YosefLab/scVI), as described in [Lopez et al. (Nature Methods 2018)](https://www.nature.com/articles/s41592-018-0229-2) or any one of several other autoencoder-based approaches being applied to scATAC-seq data with appropriate modifications to account for the fact that the underlying data would not follow a negative binomial distribution.

## Note on important modifications to LSI/LSA
At this point, it is worth mentioning that since our group has used LSI/LSA extensively in the past, you should take my opinion here with a large grain of salt. For the comparisons below, I've done my best to try out other methods and use more than one dataset to give a relatively unbiased view.

Since our last publication using scATAC-seq data ([Cusanovich, Hill, et al. [Cell 2018]](https://www.cell.com/cell/fulltext/S0092-8674(18)30855-9)), I had explored using [cisTopic](http://github.com/aertslab/cistopic) and found that it tended to work quite a bit better than our usual LSI/LSA method.

We went on to notice even more substantial differences in sparser datasets that we have generated more recently and we were always a bit confused as to why LSI/LSA seemed to perform so poorly on sparse datasets. After some digging, we arrived at the conclusion that much of the difference might be attributable to the way in which we have typically computed the TF matrix in the TF-IDF step of LSI/LSA rather than much difference the matrix factorization procedures used in LSI/LSA and LDA per se.

The purposes of TF-IDF in this case are 1) some normalization of what would otherwise be a binary matrix and 2) prioritizing sites that are seen less frequently in the population of cells. Generally we (and many others) compute the TF matrix as (in R):
```
tf = t(t(count_matrix) / Matrix::colSums(count_matrix))
```

It turns out that in many scATAC datasets (particularly if you are not very careful about which sites you use as input as we were in our paper), this will end up having strong outliers and being exponentially distributed, due to the distribution of total sites in cells.

We then compute the TF-IDF matrix using:
```
idf = log(1 + ncol(count_matrix) / Matrix::rowSums(count_matrix))
tfidf = tf * idf
```

The main issue, we think, is that the resulting matrix is being used as input into SVD/PCA without any further normalization or scaling. If you do have strong outliers, it is entirely expected that a method like PCA would tend not to work as well as something like LDA.

We reasoned that this could be fixed by simply log scaling entries of the tf matrix:
```
tf = t(t(count_matrix) / Matrix::colSums(count_matrix))
tf@x = log1p(tf@x * scale_factor)
idf = log(1 + ncol(count_matrix) / Matrix::rowSums(count_matrix))
tfidf = tf * idf
```

To illustrate the effect that log scaling has, this is the distribution of entries in the tf matrix before and after log scaling:
```
TODO FIGURE
```

It is worth noting that the version of TF-IDF used in the 10x genomics cellranger pipeline, which is different from either discussed here, works pretty comparably to our proposed modification. While you might see some improvement switching between the two, they both perform well and broadly seem fairly similar.

### LSI vs. LSI logTF on data from mouse whole brain and PFC
This change (or the version of TF-IDF used by 10x genomics) tends to improve results markedly. Here is a comparison of original flavor of LSI vs. the one with a log-scaled TF matrix on all whole brain and prefrontal cortex cells from Cusanovich, Hill, et al. [Cell 2018](https://www.cell.com/cell/fulltext/S0092-8674(18)30855-9) when simply imposing a lower bound on number of cells in which a site is measured as non-zero:
<img src="/images/posts/2019-4-23-dimensionality-reduction-for-scatac-data/mouse.lsi_vs_lsilogtf.png" alt="mouse_lsi_vs_lsilogtf" width="100%">

Note that in each case, I am feeding the reduced dimension space (PCA in this case) through a fairly standard workflow in [Seurat 3](https://satijalab.org/seurat/) for doing tSNE and Louvain clustering. I'll use this workflow on the initial PCA (or cell by topic matrix for cisTopic) throughout the post to make comparisons easier. The plot above also shows the results of each and then shows what each embedding looks like with cluster assignments swapped between the two techniques to illustrate similarity (or discordance), something I will also do throughout the rest of the post.

Log scaling the TF matrix makes a big difference here and as you'll see later, this difference can be even more pronounced on sparser datasets. I'll refer to this flavor of LSI/LSA as LSI logTF for convenience.

### Comparison to cisTopic
Reassuringly, the results look very comparable to those generated by using cisTopic (with much shorter runtimes; minutes vs. several hours):
<img src="/images/posts/2019-4-23-dimensionality-reduction-for-scatac-data/mouse.lsilogtf_vs_cistopic.png" alt="mouse.lsilogtf_vs_cistopic" width="100%">

### Comparison to Jaccard method
I also compared to the Jaccard-based method in [SnapATAC/SnapTools](https://github.com/r3fang/SnapTools), described in [Fang, et al. (bioRxiv 2019)](https://www.biorxiv.org/content/biorxiv/early/2019/04/22/615179.full.pdf). Note that since SnapATAC takes a 5kb window matrix as input rather than peak matrix, I reran LSI logTF on the same window matrix used by SnapATAC to match features and cells used by both methods. This difference doesn't ultimately matter for this dataset as I'll show later in the post. I have also chosen to only use the output of SnapATAC up until the PCA stage such that I can match the downstream dimensionality reduction and clustering strategies for comparison purposes.

<img src="/images/posts/2019-4-23-dimensionality-reduction-for-scatac-data/mouse.lsilogtf_vs_snapatac.png" alt="mouse_lsilogtf_vs_snapatac" width="100%">

Note that this method uses the binary peak matrix from SnapTools/SnapATAC which ultimately includes a different subset of cells due to QC filtering choices, etc. which seems to account for most of the difference between the use of peaks and windows here with LSI (more on this later). Both of these methods are pretty fast on datasets of this size in my hands.

### Comparison to K-mer method
Part of why I chose this particular subset of our data as one of the examples for this post was that [Lareau, Duarte, Chew, et al.](https://www.biorxiv.org/content/10.1101/612713v1) recently published the results of applying a 7-mer deviation approach to this same subset of our data. Here is a screenshot of Supplemental Figure 4 panel F from that paper for reference:
<img src="/images/posts/2019-4-23-dimensionality-reduction-for-scatac-data/seven-mer_deviation_mouse_atac.png" alt="seven-mer_deviation_mouse_atac" width="100%">

Based on the results above, and independent results from [González-Blas, Minnoye, et al. (Nature Methods 2019)](https://www.nature.com/articles/s41592-019-0367-1) and [Fang, et al. (bioRxiv 2019)](https://www.biorxiv.org/content/biorxiv/early/2019/04/22/615179.full.pdf) on simulated datasets, I think it is fairly clear that approaches that use metafeatures like k-mers don't tend to perform as well as other alternatives. Therefore, I've chosen not to compare to these particular methods throughput the rest of this post.

## 10X adult mouse brain dataset
To show that this also holds true for another dataset (we have anecdotally seen it across many), I downloaded and processed a sample of approximately 5000 nuclei from [adult mouse cortex provided by 10x genomics](https://support.10xgenomics.com/single-cell-atac/datasets/1.1.0/atac_v1_adult_brain_fresh_5k).

Each section follows all the same conventions as the above in terms of input to each tool and plots.

### LSI vs. LSI logTF
<img src="/images/posts/2019-4-23-dimensionality-reduction-for-scatac-data/tenx_mouse.lsi_vs_lsilogtf.png" alt="tenx_mouse_lsi_vs_lsilogtf" width="100%">

### Comparison to cisTopic
TODO this is still running

### Comparison to Jaccard method
<img src="/images/posts/2019-4-23-dimensionality-reduction-for-scatac-data/tenx_mouse.lsilogtf_vs_snapatac.png" alt="tenx_mouse_lsilogtf_vs_snapatac" width="100%">

## Windows vs. peaks as features
We have historically used peaks as features (although have applied LSI to 5kb windows regularly for preliminary clustering steps). Regardless of the choice of dimensionality reduction features, peak matrices and peak calls more generally are inevitably quite useful as many analyses are centered around peaks (differential accessibility, motif enrichments, etc.).

However, one thing that scATAC-seq currently lacks relative to scRNA-seq is a common feature set across datasets. If all groups were to report matrices of counts in 5kb intervals (or some agreed-upon length), any two datasets could easily be combined. Peak matrices are inherently sample-specific which means that comparing two datasets would require having access to BAM files (or something similar) in order to generate matrices across common sets of features.

Here I show that at least for the two datases mentioned above, when matching the cells used as input to the analysis, peaks and windows serve as equally useful features (which makes the case for using windows in my opinion, at least in this context).

### Mouse whole brain and PFC
<img src="/images/posts/2019-4-23-dimensionality-reduction-for-scatac-data/mouse.peaks_vs_windows.png" alt="mouse_peaks_vs_windows" width="100%">

### 10X adult mouse brain dataset
<img src="/images/posts/2019-4-23-dimensionality-reduction-for-scatac-data/tenx_mouse.peaks_vs_windows.png" alt="tenx_mouse_peaks_vs_windows" width="100%">

## Downsampled data
Several papers have examined the impact of decreased complexity on dimensionality reduction results. If we purely want to assess the impact of overall complexity on dimensionality reduction, we can just choose a subset of non-zero window-cell entries to zero out at random as a method of downsampling. This is also made easier by the use of windows (whereas with peaks, your actual peak calls would be subject to change with decreased depth).

It is worth noting that this by no means captures the real world variation in data quality for scATAC-seq data. Signal to noise ratio (e.g. as measured by FRiP, promoter enrichment, etc.) is also very important and would not be captured by this simple test. By this I just mean to say that datasets can look very different even at the same overall complexity due to a number of other factors.

Here I chose only to focus on LSI logTF and SnapATAC on the 10x genomics adult mouse brain dataset in the interest of time, but the R markdown file mentioned at the start of the post has all the code you would need to try this out on other datasets. For reference, for this particular dataset 20% of the original depth corresponds to only 1-3K unique fragments per cell depending on how you count.

<img src="/images/posts/2019-4-23-dimensionality-reduction-for-scatac-data/downsampling.png" alt="downsampling" width="100%">

All plots are colored by the original LSI logTF cluster assignments using windows as features. Both SnapATAC and our logTF version of LSI seem to perform quite well at reduced depth. While the plots above look very consistent, there is a slight decrease in the number of clusters called by Seurat for all approaches with downsampling using a consistent resolution parameter (although using a higher resolution paramter would probably enable similar groupings, which is great).

When examining clustering results on each dataset/method independently, logTF LSI has 16, 16, and 11 clusters called at this resolution with decreasing depth (8, 7, and 4 without log scaling). For SnapATAC the number of clusters called has 15, 15, and 13. Therefore, it seems like at least the last downsampling has some deterimental effect in this case for all techniques although I can't rule out the possibility that choosing a slightly different site-level filtering strategy might make a difference here.

At least at this first level of clustering, they seem to perform fairly equitably. It's possible that one of the two might perform better in an iterative context or other contexts in which there are less obvious differences between cells. In poking around so far, I havne't found a case where one clearly outperforms the other, but I plan to continue to compare the two on other datasets we're working with and would be very interested if someone does find good examples.

## Conclusions
There are many possible ways in which to reduce the dimensionality of scATAC-seq data and hopefully this serves as a useful review and test of different methods as they stand currently. I've also shown that even within one class of method (LSI/LSA) simple differences in normalization procedures can make a big difference. Future papers should be careful to document the exact method used (e.g. the equations used for TF-IDF rather than just stating that LSI/LSA was used). My own personal opinion is that both our slightly modified version of LSI/LSA and the Jaccard index based method in SnapATAC work quite well even on very sparse datasets and are both quite fast. While more exploration should be done to assess this more broadly, this is very encouraging. Furthermore, the potential for using windows rather than peaks as features opens up the possibility of a common feature set for scATAC-seq data.

## Note about SnapTools/SnapATAC
Dimensionality reduction is just a very small portion of what SnapTools and SnapATAC accomplish. During the writing of this blog post I have gotten to explore both and think that they are both extremely useful tools and would encourage you to check them out. SnapTools allows for uniform processing of datasets from different technologies. SnapATAC leverages *.snap files generated by SnapTools to enable lots of extra utilities like wrappers for peak calling and motif enrichment, producing gene level scores, merging of datasets, extraction of reads for subsets of cells, etc. all from a single file. In priciple, one could likely accomplish something similar using the [fragments file output by cellranger-atac with 10x genomics data](https://support.10xgenomics.com/single-cell-atac/software/pipelines/latest/output/fragments). This is something I have wanted badly for a long time and am extremely thanful that Rongxin Fang and colleagues have developed these tools and made them broadly available.
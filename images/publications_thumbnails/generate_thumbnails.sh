for file in ../publications/*.pdf; do
	convert -density 200 ${file}[0] $(basename ${file%.pdf}.png)
done

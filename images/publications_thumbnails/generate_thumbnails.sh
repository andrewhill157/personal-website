for file in ../../documents/publications/*.pdf; do
	output_file=$(basename ${file%.pdf}.png)

	if [ ! -f $output_file ]; then
		convert -density 200 ${file}[0] $output_file
	fi
done

# note that for the mouse atac one I had to compress with this tool https://compresspng.com/
# not sure why the PNG ends up being so big...

#!/usr/bin/env bash
# Use: 
# Make this file executable, and feed it the results from the Slack emoji URL dump. Files will be downloaded to `output`
# 	chmod +x download.sh
# 	./download.sh emojiURLs.txt

mkdir -p output;

while read -r line || [[ -n "$line" ]]; do
	parts=($line)
	url=${parts[1]}
	name=${url%/*.*}
	name=${name##*/}
	extension=${url##*.}

	echo "Downloading ${name}.${extension} from ${url}"
	curl -s -o "output/${name}.${extension}" "${url}"

done < "$1"

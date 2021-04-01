#!/bin/bash

set -e

if [[ -z "$1" ]]; then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi

# $1 (e.g. dist)
#git subtree push --prefix $1 origin gh-pages
git push origin `git subtree split --prefix $1 main`:gh-pages --force

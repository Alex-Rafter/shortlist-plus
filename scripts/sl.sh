#!/usr/bin/env bash

# Download all the files needed
git remote add shortlist https://github.com/Alex-Rafter/shortlist-lib.git
git checkout -b shortlist
git pull shortlist main --allow-unrelated-histories
git checkout main
git checkout shortlist -- '*.js'
# git checkout shortlist -- '*.aspx'
git branch -D shortlist
git remote remove shortlist
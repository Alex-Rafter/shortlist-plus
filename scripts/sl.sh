#!/usr/bin/env bash

# Download all the files needed
git remote add shortlist https://github.com/Alex-Rafter/shortlist-lib.git
git co dev
git checkout -b shortlist-plus
git fetch shortlist main
git checkout shortlist/main -- 'js/*.js'
git checkout shortlist/main -- 'src/scss/app/theme/components/_shortlist-plus.scss'
git checkout shortlist/main -- 'inc/modules/petite/*.aspx'

# add sj scss to index.scss
printf "\n%s" '@import "shortlist-plus";' >> 'src/scss/app/theme/components/index.scss'

# add js-import to js-foot.aspx
printf "\n%s" '<!--#include file="/inc/modules/petite/js-import.aspx" -->' >> 'inc/js/js-head.aspx'

git remote remove shortlist

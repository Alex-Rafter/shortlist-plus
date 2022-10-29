#!/usr/bin/env bash

# Download all the files needed
git remote add shortlist https://github.com/Alex-Rafter/shortlist-lib.git
git checkout -b shortlist
git pull shortlist main -X theirs --allow-unrelated-histories
git checkout main
git checkout shortlist -- '/src/js/shortlist-plus/*.js'
git checkout shortlist -- '/src/scss/app/theme/components/_shortlist-plus.scss'
git checkout shortlist -- '/inc/modules/shortlist-plus/*.aspx'

# add sj scss to index.scss
echo '@import "shortlist-plus";' >> '/src/scss/app/theme/components/index.scss'

# add js-import to js-foot.aspx
echo '<!--#include file="/inc/modules/shortlist-plus/js-import.aspx" -->' >> '/inc/js/js-foot.aspx'

git branch -D shortlist
git remote remove shortlist

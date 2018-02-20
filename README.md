# Ed Stennett

This is the readme for my personal site. This should be used as a guide for setting the site up locally. The site uses [Jekyll](https://jekyllrb.com/docs/installation/), a static site generator.

## Usage

1. Fork and clone the repo: `git clone https://github.com/edstennettackee/edstennett.git`
2. Install [Jekyll](https://jekyllrb.com/docs/installation/): `gem install jekyll`
3. Install the theme's dependencies: `bundle install`
4. Run the Jekyll server: `jekyll serve --config _config.yml,_debug.yml`

### Features

Jekyll works with [liquid](https://shopify.github.io/liquid/) tags usually represented by:

```
{{ liquid.tag | filter }}
```

These are useful to render your jekyll files. You can learn more about them on [shopify's doc](https://help.shopify.com/themes/liquid/basics)
# Seenit [![Build Status](https://travis-ci.org/edstennettackee/seenit.svg?branch=master)](https://travis-ci.org/edstennettackee/seenit)

This is the readme for the seenit brochure site. This should be used as a guide for setting the site up locally. The site uses [Jekyll](https://jekyllrb.com/docs/installation/), a static site generator. Job listings, people, and blogs are written in markdown and generated into a full site. 

> [Demo](https://edstennettackee.github.io/seenit/)

## Usage

1. Fork and clone the [Seenit repo](https://github.com/edstennettackee/seenit): `git clone https://github.com/edstennettackee/seenit.git`
2. Install [Jekyll](https://jekyllrb.com/docs/installation/): `gem install jekyll`
3. Install the theme's dependencies: `bundle install`
4. Run the Jekyll server: `jekyll serve`. You can livereload using `jekyll serve --livereload`

Note: if you wish to test locally on mobile, use `jekyll serve --host=0.0.0.0` and navigate to your computers IP on your phone.


### Features

Jekyll works with [liquid](https://shopify.github.io/liquid/) tags usually represented by:

```
{{ liquid.tag | filter }}
```

These are useful to render your jekyll files. You can learn more about them on [shopify's doc](https://help.shopify.com/themes/liquid/basics)

### Comments (via Disqus)

We don't have one, but if we wanted to, we could add in comments through a [Disqus](https://disqus.com/) account. This would show a comments section below each post. 

To enable Disqus comments, add your [Disqus shortname](https://help.disqus.com/customer/portal/articles/466208) to your project's `_config.yml` file:

```yml
  theme_settings:
     disqus_shortname: my_disqus_shortname
```
Note: this is currently disabled

### Maths typesetting

When KateX is set in `_config.yml`:

```yml
  theme_settings:
     katex: true # to Enable it
```

You can then wrap mathematic expressions with `$$` signs in posts and make sure you have set the `katex` variable in `_config.yml` to `true` for maths typesetting.

For inline maths typesetting, type your maths expression on the *same line* as your content. For example:
```latex
Type math within a sentence $$2x^2 + x + c$$ to display inline
```

For display maths typesetting, type your math expression on a *new line*. For example:

```latex
$$
  \bar{y} = {1 \over n} \sum_{i = 1}^{n}y_i
$$
```

This has been added should we wish to use this feature in blog posts.

### Search

The search feature is based on [Simple-Jekyll-search](https://github.com/christian-fei/Simple-Jekyll-Search) there is a `search.json` file that will create a list of all of the site posts, pages and portfolios. 

Then there's a `search.js` displaying the formated results entered in the `search.html` page. 


The search page can be enable/disable in the navigation bar through the `_config.yml` via:
```yml
Scripts / Feature
  search: true
```

### Tags

Tags should be placed between `[]` in your post metadata. Seperate each tag with a comma. Tags are recommended for posts and portfolio items.

For example:

```yml
---
layout: post
title: Markdown and HTML
tags: [sample, markdown, html]
---
```

> Tags are case sensitive `Tag_nAme` ≠ `tag_name`

All the tags will be listed in `tags.html` with a link toward the pages or posts.
The tags page can be enable/disable in the navigation bar through the `_config.yml` via:

```yml
# Scripts / Feature
  tags: true
```

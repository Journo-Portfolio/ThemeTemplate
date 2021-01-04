# Journo Portfolio Theme Template

## Entry Points

`article.html` for blog posts
`page.html` for all pages

## Styles

Theme must have a `static/css/style.scss` file

## Static files

All static content, javascript, css, images should be in a `static/` folder.

This is available in the theme via the `asset_url` tag, for example:

`{% asset_url 'css/style.scss' %}`

## Data object

```
{
   "page": {
      "name": "Home",
      "id": 1,
      "privacy": "public",
      "slug": "home",
      "parent": null,
      "seo_description": "",
      "image": {
         "name": "g-crescoli-365898-unsplash.jpg",
         "image": {
            "url": "https: //media.journoportfolio-stg.com/users/2/images/93b18adf-f806-499d-94ab-84253ff8e0b5.jpg"
         },
         "image_height": 1366,
         "image_ratio": 100.0,
         "image_width": 1366,
         "alt_text": null,
         "credit_text": null,
         "credit_url": null
      },
      "home": true,
      "blocks": [
         {
            "id": 119275,
            "type": "text",
            "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
            "template": "square/blocks/text.html"
         },
         {
            "id": 119280,
            "type": "image",
            "caption": "Some image caption",
            "image": {
               "name": "8ac94200-3cac-4953-a28f-3ef3eaa07eba.jpeg",
               "image": {
                  "url": "https://media.journoportfolio-stg.com/users/2/images/8ac94200-3cac-4953-a28f-3ef3eaa07eba.jpeg"
               },
               "image_height": 933,
               "image_ratio": 66.64285714285715,
               "image_width": 1400,
               "alt_text": null,
               "credit_text": null,
               "credit_url": null
            },
            "fixed": false,
            "template": "square/blocks/image.html"
         },
         {
            "id": 119273,
            "type": "articles",
            "article_order": "custom",
            "article_type": "manual",
            "articles": [
               {
                  "id": 907700,
                  "has_modal": true,
                  "title": "The Most Insane Video Of 2020 ",
                  "publication": "Facebook Watch",
                  "item_type": "facebook-video",
                  "user": {
                     "id": 2
                  },
                  "published_date": datetime.date(2020,
                  7,
                  29),
                  "description": "",
                  "extract": "Lorum Ipsum.",
                  "url": "https://www.facebook.com/watch/?v=329667694886380",
                  "view_url": "https://www.facebook.com/watch/?v=329667694886380",
                  "slug": "the-most-insane-video-of-2020",
                  "hide_date": false,
                  "image": {
                     "name": "111207513_327364048450078_2842786802586379784_n.jpg",
                     "image": {
                        "url": "https://media.journoportfolio-stg.com/users/2/images/fe73b9de-c4ec-441f-ad74-6c05d0f7b9bf.jpg"
                     },
                     "image_height": 355,
                     "image_ratio": 177.5,
                     "image_width": 200,
                     "alt_text": null,
                     "credit_text": null,
                     "credit_url": null
                  },
                  "file": null
               },
            ],
            "has_more": false,
            "heading": "My Best Work",
            "description": "<p>Have a read of a selection of my best work below:</p>",
            "layout": "Grid",
            "show_filter_bar": true,
            "template": "square/blocks/articles.html"
         },
      ]
   },
   "portfolio": {
      "id": 2,
      "privacy": "password",
      "url": "https: //joshlewis2.journoportfolio.com",
      "account_type": "free",
      "custom_css": "",
      "custom_scripts": "",
      "page_count": 1,
      "pages": [
         {
            "id": 1,
            "slug": "home",
            "name": "Home",
            "page_type": "articles",
            "url": "/",
            "children": []
         }
      ],
      "first_name": "Joshua",
      "bio": "<p>Lorem ipsum sit amet, consectetur adipiscing elit.</p>",
      "display_bio": "<p>Lorem ipsum sit amet, consectetur adipiscing elit.</p>",
      "subscription_signup_enabled": true,
      "image": {
         "url": "https: //media.journoportfolio-stg.com/users/2/images/profiles/bd0cbd99-b262-4a43-aff6-80b69c6dbad1.jpg"
      },
      "footer_text": "<p>Copyright 2020</p>",
      "hide_branding": false,
      "portfolio_title": "Journo Portfolio",
      "facebook": null,
      "email": "josh.carllewis@gmail.com",
      "cv": {
         "name": "sample3.pdf",
         "file": {
            "url": "https: //media.journoportfolio-stg.com/users/2/uploads/a9ea7002-fbe4-4f91-b6f5-80963cbc8f3f.pdf"
         }
      },
      "twitter": null,
      "twitter_url": "",
      "linkedin": null,
      "codepen": null,
      "website": null,
      "instagram": null,
      "reddit": null,
      "medium": null,
      "vimeo": null,
      "behance": null,
      "fivehundredpx": null,
      "dribbble": null,
      "tumblr": null,
      "snapchat": null,
      "soundcloud": null,
      "flickr": null,
      "youtube": null,
      "pinterest": null,
      "show_email": false,
      "hubspot_id": "",
      "clicky_id": "",
      "analytics_code": "UA-17059955-50",
      "sumome_code": "",
      "favicon": "https: //www.journoportfolio.test/favicon.ico",
      "google_site_verification": "YnYQrkimS6czHK1U_EUa-gFxo-Kg_MgRIuTt4UhbGcY"
   },
   "theme": {
      "slug": "square",
      "name": "Square"
   },
   "settings": {
      "article_image_ratio": "110%",
      "body_font": {
         "weight": "100",
         "display": "Titillium Web",
         "color": "#555555",
         "size": "16px"
      },
      "color": "#9E0F0F",
      "date_format": "jS F Y",
      "footer_bg_color": "#dddddd",
      "heading_font": {
         "weight": "400",
         "display": "Righteous",
         "color": "#333333"
      },
      "hide_article_excerpts": true,
      "name_font": {
         "weight": "400",
         "display": "Righteous",
         "color": "#111111",
         "size": "28px"
      },
      "page_bg_color": "#FFFFFF",
      "social_icon_style": "dark",
      "google_fonts_url": "Titillium+Web: 100|Righteous: 400|Righteous: 400"
   },
   "canonical_url": "https: //test.journoportfolio.com/"
}
```

## GULP STARTER DEV
A starter folder structure to get up and runnnig building a website.
Using Gulp as our task runner we have three different Gulp Tasks.

### Gulp
This is used for when we are in development mode. It creates a local host and watches our files and updates the browser everytime we make a change to any file.


### Gulp Build

```
index.html
files
  js/
	|- settings-home.js
	|- plugins/
	|   |-plugins.js //All plugins Js go here. Minify first.
  css/
    |- styles.css
  images/
  fonts/
  includes/
  	|-menu.html		   # Include files from here to your page
  pages/			   # ALways work in these files which output
  	|-index.html		   # to the root of the folder.
  	|-inside.html
  scss/ 
	|– styles.scss             # primary Sass file 
	| 
	|– base/ 
	    |– _reset.scss         # Reset/normalize
	    |- _content.scss       # Base styling fortypography ul, li , tables etc.
	    |– _forms.scss         # Forms
	    ...                    # Etc… 
	 
	|– components/ 
	    |– _carousel.scss      # Carousel Rules
	    |– _map.scss           # Map rules 
	    |-_searchbox.scss      # Searcbox Styles
	    ...                    # Etc… 
  
	|– theme/ 
	    |– _variables.scss     # Sass Variables 
	    |– _mixins.scss        # Sass Mixins 
	    |– _main.scss          # All main styles 
	    ...                    # Etc… 
	  
	|– plugins/ 
	    |– _owl-carousel.scss  # Owl Carousel
	    |– _jquery-ui.scss     # jQuery UI 
	    ...                    # Etc… 
	
```
## How To
Download folder
Using the command line navigate to that folder.
run ```npm install``` 
When thats done run ```gulp```

## General
All folder names should be lowercase and use hyphens.

## Descriptions

###Base

The `base/` folder holds all your base style for your project. In there, we have the reset (or Normalize.css, or whatever), probably some stuff dealing with typography, tables , lists etc. and overall styles.

* `_reset.scss`
* `_typography.scss`
* `_content.scss` lists, tables etc.
* `_forms.scss`

###Components

For smaller components, there is the `components/` folder . It can contain all kinds of specific modules like a map, a loader, a carousel, searchbox or anything along those lines. 

* `_carousel.scss`
* `_map.scss`
* `_searchbox.scss`

### Theme

The `theme/` folder  gathers all Sass tools and helpers we’ll use across the project -  functions, mixins etc. This folder also contains a `_variables.scss` file  which holds all global variables for the project (for typography, color schemes, and so on).
 

* `_variables.scss`
* `_mixins.scss`
* `_main.scss`


### Plugins

And last but not least, you will probably have a `plugins/` folder containing all the CSS files from external libraries and frameworks – OwlCarousel, jQueryUI and so on. These files should not be edited. Use your main stylesheets to overide any styles you need to change.

Example:

* `owl-carousel.scss`
* `jquery-ui.scss`


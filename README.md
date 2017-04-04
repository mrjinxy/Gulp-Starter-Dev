## GULP STARTER DEV
A starter folder structure to get up and runnnig building a website.
Using Gulp as our task runner we have three different Gulp Tasks.
Download and navigate to the folder.
Use the command `npm install` to install all node modules

### Gulp
Usage -  `gulp` while in the folder
This is used for when we are in development mode.
It does a couple of tasks to help us : 
* It creates a localhost server where we can see our work
* It will watch all our files and update the localhost when anything is changed
* It will compile our sass and watch for errors
* While working in any Js file it will lint our code for warnings or errors


### Gulp Build
Usage -  `gulp build` while in the folder
This is used when developement is finished and the project and all its assets are to be minified and sent to the `dist` folder


### Gulp Sassdoc
Usage -  `gulp sassdoc` while in the folder
This creates the sassdoc documentation and places it into the `docs` folder.
If you havent added and new elements (variables, mixins, functions) to the SCSS then you dont need to re-build the docs.

```
DEV FOLDER
	|-modules/
		|--favicons.html
	|-pages/
		|--index.html
	|-src/
		|-css
			|-maps # Sass source maps
		|-fonts
			|-all fonts inside this folder
		|-img
			|-all images in this folder
		|-js
			|-plugins
				|- all javascript plugins inside this folder.
			|--jquery.js
			|--jqueryui.js
			|--settings.js
		|-scss
			|-base
				|--_global.scss
				|--_helpers.scss
			|-fonts
				|--_basicarrows.scss
			|-modules
				|- all modules from pages inside this folder in seperate files/
			|-plugins
				|- all plugin scss files inside this folder
			|-presets
				|-_bootstrap.scss
				|-_reset.scss
			|-settings
				|-_mixins.scss
				|-_variables.scss
			|--styles.scss
	|--index.html

DIST FOLDER
	|-src
		|-css
			|-styles.min.css # outputted and minified CSS file
		|-fonts
			|-outputted fonts inside this folder
		|-img
			|-all images in this folder
		|-js
				|-main.min.js #outputted and minified JS file
	|--index.html

DOCS FOLDER - Sassdoc folder
	|-assets
		|-css
			|-main.css
		|-images
			|-all images inside this folder for Sassdocs
		|-js
			|-main.min.js
	|--index.html
	
```

## General
All folder names should be lowercase and use hyphens.

## Descriptions

## Modules

For HTML components, there is the `modules/` folder . It can contain all kinds of specific modules like a map, a loader, a carousel, searchbox or anything along those lines. 

* `module.html`

## Pages

These are the working pages files.  `index.html`, `inside.html` etc. Call your module files here.

* `index.html`

## SRC
This folder contains all the assets use in the site. Images , SCSS, Javascript etc.

### CSS
Contains the compiled SCSS file and the Source maps for that file.

### FONTS
Contains all the fonts included in th projects

### IMG
Any images used should be in this folder

### JS
The working Js files are conatined in this folder. The jQuery files, the js plugin files and the `settings.js`
### SCSS
All the SCSS is contained here in the SCSS folder and split into seperate folders.

	### Base

		The `base/` folder holds all your base style for your project. In there, we have the reset (or Normalize.css, or whatever), probably some stuff dealing with typography, tables , lists etc. and overall styles.

		* `_reset.scss`
		* `_typography.scss`
		* `_content.scss` lists, tables etc.
		* `_forms.scss`


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


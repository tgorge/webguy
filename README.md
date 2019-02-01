# I used the [Gulp.js](https://gulpjs.com) task runner to automate the update process and [npm](https://www.npmjs.com) to manage the JavaScript files. In this case, Gulp compiles the SASS files into CSS usable by browsers and copies the JavaScript and Font files from _node-components_ into the template's assets directory. Let's go through how this works step by step.

### Installing Gulp

Gulp depend on npm, the Node.js package manager. You'll need to [download npm](https://nodejs.org/en/download/) and install it, but you don't need to worry about it once it's installed.

The first time you use Gulp, you'll need to install them. Open the terminal/command prompt on your system and run:
```
npm install -g gulp-cli
```

Then, for every project you work on (such as this template), you need to navigate to the base directory of the template in the terminal/command prompt and run:
```
npm install
```

### Using npm

```
npm install <pakedge_name>
npm install jquery
```
This command installs a package, and any packages that it depends on.

Additionally, you can control where and how they get saved with some additional flags:

```
-P, --save-prod
```
Package will appear in your dependencies. This is the default unless -D or -O are present.


```
-D, --save-dev
```
Package will appear in your devDependencies.


```
-O, --save-optional
```
Package will appear in your optionalDependencies.


```
--no-save
```
Prevents saving to dependencies.


### Using Gulp

You can run Gulp using the following command in the current Template directory:
```
gulp
```

By default, this does the following things:
* Compiles the SASS files in `src/sass/` into `style.css` and `assets/styles/vendors.css`
* Analyses the new `style.css` and adds any vendor prefixes which might be needed
* Generates source maps, which means that if you inspect an element in your browser's web developer tools, they will reference the location in the SASS files, rather than the outputted CSS
* Copies the downloaded Fonts, JavaScript from node_components into `assets/` 


```
gulp watch
```
It then runs a watch task, which means it will wait for you to edit and save files in `src/sass/`, and when you do, it will compile them automatically. This means you don't have to run _gulp_ every time after you edit a file.


```
gulp styles
```
Generate styles.css and styles.map.css


```
gulp styles:v
```
Generate vendors.css and vendors.map.css


```
gulp scripts
```
Generate main.js and main.min.js


```
gulp copyjs
```
Copy all external JavaScripts files (need to be added in gulpfile) into `assets/` 


```
gulp copyfonts
```
Copy all external Fonts files (need to be added in gulpfile) into `assets/` 

```
gulp clean
```
This task will remove all generated and copied files

### Using SASS

SASS is basically a supercharged version of CSS. You can find out more about the [benefits of SASS](http://sass-lang.com), and particularly check out the [SASS reference](http://sass-lang.com/guide) for a quick look at what you can do with SASS over basic CSS.

### Copying files to your server

npm create the large `node_modules` folder containing a lot more than the Template requires. All that is needed is copied from this directory into Template directories by gulp, so you don't have to upload this directory when you upload the Template files to your server.

### Happy Coding
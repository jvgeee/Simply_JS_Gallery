Simply_JS_Gallery
=================

Just a very simple image gallery written in Javascript. I'm learning, and wanted to see if I could successfully write something without relying on jQuery to do the hard work for me

require 'github/markup'
GitHub::Markup.render(file, File.read(file))

THE FEATURES:

11/12/12 - Can call for one/multiple/no elements (originally the function just ran automatically)
11/12/12 - Moved the image array to HTML page so the user doesn't have to fiddle with the .js file

FILE STRUCTURE:
  
    <div id="foo">
      <img src="img/source.jpg" />
    </div>
    <div id="controls">
      <span id="left">&#60;</span>
      <span id="right">&#62;</span>
    </div>

This script only needs one image (whichever you want to show up by default). The rest are stored in the .js file.

The controls can be whatever you like - a <button> element, an image, an arrow - so long as they have the ids "left" and "right".

USAGE:

Load simple_js_gallery.js first, then call the function. Pass in whatever div element contains your placeholder image (in the above example, it's "foo")

    <script src="link/to/simple_js_gallery.js"></script>
    <script>
      var imageArray = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"]; //Put images in an array
      
      simple_js_gallery("foo", imageArray); //Call the function with parameters ("elementID", ImageArrayName)
    </script>


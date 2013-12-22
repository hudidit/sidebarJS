sidebarJS
-----------------
Add sidebar navigation to your website easily.

[View Demo](http://gallery.hudidit.com/huyueFramework/sidebarJS/)

How to use
---------------
```html
<!DOCTYPE HTML>
<html>
<head>
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <link rel="stylesheet" href="./sidebar.css" />
</head>
<body>
    <header>
        <h1>Title</h1>
        <a href="#" class="sidebar-btn"></a>
    </header>
	<nav class="sidebar-nav">
        <a href="...">Home</a>
        <a href="...">About</a>
        <a href="...">Contact</a>
    </nav>
    <script src="./sidebar.js"></script>
</body>
</html>
```
Watch Out!
---------------
- `<meta name="viewport" content="width=device-width">`is needed.
- Class names must be exactly the same as above.
- `<nav class="sidebar-nav">...</nav>`is recommended to be written after other contents of the document, otherwise [FOUC](http://en.wikipedia.org/wiki/Flash_of_unstyled_content) might happen.
- `<script>`must follows other code for sidebarJS.

Under GPL License
-----------------
# Drop
Drop features two dropdown menu options, light on style so you can easily modify them to fit your design:

1. [Basic](drop-basic.md), a simple, single-column menu.
2. [Jumbo](drop-jumbo.md), a full-screen, multi-column option.

Pick the one that best fits your project.


## Using Both Patterns
For simpicity, both dropdown menu options use the same naming conventions.

If you will be using both options on a project, you'll need to change the class names to avoid conflicts. For example, you might change `.dropdown-menu` to `.dropdown-menu-basic` and `.dropdown-menu-jumbo`, respectively.


## Backup URLs
Always specify a functioning link as a backup for dropdown links.

If a browser doesn't support JavaScript, the dropdown menu won't work. Specifying a backup URL ensures that people can always access your content, even on less capable browsers.

When JavaScript is supported, Drop will prevent the backup URL from redirecting people away from the current page.

    <li class="dropdown">
        <a href="backup-url.com">Dropdown</a>
        ...
    </li>


## Built for Astro
Drop was built as a companion to [Astro](http://cferdinandi.github.com/astro/), a collection of mobile-first navigation patterns.

Because it was developed with Astro in mind, it integrates really easily and takes advantage of Astro's built-in small screen collapse-and-expand menu styling.

Drop should still work well with other navigation menus, too.


## Progressively Enhanced
Drop includes a script that checks for JavaScript support by adding a `.js` class to the `<body>` on page load. This activates Drop and displays the dropdown link carets.


## Changelog
* v1.4 (August 5, 2013)
  * Created a variable for `$(this)` (better performance).
* v1.3 (June 7, 2013)
  * Switched to MIT license.
* v1.3 (May 20, 2013)
  * Dropdown menus now close if user clicks outside of them.
* v1.2 (March 29, 2013)
  * Removed changed in arrow direction on active state.
* v1.1 (February 13, 2013)
  * Renamed `example.html` to `index.html`.
  * Removed "Convert to Vanilla JS" from the roadmap.
* v1.0 (February 6, 2013)
  * Initial release.

## License
Drop is free to use under the [MIT License](http://gomakethings.com/mit/).

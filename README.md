# Responsive Tooltip

Tooltip is a splendid invention. Small detail in web design that plays a big role when it comes to user experience. Usually, tooltips are used to present a tiny amount of hidden content (mainly explanatory, so-called tips), that pops up when user moves a cursor over or clicks (less common) on a special target.

[![Click for a Demo](https://raw.githubusercontent.com/Instamojo/responsive-tooltip/master/responsive_tooltip.jpg)](https://rawgit.com/Instamojo/responsive-tooltip/master/demo/index.html)


## Key Features

- It's **responsive**. It relies on a maximum width value when viewed on large screens, adopts to narrow environments and picks the best viewable position relatively to the target (top, bottom; left, center, right).
- It's **mobile-friendly**. It pops up when a call-to-action button is tapped and disappears when tapped on the tooltip itself.
- It's **HTML formatting capable**. Need to write some words in italic or so? No problem, this will work out.


## HTML Example

```html
<abbr title="User Experience" rel="tooltip">UX</abbr>
```

## How To Implement

1. Include the CSS file in the `head` of your HTML file.
2. Include the Javascript file at the bottom of the `body` of your HTML file. Also, be sure that you already have jQuery library included before this file.
3. Assign the attribute `rel="tooltip"` and `title="Enter your tip here"` to any of body tags in HTML file where you want the tooltip to pop up when called. Set title value with your tip (use `<strong>`, `<em>` etc. to distinguish text fragments, but avoid block elements).
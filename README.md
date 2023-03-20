# Live-Class-Mixins

Apply CSS class mixins on the browser-side using vanilla JavaScript.

Inspired by Tailwind's [@apply](https://tailwindcss.com/docs/functions-and-directives#apply) and MasterCSS's [customization](https://css.master.co/docs/customization#other-directly-in-index-html).

Define your mixins like this:

```javascript
window.liveMixins = {
	btn: 'btn btn-primary btn-xs',
	heading: "display-1"
}
```

Then include the CDN link just before your closing </body> tag:

```
<script src="https://cdn.jsdelivr.net/gh/harryfear/Live-Class-Mixins/master.min.js"></script>
```

We're using this in production to polyfil for Bootstrap's lack of @apply.

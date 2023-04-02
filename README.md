# Live-Class-Mixins

Apply CSS class mixins on the browser-side using vanilla JavaScript.

Inspired by Tailwind's [@apply](https://tailwindcss.com/docs/functions-and-directives#apply) and MasterCSS's [customization](https://css.master.co/docs/customization#other-directly-in-index-html).

Define your mixins in JavaScript like this:

```javascript
window.liveMixins = {
	btn: 'btn btn-primary btn-xs',
	heading: "display-1 fw-bold text-success"
}
```

Then include the CDN link just before your closing `</body>` tag:

```
<script src="https://cdn.jsdelivr.net/gh/harryfear/Live-Class-Mixins@latest/master.min.js"></script>
```

We're using this in production to polyfil for Bootstrap's lack of @apply.

If you're worried about a flash of unstyled or half-style content, you can add the `stopFOUC` class to your element's initial class list, and put this style snippet in your `<head>`:

```
<style>
.stopFOUC { visibility:hidden; }
</style>
```

For example:

```
<h1 class="stopFOUC heading">Hello World</h1>
```

# `<life-cycle/>`

`<life-cycle/>` is a [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for framework-agnostic lifecycle hooks. 

```html
<!-- Can be included as a pre-defined element under the `life-cycle` namespace: -->
<script src=@barneycarroll/life-cycle/defined.js></script>
<!-- Or imported as a class for extension, manipulation and / or definition under a name of your choice: -->
<script type=module>
  import LifeCycle from '@barneycarroll/life-cycle/module.js'
  
  customElements.define('life-cycle', LifeCycle)
</script>
```

## What?

The various view frameworks of the world have different APIs of exposing the underlying DOM nodes & fundamental entity lifecycle (create, update, destroy) - some don't expose any at all. `<life-cycle/>` forwards each of the DOM [lifecycle callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks_) to corresponding property methods declared on instantiation, allowing CRUD directives and access to local DOM objects. Meanwhile, it applies a style of `display:contents` so as not to affect rendering. 

## How?

Each lifecycle method on the custom element prototype will call corresponding properties on any `<life-cycle/>` index, with the same signature:

| Custom element method | `<life-cycle>` property   
|-|-
|`connectedCallback`        |`connected`       
|`disconnectedCallback`     |`disconnected`    
|`adoptedCallback`          |`adopted`         
|`attributeChangedCallback` |`attributeChanged`
||`updated`

Because `attributeChanged` requires that observed attributes be determined ahead of time, we reserve an attribute called simply `attribute` to trigger its execution. An `updated` property consumes a function which is executed whenever it is set, exposing the element instance as `this`; these allow the element to respond to declarative updates.

## Why?

As an example, [Hyperapp](https://github.com/jorgebucaran/hyperapp) - a minimal virtual DOM library with a strong remit on functional purity - doesn't expose any API for interfacing with generated DOM; meanwhile, an application written with [`seview`](https://github.com/foxdonut/seview#seview-s-expression-view) would want to avoid library-specific APIs as far as possible in order to allow the same application view code to run with interchangeable rendering engines. With the `<life-cycle/>` element, either - or both - of these can be used in a way that allows setup & teardown logic per node, conditional updates, and DOM node exposure.

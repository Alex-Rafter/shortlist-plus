# Shortlist Plus

Shortlist Plus is a small set of Petite Vue components that can be dropped on to both used vehicle list and used vehicle details pages. The components provide functionality for adding and removing shortlist items, and showing overall shortlist count anywhere on the page, with text and icon transitions triggered by user interaction.

Shortlist Plus uses the browser's local storage to persist stored items between page reloads, and enable flexible and extremely fast rendering of stored shortlist items on any page across the site.

The components can be integrated on to both builds and existing sites. This opens up a range of design possibilities for new builds, and also a potential new revenue stream as a bespoke product for existing customers.



## Problem Statement


The current shortlist we use at Bluesky works in a limited capacity only. Users are limited to a six-item shortlist, with no baked in solution for interactivity. We are currently unable to offer, or meet client requests for, shortlist functionality on list pages.

Designers are not always able to meet design briefs with the current implementation, or have to do so using workarounds that are less than ideal for performance and maintainability. The current shortlist can be slow - particularly when working locally, and this can create issues whereby user actions, and the results displayed, fall out of sync.


## Goals of the project


- Solve the problem of adding shortlist on list pages.
- Cut down on dev time for integrating shortlist on builds.
- Make shortlist more fun to work with, and make creative dev / design much easier to achieve with shortlist.
- Give simple and extendable solutions out of the box for commonly requested features such as shortlist count in site header; shortlist icon changes, text updates, and css transitions, following user actions.
- Make shortlist feel significantly faster for the end user.


## Install


### Easy Way (Bash / Git Bash)


Paste the following commands into your terminal **while in the root of your Bluesky project.**

```shell
curl 'https://raw.githubusercontent.com/Alex-Rafter/shortlist-lib/main/scripts/sl.sh' | bash
```

Once the script has download and run you are good to move on to adding shortlist plus to your repeaters and details pages.

Add the following to your repeater (e.g CarRepeat.aspx) after the ASP Literals and Cog Controls and before the page markup:

```html
<!--#include file="/inc/modules/shortlist-plus/props-object.aspx" -->
```


### Manual Way


Install Petite Vue with npm or use the cdn via script tag
https://github.com/vuejs/petite-vue

Install the lib files
- js and scss in your projects's /src/ directory,
- shortlist-data.aspx in a directory with this path /inc/modules/shortlist


You are good to move on to adding shortlist plus to your repeaters and details pages.


## Components



Below is a breakdown of the components that come with Shortlist Plus. Each is given a TLDR style intro and a snippet you can use in your projects right away.


### Local Heart



#### Intro

Use Local Heart inside any used vehicle repeater, or on any used vehicle details page, that you want to include shortlist add / remove functionality to. The component will update the icon based on the vehicle's added / removed state (see below for customisation).  You can add as many copies of Local Heart to a repeater or details page and all will update together as the vehicle add / remove state is changed.

Local Heart also provides a way to render an additional message to the user based on added / removed state via an :after pseudo selector. To customise the message and its styling, check out shortlist-plus.scss. 


#### Snippet

```html
<div v-scope="LocalHeart({data : <%= PropObj %>, childClass : 'text-danger'})"></div>
```

<details>
    <summary>More</summary>


##### Data Prop :
The first prop is used to pass a json string to the Local Heart component.
The json string is created via the code in the /inc/modules/shortlist-plus/used-vehicle-json.aspx include.
For most use cases you shouldn't need to tweak either the include or the displaying expression that passes the data to the Local Heart instance e.g
`<%= PropObj %>`


##### Class Prop
To customise the component's styles, pass any css classes as a single string to the class prop  e.g

`childClass : 'display-1 text-danger'`


##### Component Template
If you need to tweak the component template, open /js/shortlist-plus/components/LocalHeart.js and you'll find it as the value to  $template.

</details>


### Global Heart



##### Intro

Global Heart provides a customisable icon that will update when 1 or more items are added to the Shortlist. The component also stores the overall Shortlist count in the data-attribute 'data-count'. Using a bit of css with a pseudo selector, you use this to display the overall count on the component (default included with the library).


##### Snippet

```html
<div v-scope="GlobalHeart({childClass : 'text-secondary'})"></div>
```
<details>
<summary>More</summary>


##### Class Prop
To customise the component's styles, pass any css classes as a single string to the class prop  e.g
`childClass : 'display-1 text-danger'`


##### Styling the Shortlist Count
Shortlist count is added as a pseudo element with default styles stored in /src/scss/modules/shortlist-plus.scss.


##### Component Template
If you need to tweak the component template, open /js/shortlist-plus/components/GlobalHeart.js and you'll find it as the value to  $template.

</details>


### Shortlist Data
This component is used to render the items stored in the shortlist to the page. By using vue's v-for directive, we can create a DRY template, with access to all shortlist items and their data. We can use this to create a full shortlist page with vehicle cards, or to create smaller summary lists, eg for use in modals or offcanvas elements.

Here is an example of the Shortlist Data component being used with some vue directives. In this example the list items are shown / hidden with a toggle, and there is an additional message to the user if no items are stored in their shortlist. 

```html
<!-- Short List Cars : START -->
<div v-scope="ShortListData()" v-cloak :class="store.reveal === false ? 'd-none' : ''">
  <!-- No Items -->
  <div v-if="store.count === 0">
      <p>Add some items to your shortlist</p>
  </div>
  <!-- With Items -->
  <div v-else>
      <div v-for="car in data" class="card">
          <div class="card">
              <img :src="car.image" class="card-img-top" :alt="...">
              <div class="card-body">
                  <h5 class="card-title">{{car.manufacturer}} {{car.model}}</h5>
                  <p class="card-text">{{car.reg}}</p>
                  <a href="#" class="btn btn-primary">{{car.url}}</a>
              </div>
          </div>
      </div>
  </div>
</div>
<!-- Short List Cars : END -->
```

<details>
<summary>More</summary>


##### Data accessible for each Shortlist item 

- url
- manufacturer
- model
- reg
- year
- price
- image
- addedToList

#### Petite Vue / Vue Compatible Directives

https://github.com/vuejs/petite-vue#user-content-vue-compatible

</details>


### Shortlist Reveal
This component is designed to be used in tandem with the ShortListData component. Where ShortListData controls how you render the shortlist items, ShortListReveal gives you a convenient way to show / hide the shortlist. This could be useful if, for example, you want users to be able to check their shortlist without leaving the current page via hidden-but-toggleable element.


##### Snippet

```html
<div v-scope="ShortListReveal({childClass : 'btn-secondary', text : 'show shortlist'})"></div>
```

<details>
<summary>More</summary>


##### Class Prop
By default ShortListReveal uses bootstrap's btn btn-primary button classes. The base 'btn' class is applied regardless of props passed, so to update button's bootstrap class you need only pass 'btn-secondary' or 'btn-outline-success', for example.


##### Component Template
If you need to tweak the component template, open /js/shortlist-plus/components/ShortListReveal.js and you'll find it as the value to  $template.

</details>


### Shortlist Store


##### Intro
The Shortlist Store contains the logic used for adding and removing items from the shortlist, and for persistence of the shortlist data via the browser's local storage. The store performs checks on all all currently held items before adding anything new. This is what enables us to use multiple Local Hearts across each repeater and details page without risk of duplicates being added to Shortlist.

<details>
<summary>More</summary>

If you want to get stuck in with the store's logic open  /js/shortlist-plus/components/Store.js. This might be useful if, for example, you want to add to the (reactive) global state available to all the components used.

If you want to learn more about the store, check out the [global state management info on the petite vue docs](https://github.com/vuejs/petite-vue#user-content-global-state-management)

</details>


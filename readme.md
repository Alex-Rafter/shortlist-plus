# Shortlist Plus


## Problem Statement


The current shortlist we use at Bluesky works in a limited capacity only. Users are limited to a six-item shortlist, with no baked in solution for interactivity. We are currently unable to offer, or meet client requests for, shortlist functionality on list pages. 

Designers are not always able to meet design briefs with the current implementation, or have to do so using workarounds that are less than ideal for performance and maintainability. The current shortlist can be slow - particularly when working locally, and this can create issues whereby user actions, and the results displayed, fall out of sync.


## What is Shortlist Plus?


Shortlist Plus is a small set of Petite Vue components that can be dropped on to both used vehicle list and used vehicle details pages. The components provide functionality for adding and removing shortlist items, and showing overall shortlist count anywhere on the page, with text and icon transitions triggered by user interaction.

Shortlist Plus uses the browser's local storage to persist stored items between page reloads, and enable flexible and extremely fast rendering of stored shortlist items on any page across the site. 

The components can be integrated on to both builds and existing sites. This opens up a range of design possibilities for new builds, and also a potential new revenue stream as a bespoke product for existing customers.



## Goals of the project 


- Solve the problem of adding shortlist on list pages. 
- Cut down on dev time for integrating shortlist on builds.
- Make shortlist more fun to work with, and make creative dev / design much easier to achieve with shortlist.
- Give simple and extendable solutions out of the box for commonly requested features such as shortlist count in site header; shortlist icon changes, text updates, and css transitions, following user actions.
- Make shortlist feel significantly faster for the end user.


## Install 


### Easy Way (Bash / Git Bash)


Paste the following commands into your terminal **while in the root of your Bluesky project.**

`curl 'https://gist.githubusercontent.com/Alex-Rafter/ed7b76308dc786c0fda42ddb7cf06404/raw/af60e4d9dfd69031d381ee0d82a324a03845ceac/sl.sh' | bash`

Once the script has download and run you are good to move on to adding shortlist plus to your repeaters and details pages. 


### Manual Way


Install Petite Vue with npm or use the cdn via script tag
https://github.com/vuejs/petite-vue

Install the lib files following this directory structure

You are good to move on to adding shortlist plus to your repeaters and details pages. 


## Components



Below is a breakdown of the components that come with Shortlist Plus. Each is given a TLDR style intro and a snippet you can use in your projects right away. 


### Local Heart



#### Intro

Use Local Heart inside any used vehicle repeater, or on any used vehicle details page, that you want to include shortlist add / remove functionality to. The component will update the icon based on the vehicle's added / removed state (see below for customisation).  You can add as many copies of Local Heart to a repeater or details page and all will update together as the vehicle add / remove state is changed.


#### Snippet

```html
<div 
v-scope="
    LocalHeart(
        {
            data : <?= $carOne->toProp() ?>, 
            class : 'display-1 text-danger'
        }
    )
">
</div>
```


#### Advanced


##### Data Prop : 
The first prop is used to pass a json string to the Local Heart component.  
The json string is created via the code in the /inc/modules/shortlist-plus/used-vehicle-json.aspx include.
For most use cases you shouldn't need to tweak either the include or the displaying expression that passes the data to the Local Heart instance e.g
`<?= $carOne->toProp() ?>` 


##### Class Prop
To customise the component's styles, pass any css classes as a single string to the class prop  e.g

`class : 'display-1 text-danger'`


##### Component Template
If you need to tweak the component template, open ./Local-Heart.js and you'll find it as the value to  $template.


### Local Text



#### Intro
Use Local Text on any repeater or used vehcile details page to add text that will update in tandem with the vehicles's add / remove state. Useful for adding messages such as 'add to shortlist' / 'added to shortlist' on vehicle cards.


```html
<div
 v-scope="
    LocalText(
        {
            data : <?= $carOne->toProp() ?>, 
            defaultText: 'not added', 
            addedText : 'added!', 
            class : 'display-1 text-danger'
        }
 )">
 </div>
```


#### Advanced 


##### Data Prop : 
The first prop is used to pass a json string to the Local Text component.  
The json string is created via the code in the /inc/modules/shortlist-plus/used-vehicle-json.aspx include.
For most use cases you shouldn't need to tweak either the include or the displaying expression that passes the data to the Local Heart instance e.g `<?= $carOne->toProp() ?>` .


##### defaultText Prop : 
This is the text that will show by default on load. It will also show whenever the vehicle passed to the component instance (via the data prop) is not in the shortlist - for example if its removed.


##### addedText Prop :
This is the text that will show whenever the vehicle passed to the component instance (via the data prop) is in the shortlist


##### Class Prop
To customise the component's styles, pass any css classes as a single string to the class prop  e.g
`class : 'display-1 text-danger'`


##### Component Template
If you need to tweak the component template, open ./Local-Text.js and you'll find it as the value to  $template.


### Global Heart



##### Intro

Global Heart provides a customisable icon that will update when 1 or more items are added to the Shortlist. The component also stores the overall Shortlist count in the data-attribute 'data-count'. Using a bit of css with a pseudo selector, you use this to display the overall count on the component (default included with the library).


##### Snippet

```html
<div 
v-scope="
GlobalHeart(
{
    class : 'display-1 text-dark'
}
)">
</div>
```

#### Advanced


##### Class Prop
To customise the component's styles, pass any css classes as a single string to the class prop  e.g
`class : 'display-1 text-danger'`


##### Styling the Shortlist Count 
Shortlist count is added as a pseudo element with default styles stored in /src/scss/modules/shortlist-plus.scss.


##### Component Template
If you need to tweak the component template, open ./Global-Text.js and you'll find it as the value to  $template.


### Rendering Shortlist Items


##### Intro
Shortlist Items can be displayed using petite vue template syntax and vue directives. Included are two simple examples - one for shortlist cards (eg for use in grids, and carousels), and one summary of list items (eg for use in modals or off-canvas components). 


##### Shortlist Items as cards

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
                <img :src="car.url" class="card-img-top" :alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{car.make}}</h5>
                    <p class="card-text">{{car.reg}}</p>
                    <a href="#" class="btn btn-primary">{{car.url}}</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Short List Cars : END -->
```


##### Shortlist Items as summary list items



### Extra Spice : 


#### Shortlist Store


##### Intro
The Shortlist Store contains the logic used for adding and removing items from the shortlist, and for persistence of the shortlist data via the browser's local storage. The store performs checks on all all currently held items before adding anything new. This is what enables us to use multiple Local Hearts across each repeater and details page without risk of duplicates being added to Shortlist.


##### Advanced
-----------------------
If you want to get stuck in with the store's logic open  ./store.js. This might be useful if, for example, you want to add any other reactive (link) data that is available to all the components used, and any related methods.

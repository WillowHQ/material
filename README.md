material

This is an intro to a few workflow tools, frameworks and libraries that CAN be useful in making you a more 
productive front end dev. 

There are many tools, frameworks and libraries. These are simply some of the ones that I use. The most important
thing to take away from this is that if you find yourself doing anything repetitive, someone has probably come up with a smart way to make your life easier. 

Overall goal of today is to not really introduce you to any specific frameworks or libraries. Its to show how and when you would seek out a new tool, how to decide which tool is best for the job 

GitHub stars, docs, 
Use things that make sense to you. Sometimes... 

[Spectacle App](https://www.spectacleapp.com/)
This is a window manager for mac. Pain point - resizing and toggling your windows with a mouse is slow, and you never really make the most of the space. 
Spectable decreases window resize time by an order of magniture. This can literaly save you an hour or two per day. 

[Alfred](https://www.alfredapp.com/) Alfred is like finder and spotlight had a kid and pumped it full of steroids. [Good article from a Canadian about Alfred](https://medium.com/@rurka/kill-the-dock-for-macos-dcb1d4ba8c8c)

Alternatives create-react-app 

Material ui
Pain points. Design is hard. Let google do it for you. 

Gives you a tool kit of a bunch of components you know will play nicely. Allows for isomorphism between mobile and web. 

Downside: Bloat, inheriting things you don't understand, having to read docs written by Google engineers. 

Alternatives. Lots react-bootstrap, antd, react-md. Google react component libraries

Let's get it working 

```
create-react-app material-demo
cd material-demo
yarn start
```
or
```
npm start
yarn add material-ui react-tap-event-plugin
```
see [Material-ui](http://www.material-ui.com/) for detailed docs and component library. 

3 or C or whatever number- Glamorous [Nice intro to why glamorous](https://medium.com/@kentcdodds/introducing-glamorous-fb3c9f4ed20e)

Glamorous dynamic and static styles 

Glamorous. Pain point that it solves. Gives you a clean way to wrap your styling into a component and recycle. 
It's nice once you are thinking in the react idea of components, to stop trying to use a document model and selectors to manage styling. What works better is 
Alternatives: LESS, SASS, Radium, styled-components. 
Downsides: Other devs will be mad at you bc they like style sheets ? 


2 - add in glamorous so styling is fun again 

```
yarn add glamor glamorous
```


Next js 

[Next.js](https://github.com/zeit/next.js/) Create-react-app is amazing for rapid prototyping of a component or a series of components. But there are some things that create-react-app doesn't do out of the box. 

Code splitting, routing out of the box, static exports AKA no node instance. Dynamic imports at the component level. HOWEVER since next is a bit bleeding edge there are some compatability issues. 

Warning combining dynamic imports and static exports can cause your app to disappear into pure energy. 

Pain point dev ops, performance, routing 
Static exports, dynamic imports, and er .. routing 

Cons. Like any opinionated framework, breaking into the tooling can be tricky. And the nature of js is that some of your tools may not be compatible. 

For example material ui is tricky to get working


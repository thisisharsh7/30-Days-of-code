# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Solution here](https://www.frontendmentor.io/solutions/nftpreviewcardcomponent-D2YfPmdvzf)
- Live Site URL: [Live Site here](https://luminous-crumble-9cf9aa.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

I learned how to aligned the div in the center perfectly using flex box and foooter at the bottom using position property. I also learned box-shadow property which brings some awesome user experience in this project. I also learned how to change the image on hovering.

```html
<header></header>

    <main>
      <div id="card-body">
        <div id="card">
          <div id="card-img">
            <img src="images/image-equilibrium.jpg" alt="etherium" id="img-u" />
          </div>
          <div id="card-txt">
            <div id="card-title">Equilibrium #3429</div>
            <div id="card-description">
              Our Equilibrium collection promotes balance and calm.
            </div>
            <div id="card-info">
              <div id="price">
                <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                    fill="#00FFF8"
                  /></svg
                ><span>0.041 ETH</span>
              </div>
              <div id="time">
                <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                    fill="#8BACD9"
                  /></svg
                >3 days left
              </div>
            </div>
            <hr />
            <div id="card-end">
              <div id="img-avatar">
                <img src="images/image-avatar.png" alt="avatar" id="img-av" />
              </div>
              <div id="avatar-txt">
                Creation of <span id="avatar-span"> Jules Wyvern</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer>
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by
        <a href="https://www.frontendmentor.io/profile/thisisharsh7"
          >Harsh Kumar</a
        >.
      </div>
    </footer>
```
```css
body {
  font-size: 18px;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: hsl(217, 54%, 11%);
  color: white;
  font-family: "Outfit", sans-serif;
}
main {
  display: flex;
  justify-content: center;
}
#card-body {
  width: 17em;
  border-radius: 0.5em;
  box-shadow: 1rem 1rem hsla(214, 64%, 13%, 0.776);
  border: 10px solid hsl(217, 54%, 11%);
}
#card {
  border-radius: 0.5em;
  background-color: hsl(216, 50%, 16%);
  display: flex;
  flex-direction: column;
  padding: 1em;
  align-content: space-between;
}
#card-txt {
  padding-top: 0.5em;
}
#card-title {
  font-size: 1.3em;
  font-weight: bold;
  padding-bottom: 0.5em;
}
#card-description {
  font-size: 1em;
  padding-bottom: 0.7em;
  color: rgba(225, 225, 225, 0.738);
}
#img-u {
  display: flex;
  width: 15em;
  border-radius: 0.5em;
  background-color: rgb(38, 222, 216);
}
#card-info {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5em;
}
#time {
  display: flex;
  align-items: center;
  color: rgba(225, 225, 225, 0.738);
}
#price {
  display: flex;
  color: rgb(38, 222, 216);
  font-weight: bold;
}

#card-end {
  display: flex;
  align-items: center;
  margin-top: 0.7em;
}
#img-av {
  width: 2em;
  border-radius: 50%;
  border: 1px solid white;
}
#avatar-txt {
  margin-left: 1em;
  font-size: 0.95em;
  color: rgba(225, 225, 225, 0.738);
}
svg {
  margin-right: 0.5em;
}
#avatar-span {
  color: white;
}
#avatar-span:hover {
  color: rgb(38, 222, 216);
  cursor: pointer;
}
#card-title:hover {
  color: rgb(38, 222, 216);
  cursor: pointer;
}
#img-u:hover {
  content: url("images/icon-view.svg");
  cursor: pointer;
}
footer {
  align-self: center;
  position: absolute;
  bottom: 0;
}

```

## Author

- Website - [Harsh Kumar](https://github.com/thisisharsh7)
- Frontend Mentor - [@thisisharsh7](https://www.frontendmentor.io/profile/thisisharsh7)
- Twitter - [@thisisharsh7](https://www.twitter.com/thisisharsh7)
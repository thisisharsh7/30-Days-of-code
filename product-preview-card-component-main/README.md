# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- See hover and focus states for interactive elements

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/productpreviewcard-iVVGXXLFqz)
- Live Site URL: [Live site](https://sunny-crisp-7a9a2e.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned to how to work with flex and create responsive layout and I also work with max-width property so that I can create mobile friendly layout as well.

```html
<main>
  <div id="card">
    <div id="card-full">
      <div id="card-img">
        <img
          src="./images/image-product-desktop.jpg"
          alt="product"
          class="img-p"
        />
      </div>
      <div id="card-txt">
        <p id="card-title">P E R F U M E</p>
        <p id="card-preview">Gabrielle Essence Eau De Parfum</p>
        <p id="card-define">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <p id="price-info">
          <span id="price">$149.99</span>
          <span id="price-cut"> $169.99</span>
        </p>
        <button id="btn">
          <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
              fill="#FFF"
            />
          </svg>
          <pre> Add to Cart</pre>
        </button>
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
    <a href="https://www.frontendmentor.io/profile/thisisharsh7">Harsh Kumar</a
    >.
  </div>
</footer>
```

```css
* {
  margin: 0;
}
body {
  background-color: hsl(30, 38%, 92%);
  font-family: "Fraunces", serif;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

main {
  display: flex;
  justify-content: center;
  align-content: center;
}

#card-full {
  display: flex;
}
.img-p {
  display: flex;
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  max-width: 15rem;
}
#card-txt {
  display: flex;
  flex-direction: column;
  background-color: white;
  max-width: 15rem;
  padding: 1.2em;
  justify-content: space-between;
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
}
#card-title {
  color: hsl(228, 12%, 48%);
  font-size: 0.8em;
}
#card-preview {
  color: hsl(212, 21%, 14%);
  font-size: 1.8em;
  font-weight: bold;
}
#card-define {
  color: hsl(228, 12%, 48%);
  font-size: 0.8em;
  line-height: 1.2em;
}
#price-info {
  display: flex;
}
#price {
  color: rgba(11, 71, 11, 0.754);
  font-size: 1.8em;
  font-weight: bold;
}

#price-cut {
  color: hsl(0, 1%, 65%);
  align-self: center;
  padding-left: 1em;
  font-size: 0.8em;
  text-decoration: line-through;
}
#btn {
  background-color: rgba(11, 71, 11, 0.754);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 0.5em;
  flex-grow: 0.3;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  display: flex;
  justify-content: center;
  align-content: center;
}
#btn:hover {
  background-color: rgba(19, 79, 21, 0.905);
  cursor: pointer;
}

@media only screen and (max-width: 570px) {
  #card-full {
    flex-direction: column;
  }
  .img-p {
    content: url("images/image-product-mobile.jpg");
    max-width: 21.4rem;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0.8rem;
  }
  #card-txt {
    max-width: 19rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    height: 20rem;
  }
}
```

## Author

- Website - [Harsh Kumar](https://github.com/thisisharsh7)
- Frontend Mentor - [@thisisharsh7](https://www.frontendmentor.io/profile/thisisharsh7)
- Twitter - [@thisisharsh7](https://www.twitter.com/thisisharsh7)

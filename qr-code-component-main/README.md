# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshot

![](.//screenshot.jpg)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/qrcode-using-css-cards-AWbawtuCTP)
- Live Site URL: [Live](https://superlative-souffle-881f9e.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

On building this project I learned how to work with flex and center the div element. I learned the css position property through which I managed to align the footer content correctly.

```html
<div class="card-top">
  <div class="card">
    <div class="card-body">
      <img src="images/image-qr-code.png" alt="QR-Code" />
      <div class="card-txt">
        <p id="card-title">
          Improve your front-end skills by building projects
        </p>
        <p id="card-info">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  </div>
</div>

<div class="attribution">
  Challenge by
  <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
    >Frontend Mentor</a
  >. Coded by <a href="#">Harsh Kumar</a>.
</div>
```

```css
body {
  background-color: rgb(200, 210, 255);
  text-align: center;
  font-family: "Outfit", sans-serif;
}
body p {
  font-size: 15px;
  display: flex;
  justify-content: center;
}
.card-top {
  display: flex;
  justify-content: center;
  margin-top: 5rem;
}
.card {
  background-color: white;
  border-radius: 12px;
  padding-top: 15px;
  width: 330px;
  box-shadow: 3px 3px rgb(191, 203, 255);
}
img {
  width: 300px;
  height: 310px;
  border-radius: 10px;
}
#card-title {
  font-weight: bold;
  color: dark rgb(58, 58, 246);
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
}
#card-info {
  color: gray;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
}
.attribution {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
```

## Author

- Website - [Harsh Kumar](https://github.com/thisisharsh7)
- Frontend Mentor - [@thisisharsh7](https://www.frontendmentor.io/profile/thisisharsh7)
- Twitter - [@thisisharsh7](https://www.twitter.com/thisisharsh7)

# Projects related to DOM

## Project Link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-55vn3s?file=index.html)

# Solution code

## project 1

```javascript
console.log("Vijay Singh Diggi")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id == 'white') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id == 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```
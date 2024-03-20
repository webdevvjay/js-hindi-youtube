# Projects related to DOM

## Project Link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-55vn3s?file=index.html)

# Solution code

## project 1

```javascript
console.log("Vijay Singh Diggi ")

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

## Project 2 Solution

```javascript
const form = document.querySelector('form');

// the following usecase will give you empty value
//const height = pareseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const bmiw = document.querySelector('#bmiw');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}</span>`;
      bmiw.innerHTML = `<span>Under Weight </span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi}</span>`;
      bmiw.innerHTML = `<span>Normal Weight </span>`;
    } else if (bmi > 24.9) {
      results.innerHTML = `<span>${bmi}</span>`;
      bmiw.innerHTML = `<span>Over Weight </span>`;
    }
    // show the result
    //results.innerHTML = `<span>${bmi}</span>`;
  }
});


```

## Project 3 solution code

```javascript
document.getElementById('clock');
//document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```


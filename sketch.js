/* make a button that gets bigger and smaller when clicked */
var button = document.createElement('button');
button.innerHTML = 'Click me';
document.body.appendChild(button);
button.addEventListener('click', function() {
  var size = button.style.fontSize;
  if (size === '30px') {
    button.style.fontSize = '40px';
  } else {
    button.style.fontSize = '30px';
  }
});

/* move button to center */
var button = document.querySelector('button');
button.style.position = 'absolute';
button.style.left = '50%';
button.style.top = '50%';
button.style.transform = 'translate(-50%, -50%)';

/* when button is clicked, move to random location */
button.addEventListener('click', function() {
  var x = Math.floor(Math.random() * window.innerWidth);
  var y = Math.floor(Math.random() * window.innerHeight);
  button.style.left = x + 'px';
  button.style.top = y + 'px';
  button.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
});

/* rename variable button to click me */
var clickMe = button;

/* add an empty integer value to clickMe */
clickMe.integer = 0;

/* create a display of the integer value on the button clickMe */
clickMe.addEventListener('click', function() {
  clickMe.integer++;
  clickMe.innerHTML = 'Click me \n' + clickMe.integer;
});

/* When clickMe is clicked, change background color to random color */
clickMe.addEventListener('click', function() {
  var color = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
  clickMe.style.backgroundColor = color;
});

/* when clickMe is clicked change text to random color */
clickMe.addEventListener('click', function() {
  var color = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
  clickMe.style.color = color;
});

/* when clickMe is clicked, animate the movement */
clickMe.addEventListener('click', function() {
  var x = Math.floor(Math.random() * window.innerWidth);
  var y = Math.floor(Math.random() * window.innerHeight);
  clickMe.style.transition = 'all 0.5s';
  clickMe.style.left = x + 'px';
  clickMe.style.top = y + 'px';
  clickMe.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
});
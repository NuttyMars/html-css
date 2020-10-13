Fiddle 1:
/*HTML:
<!--
  1. Create a 'paragraph' element (<p></p>) that contains the text "Hello World"
  2. Click the "Run" button in the menu bar
-->

<p>
Hello World
</p>
*/

// Javascript
/*
	1. Create a variable called helloWorld that contains the string Hello World
  2. Alert the variable.
*/

let helloWorld = 'Hello World';
alert(helloWorld);

//can use setTimeout and setInterval to delay or repeat alert

Fiddle 2:
//HTML:

/*
<p id="intro">
  Hello World!
</p>

<p id="info">
  JavaScript on The DOM
</p>
*/

//Javascript:

/*
  1. Create an empty variable, `elm`
  2. Find an element with the ID `info`
  3. Set `elm` to the variable that you found
  4. Alert the inner text of the element with `alert` function, it should alert the text "JavaScript on The DOM"
*/
let elm;
let infoIdElem = document.getElementById('info');
elm = infoIdElem.innerText;
alert(elm);

Fiddle 3:
//HTML:
/*
<p id="intro">
  Hello World!
</p>

<p id="info">
  JavaScript on The DOM
</p>
*/

//Javascript:
/*
TODO:

	1. Create an empty variable, `elm`
	2. Find a paragraph by its tag name
  3. Set `elm` to the variable that you found
  4. Alert the inner text of the element with `alert` function, it should alert the text "JavaScript on The DOM" or "Hello World!"
*/
let elm;
let paragraphs = document.getElementsByTagName('p');
elm = paragraphs[0].innerText;
alert(elm);


Fiddle 4:
//HTML:
/*
<h2>
  List of People:
</h2>

<ul class='people'>
  <li class='name'>
    Clara
  </li>
  <li class='name'>
    James
  </li>
  <li class='name'>
    Sara
  </li>
</ul>
*/
//CSS:
/*
.name{
  font-size: 16px;
  font-weight: lighter;
  line-height: 26px;
}
*/

//Javascript:

// 1. Create an empty array, `names`
// 2. Find all the elements having the class 'name' using `getElementsByClassName`
// 3. For each element found
	// Add the element's text to the array of names
// 4. Alert the final result

let names = [];
let namesList = document.getElementsByClassName('name');
for (let i = 0; i < namesList.length; i++) {
	names.push(namesList[i].innerText);
}
alert(names);


Fiddle 5:
//HTML:
/*
<p id="intro">
  Hello World!
</p>

<p id="info">
  JavaScript on The DOM
</p>
*/

//Javascript:
/*
TODO:

	1. Create an empty variable, `elm`
	2. Find an element with the ID `info` and set the variable `elm` with its value
  3. Change the contents of that elements to say `JavaScript Rocks!`
*/

let elm;
elm = document.querySelector('#info');
elm.innerHTML = 'JavaScript Rocks!';
alert(elm.innerText);


Fiddle 6:
//HTML:
/*
<img id='lhl-logo' src='https://cl.ly/2O3Y2w1R2j0v/Image%202016-07-20%20at%201.16.13%20PM.png' width='400' />
*/

//Javascript:
// TODO:
// 1. Select the element who's attributes you'd like to change and set it to a variable
// 2. Change the width attribute of that element to 200 instead of the default 400 that it starts with in the HTML
// 3. Set a 1 second delay, then change it back to 400

let pic = document.getElementById('lhl-logo');
pic.width = '200';
const switchBack = function() {
	pic.width = '400';
}
setTimeout(switchBack, 1000);



Fiddle 7:
//HTML:
/*
<input id='name' />
*/

//Javascript:
// TODO:
// 1. Find the input element by the ID using the `querySelector` DOM method
// 2. Set the `placeholder` attribute to some text value

let nameIdElem = document.querySelector('#name');
nameIdElem.setAttribute('placeholder', 'Name should go here');
//the placeholder attribute added a text when content was missing



Fiddle 8:
//HTML:
/*
<button onclick="alert('clicked!!')">
  Click Me!
</button>
*/

//will pop up message 'clicked!!' when clicking the button; it can be done with a custom function as below:



Fiddle 9:
//HTML:
/*
<button id='my-button' onclick="buttonClicked('#my-button')">
  Click Me!
</button>
*/

//Javascript
function buttonClicked(selector){
  alert('The ' + selector + ' button has been clicked.');
}


Fiddle 10:
//HTML:
/*

*/

//Javascript



Fiddle 11:
//HTML:
/*

*/

//Javascript



Fiddle 12:
//HTML:
/*

*/

//Javascript



Fiddle 13:
//HTML:
/*

*/

//Javascript



Fiddle 14:
//HTML:
/*

*/

//Javascript



Fiddle 15:
//HTML:
/*

*/

//Javascript
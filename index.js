/* // Input from promt and limiting the wordcount.//


var message = prompt("Enter the text here below :");

var length = message.length;

if (length >= 224) {
    alert("You have crossed the limits.");
} else {


var rem = message.length - 224;


alert("You have written " + length + " characters, you have " + rem + " characters left.");

}

 var wordLimit= message.slice (0,224);

alert(wordLimit); */

// Input name and display greeting with only the first char uppercase  rest loweercase.//

var name = prompt("What is your name ? ");
var firtChar=name.slice(0,1);
firtChar=firtChar.toUpperCase();

var remchar=name.slice(1, name.length).toLowerCase();
alert("Hello "+firtChar+remchar);

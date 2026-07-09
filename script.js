// Typing animation

const words = [
"Data Analyst",
"UX Researcher",
"Technology Enthusiast",
"Problem Solver"
];


let wordIndex = 0;
let letterIndex = 0;

const typing = document.getElementById("typing");


function type(){

if(letterIndex < words[wordIndex].length){

typing.textContent += words[wordIndex][letterIndex];

letterIndex++;

setTimeout(type,100);

}

else{

setTimeout(deleteWord,1500);

}

}



function deleteWord(){

if(letterIndex > 0){

typing.textContent =
words[wordIndex].substring(0,letterIndex-1);

letterIndex--;

setTimeout(deleteWord,50);

}

else{

wordIndex++;

if(wordIndex >= words.length){

wordIndex=0;

}

setTimeout(type,500);

}

}


type();







// Scroll animation


const reveals=document.querySelectorAll(".reveal");


window.addEventListener("scroll",()=>{


reveals.forEach(item=>{


let top=item.getBoundingClientRect().top;


if(top < window.innerHeight-100){

item.classList.add("active");

}


});


});
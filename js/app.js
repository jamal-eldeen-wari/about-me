'use strict';
//let counter = 0;

let userName =  prompt('Hello and Welcome to my website i would like to know your name please ');
alert('Welcome '+ userName +' To My Website it is an honor to meet you');


// Question 1;
let questiionNum1 = prompt('Do I Like Studying history ?? The Answer For This Question Must Yes or NO (y or n)');

if (questiionNum1.toLowerCase()=== 'yes' || questiionNum1.toLowerCase() === 'y'){
  //console.log("Nice You Know Me");
  alert('Nice You Know Me i like history books');
  //counter++;
}else if (questiionNum1.toLowerCase() === 'no' ||questiionNum1.toLowerCase() === 'n' ) {
  //console.log("No Sorry that is not the right answer");
  alert('No Sorry that is not the right answer i like reading history books');
  //counter--;
}else{
  //console.log("Sorry your answer should be either yes or no or (y or n)");
  alert('Sorry your answer should be either yes or no or (y or n)');
}


// Question 2
let questiionNum2 = prompt('Do I Like Watching Movies ?? The Answer For This Question Must Yes or NO (y or n)');

if (questiionNum2.toLowerCase() === 'yes' || questiionNum2.toLowerCase() === 'y') {
  //console.log("Nice You Know Me");
  alert('Nice You Know Me especially action movies they are the best');
  //counter++;
}else if (questiionNum2.toLowerCase() === 'no' || questiionNum2.toLowerCase() === 'n') {
  //console.log("No Sorry that is not the right answer");
  alert('No Sorry that is not the right answer actually i like movies');
  //counter--;
}else{
  //console.log("Sorry your answer should be either yes or no or (y or n)");
  alert('Sorry your answer should be either yes or no or (y or n)');
}

// Question 3
let questiionNum3 = prompt('Do I Like Playing Video Games ?? The Answer For This Question Must Yes or NO (y or n)');

if (questiionNum3.toLowerCase() === 'yes' || questiionNum3.toLowerCase() === 'y') {
  //console.log("Nice i like video games");
  alert('Nice i like video games especially first person shooter games');
  //counter++;
}else if (questiionNum3.toLowerCase() === 'no' || questiionNum3.toLowerCase() === 'n') {
  //console.log("Sorry the Answer is incorrect ");
  alert('Sorry the Answer is incorrect because i like video games');
  // counter--;
}else{
  // console.log("Sorry your answer should be either yes or no or (y or n)");
  alert('Sorry your answer should be either yes or no or (y or n)');
}

// Question 4
let questiionNum4 = prompt('Do I Like Eating mujadara ?? The Answer For This Question Must Yes or NO (y or n)');

if (questiionNum4.toLowerCase() === 'yes' || questiionNum4.toLowerCase() === 'y') {
  //console.log("Sorry i dont like Mujadara i hate it a lot");
  alert('Sorry i dont like Mujadara i hate it a lot');
  //counter--;
}else if (questiionNum4.toLowerCase() === 'no' || questiionNum4.toLowerCase() === 'n') {
  //console.log("Thats a great answer no one likes mujadara");
  alert('Thats a great answer no one likes mujadara');
  //counter++;
}else{
  //console.log("Sorry your answer should be either yes or no or (y or n)");
  alert('Sorry your answer should be either yes or no or (y or n)');
}

// Question 5
let questiionNum5 = prompt('Do I Like Watching News ?? The Answer For This Question Must Yes or NO (y or n)');

if (questiionNum5.toLowerCase() === 'yes' || questiionNum5.toLowerCase() === 'y') {
  //console.log("Sorry i dont like watching news at all it is soo boring");
  alert('Sorry i dont like watching news at all it is soo boring');
  //counter--;
}else if (questiionNum5.toLowerCase() === 'no' || questiionNum5.toLowerCase() === 'n') {
  //console.log("Thats a great answer i prefer watching football");
  alert('Thats a great answer i prefer watching football');
  //counter++;
}else{
  //console.log("Sorry your answer should be either yes or no or (y or n)");
  alert('Sorry your answer should be either yes or no or (y or n)');
}
alert('It was fun game '+userName+ ' i really enjoyed the game hoping to meet you soon');

'use strict';
let counter = 0;

let userName =  prompt('Hello and Welcome to my website i would like to know your name please ');
alert('Welcome '+ userName +' To My Website it is an honor to meet you');


// Question 1;

function q1(){
  let questiionNum1 = prompt('Do I Like Studying history ?? The Answer For This Question Must Yes or NO (y or n)');

  if (questiionNum1.toLowerCase() === 'yes' || questiionNum1.toLowerCase() === 'y'){
    //console.log("Nice You Know Me");
    alert('Nice You Know Me i like history books');
    counter++;
  }else if (questiionNum1.toLowerCase() === 'no' ||questiionNum1.toLowerCase() === 'n' ) {
    //console.log("No Sorry that is not the right answer");
    alert('No Sorry that is not the right answer i like reading history books');
  
  }else{
    //console.log("Sorry your answer should be either yes or no or (y or n)");
    alert('Sorry your answer should be either yes or no or (y or n)');
  }
  
}
q1();

// Question 2
let questiionNum2 = prompt('Do I Like Watching Movies ?? The Answer For This Question Must Yes or NO (y or n)');

if (questiionNum2.toLowerCase() === 'yes' || questiionNum2.toLowerCase() === 'y') {
  //console.log("Nice You Know Me");
  alert('Nice You Know Me especially action movies they are the best');
  counter++;
}else if (questiionNum2.toLowerCase() === 'no' || questiionNum2.toLowerCase() === 'n') {
  //console.log("No Sorry that is not the right answer");
  alert('No Sorry that is not the right answer actually i like movies');

}else{
  //console.log("Sorry your answer should be either yes or no or (y or n)");
  alert('Sorry your answer should be either yes or no or (y or n)');
}

// Question 3
let questiionNum3 = prompt('Do I Like Playing Video Games ?? The Answer For This Question Must Yes or NO (y or n)');

if (questiionNum3.toLowerCase() === 'yes' || questiionNum3.toLowerCase() === 'y') {
  //console.log("Nice i like video games");
  alert('Nice i like video games especially first person shooter games');
  counter++;
}else if (questiionNum3.toLowerCase() === 'no' || questiionNum3.toLowerCase() === 'n') {
  //console.log("Sorry the Answer is incorrect ");
  alert('Sorry the Answer is incorrect because i like video games');

}else{
  // console.log("Sorry your answer should be either yes or no or (y or n)");
  alert('Sorry your answer should be either yes or no or (y or n)');
}

// Question 4
let questiionNum4 = prompt('Do I Like Eating mujadara ?? The Answer For This Question Must Yes or NO (y or n)');

if (questiionNum4.toLowerCase() === 'yes' || questiionNum4.toLowerCase() === 'y') {
  //console.log("Sorry i dont like Mujadara i hate it a lot");
  alert('Sorry i dont like Mujadara i hate it a lot');

}else if (questiionNum4.toLowerCase() === 'no' || questiionNum4.toLowerCase() === 'n') {
  //console.log("Thats a great answer no one likes mujadara");
  alert('Thats a great answer no one likes mujadara');
  counter++;
}else{
  //console.log("Sorry your answer should be either yes or no or (y or n)");
  alert('Sorry your answer should be either yes or no or (y or n)');
}

// Question 5
let questiionNum5 = prompt('Do I Like Watching News ?? The Answer For This Question Must Yes or NO (y or n)');

if (questiionNum5.toLowerCase() === 'yes' || questiionNum5.toLowerCase() === 'y') {
  //console.log("Sorry i dont like watching news at all it is soo boring");
  alert('Sorry i dont like watching news at all it is soo boring');

}else if (questiionNum5.toLowerCase() === 'no' || questiionNum5.toLowerCase() === 'n') {
  //console.log("Thats a great answer i prefer watching football");
  alert('Thats a great answer i prefer watching football');
  counter++;
}else{
  //console.log("Sorry your answer should be either yes or no or (y or n)");
  alert('Sorry your answer should be either yes or no or (y or n)');
}

let number = prompt(' Please Guess a number');
// parseInt(number);
let check = true;

for (let i = 0 ; i<3 ; i++){

  switch(number){
  case '1':
    alert('too low');
    break;
  case '2':
    alert('too low');
    break;
  case '3':
    alert('close');
    break;
  case '4':
    alert('very close');
    break;
  case '5':
    check = false;
    alert('right answer');
    counter++;
    break;
  case '6':
    alert('very close');
    break;
  case '7':
    alert('close');
    break;
  case '8':
    alert('too high');
    break;
  case '9':
    alert('too high');
    break;
  case '10':
    alert('too high');
    break;
  default:
    alert('Incorecet number entered');
    break;
  }

  if(number !=='5'){
    number = prompt(' Please Guess a number');
    // parseInt(number);
  }else{
    break;
  }

}
if (check) {
  alert('Sorry you have exhausted all of your attempts the write answer was 5');
}

let bestCars = ['bmw','audi', 'vw'];
let cars = prompt('Tell me what is a best car');
let flag = false;
cars = cars.toLowerCase();

for (let i = 0; i< 5; i++) {

  for (let j = 0; j < bestCars.length; j++) {
    if (cars === bestCars[j]) {
      alert('You Guessed right');
      counter++;
      flag = true;
      break;
    }

  }
  if (flag) {
    break;

  }else{
    alert('Not correct');
    cars = prompt('Tell me what is a best car');
  }

}
alert('The correct answers  are  bmw, audi, vw ');

alert('It was fun game '+userName+ ' i really enjoyed the game hoping to meet you soon by the way your mark is '+counter+' out of 7');

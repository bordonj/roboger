//business logic
const robogerArray = ['0', 'Beep!', 'Boop!', "Won't you be my neighbor?", '4', '5', '6', '7', '8', '9'];

let roboRead = (input) => {
  const inputCheck = input.trim();
  console.log(inputCheck);
  if (inputCheck === '0') {
    return 0;
  }
  if (inputCheck.includes('3')) {
    return robogerArray.slice(0, 4);
  } else if (inputCheck.includes('2')) {
    return robogerArray.slice(0, 3);
  } else if (inputCheck.includes('1')) {
    return robogerArray.slice(0, 2);
  } else {
    return robogerArray.slice(0, parseInt(inputCheck)+1);
  }
  // for (let i of robogerArray){
  //   if (i )
  // }
}



//UI logic
$(document).ready(function() {
  $('#submission').submit(event => {
    event.preventDefault();
    const userInput = $('#userNumber').val();
    const output = roboRead(userInput);
    let strOutput = '';
    output.forEach(index => {
      if(index === userInput) {
        strOutput += ' ' + index;
        return;
      }
      strOutput += ' ' + index;
    })
    $('.robogerInput').html(strOutput);
  })
})
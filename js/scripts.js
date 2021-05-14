//business logic
// const robogerArray = ['0', 'Beep!', 'Boop!', "Won't you be my neighbor?"];
let robogerArray = [];

let beepBoop = (input) => {
  const inputCheck = input.trim();
  console.log(inputCheck);
  const inputNum = parseInt(inputCheck);

  for (let i = 0; i <= inputNum; i++) {
    let num = i.toString();

    if (i === 0) {
      robogerArray.push('0');
    } else if (i === 1) {
      robogerArray.push('Beep!');
    } else if (i === 2) {
      robogerArray.push('Boop!');
    } else if (i === 3) {
      robogerArray.push("Won't you be my neighbor");
    } else if (i > 3) {
      robogerArray.push(num);
    }
  }
  console.log(robogerArray);
  return robogerArray;


  // if (inputCheck === '0') {
  //   return robogerArray.slice(0, 1);
  // }
  // if (inputCheck.includes('3')) {
  //   return robogerArray.slice(0, 4);
  // } else if (inputCheck.includes('2')) {
  //   return robogerArray.slice(0, 3);
  // } else if (inputCheck.includes('1')) {
  //   return robogerArray.slice(0, 2);
  // } else if (intInputCheck > 3){
  //     for (let i = 4; i < intInputCheck+1; i++) {
  //       robogerArray.push(count.toString());
  //       count++;
  //     }
  //   return robogerArray.slice(0, parseInt(inputCheck)+1);
  // }
  // for (let i of robogerArray){
  //   if (i )
  // }
}


//UI logic
$(document).ready(function() {
  $('#submission').submit(event => {
    event.preventDefault();
    const userInput = $('#userNumber').val();
    let output = beepBoop(userInput);
    let strOutput = '';
    output.forEach(index => {
      if(index === userInput) {
        strOutput += ' ' + index + '.';
        return;
      } else if (index.includes('!')||(index.includes('?'))) {
        strOutput += ' ' + index;
      } else {
        strOutput += ' ' + index + ',';
      }
    })
    $('.robogerInput').html(strOutput);
    robogerArray = [];//resets the array so it doesn't append onto the page
  }) 
})
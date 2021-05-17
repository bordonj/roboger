//business logic

let beepBoop = (input) => {
  const inputCheck = input.trim();
  const inputNum = parseInt(inputCheck);
  let robogerArray = [];

  for (let i = 0; i <= inputNum; i++) {
    let num = i.toString();

    if (i === 0) {
      robogerArray.push('0');
    } else if (i === 1) {
      robogerArray.push('Beep!');
    } else if (i === 2) {
      robogerArray.push('Boop!');
    } else if (i === 3) {
      robogerArray.push(`Won't you be my neighbor, ${userName.value}?`);
    } else if (i > 3) {
      robogerArray.push(num);
      if (num.includes(3)) {
        robogerArray[i] = `Won't you be my neighbor, ${userName.value}?`;
      } else if (num.includes(2)) {
        robogerArray[i] = 'Boop!';
      } else if (num.includes(1)) {
        robogerArray[i] = 'Beep!';
      }
    }
  }
  return robogerArray;
}


//UI logic
$(document).ready(function() {
  $('#submission').submit(event => {
    event.preventDefault();
    const userName = $('#userName').val();
    const userInput = $('#userNumber').val();

    let output = beepBoop(userInput);
    let strOutput = '';
    output.forEach(index => {
      if(index === userInput) {
        strOutput += ' ' + index + '.';//for the ending element
        return;
      } else if (index.includes('!')||(index.includes('?'))) {
        strOutput += ' ' + index;
      } else {
        strOutput += ' ' + index + ',';
      }
    })
    $('.robogerInput').html(`<h3>Roboger responds:</h3>${strOutput}`);
    let rInput = $('.robogerInput');
    rInput.fadeIn();

  }) 
})
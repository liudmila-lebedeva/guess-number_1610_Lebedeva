let number = Math.floor(Math.random() * 100); //Getting a random number
console.log(number);
let count = 6;


function guessNumber() {

    if (count > 0) {
            let userNum = document.querySelector('#user_number').value;
            userNum = parseInt(userNum); //integer 
            let output = document.querySelector('#output');

            if (userNum == number) {
                alert('Congratulations! You WON');
                location.reload(); //reload browser
                
            } else if (userNum > number) {
                output.innerHTML = 'Too much :(';
            } else if (userNum < number){
                output.innerHTML = 'Too little :(';
            } else {
                alert('enter the number');
            }

            document.querySelector('#user_number').value = ' ';
            document.querySelector('#user_number').focus();
            document.querySelector('#count').innerHTML = `you have ${count} attempts left`;
            count = count - 1;

    }else {
        alert('you lost');
        location.reload(); //reload browser 
    }   
}

document.querySelector('#btn').onclick = guessNumber;

function clickPress(event) {
    if (event.keyCode == 13) {
        guessNumber();
        
    }
    
    
}




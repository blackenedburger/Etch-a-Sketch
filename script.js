
function board(){
    const main = document.getElementById("main");
    let number = parseInt(prompt("Choose a number between 1 and 100 "));
    if (number > 10){
        number = prompt("Please choose a number between 1 and 100");
    } else if (number < 1){
        number = prompt("Please choose a number between 1 and 100");
    }
    let arrayRowColumn = [];
    let divArray = []
    let changingRow;
    let changingDiv;
    let mainDiv = document.getElementById("main");
    const resetButton = document.getElementById("resetButton");
    let allRows = document.querySelectorAll(".changingRow");
    let allDivs = document.querySelectorAll(".changingDiv");
    let buttons = document.getElementsByTagName("button"); 
    let buttonChoice;

    // sets up the buttons if they are clicked goes to different set ups
    for (let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener("click", function(){
                if (i === 0){
                    resetBoard();
                    buttonChoice = 0;
                    number = prompt("how many squares would you like to play with? ");
                    if (number > 100){
                        number = prompt("Please choose a number between 1 and 100");
                    } else if (number < 1){
                        number = prompt("Please choose a number between 1 and 100");
                    }
                    boardSetup()
                    } else if (i === 1){
                    resetBoard();
                    buttonChoice = 1;
                    number = prompt("how many squares would you like to play with? ");
                    if (number > 100){
                        number = prompt("Please choose a number between 1 and 100");
                    } else if (number < 1){
                        number = prompt("Please choose a number between 1 and 100");
                    }
                    boardSetup()
                } else if (i === 2){
                    resetBoard();
                    buttonChoice = 2;
                    number = prompt("how many squares would you like to play with? ");
                    if (number > 100){
                        number = prompt("Please choose a number between 1 and 100");
                    } else if (number < 1){
                        number = prompt("Please choose a number between 1 and 100");
                    }
                    boardSetup()
                }
            });
        }
        boardSetup();

    // pushes how many board pieces are wanted, into an empty array to make game board 
    function boardSetup(){
        if (arrayRowColumn != [] && divArray != []){
            arrayRowColumn = [];
            divArray = [];
        }
        // random color divs
        if (buttonChoice === 0 ){
            for (let i = 0; i < number; i++){
                arrayRowColumn.push(number)
            }
            // goes thru the array and creates divRows and then goes thru the loop and creates divs in each row
            for (let i in arrayRowColumn){
                createRow();
                    for (let i = 0; i < number; i++){
                    createRainbow();
                }
            }
        // 10 step tinted divs
        } else if (buttonChoice === 1){
            for (let i = 0; i < number; i++){
                arrayRowColumn.push(number)
            }
            for (let i in arrayRowColumn){
                createRow();
                    for (let i = 0; i < number; i++){
                    createTint();
                }
            }
        //  Black and white divs and also default
        } else {
            for (let i = 0; i < number; i++){
                arrayRowColumn.push(number)
            }
            for (let i in arrayRowColumn){
                createRow();
                    for (let i = 0; i < number; i++){
                        createBlackWhite();
                }
            }
        }
    }

    // Creates rainbow divs
    function createRainbow(){
        changingDiv = document.createElement("div");
        changingDiv.setAttribute('class', 'changingDiv');
        changingRow.appendChild(changingDiv);
        divArray.push(changingDiv)   
        for (let i = 0; i < divArray.length; i++){
            divArray[i].addEventListener('mouseover', e => e.target.classList.add('mouseOver'))
            function random_color() {
                let letters = '0123456789ABCDEF'.split('');
                let color = '#';
                for (let i = 0; i < 6; i++ ) {
                    color += letters[Math.round(Math.random() * 15)];
                }
                return color;
            }
            divArray[i].addEventListener("mouseout", function () {
                divArray[i].style.background = random_color();
            })
        }
    }

    // creates tinting div board 
    function createTint(){
        changingDiv = document.createElement("div");
        changingDiv.setAttribute('class', 'changingDiv');
        changingDiv.setAttribute('style','background-color:black;');
        changingRow.appendChild(changingDiv);
        divArray.push(changingDiv) 
        divArray.forEach((changingDiv) => {
            let opacity = Number(changingDiv.style.opacity);
            changingDiv.addEventListener('mouseover', () => {
                if(opacity < 1) {
                    opacity += 0.1;
                }
                changingDiv.style.opacity = opacity;
            });
        });
    }

    // creates black and white divs and is also default
    function createBlackWhite(){
        changingDiv = document.createElement("div");
        changingDiv.setAttribute('class', 'changingDiv');
        changingDiv.setAttribute('style','background-color:black;');
        changingRow.appendChild(changingDiv);
        divArray.push(changingDiv)   
        for (let i = 0; i < divArray.length; i++){
            divArray[i].addEventListener('mouseover', e => e.target.classList.add('mouseOver')) 
            divArray[i].addEventListener("mouseout", function () {
                divArray[i].style.background = "white";
            })
        }
        
    }



    // creates the verticle divs to hold the individual divs
    function createRow(){
        changingRow = document.createElement("div");
        changingRow.setAttribute('class', 'changingRow');
        main.appendChild(changingRow);
        }



}

// removes game pieces and restarts
function resetBoard(){ 
    while (main.lastChild) {
        main.removeChild(main.lastChild);
    }
}

board();
var generateBtn = document.querySelector("#generate");

function writePassword() {

    let arrabc = ['a','b','c'];
    let arrABC = ['A','B','C'];
    let arr123 = ['1','2','3'];
    let arrSch = ['!','@','#'];

    let symbForPass = [];

    console.log(symbForPass);
    // 8 - 128  STEPS Generator
    let maxAndMin = confirm('\n\The password will contain at least 8 characters and a maximum of 128 characters!\n\nOK?\n\Or press CANCEL, when the password is only 8 characters');
    let numSteps;

    if (maxAndMin) {
        numSteps = 8 + Math.floor(Math.random() * (128 + 1 - 8));
    } else {
        numSteps = 8;
    }

    //lowercase

    let chooseLowercase = confirm('The password will contain lowercase.\n\nOK?');
    if (chooseLowercase) {
        symbForPass.push(arrabc);
    }

    //UPPERcase
    let chooseUppercase = confirm('The password will contain uppercase.\n\nOK?');
    if (chooseUppercase) {
        symbForPass.push(arrABC);
    }

    //123

    let chooseNumeric = confirm('The password will contain numeric.\n\nOK?');
    if (chooseNumeric) {
        symbForPass.push(arr123);
    }

    // special characters

    let chooseSpecial = confirm('The password will contain special characters.\n\nOK?');
    if (chooseSpecial) {
        symbForPass.push(arrSch);
    }


    console.log(symbForPass);
    //Generator
    let newPass = '';

    for (let i = 0; i < numSteps; i++) {
        let arrIndex1 = Math.floor(Math.random() * symbForPass.length);
        console.log(arrIndex1);
        let arrIndex2 = Math.floor(Math.random() * symbForPass[arrIndex1].length);
        console.log(arrIndex2);
        newPass = newPass + symbForPass[arrIndex1][arrIndex2];
        }
    alert(newPass);
}

generateBtn.addEventListener("click", writePassword);


// //test loop
// for (let i = 0; i < 100; i++) {
    //     numSteps = 8 + Math.floor(Math.random() * (10 + 1 - 8));
    //     console.log(numSteps);
    // }
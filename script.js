var generateBtn = document.querySelector("#generate");

function writePassword() {

  let symbForPass = [
    ['a','b','c'],
    ['A','B','C'],
    ['1','2','3'],
    ['!','@','#']
  ];
  
  let numSteps = Math.floor(Math.random() * 3);
  console.log(numSteps);

  // let maxAndMin = confirm('The password will contain at least 8 characters and a maximum of 128 characters!\n\nOK?');
  // let chooseLowercase = confirm('The password will contain lowercase.\n\nOK?');
  // let chooseUppercase = confirm('The password will contain uppercase.\n\nOK?');
  // let chooseNumeric = confirm('The password will contain numeric.\n\nOK?');
  // let chooseSpecial = confirm('The password will contain special characters.\n\nOK?');

  let newPass = '';

  for (let i = 0; i < numSteps; i++) {
    
    //arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент

    let arrIndex1 = Math.floor(Math.random() * symbForPass.length);
    console.log(arrIndex1);

    let arrIndex2 = Math.floor(Math.random() * symbForPass[arrIndex1].length);
    console.log(arrIndex2);

    newPass = newPass + symbForPass[arrIndex1][arrIndex2];
  }
  console.log('======');
  alert(newPass);
}

generateBtn.addEventListener("click", writePassword);
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let firstPassword = document.getElementById('first-password')
let secondPassword = document.getElementById('second-password')



let passwordLength = 15

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generatePasswords() {
    let randomPassword = ""
    let randomPassword2 = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
        randomPassword2 += getRandomCharacter()         
    }
    return [randomPassword, randomPassword2]
}

function randomGenerator(){
    const generatedPasswordOne = generatePasswords()
    firstPassword.textContent = generatedPasswordOne[0]
    secondPassword.textContent = generatedPasswordOne[1]
}

function copyToClipboard1() {
    navigator.clipboard.writeText(firstPassword.textContent)
    // alert( 'Password copied to clipboard')
}

function copyToClipboard2() {
    navigator.clipboard.writeText(secondPassword.textContent)
    // alert( 'Password copied to clipboard')
}

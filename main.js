const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "1234567890"
const symbols = "!@#$%^&*-+=?"

const generateBtn = document.querySelector(".generate-btn")
const copyBtn = document.querySelector(".copy-btn")

generateBtn.addEventListener("click", generate)
copyBtn.addEventListener("click", copy)

function generate(){
        let characters = ""
        if(document.querySelector("#lowercase").checked){
            characters += lowercase
        }
        if(document.querySelector("#uppercase").checked){
            characters += uppercase
        }
        if(document.querySelector("#number").checked){
            characters += numbers
        }
        if(document.querySelector("#symbol").checked){
            characters += symbols
        }

        if(characters != ""){
            const length = document.querySelector(".range-select").value
            let password = ""
            for(let i=0; i<length; i++){
                const index = Math.floor(Math.random() * characters.length) //here characters.length because it should iterate from index 0 to 
                                                // characters length if we give length it will not iterate through all the char in the characters
                password += characters[index] 
            }
            display.value = password
        }
        else{
            display.value = ""
            }
}

const display = document.querySelector("#password-output")


function copy(){
    if(display.value != ""){
        let copyText = display.value
        navigator.clipboard.writeText(copyText)
        alert("Copied To Clipboard")
    }
    else{
        alert("No Text Found")
    }
}
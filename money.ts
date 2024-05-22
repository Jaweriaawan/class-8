#!/user/bin/env node 

import inquirer from "inquirer"

let answer : {
    sentence :string
} = await inquirer.prompt ([
    {message: "enter your sentence to count words", type: "input", name: "sentence"}
])

let word = answer.sentence.trim().split (" ");

console.log (word)

console.log (`your count words are ${word.length}`)
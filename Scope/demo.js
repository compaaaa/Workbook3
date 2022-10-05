
let score = 0; //GLOBAL VARIABLE

function addOne(){
    score += 7; //CHANGING/MUTATING THE GLOBAL
}

function showScore(){
    let score = 123 ; //HIDES THE OUTER
    console.log("INNER SCORE: " + score); //ACCESS THE VARIABLE
}

//TEST
showScore() //will show zero
addOne() //add 7
addOne() //add 7
showScore() //will now show 2
console.log("OUTER SCORE: " + score);
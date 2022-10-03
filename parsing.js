
// SECTION 2-12 EXERCISE 1

// parse - VERB: cut into pieces - like paring-knife, parcel, parsec

function parseAndDisplayName(){
    const SPACE = " ";
    const STARTING_INDEX = 0;
    let whereToCut = name.indexOf(SPACE); //WHERE IS THE SPACE - offset
    let leftside = name.substring(STARTING_INDEX, whereToCut);//TWO PARAMETERS - START TO STOP
    let rightside = name.substring(whereToCut); // ONE PARAMETER - WHERE TO START, (IMPLIED TO THE END)

    console.log("NAME: " + name);
    console.log("FIRST: " + leftside);
    console.log("LAST: " + rightside);
}

/*EXPECTED
Name: Brenda Kaye
First name:Brenda
Last name: Kaye
*/

let name = "Brenda Kaye";
let result = parseAndDisplayName(name)
console.log(result)

console.log(parseAndDisplayName("Brenda Kaye"));
console.log(parseAndDisplayName("Ian Auston"));
console.log(parseAndDisplayName("Siddalee Grace"));

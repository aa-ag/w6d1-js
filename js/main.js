// Exercise #1 //
/* Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches" */

// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
// let dog_names = ["Max", "HAS", "PuRple", "dog"]
// var dog_name = dog_names[0]

// function findWords(){
//     if (dog_string.includes(dog_name)){
//         return `Matched ${dog_name}`
//     } else {
//         return "No Matches"
//     }
// }

// console.log(findWords())

var dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
var as_arr = dog_string.split(" ")
let dog_names = ["Max", "HAS", "PuRple", "dog"]

function findWords(){
    for(let i = 0; i < dog_names.length; i++){
        if(as_arr.includes(i)){
            return `Matched ${dog_name}`
        } else {
            return 'No Matches'
        }
    }
}
console.log(findWords())

//Call method here with parameters

// Exercise #2 //
/* Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// arr = ['Max','Baseball','Reboot','Goku','Trucks','Rodger']

// function replaceEvenIndexes(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(i % 2 == 0){
//             arr.splice(i, 1, 'even index')
//         }
//         console.log(arr)
//     }
// }
// replaceEvenIndexes(arr)

// Expected output
// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
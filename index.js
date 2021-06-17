let countEl = document.getElementById("count-el"); //here we have to get the h2 where we update the number
let saveEl = document.getElementById("save-el") //here we have to update the p in order to save and reset the number of people
let count = 0; //it will keep track of the people 

//console.log(countEl); //log out the tag that you currently targeting

//increment the count variable when they press the increment button
function increment() {
    count += 1;

    countEl.textContent = count;
}

//decrement the count variable when the user presses the decrement button
function decrement() {
    count -= 1;

    countEl.textContent = count;
}

//save the number of poeple, then reset the count variable to 0 in order to start again
function save() {
    let saveStr = count + " - ";

    saveEl.textContent += saveStr;

    count = 0;
    countEl.textContent = count;
}
var names = ["Thien", "Kim", "Katy", "Hannah"];

//creating push function with a variable in () to add a variable at the end of the array
//item is variable you want to add into the array
function push(item){
    /*add the item you want to add at the end of the array 
    by making the index of array equal to the length of array
    */
    names[names.length] = item;
}

//adding "Duyen" into names array and excute the array in console
push("Duyen");
console.log(names);

//creating pop function to remove the last variable in the array
function pop(){

    /*removing the last item in the array by making the index of the array equal to the length of the array 
     but the length of the array will less than the intial length by 1 
    */
    names[names.length -1];
}

//removing the last string in the array and execute the array in console
pop();
console.log(names); 

// creating toString function which will make the variable in the array to string
function toString(){

}
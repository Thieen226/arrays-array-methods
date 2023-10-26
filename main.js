var names = ["Thien", "Kim", "Katy", "Hannah"];
//creating push function with a variable in () to add a variable at the end of the array
//item is variable you want to add into the array
function push(item){
    /*add the item you want to add at the end of the array 
    by making the index of array equal to the length of array
    */
    names[names.length] = item;
}
//adding "Dee" into names array and excute the array in console
push("Dee");
console.log(names);


var numbers = ["1", "2", "4", "5"];
//creating pop function to remove the last variable in the array
function pop(){
    /*removing the last item in the array by making the index of the array equal to the length of the array 
     but the length of the array will less than the intial length by 1 
    */
    numbers.length = numbers.length -1;
    numbers[numbers.length];
}
//removing the last string in the array and execute the array in console
pop();
console.log(numbers); 


var nums = [2 , 4, 6, 8];
//creating toString function which will make the variable in the array to string
function toString(){
    let numsString = "";
    for(let i = 0; i < nums.length; i++){
        if(i === 0){
            
        }
        else{
            numsString += ", " + nums[i];
        }

    }

    console.log(numsString);
}
toString();

var countries = ["Japan", "Vietnam", "U.S.", "U.K."];
function join(item){
   
}

var fruits = ["Kiwi", "Orange", "Apple", "Grape,"];
var drinks = ["Pepsi", "Juice", "Coffee", "Water"];
/*
creating a concat function 
*/
function concat(){
    fruitsString = "" + fruits;
    drinksString = "" + drinks;
    customConcat = fruitsString + drinksString;
}
concat();
console.log(customConcat);
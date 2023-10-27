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


var nums = [2, 4, 6, 8];
//creating toString function which will make the variable in the array to string
function toString(){
    //creating a string variable to making the array into string
    let numsString = "";
    for(let i = 0; i < nums.length; i++){
        //if the index is 0 then add string variable and the nums array
        //nums[i] means to get all the index of the array by using for loop
        if(i === 0){
            numsString += nums[i];
        }
        //if the index is different than 0 then add ", " between variables in the array
        else{
            numsString += ", " + nums[i];
        }
    }
    console.log(numsString);
}
toString();

var countries = ["Japan", "Vietnam", "U.S.", "U.K."];
function join(item){
   let countriesString = "";
   for (let i = 0; i < countries.length; i++){
        //if the index is 0 then add string variable and the countries array
        //countries[i] means to get all the index of the array by using for loop
        if(i === 0){
            countriesString += countries[i];
        }
        //if the index is different than 0 then add "item" between variables in the array
        //item is what you want to seperate between variables
        else{
            countriesString += item + countries[i]; 
        }
   }
   console.log(countriesString);
}
join("/");

var array1 = ["Kiwi", "Orange", "Apple", "Grape"];
var array2 = ["Pepsi", "Juice", "Coffee", "Water"];
let array3 = []; //array3 is new array that will store both array1 and array2
function concat(){
    //using for loop to push array1 into array3
    for(let i = 0; i < array1.length, array2.length; i++){
        array3[array3.length] = array1[i] , array2[i];
    }
//     //using for loop to push array2 into array3 after array1
//     for(let i =0; i < array2.length; i++){
//         array3[array3.length] = array2[i];
//     }
}
concat();
console.log(array3);




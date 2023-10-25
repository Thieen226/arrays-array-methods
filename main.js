var names = ["Thien", "Kim", "Katy", "Hannah"];

//item is variable you want to add into the array
function push(item){
    
    
    names[names.length] = item;
}

//adding "Duyen" into names array and excute the array in console
push("Duyen");
console.log(names);


function pop(){
    names[names.length -1];
}

//removing the last string in the array and execute the array in console
pop();
console.log(names); 

function toString(){

}
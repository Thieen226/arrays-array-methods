var names = ["Thien", "Kim", "Katy", "Hannah"];

function push(item){
    names[names.length] = item;
}

push("Duyen");
console.log(names);


function pop(){
    names[names.length -1];
}

pop();
console.log(names);     
var names = ["Thien", "Kim", "Katy", "Hannah"];

function push(item){
    names[names.length] = item;
}

push("Dee");
console.log(names);


function pop(item){
    names[names.length] = item;
    names.remove(item);
}

pop("Thien");
console.log(names);
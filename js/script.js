// RADER
for(let i=1; i<=5; i++){
    const h1 = document.createElement("h1");
    const hue = 10+i*40;

    document.body.appendChild(h1);
    h1.innerText = (`Rad ${i}`)
    h1.style.backgroundColor = `hsl(${hue}, 50%, 80%)`;
    h1.style.textAlign = ("center");
    h1.style.color = ("blue");
    h1.style.fontSize = (`${i}em`);
};

const box = document.createElement("box");

box.style.display = "flex";
box.style.justifyContent = "space-evenly";
box.style.border = "1px solid black";
box.style.padding = "2em";
document.body.appendChild(box);

// LISTA 1
let list1 = document.createElement("ul");
list1.style.listStyle = ("none")
list1.style.backgroundColor = "hsl(240, 71%, 80%)";
list1.style.padding = "0.6em";
box.appendChild(list1);

for (let i=0; i<=9; i++) {
    const li = document.createElement("li");
    list1.appendChild(li);    
    li.innerText = i;
    li.style.width = "3em";

    if(i == 4){
        li.style.backgroundColor = "hsl(240, 71%, 80%)";
        li.style.color = "white";
    }
    else if(i%2==0){
        li.style.backgroundColor = "black";
        li.style.color = "white";
    }
    else if(i%1==0){
        li.style.backgroundColor = "white";
        li.style.color = "black";
    }
}

// LISTA 2
let list2 = document.createElement("ul");
list2.style.listStyle = ("none")
list2.style.backgroundColor = "hsl(240, 71%, 80%)";
list2.style.padding = "0.6em";
box.appendChild(list2);

for (let i=9; i>=0; i--) {
    const li = document.createElement("li");
    li.style.textAlign = "center";
    li.style.width = "3em";
    li.innerText = i;
    list2.appendChild(li);

    if(i == 8){
        li.style.backgroundColor = "hsl(240, 71%, 80%)";
        li.style.color = "white";
    }
    else if(i%2==0){
        li.style.backgroundColor = "black";
        li.style.color = "white";
    }
    else if(i%1==0){
        li.style.backgroundColor = "white";
        li.style.color = "black";
    }
}

// LISTA 3
const numbers = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"]

let list3 = document.createElement("ul");
list3.style.listStyle = ("none")
list3.style.backgroundColor = `hsl(240, 71%, 80%)`;
list3.style.padding = "0.6em";
box.appendChild(list3);

for (let i=0; i<numbers.length; i++) {
    const li = document.createElement("li");
    li.style.width = "3em";
    li.innerText = numbers[i];
    li.style.textAlign = "right";
    list3.appendChild(li);

    if(numbers[i] === "sex"){
        li.style.backgroundColor = "hsl(240, 71%, 80%)";
    }
    else if(i%2!==1){
        li.style.backgroundColor = "black";
        li.style.color = "white";
    }
    else if(i%1==0){
        li.style.backgroundColor = "white";
        li.style.color = "black";
    }
}
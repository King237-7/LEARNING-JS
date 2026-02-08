let count =0;
let countEl= document.getElementById ("count-el");
let saveEl= document.getElementById ("save-el");
let saveCount;

function increment(){
    count+=1;
    countEl.innerText=count
}
console.log(countEl);

function save(){
    saveCount = " "+count + " - ";
    console.log(saveCount);
    saveEl.textContent += saveCount;
    countEl.innerText=0;
    count=0;
}   

function reset(){
    countEl.innerText=0;
    saveEl.textContent="Previous entires: ";
    count=0; 
}

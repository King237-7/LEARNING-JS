let myLeads=[]
const inputEL=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

deleteBtn.addEventListener("click", function(){
    ulEl.innerHTML=""
    localStorage.clear()
    myLeads=[]
})

inputBtn.addEventListener("click", function(){
    let url = inputEL.value.trim();
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url ;
    }
    myLeads.push(url);

    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    render(myLeads);
    inputEL.value="";
})

function render(leads){
    let listItems=""
    for (let i=0; i<leads.length; i++){
    listItems += `
        <li>
             <a href= ${leads[i]}  target='_blanck' > 
             ${leads[i]} <a/> 
        </li>
        `
    //    const li=document.createElement("li")
    //    li.textContent=myLeads[i]
    //    ulEl.append(li)
    }
    ulEl.innerHTML=listItems
}

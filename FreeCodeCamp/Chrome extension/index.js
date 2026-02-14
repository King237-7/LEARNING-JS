let myLeads=[]
const inputEL=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    renderLeads()
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

    renderLeads();
    inputEL.value="";
})

function renderLeads(){
    let listItems=""
    for (let i=0; i<myLeads.length; i++){
    listItems += `
        <li>
             <a href= ${myLeads[i]}  target='_blanck' > 
             ${myLeads[i]} <a/> 
        </li>
        `
    //    const li=document.createElement("li")
    //    li.textContent=myLeads[i]
    //    ulEl.append(li)
    }
    ulEl.innerHTML=listItems
}

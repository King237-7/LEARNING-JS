let myLeads=[]
const inputEL=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    let url = inputEL.value.trim();
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url 
    }
    myLeads.push(url);
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

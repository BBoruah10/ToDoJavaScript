const title=document.getElementById("title");
const description=document.getElementById("description");
const form=document.querySelector("form");
const container=document.querySelector(".container");

//const tasks=[];//[{name:abhi},...] etu type t bostu bur thakibo
const tasks = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
//console.log(tasks)//thoka value khini ako ahi  jai!!!
showAll();
function showAll(){
    tasks.forEach((value,index) => {
        const div=document.createElement("div");
        div.setAttribute("class","task");

        const innerdiv=document.createElement("div");   //<div class="task"> ----> div
                                                        //tar bhitorot <div>-----> INNERDIV
                                                        //juntu ami append kori dim outer div t
                                                        //inner div tut ako 
        div.append(innerdiv);

        const p=document.createElement("p");            //first t ami p tag add korim
        p.innerText=value.title;                        //value dim p tag t using value.TITLE
        innerdiv.append(p);


        const span=document.createElement("span");
        span.innerText=value.description;
        innerdiv.append(span);


        const btn=document.createElement("button");
        btn.setAttribute("class","deletebtn");

        btn.innerText="-";

        btn.addEventListener("click",()=>{
            removeTasks();//remove them
            tasks.splice(index,1);
            
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showAll();
        })

        div.append(btn);

        container.append(div);


        
    });
}


function removeTasks()
{
    tasks.forEach((value)=>{
        const div = document.querySelector(".task");
        div.remove();//etu div blg hoi deiii
    })
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removeTasks();//first remove then add
    tasks.push({
        title: title.value,
        description : description.value,
    })
    
    localStorage.setItem("tasks",JSON.stringify(tasks));//strings pass koribo lage
    //cpnvert objects to strings using JSON
    //console.log(tasks)
    showAll()
})
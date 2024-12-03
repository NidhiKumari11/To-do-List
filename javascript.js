let input=document.querySelector("input");
let ul=document.querySelector("ul")
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    console.log("click");
    let li=document.createElement("li");
    let deletebtn=document.createElement("button");


    li.innerText=input.value;
    ul.appendChild(li);


    li.appendChild(deletebtn);
    deletebtn.innerText="Delete"
    deletebtn.classList.add("closebtn");

    input.value="";

})

ul.addEventListener("click",function(event){
    console.dir(event.target.nodeName);
    if(event.target.nodeName=="BUTTON"){
        let del=event.target.parentElement;
        del.remove();
        console.log("del");

    }
})
//let delbtn=document.querySelectorAll(".closebtn");
//for(del of delbtn){
//    del.addEventListener("click",function(){
//        console.log("dl");
//    })

//}

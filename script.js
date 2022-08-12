var div=document.createElement("div");
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","txt");

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="search";
button.addEventListener("click",foo);


div.append(input,button);
document.body.append(div);


var section=document.createElement("section");
section.setAttribute("id" , "container");

async function foo(){
    let pop=document.getElementById("txt").value;
    let res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${pop}`);
    let result1=await res.json();
    console.log(result1);



    for(var i=0;i<result1.length;i++){
        var innerdiv=document.createElement("div");
        innerdiv.setAttribute("id" , "innerdiv")
     innerdiv.innerHTML=`<img id="image_link" src="${result1[i].image_link}"> 
     <div id="brand">${result1[i].brand}</div> 
     <div id="name">${result1[i].name}</div>
     <div id="price">${result1[i].price}</div> 
     <div id="product_link">${result1[i].product_link}</div> 
     <div id="description">${result1[i].description}</div>`;

     section.append(innerdiv);
    }
   
    document.body.append(section)
      



}




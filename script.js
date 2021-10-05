// let cc=document.getElementById("cname").value;
//     console.log(cc);
let cc;
async function foo(){
    
    const anime =await fetch(" https://api.jikan.moe/v3/search/anime?q=naruto");
    const animedata =await anime.json();
    console.log(animedata);
    cc=animedata.results[0].image_url;
    console.log(`${cc}`)
    
}
foo();
 
// var img=document.createElement("img")
// img.src="cc";
// var src=document.getElementById("X")
// src.appendChild(img);

var div=document.createElement('div');
       div.innerHTML="cc";
       document.body.append(div);
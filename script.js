let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let copy = document.querySelector(".copy");
let rgb1 = "#000";
let rgb2 = "#fff";


let hexValues = () => {
    let hexvalues = "0123456789abcdef";
    let colors = "#";
    for(let i = 0; i < 6; i++){
      colors= colors + hexvalues[Math.floor(Math.random() * 16)];
}

return colors;
};

let handleButton1 = () => {
   rgb1 = hexValues();
   console.log(rgb1);
   btn1.innerHTML = rgb1;
   document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
   copy.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
   
}


let handleButton2 = () => {
    rgb2 = hexValues();
    console.log(rgb2);
    btn2.innerHTML = rgb2;
     document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
   copy.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
    
 }


 copy.addEventListener("click", () => {
    navigator.clipboard.writeText(copy.innerText);
    alert("Code is copied to clipboard");
 });
 


    


btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);
console.log('Hello World!!')

//footer with year
const year = new Date();
document.getElementById("year").textContent = year.getFullYear();

//alert button
let alertButton = document.createElement('button');
alertButton.innerHTML = 'Click ME!!!';
alertButton.id = 'btn-alert';
alertButton.onclick = () => {
    alert('Nice Ckick!!');
}

document.getElementById("btn-alert").append(alertButton);

//Hover Button
let hoverButton = document.createElement("button");
hoverButton.innerHTML = "Hover Over Me :) ";
hoverButton.id = 'hover-btn-id';
 
hoverButton.onmouseover = () => {
    hoverButton.innerText = 'HEY!!';
}
hoverButton.onmouseleave = () => {
    hoverButton.innerText = 'Do it Again!';
    setTimeout(()=>{hoverButton.innerText = "Put your cursor on me!";},3000)
}
 
document.getElementById("hover-btn-id").append(hoverButton);

//Increment Button
let numberParagraph = document.createElement("p");
let ctr = 0;
numberParagraph.innerText = `Number : ${ctr}`;
 
let incrementButton = document.createElement("button");
 
incrementButton.innerHTML = "Click me to add!";
incrementButton.id = "btn-counter";
 
incrementButton.onclick = () => {
     
    numberParagraph.classList.remove(...numberParagraph.classList);
    if (ctr++ % 2 == 0) {
        numberParagraph.classList.add('even');
    } else {
        numberParagraph.classList.add('odd');
    }
    numberParagraph.innerText = `Number : ${ctr}`;
 
    ``
}
document.getElementById("btn-counter").append(incrementButton);
document.getElementById("txt-counter").append(numberParagraph);
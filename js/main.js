console.log('Hello World!!')

//footer with year
const year = new Date();
document.getElementById("year").textContent = year.getFullYear();

//alert button
let alertButton = document.createElement('button');
alertButton.innerHTML = 'Click ME!!!';
alertButton.id = 'btn-alert';
alertButton.onclick = () => {
    alert('Nice Click!!');
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
    setTimeout(()=>{hoverButton.innerText = "Good Work!";},3000)
}
 
document.getElementById("hover-btn-id").append(hoverButton);

//Increment Button

let count = 1;

document.getElementById('btn-counter').onclick = () => {
    count += 1;

    document.getElementById('txt-counter').textContent = `Number: ${count}`;

    document.getElementById('txt-counter').classList.remove('even', 'odd');


    if (count % 2 === 0) {
        document.getElementById('txt-counter').classList.add('even');
    } else {
        document.getElementById('txt-counter').classList.add('odd');
    }
};

//for Loops
for (let i = 1; i <= 100; i++) {
  
    const listItem = document.createElement('li');

    listItem.textContent = i % 2 === 0 ? 'Even' : 'Odd';


    document.getElementById('numbers').appendChild(listItem);
}

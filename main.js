const inputf = document.getElementById("inputField");
const button = document.getElementById("butt");
const button2 = document.getElementById("dell");
const button3 = document.getElementById("selall");

const editor = document.getElementById("editor");
const ul = document.getElementById("words");

let putText = () => {
    let text = inputf.value;
    let newLi = document.createElement("li");
    var box = document.createElement("INPUT");
    box.setAttribute("type", "checkbox");
    box.setAttribute("class", "checking");
    newLi.appendChild(box);

    newLi.setAttribute('class', 'lis');
    newLi.append(text);

    ul.appendChild(newLi);

};

let del = () => {

    var matches = document.querySelectorAll("input.checking");

    for (let i = 0; i < matches.length; i++) {

        if (matches[i].checked) {
            matches[i].parentElement.style.display = "none"

        }
    }

};

let selAll = () => {
    var matches = document.querySelectorAll("input.checking");
    console.log(matches)
    for (let i = 0; i < matches.length; i++) {
        matches[i].checked = true
    }
};




button.addEventListener('click', putText);
button2.addEventListener('click', del);
button3.addEventListener('click', selAll);
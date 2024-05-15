let rainbow = ["aquamarine", "darkviolet", "lightcoral", "lightpink plum", "skyblue", "thistle"];
let rainbowList = document.createElement('ul');
for (let i = 0; i < arr.length; i++) {
    //itemcolor
    let rainbowItem = document.createElement('li');
    li.innerText = rainbow[i];
    li.style.color = rainbow[i];
    rainbowList.appendChild(rainbowItem);
}
document.body.appendChild(rainbowList);
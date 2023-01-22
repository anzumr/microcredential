console.log('Anzum Rahman')
// Example 1
let p1 = document.getElementById('one')
p1.style.color = 'olive';
// Example 2
let ps = document.getElementsByTagName('p')
console.log(ps)
// Example 3
let n = document.getElementsByClassName('name')
for(let i=0; i<n.length; i++){
    n[i].style.color = 'orange'
}
// Example 4
let firstP = document.querySelector('p')
firstP.style.color = 'magenta'
// Example 5
let names = document.querySelectorAll('#special .name')
for(let i = 0; i<names.length; i++){
    names[i].style.fontWeight = 'bolder'
    names[i].style.fontStyle = 'italic'
    names[i].style.fontSize = '2em'
}
// Example 6
let my = document.querySelector('.qcc')
// Example 10
let n2 = document.querySelectorAll('#special .name')[1]
n2.className = 'bgBlue'
// Example 15
let list = document.querySelectorAll('li')[2]
// Example 17
let myPara = document.createElement('p')
let mySentence = document.createTextNode('Appended paragraph')
myPara.appendChild(mySentence)
let newP = document.querySelector('.d')
newP.prepend(myPara)
// Example 22
let subtitle = document.createElement('h2')
subtitle.append('PARKS TO VISIT IN NYC')
let parks = document.querySelector('.nyc')
parks.insertAdjacentElement("afterend", subtitle)
// Example 23
let div2 = document.querySelector('.d2')
div2.removeChild(div2.children[1])
// Example 24
let par1 = document.querySelector('.p1')
par1.remove()
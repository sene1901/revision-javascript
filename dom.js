// let titre =document.getElementById("gros-titre");
let tableau = document.getElementsByTagName("p")
// alert("Notre page contient : " +tableau.length+ "paragraphe")
// let tableau = document.getElementsByClassName('para')
alert('Notre page contient : ' +tableau.length+ 'portant la class para')




const ul = document.querySelector('ul')
// ul.setAttribute('hidden', 'hidden') modifier ul
console.log(ul.nodeName,ul.innerHTML)
const li = document.querySelector('ul li:first-child')
const  newLi = document.createElement('li')
newLi.innerHTML = 'Bojour les gens'
document.querySelector('ul').appendChild(newLi)
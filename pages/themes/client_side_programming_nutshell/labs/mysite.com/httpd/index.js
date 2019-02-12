console.log("1. INDEX.JS");

var nodes = document.querySelectorAll('ul>li:nth-child(2)');
console.log(nodes.length);


for( let i = 0; i<nodes.length; i++){
	console.log(`nodes: ${nodes}`);
	nodes[i].innerHTML = "IVA POPOVA";
}

function copy(that){
var inp =document.createElement('input');
document.body.appendChild(inp)
inp.value =that.textContent.replace(/ +/g, "")
inp.select();
document.execCommand('copy',false);
inp.remove();
}

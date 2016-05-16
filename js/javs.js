function hacerclic()
{
document.querySelector(“#principal p:firstchild”).onclick=mostraralerta;
}
function mostraralerta()
{
alert('hizo clic!');
} window.onload=hacerclic;
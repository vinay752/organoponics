function icon0()
{
document.getElementById("btn2").style.display='inline-block';
document.getElementById("btn1").style.display='none';
document.getElementById("menu-items").style.display='inline-block';
}

function icon1()
{
document.getElementById("btn1").style.display='inline-block';
document.getElementById("btn2").style.display='none';
document.getElementById("menu-items").style.display='none';
}

function update()
{
if(window.innerWidth>=700)
	{
		window.location.reload();
	}
else
{
	document.getElementById("menu-items").style.transition="all 2s liner";
}
}
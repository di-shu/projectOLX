  $('.main-slider').slick(
  	{
  		dots:true
  	});


  document.title=document.getElementById("forTab").innerHTML;//заголовок вкладки по названию объявления

 let modal=document.getElementById("myModal");
 let slider=document.getElementById("main-slider");

 function fullscreen()
 {
 	modal.style.display="block";
 }


 var swiper = new Swiper('.swiper-container', {
 	zoom:false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });


 document.title=document.getElementById("forTab").innerHTML;//заголовок вкладки по названию объявления

 let photoComp=document.getElementById("qa-photo-component");
 let qa_swiper=document.getElementsByClassName('swiper-slide');
 let button_close=document.getElementById("btn-close-prev");


 window.addEventListener('load',function(){

	 for(let i=0;i<qa_swiper.length;i++)
	 {
	 	// if(qa_swiper[i])
	 	qa_swiper[i].addEventListener('touchend',function(e){
 		photoComp.classList.add('is-preview-active');
 		button_close.style.display = "block";
 		
 	},false)
	 }



 	// qa_swiper.addEventListener('touchend',function(e){
 	// 	photoComp.classList.add('is-preview-active');
 	// 	button_close.style.display = "block";
 	// },false)
 	button_close.addEventListener('touchend',function(e){
 		photoComp.classList.remove("is-preview-active");
 		button_close.style.display = 'none';
 	},false)

 },false)


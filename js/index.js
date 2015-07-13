// document.getElementById('orangechange').onclick = switchOrange;
// document.getElementById('bluechange').onclick = switchBlue;

// function switchOrange() {
//   document.getElementById('orangechange').style.color = 'orange';
//   document.getElementById('bluechange').style.color = '#c6c6c6';
// }

// function switchBlue() {
//  document.getElementById('orangechange').style.color = '#c6c6c6';
//  document.getElementById('bluechange').style.color = 'blue';
// }




// $('.fa-arrow-up').click(function(){
// 	$(this).css('backgroundColor', 'red');
// });



$('.fa-arrow-up').click(function(){
	console.log($(this).css('backgroundColor'));
	if($(this).css('backgroundColor') == 'rgba(0, 0, 0, 0)'){
		$(this).css('backgroundColor', 'red'); 
	}

	else{
		$(this).css('backgroundColor', 'rgba(0, 0, 0, 0)');
	}

});

$('.fa-arrow-down').click(function(){
	if($(this).css('backgroundColor') == 'rgba(0, 0, 0, 0)'){
		$(this).css('backgroundColor', 'blue');
	}

	else{
		$(this).css('backgroundColor', 'rgba(0, 0, 0, 0)');
	}


});

// $('question').click(function(){
// 	$(this).next().slideToggle();
// });
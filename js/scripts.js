// JavaScript Document
$(document).ready(function(){
	$('a').click(function(e){
		e.preventDefault();
		$(this).after('<p>Hello world!</p>');
	});
});
$(document).ready(function(){
	var total = 0;
	$('form').change(function () {	
		total = 0;	
        $('input[type="checkbox"]:checked').each(function () {
            total += parseInt($(this).attr('powervalue'));            
        });
     	$('#totalpower').html(total);
     });
});
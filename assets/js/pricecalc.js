$(document).ready(function(){
	
	
	/*$('input[id="window"]').on('change', function(){
		var windownumbers = parseInt($('input[id="window"]').val());
        if (windownumbers == 0){
        	$('input[id="checkbox5"]').attr('pricevalue', 0);
        	}
        else (windownumbers > 0) {
        	var windowstotalprice = 500 + 300*windownumbers;
        	$('input[id="checkbox5"]').attr('pricevalue', windowstotalprice);
        }   
	});*/
	var total = 0;
	 

    $('fieldset').on('click', function () {
	    var cleaningdate = $('#datetimepicker').val();
		$('#dateofcleaning').text(cleaningdate);
		var cleaningtime = $('#when').val();
		$('#timeofcleaning').text(cleaningtime);
		var roomsforcleaning = $('#roomnumber').val();
		$('#roomsordered').text(roomsforcleaning);
		var bathordered = $('#bathrooms').val();
		$('#bathroomsordered').text(bathordered);
		var  phonenumber = $('#phone').val();
		$('#phonenumber').val(phonenumber);
    $(function(){
				var windownumbers = parseInt($('input[id="windows"]').val());
				if (windownumbers == 0){
        			$('input[id="checkbox5"]').attr('pricevalue', 1400);
        		}
        		else {
        			var windowstotalprice = (500 + 300*windownumbers);
        			$('input[id="checkbox5"]').attr('pricevalue', windowstotalprice);        			
		        }  
	});
	$(function(){
				var ironingduration = parseInt($('input[id="ironing"]').val());
				if (ironingduration == 0){
        			$('input[id="checkbox1"]').attr('pricevalue', 500);
        		}
        		else {
        			var ironingtotalprice = (250*ironingduration/30);
        			$('input[id="checkbox1"]').attr('pricevalue', ironingtotalprice);        			
		        }  
	});	  	       

        total = 0; 

        $('input[type="checkbox"]:checked').each(function () {

            total += parseInt($(this).attr('pricevalue'));
            
        });

        $('input[type="number"]').each(function () {            
            var roomPrice = parseInt($(this).attr('data'));
            var startPrice = parseInt($(this).attr('startp'));
            total += startPrice + $(this).val()*roomPrice ? startPrice + parseInt($(this).val())*roomPrice : 0;
        });

       
        $('input[type="radio"]:checked').each(function(){
        	
	        	if ($('input[id="once"]').is(':checked')){
	        		total = total*1.0;
	        		$("#discount").html( "Cтандартная цена" );        		
	        	}
	        	else if
	        	 ($('input[id="weekly"]').is(':checked')){	        		
	        		total = total*0.80;
	        		$("#discount").html( "Cкидка 20%");
	        	}
        		else if
	        	 ($('input[id="twiceweek"]').is(':checked')){	        		
	        		total = total*0.75;
	        		$("#discount").html( "Cкидка 25%" );
	        	}
	        	else if ($('input[id="monthly"]').is(':checked')) {
	        		total = total*0.95;
	        		$("#discount").html( "Cкидка 5%" );
	        	}
	        	else {
	        		total = total;
	        	}; 
		});



		/*$('input[type="radio"]:checked').each(function(){
			textvalue =$(this) .siblings('label').val();
			if ($(this).is(':checked')) {
				$('.total').append('<p>Текст</p>');
			}
			else ($(this).is(":not(:checked)")) {
				$('.total p').remove();
			};
		});.*/
		
        $('#finalprice').html(total);		    
		    
	});
	
	$('input[type="checkbox"]').change(function() {
    // If checked
	    var value = $(this).siblings('label').text();
	        $list = $("#itemList");
	    if (this.checked) {
	        //add to the right
	        $("<p data-value='" + value + "'>" + value + "</p>").appendTo($('#dopfunc'));
	    }
	    else {
	        //hide to the right
	        $('#dopfunc').find('p[data-value="' + value + '"]').slideUp("slow", function() {
	            $(this).remove();
	        });
	    }
	});
	

		/*$("#promoupdate").click(function(){		
			var promovalue = $('#promocode').val();
		    if (promovalue == "promo1") {
		        total += total - 200;
		        $('#promotext').text(promovalue);
		    }
		    else if (promovalue.length < 1) {
		        total = total*1;
		        $('#promotext').text("lower that 1");
		    }
		    else  {		        
		    };

        
    });

	 
	/*var totalprice;
	//var total2;
	var three;	
	$(".extras").click(function(){
	    var totalprice=0;					
		$(".extras:checked").each(function(){
			totalprice += parseInt($(this).val());
			//$("#total").html(totaladds + 'руб.');
			//$('#totaladdsprice').val(totaladds);	
		});

	});
	

	
	$("#roomnumber").parent().click(function() {
		//var totalroomprice;								
    	//var roomNumber = parseInt($('#roomnumber').val());
    	//var roomPrice = parseInt($('#roomnumber').attr('data'));
    	//totalroomprice = roomNumber*roomPrice;
    	totalprice += $(this).val() ? parseInt($(this).val()) : 0;
    	//$('#roomsnumber').val(totalroomprice); 	
    	//$( ".nrooms" ).text(totalroomprice);  
    });	
     /*  
	var totalbathroomprice = 0;
	$("#bathrooms").parent().click(function() {
    	var BathroomNumber = parseInt($('#bathrooms').val());
    	var bathroomPrice = parseInt($('#bathrooms').attr('data'));
    	totalbathroomprice =  BathroomNumber*bathroomPrice;
    	$('#bathroomsnumber').val(totalbathroomprice); 
    				    	    	
    });
    
		//totalprice =  totaladds + totalroomprice + totalbathroomprice;
		//$("#total").html(totalprice + 'руб.');
	
    var one = parseInt($('#roomsnumber').val());
    var two = parseInt($('#bathroomsnumber').val());*/
    //three = parseInt($('#totaladdsprice').val());
    //$('#dopfunc').text(three);
	//total2 = one + two + three;
	//$( "#total" ).html(totalprice+'руб'); 
		  
});
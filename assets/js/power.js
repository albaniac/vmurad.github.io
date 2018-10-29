$(document).ready(function(){
	var total = 0;
	$('form').change(function (){	
		total = 0;	
        $('input[type="checkbox"]:checked').each(function () {
            total += parseInt($(this).attr('powervalue'));            
        });
     	$('#totalpower').html(total);
     	$('input[id="totalpowervalue"]').attr('value', total);
     	var complect = [
			{
				name:"REENERGO 300",
				price:7500
			},
			{
				name:"REENERGO 600",
				price:9000
			},
			{
				name:"REENERGO 1000",
				price:13200
			},
			{
				name:"REENERGO 3000T",
				price:27500
			},
			{
				name:"REENERGO 6000T",
				price:51000
			}	
		];
				
		if (total <= 600 && $("#refridge").prop('checked')) {
			$('#ibp-name_input').val(complect[2].name);
			$('#ibp-price_input').val(complect[2].price);
		}
		else if (total <= 300) {
			$('#ibp-name_input').val(complect[0].name);
			$('#ibp-price_input').val(complect[0].price);

		}
		else if (total <= 600) {
			$('#ibp-name_input').val(complect[1].name);
			$('#ibp-price_input').val(complect[1].price);	
		}
		else if (total <= 1000) {
			$('#ibp-name_input').val(complect[2].name);
			$('#ibp-price_input').val(complect[2].price);	
		}		
		else if (total <= 3000) {
			$('#ibp-name_input').val(complect[3].name);
			$('#ibp-price_input').val(complect[3].price);	
		}
		else  {
			$('#ibp-name_input').val(complect[4].name);
			$('#ibp-price_input').val(complect[4].price);	
		}
		var battery = [
			{
				capacity:26, 
				price:4200,
				power:240
			},
			{				
				capacity:44, 
				price:6700,
				power:400
			},
			{				
				capacity:65, 
				price:10400,
				power:550
			},
			{				
				capacity:100, 
				price:14200,
				power:900
			},
			{				
				capacity:200, 
				price:26200,
				power:1700
			}			
		];
		var reqHours = $('#myRange').val(); 
		var powerCapacity = total*reqHours;		
		if (powerCapacity <= 240) {
			$('#battery-type_input').val("Аккумулятор " + battery[0].capacity + " А*ч");
			$('#battery-price_input').val(battery[0].price);
		}
		else if (powerCapacity <= 400) {
			$('#battery-type_input').val("Аккумулятор " + battery[1].capacity + " А*ч");
			$('#battery-price_input').val(battery[1].price);
		}	
		else if (powerCapacity <= 550) {
			$('#battery-type_input').val("Аккумулятор " + battery[2].capacity + " А*ч");
			$('#battery-price_input').val(battery[2].price);
		}
		else if (powerCapacity <= 900) {
			$('#battery-type_input').val("Аккумулятор " + battery[3].capacity + " А*ч");
			$('#battery-price_input').val(battery[3].price);
		}
		else if (powerCapacity <= 1700) {
			$('#battery-type_input').val("Аккумулятор " + battery[4].capacity + " А*ч");
			$('#battery-price_input').val(battery[4].price);
		}
		else {
			var powerRatio, minpowerRatio, maxpowerRatio, devRest;
			powerRatio = powerCapacity / 1700; 
			devRest = powerCapacity % 1700;
			minpowerRatio = Math.floor(powerRatio);
			maxpowerRatio =Math.ceil(powerRatio);
			if (devRest <= 0.29) {
				$('#battery-type_input').val("Аккумулятор " + battery[4].capacity + "А*ч -" + minpowerRatio + "шт.");
				$('#battery-price_input').val(minpowerRatio*battery[4].price);
			}
			else {
				$('#battery-type_input').val("Аккумулятор " + battery[4].capacity + "А*ч - " + maxpowerRatio + " шт.");
				$('#battery-price_input').val(maxpowerRatio*battery[4].price);
			}
		}
		
		var finalIbpprice, finalIbpname, finalBatteryprice, finalBatterytype;
		finalIbpprice = parseInt($('#ibp-price_input').val());
		finalIbpname = $('#ibp-name_input').val();
		finalBatteryprice = parseInt($('#battery-price_input').val());
		finalBatterytype = $('#battery-type_input').val();
		$('#summary_ibp_price').html(finalBatteryprice + finalIbpprice + " р.");
		$('#ibp-price').html(finalIbpprice + " р.");
		$('#ibp-name').html("Источник " + finalIbpname);
		$('#battery-price').html(finalBatteryprice + " р.");
		$('#battery-type').html(finalBatterytype);
     });

});

	$('#btn').on('click', function(){

		var sex = $('input[name=sex]:checked').val();



		if($('input[name=sex]:checked') & $('#agr').is(':checked') ) {
			var success = true;
		}

		if($('input').eq(0).val() == '') {
			alert('error');
		}

		if($('input').eq(1).val() == '') {
			alert('error');
		}

		if($('input').eq(2).val() == '') {
			alert('error');
		}

		if($('input').eq(3).val() == '') {
			alert('error');
		}

		if($('input').eq(4).val() == '') {
			alert('error');
		}

		if($('input').eq(5).val() == '') {
			alert('error');
		}

		if($('input').eq(6).val() == '') {
			alert('error');
		}

		if($('select').val() == '') {
			alert('error');

		}





 		if(success == true) {
 			var form = {
			firstName: $('#name').val(),
			lastName: $('#lName').val(), 
			age: $('#age').val(),
			sex: sex,
			born: $('#date').val(),
			withMe: $('#members').val(),
			region: $('#state').val(),
			phone: $('#phone').val(),
			email: $('#email').val(),
	}

	 console.log(form);

 			}

		


	});

	










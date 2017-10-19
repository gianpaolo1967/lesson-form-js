
	$('#btn').on('click', function(){

		var sex = $('input[name=sex]:checked').val();

		

		if($('input[name=sex]:checked') && $('#agr').is(':checked')) {
			if($('input').eq(0).val() !== '') {
				if($('input').eq(1).val() !== '') {
					if($('input').eq(2).val() !== '') {
						if($('input').eq(3).val() !== '') {
							if($('input').eq(4).val() !== '') {
								if($('input').eq(5).val() !== '') {
									if($('input').eq(6).val() !== '') {
										if($('select').val() !== '') {
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
										else {
											alert('Fill all feeds');
										}

								}
									else {
											alert('Fill all feeds');
									}

							}
								else {
										alert('Fill all feeds');
								}

							}
								else {
										alert('Fill all feeds');
								}
						}
							else {
									alert('Fill all feeds');
							}
					}
						else {
								alert('Fill all feeds');
						}
				}
					else {
							alert('Fill all feeds');
					}
			}
				else {
						alert('Fill all feeds');
				}
		}
			else {
					alert('Fill all feeds');
			}

});

	










var login = function() {



    
      var email =  document.getElementById('email1').value;

      var senha =  document.getElementById('senha').value;

      







	var dataStr = '{"'+
				  'email":"' + email + 
				  '", "' +
				  'password":"' + senha + 
				  '"}';
				 				  

	var data = JSON.parse(dataStr);
		    
			
	var XHR = new XMLHttpRequest();

	var url = 'http://webaquino.com.br';
	var body = '<?xml version="1.0"?><person><name>Arun</name></person>';


	XHR.addEventListener('load', function(event) {
		$('#modalSucesso').modal('toggle');
		
		
		
		var response = XHR.responseText;

		console.log(response);

		var imprime = JSON.parse(response);

		var Bearer = "Bearer "+imprime.response;


		localStorage.setItem('token', Bearer);

		localStorage.setItem('usuario', JSON.stringify(email));
      	localStorage.setItem('nome', JSON.stringify(nome));
		
		setTimeout(function (){window.location.href = "endereco-entrega.html";}, 5000);


	});
	XHR.addEventListener('error', function(event) {
		$('#modalErro').modal('toggle');
	});

	XHR.open('POST', 'http://mandanode.herokuapp.com/mandanode/user/login');

	// header HTTP para dados de formulário POST
	XHR.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

	// Finally, send our data.
	XHR.send(dataStr);


	



}


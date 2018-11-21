var enviarDados = function(ev) {
ev.preventDefault();

var address = '{"'+ 
					'address":"' + document.getElementById('endereco').value + 
				  '", "' +
				  'street":"' + " - " + 
				  '", "' +
				  'number":"' + document.getElementById('numero').value + 
				  '", "' +
				  'neighborhood":"' + document.getElementById('cidade').value + 
				  '", "' +
				  'city":"' + document.getElementById('bairro').value + 
				  '", "' +
				  'state":"' + document.getElementById('estado').value + 
				  '", "' +
				  'cep":"' + document.getElementById('cep').value + 
				  '"';

var addresss = [address];

	var dataStr = '{"'+
				  'name":"'+ document.getElementById('nome').value + 
				  '", "'+
				  'email":"' + document.getElementById('email').value + 
				  '", "' +
				  'password":"' + document.getElementById('senha').value + 
				  '", "' +
				  'dateBirth":"' + document.getElementById('data').value + 
				  '", "' +
				  'sex":"' + document.getElementById('sexo').value + 
				  '", "' +
				  'cpf":"' + document.getElementById('cpf').value + 
				  '", "' +
				  'phone":"' + document.getElementById('telefone').value + 
				  '", "' +
				  'address":[' + addresss +  
				'}]}';
				 				  

	var data = JSON.parse(dataStr);
		    
			
	var XHR = new XMLHttpRequest();

	var url = 'http://webaquino.com.br';
	var body = '<?xml version="1.0"?><person><name>Arun</name></person>';


	XHR.addEventListener('load', function(event) {
		$('#modalSucesso').modal('toggle');
	});
	XHR.addEventListener('error', function(event) {
		$('#modalErro').modal('toggle');
	});

	XHR.open('POST', 'http://mandanode.herokuapp.com/mandanode/user/create');

	// header HTTP para dados de formulário POST
	XHR.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

	// Finally, send our data.
	XHR.send(dataStr);


	//setTimeout(function (){window.location.href = "endereco-entrega.html";}, 5000);



}


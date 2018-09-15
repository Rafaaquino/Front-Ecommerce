var enviarDados = function() {
	var data = JSON.parse(
				  '{"'+
				  'nome":"'+ document.getElementById('nome').value + 
				  '", "'+
				  'email":"' + document.getElementById('email').value + 
				  '", "' +
				  'senha":"' + document.getElementById('senha').value + 
				  '", "' +
				  'data":"' + document.getElementById('data').value + 
				  '", "' +
				  'sexo":"' + document.getElementById('sexo').value + 
				  '", "' +
				  'cpf":"' + document.getElementById('cpf').value + 
				  '", "' +
				  'telefone":"' + document.getElementById('telefone').value + 
				  '", "' +
				  'celular":"' + document.getElementById('celular').value + 
				  '", "' +
				  'endereco":"' + document.getElementById('endereco').value + 
				  '", "' +
				  'numero":"' + document.getElementById('numero').value + 
				  '", "' +
				  'cidade":"' + document.getElementById('cidade').value + 
				  '", "' +
				  'bairro":"' + document.getElementById('bairro').value + 
				  '", "' +
				  'estado":"' + document.getElementById('estado').value + 
				  '", "' +
				  'cep":"' + document.getElementById('cep').value + 
				  '"}'
			  );
		    
			
	var XHR = new XMLHttpRequest();
	var dadosSerializados = "";
	var arrayData = [];
	var name;

	// criar um array de pares chave/valor
	for(name in data) {
	arrayData.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
	}

	// Combine the pairs into a single string and replace all %-encoded spaces to 
	// the '+' character; matches the behaviour of browser form submissions.
	dadosSerializados = arrayData.join('&').replace(/%20/g, '+');


	XHR.addEventListener('load', function(event) {
		alert('Dados Enviados!');
	});
	XHR.addEventListener('error', function(event) {
		alert('Deu ruim!');
	});

	XHR.open('POST', 'https://mandanode.herokuapp.com/mandanode/user/create');

	// header HTTP para dados de formulário POST
	XHR.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

	// Finally, send our data.
	XHR.send(dadosSerializados);
}




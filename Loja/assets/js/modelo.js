
var enviarEndereco = function() {

var address = '{"'+ 
					'address":"' + document.getElementById('rua').value + 
				  '", "' +
				  'street":"' + " - " + 
				  '", "' +
				  'number":"' + document.getElementById('numero').value + 
				  '", "' +
				  'neighborhood":"' + document.getElementById('cidade').value + 
				  '", "' +
				  'city":"' + document.getElementById('bairro').value + 
				  '", "' +
				  'state":"' + document.getElementById('uf').value + 
				  '", "' +
				  'cep":"' + document.getElementById('cep').value + 
				  '"}';


// Cria um json a partir do objeto "aux" 
///var jsonAddress = JSON.stringify(address);

// "Seta" este json no localStorage
window.localStorage.setItem('enviarEndereco', address);

// Recupera o json do localStorage
//var jsonEndereco = window.localStorage.getItem('endereco');

// Converte este json para objeto
//var endereco = JSON.parse(jsonEndereco);

//console.log(endereco.city);


}

var enviarCartao = function() {

var card = '{"'+ 
				  'name":"' + document.getElementById('cardNome').value + 
				  '", "' +
				  'number":"' + document.getElementById('cardnumero').value + 
				  '", "' +
				  'flag":"'visa'", "' +
				  'date":"' + document.getElementById('dataExp').value + 
				  '", "' +
				  'cvv":"' + document.getElementById('cardCCV').value + 
				  '"}';



// Cria um json a partir do objeto "aux" 
///var jsonAddress = JSON.stringify(address);

// "Seta" este json no localStorage
window.localStorage.setItem('enviarCartao', card);

// Recupera o json do localStorage
//var jsonEndereco = window.localStorage.getItem('endereco');

// Converte este json para objeto
//var endereco = JSON.parse(jsonEndereco);

//console.log(endereco.city);


}

var enviarProdutos = function() {

  var products = [product1,product2,product3];

				var product1 = '{"'+ 
				  'id":"'231'"}';

				  var product2 = '{"'+ 
				  'id":"'231'"}';

				  var product3 = '{"'+ 
				  'id":"'231'"}';



// Cria um json a partir do objeto "aux" 
///var jsonAddress = JSON.stringify(address);

// "Seta" este json no localStorage
window.localStorage.setItem('enviarProdutos', products);

// Recupera o json do localStorage
//var jsonEndereco = window.localStorage.getItem('endereco');

// Converte este json para objeto
//var endereco = JSON.parse(jsonEndereco);

//console.log(endereco.city);


}

var enviarCompra = function() {

  var compra = [user,freight,totalPrice];

  		var user = '{"'+ 'id":"'1011'"}';

		var freight ='{"'+ document.getElementById('resultadoFrete').value +'"}';


		var totalPrice ='{"'+ document.getElementById('resultadoFrete').value +'"}';



// Cria um json a partir do objeto "aux" 
///var jsonAddress = JSON.stringify(address);

// "Seta" este json no localStorage
window.localStorage.setItem('enviarCompra', compra);

// Recupera o json do localStorage
//var jsonEndereco = window.localStorage.getItem('endereco');

// Converte este json para objeto
//var endereco = JSON.parse(jsonEndereco);

//console.log(endereco.city);


}



var enviarVenda = function() {

 

// Recupera o json do localStorage
var jsonEndereco = window.localStorage.getItem('enviarEndereco');

// Converte este json para objeto
var endereco = JSON.parse(jsonEndereco);


// Recupera o json do localStorage
var jsonCartao = window.localStorage.getItem('enviarCartao');

// Converte este json para objeto
var cartao = JSON.parse(jsonCartao);


// Recupera o json do localStorage
var jsonProdutos = window.localStorage.getItem('enviarProdutos');

// Converte este json para objeto
var produtos = JSON.parse(jsonProdutos);


// Recupera o json do localStorage
var jsonCompra = window.localStorage.getItem('enviarCompra');

// Converte este json para objeto
var compra = JSON.parse(jsonCompra);

//console.log(endereco.city);


var sale = '{"'+ 
				  'fret":"' + freight + 
				  '", "' +
				  'prince":"' + totalPrice + 
				  '", "' +
				  'userModel":"' + user +  
				  '", "' +
				  'card":"' + cartao +  
				  '", "' +
				  'address":"' + endereco +  
				  '", "' +
				  'products":["' + produtos +  
				  '"]}';


	
				 				  

	var data = JSON.parse(sale);
		    
			
	var XHR = new XMLHttpRequest();

	var url = 'http://webaquino.com.br';
	var body = '<?xml version="1.0"?><person><name>Arun</name></person>';


	XHR.addEventListener('load', function(event) {
		$('#modalSucesso').modal('toggle');

		setTimeout(function (){window.location.href = "sucesso.html";}, 5000);


	});
	XHR.addEventListener('error', function(event) {
		$('#modalErro').modal('toggle');
	});

	XHR.open('POST', 'http://mandanode.herokuapp.com/mandanode/sale/list');

	// header HTTP para dados de formulário POST
	XHR.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

	// Finally, send our data.
	XHR.send(sale);


}

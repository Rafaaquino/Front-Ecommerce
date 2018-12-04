

var enviarCompra = function() {

		

	
 		var val = document.getElementById("valorTotal").innerHTML;

		var freight = '"16.00"';


		var totalPrice = '"' + val + '"';

		
		

		//var products = [product1 product2 product3];		  

// "Seta" este json no localStorage

window.localStorage.setItem('enviarFreteCompra', freight);
window.localStorage.setItem('enviarTotalCompra', totalPrice);
// Recupera o json do localStorage
//var jsonEndereco = window.localStorage.getItem('endereco');

// Converte este json para objeto
//var endereco = JSON.parse(jsonEndereco);

//console.log(endereco.city);


	window.location.href = "login.html";


}



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
 
     window.location.href = "escolha-pagamento.html";

}

var enviarCartao = function() {

var card = '{"'+ 
				  'name":"' + document.getElementById('cardNome').value + 
				  '", "' +
				  'number":"' + document.getElementById('cardnumero').value + 
				  '", "' +
				  'flag":"visa", "' +
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






var enviarVenda = function() {


enviarCartao();


var prodCarrrinho = window.localStorage.getItem('produtosCarrinho');
 

// Recupera o json do localStorage
var jsonEndereco = window.localStorage.getItem('enviarEndereco');

// Converte este json para objeto
//var endereco = JSON.parse(jsonEndereco);



// Recupera o json do localStorage
var jsonCartao = window.localStorage.getItem('enviarCartao');

// Converte este json para objeto
//var cartao = JSON.parse(jsonCartao);


// Recupera o json do localStorage
var jsonUsuario = window.localStorage.getItem('enviarUsuarioCompra');

// Converte este json para objeto
//var user = JSON.parse(jsonUsuario);


// Recupera o json do localStorage
var jsonFrete = window.localStorage.getItem('enviarFreteCompra');

// Converte este json para objeto
//var freight = JSON.parse(jsonFrete);



// Recupera o json do localStorage
var jsonTotal = window.localStorage.getItem('enviarTotalCompra');

// Converte este json para objeto
//var totalPrice = JSON.parse(jsonTotal);




var sale = '{"'+ 
				  'fret":' + jsonFrete + 
				  ', "' +
				  'price":' + jsonTotal + 
				  ', "' +
				  'userModel":' + jsonUsuario +  
				  ', "' +
				  'card":' + jsonCartao +  
				  ', "' +
				  'address":' + jsonEndereco +  
				  ', "' +
				  'products":' + prodCarrrinho +'}';


	
				 				  

	//var venda = JSON.parse(sale);


	var token = localStorage.getItem('token');
		    
			
	var XHR = new XMLHttpRequest();

	//var url = 'http://webaquino.com.br';
	//var body = '<?xml version="1.0"?><person><name>Arun</name></person>';


	XHR.addEventListener('load', function(event) {
		$('#modalSucesso').modal('toggle');

		var response = XHR.responseText;

		window.localStorage.setItem('vendaConcluida', response);
		
		setTimeout(function (){window.location.href = "sucesso.html";}, 5000);


	});

	XHR.addEventListener('error', function(event) {
		console.log("erro");
		$('#modalErro').modal('toggle');
	});

	XHR.open('POST', 'http://mandanode.herokuapp.com/mandanode/sale/create');

	// header HTTP para dados de formulário POST
	XHR.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	XHR.setRequestHeader('Authorization', token);

	// Finally, send our data.
	XHR.send(sale);


}



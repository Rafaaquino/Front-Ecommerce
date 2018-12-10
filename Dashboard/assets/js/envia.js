var enviarDados = function(ev) {
ev.preventDefault();

      var email =  document.getElementById('email').value;
      var nome =  document.getElementById('nome').value;
      var senha = document.getElementById('senha').value;
      var cpf = document.getElementById('cpf').value;
      var celular = document.getElementById('celular').value;
      var bairro = document.getElementById('bairro').value;
      var rua = document.getElementById('endereco').value;
      var cidade = document.getElementById('cidade').value;
      var numero = document.getElementById('numero').value;
      var cep = document.getElementById('cep').value;



        if (nome == null || nome == "") {
          	alert("preencha o nome!");
        }
        else if(email == null || email == ""){
        	alert("preencha o email!");
        }
        else if(senha == null || senha == ""){
        	alert("preencha a senha!");
        }
        else if(cpf == null || cpf == ""){
        	alert("preencha o CPF!");
        }
        else if(celular == null || celular == ""){
        	alert("preencha o celular!");
        }
        else if(cep == null || cep == ""){
        	alert("preencha o CEP!");
        }
        else if(bairro == null || bairro == ""){
        	alert("preencha o bairro!");
        }
        else if(rua == null || rua == ""){
        	alert("preencha o endereço!");
        }
        else if(cidade == null || cidade == ""){
        	alert("preencha a cidade!");
        }
        else if(numero == null || numero == ""){
        	alert("preencha o numero!");
        }
        else{

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

					var response = XHR.responseText;

					var resposta = JSON.parse(response);

					console.log(resposta);


					if (resposta.sucess) {

				      	$('#modalSucesso').modal('toggle');
					}
					else{
						$('#modalErro').modal('toggle');
					}


					
					//setTimeout(function (){window.location.href = "endereco-entrega.html";}, 5000);
				});

				XHR.addEventListener('error', function(event) {
					$('#modalErro').modal('toggle');
				});

				XHR.open('POST', 'http://mandanode.herokuapp.com/mandanode/user/create');

				// header HTTP para dados de formulário POST
				XHR.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

				// Finally, send our data.
				XHR.send(dataStr);

        }

}

var enviarProduct = function(ev) {
ev.preventDefault();



      var nome =  document.getElementById('nome-produto').value;
      var categoria =  document.getElementById('categoria').value;
      var marca = document.getElementById('Marca').value;
      var qtd = document.getElementById('qtd').value;
      var codigo = document.getElementById('codigo').value;
      var medida = document.getElementById('medida').value;
      var valor = document.getElementById('valor').value;
      var descricao = document.getElementById('descricao').value;


        if (nome == null || nome == "") {
          	alert("preencha o nome do produto!");
        }
        else if(categoria == null || categoria == ""){
        	alert("preencha a marca!");
        }
        else if(marca == null || marca == ""){
        	alert("preencha a marca!");
        }
        else if(qtd == null || qtd == ""){
        	alert("preencha a quantidade!");
        }
        else if(codigo == null || codigo == ""){
        	alert("preencha o codigo!");
        }
        else if(medida == null || medida == ""){
        	alert("preencha a medida!");
        }
        else if(valor == null || valor == ""){
        	alert("preencha o Valor!");
        }
        else if(descricao == null || descricao == ""){
        	alert("preencha a descrião do produto");
        }
        else{

        	PreviewImage();

        	var product = '{"'+ 
				  'name":"' + document.getElementById('nome-produto').value + 
				  '", "' +
				  'idcategory":"' + "1" + 
				  '", "' +
				  'brand":"' + document.getElementById('Marca').value + 
				  '", "' +
				  'quantity":"' + document.getElementById('qtd').value + 
				  '", "' +
				  'code":"' + document.getElementById('codigo').value + 
				  '", "' +
				  'measure":"' + document.getElementById('medida').value + 
				  '", "' +
				  'description":"' + document.getElementById('descricao').value + 
				  '", "' +
				  'cash":"' + document.getElementById('valor').value + 
				  '"}';

				 				  

					var data = JSON.parse(product);
						    
							
					var XHR = new XMLHttpRequest();
					//var dadosSerializados = "";
					//var arrayData = [];
					//var name;

					// criar um array de pares chave/valor
					//for(name in data) {
					//arrayData.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
					//}

					// Combine the pairs into a single string and replace all %-encoded spaces to 
					// the '+' character; matches the behaviour of browser form submissions.
					//dadosSerializados = arrayData.join('&').replace(/%20/g, '+');


					XHR.addEventListener('load', function(event) {
						

						var response = XHR.responseText;

						console.log(response);

						var resposta = JSON.parse(response);

							console.log(resposta);


							if (resposta.sucess) {


								var idProduto = "http://mandanode.herokuapp.com/mandanode/product/insert/"+resposta.response;
								console.log(idProduto);


								localStorage.setItem('idProduto', idProduto);

						      	$('#modalSucesso').modal('toggle');

						      	setTimeout(function(){ uploadImage(); }, 2000);
							}
							else{
								$('#modalErro').modal('toggle');
							}


					});
					XHR.addEventListener('error', function(event) {
						$('#modalErro').modal('toggle');
					});

					XHR.open('POST', 'http://mandanode.herokuapp.com/mandanode/product/create');

					// header HTTP para dados de formulário POST
					XHR.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

					// Finally, send our data.
					XHR.send(product);

        }


}



var enviarUser = function(ev) {
ev.preventDefault();

 

var user = '{"'+ 
				  'name":"' + document.getElementById('nome').value + 
				  '", "' +
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
				  'phone":"' + document.getElementById('celular').value + 
				  '"}';

				 				  

	var data = JSON.parse(user);
		    
			
	var XHR = new XMLHttpRequest();
	//var dadosSerializados = "";
	//var arrayData = [];
	//var name;

	// criar um array de pares chave/valor
	//for(name in data) {
	//arrayData.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
	//}

	// Combine the pairs into a single string and replace all %-encoded spaces to 
	// the '+' character; matches the behaviour of browser form submissions.
	//dadosSerializados = arrayData.join('&').replace(/%20/g, '+');


	XHR.addEventListener('load', function(event) {
		// alert('Dados Enviados!');
		$('#modalSucesso').modal('toggle');
	});
	XHR.addEventListener('error', function(event) {
		$('#modalErro').modal('toggle');
	});

	XHR.open('POST', 'http://mandanode.herokuapp.com/mandanode/user/create');

	// header HTTP para dados de formulário POST
	XHR.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

	// Finally, send our data.
	XHR.send(user);
}


/*Função para fazer upload da imagem*/

function PreviewImage() { 

        

        var oFReader = new FileReader(); 
        oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

        oFReader.onload = function (oFREvent) { 
            document.getElementById("uploadPreview").src = oFREvent.target.result;
            
            
        };
        
        
}

function uploadImage(){
      
  var idProduto = localStorage.getItem("idProduto");
  console.log(idProduto);


    // Captura os dados do formulário
  var uploadImage = $('#uploadImage')[0].files[0];

  // Instância o FormData passando como parâmetro o formulário
  var formData = new FormData();
  formData.append('image', uploadImage);
  console.log(uploadImage);
    // Envia O FormData através da requisição AJAX
  $.ajax({
     type: "POST",
     url: idProduto,
     data: formData,
     processData: false,  
     contentType: false,
     success: function(retorno){

      console.log(retorno);
        var resposta = JSON.parse(retorno);

        console.log(resposta);

        setTimeout(function(){ location.reload(); }, 6000);
 
    }

  });

}


$(document).ready(function () {

	


	/*function recebeVenda() {
        $.ajax({
            url: 'http://mandanode.herokuapp.com/mandanode/product/list',
            method: 'GET',
            success: function (data) {
                console.log(data);
                produtos = data;
                listarProdutos();
            }
        });
    }*/

    // Recupera o json do localStorage
    //var vendas = window.localStorage.getItem('vendaConcluida');

   


    listarVenda();


function listarVenda() {

        $('#prootocolo').html('');

        $('#prootocolo').append(`

              <h4 class="pdTop"><b>${vendas.userModel[2].name}</b></h4>
              <hr>

              <div >
                <center>  
                  <h4>Sucesso - Seu Pedido Foi Confirmado!</h4>
                  <h5>Número do pedido: <strong >${protocoll} </strong></h5>
                  <h5>Data compra: <strong >${price} </strong></h5>
                  <hr>  
                </center>
              </div>

        `);


        
        $('#enderecoEntrega').html('');

        $('#enderecoEntrega').append(`

            <address class="pdTop pdBottom " >
                  <h4><strong>Endereço de entrega</strong></h4>
                      <p><strong> Nome: </strong><span id="nome"> ${usuario.name}</span> </p>
                      <p><strong> Email: </strong><span id="email"> ${usuario.email}</span> </p>
                      <p><strong> Rua: </strong><span id="rua"> ${endereco.address}</span></p>
                      <p><strong> Nº:</strong> <span id="numero">${endereco.number} </span></p>
                      <p><strong> Bairro: </strong><span id="bairro">${endereco.neighborhood} </span></p>
                      <p><strong> CEP: </strong><span id="cep"> ${endereco.cep} </span></p>
                      <p><strong> Cidade: </strong><span id="cep"> ${endereco.city} </span></p>
                      <p><strong> UF: </strong><span id="uf"> ${endereco.state} </span></p>
             </address>
        `);         
        

        $('#vendasProdutos').html('');

        
        $('#vendasProdutos').append(`

                    <td>${vendas.products}</td>
                    <td class="text-right">${vendas.name}</td>
                    <td class="text-right">${vendas.quantity}</td>
                    <td class="text-right">${vendas.prince}</td>
        `);   
        
}


});

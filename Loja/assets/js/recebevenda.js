$(document).ready(function () {

    listarVenda();

});



function listarVenda() {

        var vendas = JSON.parse(localstorage.getItem('vendaConcluida'))

        $('#protocolo').html('');

        $('#protocolo').append(`

              <h4 class="pdTop"><b>${vendas.userModel.name}</b></h4>
              <hr>

              <div >
                <center>  
                  <h4>Sucesso - Seu Pedido Foi Confirmado!</h4>
                  <h5>Número do pedido: <strong >${vendas.protocoll} </strong></h5>
                  <h5>Data compra: <strong >${vendas.price} </strong></h5>
                  <hr>  
                </center>
              </div>

        `);


        
        $('#enderecoEntrega').html('');

        $('#enderecoEntrega').append(`

            <address class="pdTop pdBottom " >
                  <h4><strong>Endereço de entrega</strong></h4>
                      <p><strong> Nome: </strong><span id="nome"> ${vendas.userModel.name}</span> </p>
                      <p><strong> Email: </strong><span id="email"> ${vendas.userModel.email}</span> </p>
                      <p><strong> Rua: </strong><span id="rua"> ${vendas.address.address}</span></p>
                      <p><strong> Nº:</strong> <span id="numero">${vendas.address.number} </span></p>
                      <p><strong> Bairro: </strong><span id="bairro">${vendas.address.neighborhood} </span></p>
                      <p><strong> CEP: </strong><span id="cep"> ${vendas.address.cep} </span></p>
                      <p><strong> Cidade: </strong><span id="cep"> ${vendas.address.city} </span></p>
                      <p><strong> UF: </strong><span id="uf"> ${vendas.address.state} </span></p>
             </address>
        `);         
        

        
        
}
$(document).ready(function () {

    listarVenda();

});



function listarVenda() {

        const vendas = JSON.parse(localStorage.getItem("vendaConcluida"));
        
        const nome = JSON.parse(localStorage.getItem("nome"));
        console.log(nome);

        const email = JSON.parse(localStorage.getItem("usuario"));
        console.log(email);

        const valor = JSON.parse(localStorage.getItem("valor"));
        console.log(valor);

        $('#protocolo').html('');

        $('#protocolo').append(`

              <h4 class="pdTop"><b>${nome}</b></h4>
              <hr>

              <div >
                <center>  
                  <h4>Sucesso - Seu Pedido Foi Confirmado!</h4>
                  <h5>Número do pedido: <strong >${vendas.protocoll} </strong></h5>
                  <h5>Valor compra: R$<strong >${valor} </strong>,00</h5>
                  <hr>  
                </center>
              </div>

        `);


        
        $('#enderecoEntrega').html('');

        $('#enderecoEntrega').append(`

            <address class="pdTop pdBottom " >
                  <h4><strong>Endereço de entrega</strong></h4>
                      <p><strong> Nome: </strong><span id="nome"> ${nome}</span> </p>
                      <p><strong> Email: </strong><span id="email"> ${email}</span> </p>
                      <p><strong> Rua: </strong><span id="rua"> ${vendas.address.address}</span></p>
                      <p><strong> Nº:</strong> <span id="numero">${vendas.address.number} </span></p>
                      <p><strong> Bairro: </strong><span id="bairro">${vendas.address.neighborhood} </span></p>
                      <p><strong> CEP: </strong><span id="cep"> ${vendas.address.cep} </span></p>
                      <p><strong> Cidade: </strong><span id="cep"> ${vendas.address.city} </span></p>
                      <p><strong> UF: </strong><span id="uf"> ${vendas.address.state} </span></p>
             </address>
        `);         
        

        
        
}
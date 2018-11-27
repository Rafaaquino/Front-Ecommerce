$(document).ready(function () {

	
    var produto = JSON.parse(localStorage.getItem('produtoSelecionado')); 

    listarProdutos();
	

    function listarProdutos() {
        
        $('#produtoDescricao').html('');
        
        
        $('#produtoDescricao').append(`


            <div class="col-md-4 info-img">
                <img src="assets/img/produtos/camisa.jpg" alt="t-shirt branca" title="t-shirt branca" class="img-fluid" >
              </div>

              <div class="col-md-8 info-produto paddingL">
                  
                  <div class="row">
                    <h3>${produto.name}</h3>
                  </div>

                   <div class="row">
                    <h4>R$${produto.cash},00</h4>
                  </div>

                  <div class="row">
                    <p class="txt-descricao">${produto.description}  </p>
                  </div>

                  <div class="row">
                    <ul class=" list-group lista-ul">
                      <div class="escolha">Tamanho</div>
                      <li class="list-group-item"><a href="#">P</a></li>
                      <li class="list-group-item "><a href="#">M</a></li>
                      <li class="list-group-item "><a href="#">G</a></li>
                      <li class="list-group-item"><a href="#">GG</a></li>
                    </ul>
                  </div>

                  <div class="row espaco">
                    <a href="carrinho.html" class="btn btn-lg btn-secondary maior"> COMPRAR</a>
                  </div>  
                
              </div>
     	`); 


       // $('#nomeProduto').append(`<h3 id="nomeProduto" class="card-text"><a href="#${produto.id}">${produto.brand}</a> </h3>`);
    
        //$('#preco-produto').append(`<h4 id="preco-produto" class="text-muted">R$ ${produto.cash}</h4>`);

    }

    
});




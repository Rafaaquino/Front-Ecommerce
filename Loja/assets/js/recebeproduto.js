$(document).ready(function () {

	carregaProdutos();


	function carregaProdutos() {
        $.ajax({
            url: 'http://mandanode.herokuapp.com/mandanode/product/list',
            method: 'GET',
            success: function (data) {
                console.log(data);
                produtos = data;
                
                  listarProdutos();
               
            }
        });
    }

    function listarProdutos() {
        
        

        $('#lista-produtos').html('');
        localStorage.setItem('produtos', JSON.stringify(produtos))
        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i];
            contaClique();
             $('#lista-produtos').append(`
             		<div class="col-md-4" >
              
		              <div class="card mb-4 box-shadow">
                        
		                  <img  class="card-img-top img-ajuste"  alt="camisa branca" title="camisa branca" style="height: 225px; width: 100%; display: block;" src="assets/img/produtos/camisa.jpg" id="imgProduto">
		                
                        <div class="card-body">
		                  <h3 id="nomeProduto" class="card-text"> ${produto.name} </h3>
		                  <div class="d-flex justify-content-between align-items-center">
		                    <div class="btn-group">
		                      <button type="button" onclick="cliqueProduto(${produto.id})" class="btn btn-sm btn-outline-secondary">Comprar</button>
                              <button type="button" name="btncarrinho" onclick="carrinhoProduto(${produto.id})"  class="btn btn-sm btn-outline-primary">Carrinho</button>
		                    </div>
		                    <h4 id="preco-produto" class="text-muted">R$ ${produto.cash},00</h4>
		                  </div>
		                </div>
		              </div>

		            </div>

             	`); 


               // $('#nomeProduto').append(`<h3 id="nomeProduto" class="card-text"><a href="#${produto.id}">${produto.brand}</a> </h3>`);
            
                //$('#preco-produto').append(`<h4 id="preco-produto" class="text-muted">R$ ${produto.cash}</h4>`);
          
            
        }
      
    }

    
});

function contaClique(){

      var click = 0;

      function click_add() {
        click += 1;
        console.log(click)

        document.getElementById('cart').innerHTML =  click;
      }


      $( document ).ready(function(){
        $("button[name='btncarrinho']").click(function(){
           click_add();
        });
      });
}


function cliqueProduto(id){

    console.log(id);

    const produtos = JSON.parse(localStorage.getItem("produtos"));
    console.log(produtos);

    const produto = produtos.find(a => a.id === id);
    console.log(produto);

    localStorage.setItem('produtoSelecionado', JSON.stringify(produto))

    const produtosCarrinho = JSON.parse(localStorage.getItem("produtosCarrinho")) || [];

    produtosCarrinho.push(produto);

    localStorage.setItem('produtosCarrinho', JSON.stringify(produtosCarrinho))

    localStorage.setItem('produtosCarrinho', JSON.stringify(produtosCarrinho))


    window.location.href = 'produto.html';
}



function carrinhoProduto(id){
    console.log(id);

    const produtos = JSON.parse(localStorage.getItem("produtos"));
    console.log(produtos);

    const produto = produtos.find(a => a.id === id);
    console.log(produto);

    const produtosCarrinho = JSON.parse(localStorage.getItem("produtosCarrinho")) || [];

    produtosCarrinho.push(produto);

    localStorage.setItem('produtosCarrinho', JSON.stringify(produtosCarrinho))
    //window.location.href = '../Loja/produto.html';
}


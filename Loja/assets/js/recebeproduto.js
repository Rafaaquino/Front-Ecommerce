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

        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i];
           
             $('#lista-produtos').append(`
             		<div class="col-md-4" >
              
		              <div class="card mb-4 box-shadow">
                        <a  href="${produto.id}">
		                  <img  class="card-img-top img-ajuste"  alt="camisa branca" title="camisa branca" style="height: 225px; width: 100%; display: block;" src="assets/img/produtos/camisa.jpg" id="imgProduto">
		                </a>
                        <div class="card-body">
		                  <h3 id="nomeProduto" class="card-text"> ${produto.name} </h3>
		                  <div class="d-flex justify-content-between align-items-center">
		                    <div class="btn-group">
		                      <a  href="${produto.id}" class="btn btn-sm btn-outline-secondary">Comprar</a>
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


     $(window).on('hashchange', function () {
        var hash = window.location.hash;
        var id = hash.substring(1);
        console.log(hash + ' -->' + id);

        if (id === '') {
            $('#produto-unico').load('../index.html', function () {
                carregaProdutosUnico();
            });
        } else {
            $('#produto-unico').load('views/produto.html', function () {
                carregaProdutoUnico(id);
            });
        }
    });

    function carregaProdutoUnico(id) {
        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i];
            if (produto.id == id) {
                $('#nome-produto').html(produto.name);
                $('#descricao-produto').html(produto.description);
                $('#preco-produto').html(produto.cash);
                break;
            }
        }
    }

    $('#produto-unico').load('views/index.html', function () {
        carregaProdutos();
    });



});




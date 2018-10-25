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
		                <img  class="card-img-top img-ajuste"  alt="camisa branca" title="camisa branca" style="height: 225px; width: 100%; display: block;" src="assets/img/produtos/camisa.jpg" id="imgProduto">
		                <div class="card-body">
		                  <h3 id="nomeProduto" class="card-text">${produto.name}</h3>
		                  <div class="d-flex justify-content-between align-items-center">
		                    <div class="btn-group">
		                      <a  href="produto.html" class="btn btn-sm btn-outline-secondary">Comprar</a>
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

    /* <script>
        var currentPage = 1;
        function loadInfo() {
            $.getJSON("https://randomuser.me/api/", {
               
            }, function (dataJSON) {
                for (let i = 0; i < dataJSON.results.length; i++) {
                    let result = dataJSON.results[i];
                    let titulo = result.name.first;
                    let urlImagem = result.picture.large;
                    $("#imgProduto").attr("src", urlImagem);
                    $("#nomeProduto").text(titulo);
                }
                currentPage++;
            });
        }
        
    </script>*/
});




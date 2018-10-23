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
        
        var currentPage = 1;
        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i];
           
                $('#nomeProduto').append(`<h3 id="nomeProduto" class="card-text"><a href="#${produto.id}">${produto.brand}</a> </h3>`);
            
                $('#preco-produto').append(`<h4 id="preco-produto" class="text-muted">R$ ${produto.cash}</h4>`);
           
            currentPage ++;
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




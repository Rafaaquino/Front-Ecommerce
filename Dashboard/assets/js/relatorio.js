$(document).ready(function () {

  carregaProdutos();


  function carregaProdutos() {
        $.ajax({
            url: 'http://mandanode.herokuapp.com/mandanode/sale/list',
            method: 'GET',
            success: function (data) {
                console.log(data);
                sale = data;
                

                window.localStorage.setItem('relatorio', JSON.stringify(sale));
                  
                listarRelatorio();
               
            }
        });
    }

    function listarRelatorio() {
        
        

        $('#relatorioJson').html('');

          const relatorio = JSON.parse(localStorage.getItem("relatorio"));
          //const user = JSON.parse(localStorage.getItem("listaUsuario"));
       
          var preco = 0;
          var pedidos =0;        


          const venda = relatorio.length;
          //const usuarios = user.length;


          for (var i = 0; i < relatorio.length; i++) {

              preco += relatorio[i].price;
              pedidos += relatorio[i].products.length;
         }


        //console.log(usuarios);



             $('#relatorioJson').append(`
                

                <div class="col-xs-6 col-md-4 col-lg-4 no-padding">
                    <div class="panel panel-teal panel-widget border-right">
                      <div class="row no-padding"><em class="fa  fa-shopping-cart color-blue"></em>
                        <div class="large">${venda}</div>
                        <div class="text-muted">Vendas</div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-xs-6 col-md-4 col-lg-4 no-padding">
                    <div class="panel panel-orange panel-widget border-right">
                      <div class="row no-padding"><em class="fa fa-xl fa-box color-red"></em>
                        <div class="large">${pedidos}</div>
                        <div class="text-muted">Pedidos</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-md-4 col-lg-4 no-padding">
                    <div class="panel panel-red panel-widget ">
                      <div class="row no-padding"><i class="fas  fa-xl fa-dollar-sign color-teal"></i>
                        <div class="large " >${preco},00</div>
                        <div class="text-muted">Receita</div>
                      </div>
                    </div>
                  </div>
                
              `); 


             $('#usuarioPedidos').html('');
             for (var i = 0; i < relatorio.length; i++) {
                  
                  var relatorioUser = relatorio[i];

                  
                  $('#usuarioPedidos').append(`

                          <tr>
                            <td>${relatorioUser.userModel.id}</td>
                            <td>${relatorioUser.userModel.name}</td>
                            <td>${relatorioUser.products.length}</td>
                            <td>${relatorioUser.products[0].name}</td>
                            <td>#${relatorioUser.protocoll}</td>
                            <td>R$ ${relatorioUser.price},00</td>
                            <td>${relatorioUser.dateCri}</td>
                          </tr>

                    `);


             }

      }
          
});
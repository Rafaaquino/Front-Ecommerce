$(function () {
        $("#enviar").click(function () {
            var sCepDestino = document.getElementById("sCepDestino").value;

            var str =
                '<?xml version="1.0" encoding="utf-8"?>' +
                '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
                
                '<soap:Header>'+
                  '<m:Trans xmlns:m="http://www.w3schools.com/transaction/"'+
                  'soap:mustUnderstand="1" soap:actor="http://www.w3schools.com/appml/">234'+
                  '</m:Trans>'+
                '</soap:Header>'+

                '<soap12:Body>' +
                '<CalcPrecoPrazo xmlns="http://tempuri.org/">' +
                '<nCdEmpresa>' + '' + '</nCdEmpresa>' +
                '<sDsSenha>' + '' + '</sDsSenha>' +
                '<nCdServico>' + '04014' + '</nCdServico>' +
                '<sCepOrigem>' + '03104000' + '</sCepOrigem>' +
                '<sCepDestino>' + sCepDestino + '</sCepDestino>' +
                '<nVlPeso>' + '5' + '</nVlPeso>' +
                '<nCdFormato>' + '1' + '</nCdFormato>' +
                '<nVlComprimento>' + '10' + '</nVlComprimento>' +
                '<nVlAltura>' + '10' + '</nVlAltura>' +
                '<nVlLargura>' + '10' + '</nVlLargura>' +
                '<nVlDiametro>' + '10' + '</nVlDiametro>' +
                '<sCdMaoPropria>' + 'n' + '</sCdMaoPropria>' +
                '<nVlValorDeclarado>' + '0' + '</nVlValorDeclarado>' +
                '<sCdAvisoRecebimento>' + 'n' + '</sCdAvisoRecebimento>' +
                '</CalcPrecoPrazo>' +
                '</soap12:Body>' +
                '</soap12:Envelope>';

            $.ajax({
                url: 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx',
                type: "POST",
                crossDomain: true,
                contentType: "text/xml",
                dataType: "text",
                data: str,
                success: function (result) {
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(result,"text/xml");
                    var valor = xmlDoc.getElementsByTagName("Valor");
                    //var dias = xmlDoc.getElementsByTagName("PrazoEntrega");
                    var frete = document.getElementById("resultadoFrete").innerText =  valor[0].innerHTML;
                    //var prazo = document.getElementById("xprazo").innerText = "Prazo: " + dias[0].innerHTML + " dia(s)";

                    alert("sucess");

                    },
                error: function () {
                    alert("error");
                }
            });
        });
    });
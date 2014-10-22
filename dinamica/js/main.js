$(function () {
	$("#adicionar").click( function() {
		var tema = $(".tema").val();
		if(tema!=="" ) {
			var amigo = "<div class=\"panel panel-primary\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><nome>";
  			amigo += nome;
  			amigo += "</nome></h3></div><div class=\"panel-body\">";
      		amigo += "<idade>" + idade + "</idade> anos - <ocupacao>" + ocupacao + "</ocupacao><br><button id = \"editar\">Editar</button> <button id = \"remover\"> Remover </button>";
   			amigo += "</div></div>";

			$("#lista_pessoas").append(amigo);
			$("li").addClass("list-group-item");
		} else {
			alert("Campos invalidos");
		}
		
	});
	$("#limpar").click( function () {
        	$("#tema").val("");
     	});

	$("#lista_pessoas").on("click", "#editar", function () {
		var li = $(this).parent();
		var nome = li.parent().find("nome");
		var novoNome = prompt("Nome da pessoa?",nome.html());
		if(novoNome !== null && novoNome !== ""){
			nome.html(novoNome);
		} else if (novoNome === "") {
			alert("Nome invalido");
		}
		var idade = li.children("idade");
		var novaIdade = prompt("Idade da pessoa?",idade.html());
		if(isNaN(novaIdade)) {
			alert("Não é um número");
		} else {
			if((novaIdade !== null) && (novaIdade !== "")){
				idade.html(novaIdade);
			} else if ((novaIdade === "")) {
				alert("Idade invalida");
			}
		}
		var ocupacao = li.children("ocupacao");
		var novaOcupacao = prompt("Ocupação da pessoa?",ocupacao.html());
		if(novaOcupacao !== null && novaOcupacao !== ""){
			ocupacao.html(novaOcupacao);
		} else if (novaOcupacao === "") {
			alert("Ocupação invalida");
		}

		
		
	});
	$("#lista_pessoas").on("click", "#remover", function () {
		$(this).parent().parent().remove();
		
		
	});
});

	


	

$(function (){
	$( "#addConteudo" ).submit(function(e) {
		e.preventDefault();
		var conteudo = "<conteudo> " + $("#conteudo").val() + "</conteudo>";
		var buttonAprendido = "<button class = \"aprendido\">Aprendido</button>";
		var buttonRemover = "<button class = \"remover\"> Remover </button>";
		var novoConteudo = "<li id='conteudo'>" + conteudo + buttonAprendido + buttonRemover +"</li>";		
		$("#lista_aprender").append(novoConteudo);
		$("li").addClass("list-group-item");
		limparInput();

	});

	function limparInput(){
		$("#conteudo").val("");
	}

	$("#lista_aprender").on("click", ".aprendido", function () {
		var li = $(this).parent();
		var conteudoAprendido = li.find("conteudo").text();
		$("#lista_aprendido").append("<li>" + conteudoAprendido + "</li>");
		$("li").addClass("list-group-item");
		li.remove();
	});

	$("#lista_aprender").on("click", ".remover", function () {
		$(this).parent().remove();		
	});




});


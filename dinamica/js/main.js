$(function () {
	$("#adicionar").click( function() {
		addAnother();		
	});

	$("#limpar").click( function () {
        	$(".tema").val("");
    });

	$("#lista_pessoas").on("click", "#editar", function () {
		var li = $(this).parent();
		var nome = li.parent().find("nome");
	
		
	});
	$("#lista_pessoas").on("click", "#remover", function () {
		$(this).parent().parent().remove();		
		
	});


	addAnother = function() {
		var tema = $(".tema").val();
		if(tema!=="" ) {
			var novoTema = "<div class=\"list-group-item\"><tema>";
  			novoTema += tema;
  			novoTema += "</tema><button id = \"editar\">Editar</button> <button id = \"remover\"> Remover </button></div>";

	   		var ul = document.getElementById("list");
		    var li = document.createElement("li");
		    var children = ul.children.length + 1
		    li.setAttribute("id", "element"+children)
		    li.appendChild(document.createTextNode(novoTema));
		    ul.appendChild(li);

			//$("#lista_aprender").append(novoTema);
			//$("li").addClass("list-group-item");
		} else {
			alert("Campo vazio");
		}


	}
});

	


	

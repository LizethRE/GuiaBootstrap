$(document).ready(function(){
	$("#inicio").click(function(){
		location.reload(true);
	})

	$("li a").click(function(event){
		event.preventDefault();
		if($(this).data('seleccion')!=null){
			$("#contenedor").load('selecciones/'+$(this).data('seleccion')+'.html');
		}
	});

	$("#selh3").click(function(){
		$("#contenedor").load("selecciones/colombia.html");
	})

	$("#contacto").click(function(){
		$("#contenedor").load("contacto.html");
	})

	$("#partidos").click(function(){
		$("#contenedor").load("partidos.html");
		$.ajax({
			url:   'http://localhost:3000/partidos',
			type:  'get',
			success:  function (response) {
			console.log(response);

	  $("#contenido").html('');
	  $.each(response, function(idx, partido){
	  		$("#contenido").append("<tr>" +
	  			"<td>" + partido.fecha + "</td><td>" + partido.equipo1 + "</td><td>"
	  			 + partido.equipo2 + "</td>" +
	  			 "</tr>");
	  });
			}
		})
	})

/*var part = "";
$.getJSON('../../partidos.json', function(datos){
	$("#contenido").html('');
	  $.each(datos["partidos"], function(idx,partido){
	  		$("#contenido").append("<tr>" +
	  			"<td>" + partido["fecha"] + "</td><td>" + partido["equipo1"] + "</td><td>"
	  			 + partido.equipo2 + "</td>" +
	  			 "</tr>");
	  });
});*/

/*
$("#partidos").click(function(){
$.ajax({
	url:   'http://localhost:3000/partidos',
	type:  'get',
	success:  function (response) {
			console.log(response);
	}
})
*/
});
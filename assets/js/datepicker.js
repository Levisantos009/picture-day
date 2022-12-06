/* @Levisantos009 © */

$(".main__dateText").html(new Date().toLocaleDateString("es-CL"));

$(function() {
    $( "#datepicker" ).datepicker({ dateFormat: "dd-mm-yy", monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'], dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'], showOn: "button", buttonImage: "assets/img/calendar.png", buttonImageOnly: true, buttonText: "Select date",})
    $(".ui-datepicker-trigger").addClass("mouse-hover")
});

$("#datepicker").on("change", () => {$(".main__dateText").text($("#datepicker").val())});

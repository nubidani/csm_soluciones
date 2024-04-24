$(function() {
    //Smooth scroll
    $("a").on('click', function(event) {
        if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900);
        }
    });
    //Modal
    $("#enviarFormulario").click(function (){
        $("#modalFormulario").modal('show');
    })

})
//Para que los tooltip funcionen
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
});
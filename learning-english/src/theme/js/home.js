//Variables Globales
var raiz = "/EnglishLab-1.0/";
var controllerHome = "HomeEnglishLab";
var urlController = raiz + controllerHome;

jQuery(function () {

    //Cargamos los datos, Onload
    $(document).ready(function () {
        getThemes();
    });

});

/**
 * Metodo que permite mostrar una tabla de productos
 * @autor Leonardo Solano
 * @param pag numero de pagina a mostrar
 */
function getThemes() {
    $.ajax({
        type: "POST",
        url: urlController,
        data: (
                {
                    op : 21
                }),
        cache: false,
        dataType: "html",
        success:
                function (data) {
                    $(".content-view").html(data);
                },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.error + " - " + textStatus + " - " + errorThrown);
            console.log(jqXHR.error + " - " + textStatus + " - " + errorThrown);
        }
    });
}
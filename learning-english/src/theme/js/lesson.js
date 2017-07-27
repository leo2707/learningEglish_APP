//Variables Globales
var raiz = "/EnglishLab-1.0/";
var controllerHome = "LessonController";
var urlController = raiz + controllerHome;
var urlControllerExam = "ExamController" ;

jQuery(function () {

    //Cargamos los datos, Onload
    $(document).ready(function () {
        getLessonsOnTheme();
    });

    $(document).on("click",".lesson", function () {
        getLessonsOnTheme();
    });

    $(document).on("click", ".icon-volume-medium", function () {
        this.firstElementChild.play();
    });

$(document).on("shown.bs.tab", ".nav-tabs a", function () {
        getLesson();
    });



    $(document).on("click",".config-exam", function () {
        var idLesson = $('li.active').prop('id');
        var itemsCount = $(".items-count").val();
        var idTheme = $(".idTheme").val();
        $('a.config-exam').prop('href', urlControllerExam + "?idTheme=" + idTheme + "&idLesson=" + idLesson + "&itemsCount=" + itemsCount);
    });

}); //FIN JQUERY 

/**
 * Metodo que permite mostrar la tabla de lecciones
 * @autor Leonardo Solano
 */
function getLessonsOnTheme() {
    $.ajax({
        type: "POST",
        url: urlController,
        data: (
                {
                    op : '01',
                    lessonsObject : $(".lessonsObject").val()
                }),
        cache: false,
        dataType: "html",
        success:
                function (data) {
                    $(".content-view").html(data);
                    getLesson();
                },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.error + " - " + textStatus + " - " + errorThrown);
            console.log(jqXHR.error + " - " + textStatus + " - " + errorThrown);
        }
    });
}

/**
 * Metodo que permite mostrar la tabla de lecciones
 * @autor Leonardo Solano
 */
function getLesson() {
    $.ajax({
        type: "POST",
        url: urlController,
        data: (
                {
                    op : '01.1',
                    lessonsObject : $(".lessonsObject").val(),
                    idLesson: $('li.active').prop('id')
                }),
        cache: false,
        dataType: "html",
        success:
                function (data) {
                    $(".content-lesson-view").html(data);
                },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.error + " - " + textStatus + " - " + errorThrown);
            console.log(jqXHR.error + " - " + textStatus + " - " + errorThrown);
        }
    });
}
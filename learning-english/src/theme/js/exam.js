//Variables Globales
var raiz = "/EnglishLab-1.0/";
var controllerHome = "ExamController";
var urlController = raiz + controllerHome;

jQuery(function () {
   

    $(document).on("click",".btn.next", function () {
        nextQuestion();
    });

    $(document).on("click",".btn.finish", function () {
        finish();
    });


    $(document).on("keypress", ".answer.next", function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            nextQuestion();
        }
    });

    $(document).on("keypress", ".answer.finish", function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            finish();
        }
    });

    $(document).on("click", ".show-report", function () {
        if ($('.table-report').is(":hidden")) {
            $('.report-icon').removeClass('icon-folder');
            $('.report-icon').addClass('icon-folder-open');
            $('.table-report').show();
        } else {
            $('.report-icon').removeClass('icon-folder-open');
            $('.report-icon').addClass('icon-folder');
            $('.table-report').hide();
        }
    });


}); //FIN JQUERY

/**
 * Metodo que permite mostrar la tabla de lecciones
 * @autor Leonardo Solano
 */
function nextQuestion() {
    $.ajax({
        type: "POST",
        url: urlController,
        data: (
                {
                    op : '02',
                    idLesson: $(".idLesson").val(),
                    optionAnswer : $('input[name=radioOption]:checked').val(),
                    optionAnswerText : $('input[name=radioOption]:checked').parent('label').text(),
                    answer : $(".answer").val(),
                    
                }),
        cache: false,
        dataType: "html",
        success:
                function (data) {
                    $(".content-view").html(data);
                    $(".answer").focus();
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
function finish() {
    $.ajax({
        type: "POST",
        url: urlController,
        data: (
                {
                    op : '03',
                    idLesson: $(".idLesson").val(),
                    optionAnswer : $('input[name=radioOption]:checked').val(),
                    optionAnswerText : $('input[name=radioOption]:checked').parent('label').text(),
                    answer : $(".answer").val(),
                    
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




            
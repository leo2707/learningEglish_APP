//Variables Globales
var raiz = "/EnglishLab-1.0/";
var controllerExam = "ExamController";
var urlController = raiz + controllerExam;

jQuery(function () {

    //Cargamos los datos, Onload
    $(document).ready(function () {
        showConfigExam();
    });

    //Validations
    $(document).on("change", ".checkSwitch", function () {
        if ($('.checkSwitch').prop('checked')) {
            $(".inputTime").prop("disabled", false);
        } else {
            $(".inputTime").prop("disabled", true);
        }
    });

    //Validations
    $(document).on('change', 'input[name=radioQuestion]', function () {
        if (this.value === 'ENGLISH') {
            $("input[name=radioAnswer][value='SPANISH']").prop("checked", true);
        } else if (this.value === 'SPANISH') {
            $("input[name=radioAnswer][value='ENGLISH']").prop("checked", true);
        }
    });

    $(document).on('click', '.exam', function () {
        var question = $('input[name=radioQuestion]:checked').val();
        var typeQuestion = $('input[name=radioTypeQuestion]:checked').val();
        var numberOfQuestion = $('.numberOfQuestion').val();
        var orderQuestions = $('.orderQuestions').val();
        var time = $('.checkSwitch').prop('checked') ? $('.inputTime').val() : "";

        console.log(question + " - " + typeQuestion + " - " + numberOfQuestion + " - " + orderQuestions + " - " + time);

        showExam();
    });


}); //FIN JQUERY 

/**
 * Metodo que permite mostrar la tabla de lecciones
 * @autor Leonardo Solano
 */
function showConfigExam() {

    console.log($(".itemsCount").val() + " - " + $(".idTheme").val()  + " - " + $(".idLesson").val());

    $.ajax({
        type: "POST",
        url: urlController,
        data: (
                {
                    op : '01',       
                    itemsCount : $(".itemsCount").val(),
                    idTheme: $(".idTheme").val(),
                    idLesson: $(".idLesson").val()
                    
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

/**
 * Metodo que permite mostrar la tabla de lecciones
 * @autor Leonardo Solano
 */
function showExam() {
    $.ajax({
        type: "POST",
        url: urlController,
        data: (
                {
                    op : '02',
                    itemsCount : $(".itemsCount").val(),
                    idLesson: $(".idLesson").val(),

                    question : $('input[name=radioQuestion]:checked').val(),
                    typeQuestion : $('input[name=radioTypeQuestion]:checked').val(),
                    numberOfQuestion : $('.numberOfQuestion').val(),
                    orderQuestions : $('.orderQuestions').val(),
                    time : $('.checkSwitch').prop('checked') ? $('.inputTime').val() : ""
                    
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




            
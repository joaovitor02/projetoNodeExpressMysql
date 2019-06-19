$(document).ready(function () {

        $('.parallax').parallax();
    


    $('.tooltipped').tooltip();
    $('.modal').modal();
    $('select').formSelect({
        dropdownOptions: {
            container: document.body
        }
    });
    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
        container: 'body',

        i18n: {
            cancel: 'Cancelar',
            clear: 'Limpar',
            done: 'Ok',
            months: ["Janeiro", "Fevereiro", "Març", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro",
                "Outubro", "Novembro", "Dezembro"
            ],
            monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            weekdays: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
            weekdaysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
            weekdaysAbbrev: ["D", "S", "T", "Q", "Q", "S", "S"]
        },

        yearRange: [1900, 2019]
    });

    $(function () {
        //hang on event of form with id=myform
        $("#cadastrarAtor").submit(function (e) {
            //alert(e)
            //prevent Default functionality
            e.preventDefault();


            let id = $("#cadastrarAtor #atr_codigo").val();

            let url = "";
            let method = "";

            if (id == undefined || id == "" || id == null) {
                url = location.origin + "/ator/criar/";
                method = 'post';
                $("#cadastrarAtor #atr_codigo").remove();
            } else {
                url = location.origin + "/ator/editar/" + id;
                method = 'put';
            }

            //do your own request an handle the results
            $.ajax({
                url: url,
                type: method,
                dataType: 'text',
                data: $("#cadastrarAtor").serialize(),
                success: function (response) {
                    if (response === "sucesso") {
                        // $('#modalCloser')[0].click();
                        Swal.fire(
                            'Um novo ator foi adicionado!',
                            '',
                            'success'
                        ).then((value) => {
                            location.reload();
                        });
                    } else {
                        alert(response);
                        // $('#errormessage').addClass('show');
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("Error " + errorThrown);
                }
            });

        });

    });


    $(function () {
        //hang on event of form with id=myform
        $("#cadastrarFilme").submit(function (e) {
            //alert(e)
            //prevent Default functionality
            e.preventDefault();

            let id = $("#cadastrarFilme #fil_codigo").val();

            let url = "";
            let method = "";

            if (id == undefined || id == "" || id == null) {
                url = location.origin + "/filme/criar/";
                method = 'post';
                $("#cadastrarFilme #fil_codigo").remove();
            } else {
                url = location.origin + "/filme/editar/" + id;
                method = 'put';
            }

            //do your own request an handle the results
            $.ajax({
                url: url,
                type: method,
                dataType: 'text',
                data: $("#cadastrarFilme").serialize(),
                success: function (response) {
                    if (response === "sucesso") {
                        // $('#modalCloser')[0].click();
                        Swal.fire(
                            'Um novo filme foi adicionado!',
                            '',
                            'success'
                        ).then((value) => {
                            location.reload();
                        });
                    } else {
                        alert(response);
                        // $('#errormessage').addClass('show');
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("Error " + errorThrown);
                }
            });

        });

    });

    $(function () {
        //hang on event of form with id=myform
        $("#cadastrarPais").submit(function (e) {
            //alert(e)
            //prevent Default functionality
            e.preventDefault();

            $("#cadastrarPais").submit(function (e) {
                //alert(e)
                //prevent Default functionality
                e.preventDefault();

                let id = $("#cadastrarPais #pais_codigo").val();

                let url = "";
                let method = "";

                if (id == undefined || id == "" || id == null) {
                    url = location.origin + "/pais/criar/";
                    method = 'post';
                    $("#cadastrarPais #pais_codigo").remove()
                } else {
                    url = location.origin + "/pais/editar/" + id;
                    method = 'put';
                }

                //do your own request an handle the results
                $.ajax({
                    url: url,
                    type: method,
                    dataType: 'text',
                    data: $("#cadastrarPais").serialize(),
                    success: function (response) {
                        if (response === "sucesso") {
                            // $('#modalCloser')[0].click();
                            Swal.fire(
                                'Um novo país foi adicionado!',
                                '',
                                'success'
                            ).then((value) => {
                                location.reload();
                            });
                        } else {
                            alert(response);
                            // $('#errormessage').addClass('show');
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert("Error " + errorThrown);
                    }
                });

            });

        });

    });
});

function excluir(atr_codigo) {
    $.ajax({
        url: location.origin + '/ator/excluir/' + atr_codigo,
        type: 'delete',
        success: function (res) {
            location.reload();
        },
        error: function (iqXHR, textStatus, errorThrown) {
            alert(errorThrown)
        }
    });
}

function excluirFilme(fil_codigo) {
    $.ajax({
        url: location.origin + '/filme/excluir/' + fil_codigo,
        type: 'delete',
        success: function (res) {
            location.reload();
        },
        error: function (iqXHR, textStatus, errorThrown) {
            alert(errorThrown)
        }
    });
}

function excluirPais(pais_codigo) {
    $.ajax({
        url: location.origin + '/pais/excluir/' + pais_codigo,
        type: 'delete',
        success: function (res) {
            location.reload();
        },
        error: function (iqXHR, textStatus, errorThrown) {
            alert(errorThrown)
        }
    });
}


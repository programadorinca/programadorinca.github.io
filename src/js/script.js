$(function () {

    $("#nome").on("input", function () {
        $(".nome").text($(this).val());
    });

    $("#cargo").on("input", function () {
        $(".cargo").text($(this).val());
    });

    $("#departamento").on("input", function () {
        $(".departamento").text($(this).val());
    });

    $("#email").on("input", function () {
        $(".email").text($(this).val());
    });

    $(".baixar").on("click", function (e) {
        gerarImagem($(".nome").text());
    });

    function gerarImagem(nome) {
        html2canvas(document.querySelector('.assinatura'),{
            width: 798,
            height: 240,
            backgroundColor: null
        }).then(function (canvas) {
            var name = 'assinatura-' + nome.toLowerCase().replace(" ", "-");
            let xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function () {
                let a = document.createElement('a');
                a.href = window.URL.createObjectURL(xhr.response);
                a.download = name + '.png';
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                a.remove()
            };
            xhr.open('GET', canvas.toDataURL("image/png", 1.0));
            xhr.send();
        });
    }

    // mostra o preview da imagem selecionada
    function previewImageUpload(fileInput) {
        const input = document.querySelector(fileInput);
        let file = input.files[0];

        if (file.size > 3145728) {
            $(".msg").addClass("on");
            $(".msg .text").text("Escolha uma imagem menor que 3MB");
            return false;
        }

        if (!file) return false;

        return URL.createObjectURL(file);
    }

    // define as máscaras de formulário
    var SPMaskBehavior = function (val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        spOptions = {
            onKeyPress: function (val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        };

    $('.mask-phone').mask(SPMaskBehavior, spOptions);

});
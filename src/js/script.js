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

    $(".baixar").on("click", function (e) {
        gerarImagem($(".nome").text());
    });

    function gerarImagem(nome) {
        var node = document.querySelector('.assinatura');
        domtoimage.toBlob(node)
          .then(function (blob) {
            var name = 'assinatura-' + nome.toLowerCase().replace(" ", "-");
            let a = document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = name + '.png';
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            a.remove();
          });
      }
});
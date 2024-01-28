function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

const boton = document.getElementById('button-ip');
boton.addEventListener('click', function () {
    Swal.fire({
        icon: 'success',
        title: 'LA IP SE COPIO CON ÉXITO ',
    })
});
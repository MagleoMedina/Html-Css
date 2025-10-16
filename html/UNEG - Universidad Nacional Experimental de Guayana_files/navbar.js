const botones_sistema_linea = Array.from(document.querySelectorAll('.btn-sistema-linea'));

for (let i = 0; i < botones_sistema_linea.length; i++) {
    botones_sistema_linea[i].addEventListener('click', e => {
        e.stopPropagation();
        const ventana = window.open(
            e.target.dataset.link,
            "",
            "left=100,top=100,width=1000,height=600"
        );
        ventana.focus();
    });
}

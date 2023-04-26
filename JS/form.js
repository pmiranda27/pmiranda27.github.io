const form = document.querySelectorAll(".form");

function abrirForm(buttonID){
    if (buttonID === 0){
        for(a = 0; a < form.length; a++){
            form[a].style.display = 'flex';
        }
    }else if (buttonID === 1){
        for(b = 0; b < form.length; b++){
            form[b].style.display = 'none';
        }
    }else{

    }
}
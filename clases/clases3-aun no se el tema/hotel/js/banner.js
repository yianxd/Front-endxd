var contenedor=$('#caja');

var anterior=$('#btn-atras');

var siguiente=$('#btn-siguiente');

$('#caja .s-caja:last').insertBefore('#caja .s-caja:frist');


contenedor.css('margin-left','-'+100+'%');


function derecha(){
    contenedor.animate({
        marginLeft:'-'+200+'%'
    },100,function(){
        $('#caja .s-caja:frist').insertAfter('#caja  .s-caja:last');
        contenedor.css('margin-left','-'+100+'%');
    }
)};

function izquierda(){
    contenedor.animate({
        marginLeft:0
    },100,function(){
        $('#caja .s-caja:frist').insertBefore('#caja  .s-caja:last');
        contenedor.css('margin-left','-'+100+'%');
    }
    )
};

function automatico(){
    interval = setInterval(function(){
        derecha();
    },5000);
}

siguiente.on('click',function(){
    derecha();
    clearInterval(interval);
    automatico();
})

anterior.on('click',function(){
    derecha();
    clearInterval(interval);
    automatico();
})

automatico()
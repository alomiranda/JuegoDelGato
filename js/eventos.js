var ini = false;

//clasee gato
function Gato(){
    this.tablero = new Array(3);
    this.turno = 1;

    for ( var x = 0 ; x < 3 ; x++ ){
        this.tablero[x] = new Array(3);
    }
    this.iniciarJuego = function () {
        this.vaciarTablero();
    }
    this.vaciarTablero = function () {
        for ( var x = 0 ; x < 3 ; x++ ) {
            for ( var y = 0 ; y < 3 ; y++ ) {
                this.tablero[x][y] = 'vacio';
            }
        }   
    }
    this.realizarJugada = function ( columna , fila, jugada ) {
        this.tablero[columna][fila] = jugada;       
    }
}
//pintar tablero
function pinta(tablero){
var col = 0;
                         for ( var x = 0 ; x < 3 ; x++ ) {
                                 for ( var y = 0 ; y < 3 ; y++ ) {

                                    if(tablero[x][y] == 'x'){
                                        $("#"+col).css("background", "url(IMAGENES/x.png)");

                                        if(ini){
                                            ini = false;
                                        }
                                        else
                                            ini = true;
                                    }
                                    else if(tablero[x][y] == 'o'){
                                        $("#"+col).css("background", "url(IMAGENES/o.png)");

                                        if(ini){
                                            ini = false;
                                        }
                                        else
                                            ini = true;
                                    }
                                    col++;
                                }
                            }
}

//ckase jugador _IA
$(document).ready(function(){

     // alert("Has escrito: " );
    var gato = new Gato();
    gato.iniciarJuego();

    var com = new JugadorArtificial();
    var play = new juego();
    gato.turno++;
    //Recogemos cuando clique en un td
            $("td").click(function(){
                //Recogemos la casilla
               // console.log("holaeee");
                var casilla = $(this).attr("id");
             //   if (contadorPruebas>1){
               //     imagenElegida = arrayPosiciones[casilla];
                    $("#"+casilla).animate({
                        opacity: "toggle"
                    }, 500);
                    $("#"+casilla).animate({
                        opacity: "toggle"
                    }, 500);
                    window.setTimeout(function(){
                            var busca = 0;
                            var casiInt = parseInt(casilla);
                            for ( var x = 0 ; x < 3 ; x++ ) {
                                 for ( var y = 0 ; y < 3 ; y++ ) {
                
                                    if(busca == casiInt){
                                        if(gato.tablero[x][y] == 'vacio'){
                                            gato.tablero[x][y] = 'x';
                                            pinta(gato.tablero);
                                            gato.turno++;
                                            com.jugar(gato);
                                            pinta(gato.tablero);
                                            ini = false;
                                        }
                                    }
                                    busca++;
                                }
                            }
                             if(play.verificarJuegoGanado( 'x', tab )[0])
                            {
                                alert('Has ganado!!');
                                gato.turno = 10;
                                return;
                            }
                                else if(play.verificarJuegoGanado( 'o' , tab)[0]){
                                   alert('Has Perdido');
                                    gato.turno = 10;
                                    return;
                            }
                    },500);   
                        var tab = gato.tablero;
                    
                          //  else if(play.verificarJuegoEmpatado(tab)){
                            //    alert('EMPATE');
                          //  }
            });
});
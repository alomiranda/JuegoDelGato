function juego () {
    
    
    // retorna un booleano,  si es en fila, columna o diagonal, coordenada
    this.verificarJuegoGanado = function ( signo , tablero) {
        
        var juegoGanado = false;
        
        var resultado = new Array(3);
        
        // verifica columnas
        for ( var x  = 0 ; x < 3 ; x++ ){
            var contJugOpon = 0;
            for ( var y  = 0 ; y < 3 ; y++ ) {
                if ( tablero[x][y] == signo ){
                    contJugOpon++;
                } 
            }
            
            if ( contJugOpon == 3 ){
                resultado[0] = true;
                resultado[1] = 'columna';
                resultado[2] = x;
                break;
            }
                                    
        }
        
        // continua verificando si no se encontrado aun una jugada perdedora        
        if ( juegoGanado == false ) {
            
            // verifica filas
            for ( x  = 0 ; x < 3 ; x++ ){
            
                contJugOpon = 0;
            
                for ( y  = 0 ; y < 3 ; y++ ) {
                
                    if ( tablero[y][x] == signo ){
                        contJugOpon++;
                    }
                
                }
            
                if ( contJugOpon == 3 ){
                
                    resultado[0] = true;
                    resultado[1] = 'fila';
                    resultado[2] = x;
                    break;
                }
                                    
            }        
        
            // verificar diagonalmente
            if ( juegoGanado == false ) {
            
                // desde la esquina superior izquerda la esquina inferior derecha
                contJugOpon = 0;
            
                for ( x  = 0 ; x < 3 ; x++ ) {
                
                    if ( tablero[x][x] == signo ){
                        contJugOpon++;
                    }
                
                }
            
                if ( contJugOpon == 3 ) {
                
                    resultado[0] = true;
                    resultado[1] = 'diagonal';
                    resultado[2] = 'superior izquerda';
                }
            
                // verifica desde la esquina superior derecha a la esquina inferior izqurda
                if ( juegoGanado == false ) {
                
                    var aux = 3;
                
                    contJugOpon = 0;
            
                    for ( x  = 0 ; x < 3 ; x++ ) {
                        aux--;
                        if ( tablero[aux][x] == signo ){
                            contJugOpon++;
                        }
                    }
                    if ( contJugOpon == 3 ) {
                                            
                        resultado[0] = true;
                        resultado[1] = 'diagonal';
                        resultado[2] = 'superior derecha';
                    }
                }
            }
        }
                
        return resultado;
        
    }
    
    this.verificarJuegoEmpatado = function (tablero) {
        if ( this.verificarJuegoGanado( 'x' , tablero)[0] ) {
            return false;
        } else if ( this.verificarJuegoGanado( 'o' ,tablero)[0] ) {
            return false;
        } else {
            return true;
        }   
    }
}
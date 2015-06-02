function JugadorArtificial () {

    this.verificarTableroVacio = function ( tablero ){
        var tableroVacio = true;
        for ( var x = 0 ; x < 3 ; x++ ) {
            for ( var y = 0 ; y < 3 ; y++ ) {
                if ( tablero[x][y] != 'vacio' ) {
                    tableroVacio = false;
                    break;
                }
            }
        }
        return tableroVacio;
    }
    this.verificarJugadaOponenteEsquina = function ( tablero ) {
        var resultado = new Array(3);
        resultado[0] = false;
        // verifica la esquina superior izquerda
        if (tablero[0][0] == 'x'){
            resultado[0] = true;
            resultado[1] = 0;
            resultado[2] = 0;
        }
        // verifica la esquina superior derecha
        if ( !resultado[0] && tablero[2][0] == 'x'){
            resultado[0] = true;
            resultado[1] = 2;
            resultado[2] = 0;
        // verifica la esquina inferior izquerda
        } else if ( !resultado[0] && tablero[0][2] == 'x'){
            
            resultado[0] = true;
            resultado[1] = 0;
            resultado[2] = 2;
            
        // verifica la esquina inferior derecha
        } else if ( !resultado[0] && tablero[2][2] == 'x'){ 
            resultado[0] = true;
            resultado[1] = 2;
            resultado[2] = 2;
        }
        
        return resultado;    
        
    }
    
    // retorna un arreglo con los datos(en este orden): encontrado(booleano), columna, fila
    this.buscarEsquinaVacia = function ( tablero ) {
        var resultado = new Array(3);
        resultado[0] = false;
        
        // verifica la esquina superior izquerda
        if (tablero[0][0] == 'vacio'){
            
            resultado[0] = true;
            resultado[1] = 0;
            resultado[2] = 0;
        }
        // verifica la esquina superior derecha
        if ( !resultado[0] && tablero[2][0] == 'vacio'){
            
            resultado[0] = true;
            resultado[1] = 2;
            resultado[2] = 0;
        
        // verifica la esquina inferior izquerda
        } else if ( !resultado[0] && tablero[0][2] == 'vacio'){
            
            resultado[0] = true;
            resultado[1] = 0;
            resultado[2] = 2;
            
        // verifica la esquina inferior derecha
        } else if ( !resultado[0] && tablero[2][2] == 'vacio'){
            
            resultado[0] = true;
            resultado[1] = 2;
            resultado[2] = 2;
        }
        
        return resultado;    
        
    }

    // reficia la existencia de una jugada perdedora
    // retorna coordenadas de solucion
    // retorna un arreglo con los siguientes datos: booleano, columna, fila
    this.verificarJuagadaPerdedora = function ( tablero ) {
        
        var existeJugadaPerdedora = false;
        // coordenadas para jugada que impida perder el juego
        var filaSalvadora;
        var columnaSalvadora;
        
        var resultado = new Array(3);
        
        // verifica verticalmente
        for ( var x  = 0 ; x < 3 ; x++ ){
            var contJugOpon = 0;
            for ( var y  = 0 ; y < 3 ; y++ ) {
                if ( tablero[x][y] == 'x' ){
                    contJugOpon++;
                }    
            }
            if ( contJugOpon == 2 ){
                for ( y = 0 ; y < 3 ; y++ ) {
                    if ( tablero[x][y] == 'vacio' ){
                        
                        filaSalvadora = y;
                        columnaSalvadora = x;
                        existeJugadaPerdedora = true;
                        break;   
                    }
                
                }
            }
            
            if (existeJugadaPerdedora == true){
                break;
            }                        
        }
        // continua verificando si no se encontrado aun una jugada perdedora        
        if ( existeJugadaPerdedora == false ) {
            // verifica horizontalmente
            for ( x  = 0 ; x < 3 ; x++ ){
                contJugOpon = 0;
                for ( y  = 0 ; y < 3 ; y++ ) {
                    if ( tablero[y][x] == 'x' ){
                        contJugOpon++;
                    }
                }
                if ( contJugOpon == 2 ){
                    for ( y = 0 ; y < 3 ; y++ ) {
                        if ( tablero[y][x] == 'vacio' ){
                            filaSalvadora = x;
                            columnaSalvadora = y;
                            existeJugadaPerdedora = true;
                            break;                        
                        }
                    }
                }
            
                if (existeJugadaPerdedora == true){
                    break;
                }
                                    
            }

            // verificar diagonalmente
            if ( existeJugadaPerdedora == false ) {
                // desde la esquina superior izquerda la esquina inferior derecha
                contJugOpon = 0;
                for ( x  = 0 ; x < 3 ; x++ ) {
                
                    if ( tablero[x][x] == 'x' ){
                        contJugOpon++;
                    }
                }
                if ( contJugOpon == 2 ) {
                    for ( x  = 0 ; x < 3 ; x++ ) {
                        if ( tablero[x][x] == 'vacio' ){
                            filaSalvadora = x;
                            columnaSalvadora = x;
                            existeJugadaPerdedora = true;
                            break;
                        }
                    }
                }
            
                // verifica desde la esquina superior derecha a la esquina inferior izqurda
                if ( existeJugadaPerdedora == false ) {
                    var aux = 3;
                    contJugOpon = 0;
                    for ( x  = 0 ; x < 3 ; x++ ) {
                        aux--;
                        if ( tablero[aux][x] == 'x' ){
                            contJugOpon++;
                        }
                    }
                    if ( contJugOpon == 2 ) {
                        aux = 3;
                        for ( x  = 0 ; x < 3 ; x++ ) {
                            aux--;
                            if ( tablero[aux][x] == 'vacio' ){
                                filaSalvadora = x;
                                columnaSalvadora = aux;
                                existeJugadaPerdedora = true;
                                break;
                            }
                        }
                    }
                }
            }
        }
        resultado[0] = existeJugadaPerdedora;
        resultado[1] = columnaSalvadora;
        resultado[2] = filaSalvadora;
        return resultado;
        
    }
    
    // reficia la existencia de una jugada perdedora
    // retorna coordenadas para ganar
    // retorna un arreglo con los siguientes datos: booleano, columna, fila
    this.verificarJuagadaGanadora = function ( tablero ) {
        
        var existeJugadaGanadora = false;
        // coordenadas para jugada que impida perder el juego
        var filaGanadora;
        var columnaGanadora;
        
        var resultado = new Array(3);
        
        // verifica verticalmente
        for ( var x  = 0 ; x < 3 ; x++ ){
            var contJugOpon = 0;
            for ( var y  = 0 ; y < 3 ; y++ ) {
                if ( tablero[x][y] == 'o' ){
                    contJugOpon++;
                }
            }
            if ( contJugOpon == 2 ){
                for ( y = 0 ; y < 3 ; y++ ) {
                    if ( tablero[x][y] == 'vacio' ){
                        filaGanadora = y;
                        columnaGanadora = x;
                        existeJugadaGanadora = true;
                        break;  
                    }
                }
            }
            if (existeJugadaGanadora == true){
                break;
            }                           
        }
        
        // continua verificando si no se encontrado aun una jugada perdedora        
        if ( existeJugadaGanadora == false ) {
            // verifica horizontalmente
            for ( x  = 0 ; x < 3 ; x++ ){
                contJugOpon = 0;
                for ( y  = 0 ; y < 3 ; y++ ) {
                    if ( tablero[y][x] == 'o' ){
                        contJugOpon++;
                    }
                }
                if ( contJugOpon == 2 ){
                    for ( y = 0 ; y < 3 ; y++ ) {
                        if ( tablero[y][x] == 'vacio' ){
                            filaGanadora = x;
                            columnaGanadora = y;
                            existeJugadaGanadora = true;
                            break;                        
                        }
                    }
                }
                if (existeJugadaGanadora == true){
                    break;
                }                    
            }
        

            // verificar diagonalmente
            if ( existeJugadaGanadora == false ) {
                // desde la esquina superior izquerda la esquina inferior derecha
                contJugOpon = 0;
                for ( x  = 0 ; x < 3 ; x++ ) {
                    if ( tablero[x][x] == 'o' ){
                        contJugOpon++;
                    }
                }
                if ( contJugOpon == 2 ) {
                    for ( x  = 0 ; x < 3 ; x++ ) {
                        if ( tablero[x][x] == 'vacio' ){
                            filaGanadora = x;
                            columnaGanadora = x;
                            existeJugadaGanadora = true;
                            break;
                        }
                    }
                }
                // verifica desde la esquina superior derecha a la esquina inferior izqurda
                if ( existeJugadaGanadora == false ) {
                    var aux = 3;
                    contJugOpon = 0;
                    for ( x  = 0 ; x < 3 ; x++ ) {
                        aux--;
                        if ( tablero[aux][x] == 'o' ){
                            contJugOpon++;
                        }
                    }
                    if ( contJugOpon == 2 ) {
                        aux = 3;
                        for ( x  = 0 ; x < 3 ; x++ ) {
                            aux--;
                            if ( tablero[aux][x] == 'vacio' ){
                                filaGanadora = x;
                                columnaGanadora = aux;
                                existeJugadaGanadora = true;
                                break;
                            }
                        }
                    }
                }
            }
        }
        resultado[0] = existeJugadaGanadora;
        resultado[1] = columnaGanadora;
        resultado[2] = filaGanadora;
        return resultado; 
    }


    this.jugar = function ( gato ) {
        
        var jugadaPerd = this.verificarJuagadaPerdedora(gato.tablero);
        var jugadaGanad = this.verificarJuagadaGanadora(gato.tablero);
        var jugadaEsquina = this.buscarEsquinaVacia(gato.tablero);
        var sUtils = new SahchUtils();
        
        var columna;
        var fila;
        
        switch ( gato.turno ) {
            
             case 1:
                console.log(gato.turno);
                gato.realizarJugada( (sUtils.aleatorio(1, 2) == 1 ) ? 0 : 2 , (sUtils.aleatorio(1, 2) == 1 ) ? 0 : 2 , 'o');
                
                break;
                
            case 2:
                console.log(gato.turno);
                
                if ( this.verificarJugadaOponenteEsquina( gato.tablero )[0] ){
                    
                    // alert('jueda oponente en esquina, turno 2');
                    gato.realizarJugada(1, 1, 'o');
                    
                } else {
                
                    // coordenadas
                    columna = null;
                    fila = null;
                
                    do {
                    
                        columna = (sUtils.aleatorio(1, 2) == 1 ) ? 0 : 2;
                        fila = (sUtils.aleatorio(1, 2) == 1 ) ? 0 : 2;
                                                    
                    } while(gato.tablero[columna][fila] != 'vacio');
                
                    gato.realizarJugada(columna, fila, 'o');
                                      
                }                
                
                break;
                
            case 3:
                console.log(gato.turno);
                // coordenadas
                columna = null;
                fila = null;
                
                do {
                    
                    columna = (sUtils.aleatorio(1, 2) == 1 ) ? 0 : 2;
                    fila = (sUtils.aleatorio(1, 2) == 1 ) ? 0 : 2;
                                                    
                } while(gato.tablero[columna][fila] != 'vacio');
                gato.realizarJugada(columna, fila, 'o');              
                break;
                
            case 4:
                console.log(gato.turno);
                if ( jugadaGanad[0] == true ) {
                    
                    gato.realizarJugada( jugadaGanad[1], jugadaGanad[2], 'o' );
                                    
                } else if (jugadaPerd[0] == true){
                    
                    // alert('Jugada perdedora \n evitar: ' + jugadaPerd[1] + ' x ' + jugadaPerd[2]);
                    gato.realizarJugada( jugadaPerd[1], jugadaPerd[2], 'o' );
                    
                } else if( jugadaEsquina[0] ){
                    
                    // alert('juega en esquina vacia');
                    gato.realizarJugada( jugadaEsquina[1], jugadaEsquina[2], 'o' );
                    
                } else {
                    // alert('no existe jugada ganadora ni perdedora');
                    
                    // coordenadas
                    columna = null;
                    fila = null;
                
                    do {
                    
                        columna = (this.sUtils.aleatorio(1, 2) == 1 ) ? 0 : 2;
                        fila = (this.sUtils.aleatorio(1, 2) == 1 ) ? 0 : 2;
                                                    
                    } while(gato.tablero[columna][fila] != 'vacio');
                
                    gato.realizarJugada(columna, fila, 'o');
                }
                
                break;
            
            case 5:
                console.log(gato.turno);
                if ( jugadaGanad[0] == true ) {
                    
                    gato.realizarJugada( jugadaGanad[1], jugadaGanad[2], 'o' );
                                    
                } else if (jugadaPerd[0] == true){
                    
                    // alert('Jugada perdedora \n evitar: ' + jugadaPerd[1] + ' x ' + jugadaPerd[2]);
                    gato.realizarJugada(jugadaPerd[1], jugadaPerd[2], 'o');
                    
                } else if( jugadaEsquina[0] ){
                    
                    // alert('juega en esquina vacia');
                    gato.realizarJugada( jugadaEsquina[1] , jugadaEsquina[2], 'o' );
                    
                } else {
                    // alert('no existe jugada ganadora ni perdedora');
                    
                    // coordenadas
                    columna = null;
                    fila = null;
                
                    do {
                    
                        columna = this.sUtils.aleatorio(0, 2);
                        fila = this.sUtils.aleatorio(0, 2);
                                                    
                    } while(gato.tablero[columna][fila] != 'vacio');
                
                    gato.realizarJugada(columna, fila, 'o');
                }
                
                break;
      
            case 6:
                console.log(gato.turno);
                if ( jugadaGanad[0] == true ) {
                    
                    gato.realizarJugada( jugadaGanad[1], jugadaGanad[2], 'o' );
                                    
                } else if (jugadaPerd[0] == true){
                    
                    // alert('Jugada perdedora \n evitar: ' + jugadaPerd[1] + ' x ' + jugadaPerd[2]);
                    gato.realizarJugada(jugadaPerd[1], jugadaPerd[2], 'o');
                    
                } else if( jugadaEsquina[0] ){
                    
                    // alert('juega en esquina vacia');
                    gato.realizarJugada( jugadaEsquina[1] , jugadaEsquina[2], 'o' );
                    
                } else {
                    // coordenadas
                    columna = null;
                    fila = null;
                
                    do {
                    
                        columna = this.sUtils.aleatorio(0, 1);
                        fila = this.sUtils.aleatorio(0, 2);
                                                    
                    } while(gato.tablero[columna][fila] != 'vacio');
                
                    gato.realizarJugada(columna, fila, 'o');
                }
                
                break;
            
            case 7:
                  console.log(gato.turno);                  
                if ( jugadaGanad[0] == true ) {
                    
                    gato.realizarJugada( jugadaGanad[1], jugadaGanad[2],'o' );
                                    
                } else if (jugadaPerd[0] == true){
                    
                    // alert('Jugada perdedora \n evitar: ' + jugadaPerd[1] + ' x ' + jugadaPerd[2]);
                    gato.realizarJugada(jugadaPerd[1], jugadaPerd[2], 'o');
                    
                } else if( jugadaEsquina[0] ){
                    
                    // alert('no existe jugada ganadora ni perdedora \njuega en esquina vacia');
                    gato.realizarJugada( jugadaEsquina[1] , jugadaEsquina[2], 'o' );
                    
                } else {
                    // alert('no existe jugada ganadora ni perdedora \nJugada aleatoria');
                    
                    // coordenadas
                    columna = null;
                    fila = null;
                
                    do {
                    
                        columna = this.sUtils.aleatorio(0, 2);
                        fila = this.sUtils.aleatorio(0, 2);
                                                    
                    } while(gato.tablero[columna][fila] != 'vacio');
                
                    gato.realizarJugada(columna, fila, 'o');
                }
                break; 
            case 8:
                console.log(gato.turno);
                if ( jugadaGanad[0] == true ) {
                    gato.realizarJugada( jugadaGanad[1], jugadaGanad[2], 'o' );               
                } else if (jugadaPerd[0] == true){
                    gato.realizarJugada(jugadaPerd[1], jugadaPerd[2], 'o');
                } else if( jugadaEsquina[0] ){
                    gato.realizarJugada( jugadaEsquina[1] , jugadaEsquina[2], 'o' );
                } else {
                    columna = null;
                    fila = null;
                    do {
                        columna = this.sUtils.aleatorio(0, 2);
                        fila = this.sUtils.aleatorio(0, 2);                      
                    } while(gato.tablero[columna][fila] != 'vacio');
                    gato.realizarJugada(columna, fila, 'o');
                }
                break;  
            case 9:
                console.log(gato.turno);
                if ( jugadaGanad[0] == true ) {
                    
                    gato.realizarJugada( jugadaGanad[1], jugadaGanad[2], 'o' );
                                    
                } else if (jugadaPerd[0] == true){
                    
                    // alert('Jugada perdedora \n evitar: ' + jugadaPerd[1] + ' x ' + jugadaPerd[2]);
                    gato.realizarJugada(jugadaPerd[1], jugadaPerd[2], 'o');
                    
                } else if( jugadaEsquina[0] ){
                    
                    // alert('juega en esquina vacia');
                    gato.realizarJugada( jugadaEsquina[1] , jugadaEsquina[2], 'o' );
                    
                } else {
                    columna = null;
                    fila = null;
                    do {
                        columna = this.sUtils.aleatorio(0, 2);
                        fila = this.sUtils.aleatorio(0, 2);
                                                    
                    } while(gato.tablero[columna][fila] != 'vacio');
                
                    gato.realizarJugada(columna, fila, 'o');
                }
                break;
            case 10:
                break;   
        }                   
    }  
}
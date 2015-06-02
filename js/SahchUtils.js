function SahchUtils ( ) {
    
    this.obtenerPosClickX = function ( cursorX , id ) {
        
        // var cursorX = event.clientX;
                
        var ubicacionX = document.getElementById( id ).offsetLeft;
        
        var posicionInternaX = cursorX - ubicacionX + window.scrollX;
        
        return posicionInternaX;
        
    }
    
    this.obtenerPosClickY = function ( cursorY , id ) {
        
        // var cursorY = event.clientY;
                
        var ubicacionY = document.getElementById( id ).offsetTop;
        
        var posicionInternaY = cursorY - ubicacionY + window.scrollY;
        
        return posicionInternaY;
        
    }
    
    this.aleatorio = function(inferior,superior){
        
        var numPosibilidades = superior - inferior + 1;
        var aleat = Math.random() * numPosibilidades;
        aleat = Math.floor(aleat);
        return parseInt(inferior) + aleat;
        
    }
}
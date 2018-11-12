// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


var hxr = Ti.Network.createHTTPClient({

    onload: function(e){
        var resultado = JSON.parse(this.responseText);
        console.log(JSON.stringify(resultado));
    
    
    },
    onerror: function(e){
        alert('Error in '+ e.error);
    },
    timeout: 5000
});
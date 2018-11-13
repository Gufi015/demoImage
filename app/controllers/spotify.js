// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


var hxr = Ti.Network.createHTTPClient({

    onload: function(e){
        var resultado = JSON.parse(this.responseText);
        console.log(JSON.stringify(resultado));
        
        var labelText = Ti.UI.createLabel({
            text: resultado.name,
            color:'black',
            top: 10,
            height: Ti.UI.SIZE,
        });
        $.container.add(labelText);

        for(var i = 0; i<resultado.lenght; i++){
            var contenedor = Ti.UI.createView({
                layout: "vertical",
                width: Ti.UI.FILL,
                height: '20%',
                top: 5,
                backgroundColor: 'white'

            });
            $.container.add(contenedor);

            var label = Ti.UI.createLabel({
                color: 'black',
                height: Ti.UI.SIZE,
                top: 10,
                left: 10,
                text: resultado[i].images,
            });
            contenedor.add(label);
            console.log('resultado'+resultado.genres[i]);
        }
    
    },
    onerror: function(e){
        alert('Error in '+ e.error);
    },
    timeout: 5000
});

hxr.open('GET', 'https://api.spotify.com/v1/artists/2S5hlvw4CMtMGswFtfdK15');
hxr.setRequestHeader('Content-Type','application/json');
hxr.setRequestHeader('Authorization','Bearer BQBq9h-FoD3eFXfCBHASajQbvmMwaPHCt5HI46_nNVW9Gzlch3eBz1Qg-EP2lbvz8oyGGnhygNS-WFGkcsXSWS80cVEO0hCJXDSoTNPA42AEPaWUsUzCyYJyTzqN1iHZQVcg0Sltnl9darDJUnWDtkMEZsXc');
hxr.send();
$(document).ready(function() {
    incarcaMeniu();
});

function incarcaMeniu()
{
        // Încărcarea fișierului JSON folosind jQuery
        $.getJSON("produse.json", function(data) {
        // Parcurgerea listei de obiecte JSON

        var categ="";
        var categCurenta="";
        $.each(data, function(index, produs) {
            categCurenta=produs.categorieProdus;
            if(categ===categCurenta)
            {
                var cardProdus='<div class="cardProdus"><b>'+ produs.numeProdus + '</b> ('+produs.gramajProdus+') <p style="color:green;display:inline;position: absolute; right: 2rem;font-size:1rem;">'+produs.pretProdus+' lei</p>';
                cardProdus+='<br/><div style="color:gray;">'+produs.descriereProdus+'</div>';
                cardProdus+='<div style="font-size:12px;padding:1.2rem">'
                cardProdus+='<br/><p><b>Informații nutriționale 100g:</b></p><div style="color:gray;">'+ produs.nutritieProdus+'</div>';
                if(produs.alergeniProdus!==''|| produs.alergeniProdus!=='-')
                {
                    cardProdus+='<p><b>Alergeni:</b></p><div style="color:gray;">'+ produs.alergeniProdus+'</div>';
                }
                

                cardProdus+='</div></div>';
                $('.meniu').append(cardProdus);
            }
            else
            {
                categ=categCurenta;
                $('.meniu').append('<div class="categorie" id="'+produs.categorieProdus+'">'+produs.categorieProdus+'</div>');
                var cardProdus='<div class="cardProdus"><b>'+ produs.numeProdus + '</b> ('+produs.gramajProdus+') <p style="color:green;display:inline;position: absolute; right: 2rem;font-size:1rem;">'+produs.pretProdus+' lei</p>';
                cardProdus+='<br/><div style="color:gray;">'+produs.descriereProdus+'</div>'
                cardProdus+='<div style="font-size:12px;padding-left:1.2rem">';
                cardProdus+='<br/><p><b>Informații nutriționale 100g:</b></p><div style="color:gray;">'+ produs.nutritieProdus+'</div>';
                if(produs.alergeniProdus!=='' || produs.alergeniProdus!=='-')
                {
                    cardProdus+='<p><b>Alergeni:</b></p><div style="color:gray;">'+ produs.alergeniProdus+'</div>';
                }
                cardProdus+='</div></div>';
                $('.meniu').append(cardProdus);
            }
            


        });
        });
  
}


function toggleParagraph() {
    var paragraph = $("#paragraph");
    paragraph.toggleClass("hidden");
  }
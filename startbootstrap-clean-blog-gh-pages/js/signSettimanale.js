
function getSignFromUrl() {

  return window.location.search.split("=")[1];

}

function testing () {
    if (getSignFromUrl() != null){
    $(document).ready(function LoadInfo() {
         $.getJSON(" /oroscopoSettimanale/"+getSignFromUrl() , function(result){
                $.each(result, function(i, field){
                  console.log(field);
                    $("#Segno").text("Segno selezionato: "+result.Segno);
                    $("#Data").text("Data: "+result.Data);
                    $("#Titolo").text(("L'oroscopo per: "+result.Segno));
                    $("#DescrizioneGenerale").text((result.Generale));
                    $("#DescrizioneAmore").text((result.Amore));
                    $("#DescrizioneLavoro").text((result.Lavoro));
                    });
         }
)});
}
}

testing();

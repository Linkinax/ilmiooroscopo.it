var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function addServiziOfferti(data, id_res){
  $.getJSON("/service_single_page/search?ID="+ id_res , function(result){
         $.each(result, function(i, field){
             $("#ServiziOfferti").text(field.Servizio);
             $("#ServiziOfferti")[0].href= "/pages/service_single_page.html?id="+ id_res;
           });
 });

 }

function addPersonale(data)
{
    var personale = data.Personale.split(",");
    for(var i=0;i<personale.length;i++)
        {
            console.log(personale[i].toString().replace("{","").replace("}",""));
            $("#PersonaleInfoTab").append("<li>"+personale[i].toString().replace("{","").replace("}","").replace("\"" ,"").replace("\"","")+"</li>");
        }
}


function testing () {
    $(document).ready(function LoadInfo() {
         $.getJSON(" /oroscopoOdierno/leone " , function(result){
                $.each(result, function(i, field){
                  console.log(field);
                    $("#Titolo").text(("L'oroscopo per: "+result.Segno));
                    $("#DescrizioneGenerale").text((result.Generale));
                    $("#DescrizioneAmore").text((result.Amore));
                    $("#DescrizioneLavoro").text((result.Lavoro));
                    });
         }
)});}

testing();

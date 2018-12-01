$( document ).ready(function() {
	$("#form_addnew").on('click','#sendIt', function(){
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var budget = $('#budget').val();
        $.ajax({
            url: 'http://vps621397.ovh.net/',
            dataType: 'json',
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify({
                "firstname": JSON.stringify(firstname), 
                "last-name": JSON.stringify(lastname),
                "budget": JSON.stringify(budget) 
            }),
            success: function(res){
                if(res.success == true){
                    alert("ok");                                                                   
                }else{                          
                    alert("error");
                }
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            },
            .fail(function(jqxhr, textStatus, errorThrown)
            {
                alert(textStatus, errorThrown)
            })
        });
      })
});
$(function() {
    $("#combo-meter").hide();
    $("#pog").hide();

    //vars
    var width =  $(document).width();
    var combo = 0;
    var disabled = false;

    $("iframe").width( width );

    $("#get-cat").click(function(event) {
        $('#cat-source').attr("src", "https://media.tenor.com/images/01c4a5b287dbd39390d9256dda57c741/tenor.gif");
        let loading = true;
        if (loading) {
            $(this).html("Loading...")
            $(this).prop("disabled", true).delay(2000);
            
            $.get("https://api.thecatapi.com/v1/images/search", function(data) {
                $('#cat-source').attr("src", data[0].url);
                combo++;
                console.log(combo);
                $("#combo-meter").show();
                $("#combo-meter").html("Cat combo: " + combo);
                $("#get-cat").html("Get another Cat!")
                $("#get-cat").prop("disabled", false);
                loading = false;
            });

        }
        $(this).prop("disabled", false);
        if(combo == 9){
            $("#pog").show();
        }
    })
    
    $("#zacek").click(function(){
        console.log("click")
        $(this).removeClass("text-yellow-400");
    })
    $("#hide-img").click(function(){
        if(!disabled){
            disabled = true;
            $("#cat-img").hide();
            $("#get-cat").prop("disabled", true);
            $(this).html("Bring back my cats!");
        }else{
            $("#cat-img").show();
            disabled = false;
            $(this).html("Hide Img & Vibe B)");
            $("#get-cat").prop("disabled", false);
        }
    })
})
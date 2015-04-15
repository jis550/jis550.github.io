$(function(){

    function life(){
        var N = $("#namesquare").val();
        var S = $("#sportsquare").val();
        var S2 = $("#singersquare").val();
        var G = $("#gamesquare").val();
        var P = $("#placesquare").val();
        
        $(".result").fadeIn();
        $("#sentence .N").html(N);
        $("#sentence .S").html(S);
          $("#sentence .S2").html(S2);
        $("#sentence .G").html(G);
          $("#sentence .P").html(P);
        $("#sentence").css("background-color", S2);
        
    }
        $(".result").hide();
        $("#compCTA").click(life);
    
})
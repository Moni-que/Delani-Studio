$(document).ready(function(){
    $("#design").click(function(){
        $("#design").hide();
        $("#ourdesign").show();
    });
    $("#ourdesign").click(function(){
        $("#ourdesign").hide();
        $("#design").show();
    });
    $("#development").click(function(){
        $("#development").hide();
        $("#ourdevelopment").show();
    });
    $("#ourdevelopment").click(function(){
        $("#ourdevelopment").hide();
        $("#development").show();
    });
    $("#planning").click(function(){
        $("#planning").hide();
        $("#ourplanning").show();
    });
    $("#ourplanning").click(function(){
        $("#ourplanning").hide();
        $("#planning").show();
    });


    $("button#button").click(function(event){
        let name = $("input#name").val();
        let email = $("input#email").val();
        let message = $("textarea#mymessage").val();

        if ($("input#name").val() && $("input#email").val() && $("textarea#mymessage").val()){
            alert("Hi " + name + ",Thank you for reaching out to us.One of us will contact you shortly.");
        }
        else {
            alert("Please fill the form");
        }
    });

    $("#spacing").hover(function(){
        $("#hover3").css("opacity", 1)},function(){
            $("#hover3").css("opacity", 0)
        });
    $("#spacing-1").hover(function(){
        $("#hover-4").css("opacity", 1)},function(){
            $("#hover-4").css("opacity", 0)
        });
    $("#spacing-2").hover(function(){
        $("#hover-5").css("opacity", 1)},function(){
            $("#hover-5").css("opacity", 0)
        });
    $("#spacing-3").hover(function(){
        $("#hover-6").css("opacity", 1)},function(){
            $("#hover-6").css("opacity", 0)
        });
    $("#spacing-4").hover(function(){
        $("#hover-7").css("opacity", 1)},function(){
            $("#hover-7").css("opacity", 0)
        });
    $("#spacing-5").hover(function(){
        $("#hover-8").css("opacity", 1)},function(){
            $("#hover-8").css("opacity", 0)
        });  
    $("#spacing-6").hover(function(){
        $("#hover-9").css("opacity", 1)},function(){
            $("#hover-9").css("opacity", 0)
        });  
    $("#spacing-7").hover(function(){
        $("#hover-10").css("opacity", 1)},function(){
            $("#hover-10").css("opacity", 0)
        });        

});
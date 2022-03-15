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
        // let message = $("textarea#mymessage").val();

        if ($("input#name").val() && $("input#email").val()){
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
});
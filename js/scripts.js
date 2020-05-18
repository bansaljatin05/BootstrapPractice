$(document).ready(function() {
    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });

    $("#loginBtn").click(function() {
        $("#loginModal").modal('toggle');
    });
    $("#reservebtn").click(function() {
        $("#reservationModal").modal('toggle');
    });
    $("#cancelBtn1").click(function() {
        $('#loginModal').modal('hide');
    });
    $("#cancelBtn2").click(function() {
        $('#reservationModal').modal('hide');
    });
    $("#closeBtn2").click(function() {
        $('#reservationModal').modal('hide');
    });
    $("#closeBtn1").click(function() {
        $('#loginModal').modal('hide');
    });
    
});


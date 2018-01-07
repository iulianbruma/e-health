$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);

    $("#numeMedic").text("Nume: "+urlParams.get("nume")+".");
});

var $star_rating = $('.star-rating .fa');

var SetRatingStar = function() {
    return $star_rating.each(function() {
        if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
            return $(this).removeClass('fa-star-o').addClass('fa-star');
        } else {
            return $(this).removeClass('fa-star').addClass('fa-star-o');
        }
    });
};

$star_rating.on('click', function() {
    $star_rating.siblings('input.rating-value').val($(this).data('rating'));
    return SetRatingStar();
});

SetRatingStar();

function activateButton(element) {
    if(element.checked) {
        $("#adaugareFeedbackButton").prop('disabled', false);
    }
    else  {
        $("#adaugareFeedbackButton").prop('disabled', true);
    }
}
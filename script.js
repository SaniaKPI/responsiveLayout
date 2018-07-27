// calulating images number
var $imagesNumber = $("#imagesNumber");
recalcImagesNubmer();

// images number
function recalcImagesNubmer() {
    $imagesNumber.text($(".image").length);
}

// outputting date and tima
var $dateTime = $("#datetime");
$dateTime.text(moment().format('DD.MM.YYYY hh:mm'));

//popup
var $popup = $(".popup");
$(".image").click(function ($event) {
    enablePopup($event.currentTarget.getAttribute("src"));
});
function enablePopup(imageSrc) {
    $(".popup__image").attr("src", imageSrc);
    $popup.removeClass("popup_disabled");
    $popup.addClass("popup_enabled");
}
function disablePopup() {
    $popup.removeClass("popup_enabled");
    $popup.addClass("popup_disabled");
}

// remove image
$(".removeImage").click( function ($event) {
    removeImage($event)
});

function removeImage(e) {
    e.currentTarget.parentElement.remove();
    recalcImagesNubmer();
}
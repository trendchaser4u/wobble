var images = document.querySelectorAll('.kg-gallery-image img');
images.forEach(function (image) {
    var container = image.closest('.kg-gallery-image');
    var width = image.attributes.width.value;
    var height = image.attributes.height.value;
    var ratio = width / height;
    container.style.flex = ratio + ' 1 0%';
});

$("#search-field").ghostHunter({
    results: "#results",
    includepages: true,
    onKeyUp: true,
    onComplete: function (res) {
        console.log(res)
    },
    result_template: "<a id='gh-{{ref}}' class='gh-search-item' href='{{link}}'><p><h2>{{title}}</h2></p></a>"
});

/*=========================== poup search ===========================*/
$('a[href="#search"]').on('click', function (event) {
    event.preventDefault();
    $('#search').addClass('open');
    $('#search > form > input[type="search"]').focus();
});

$('#search, #search button.close').on('click keyup', function (event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
        $(this).removeClass('open');
    }
});
/*=========================== poup search ===========================*/

/*===========================  open sidebar menu ===========================*/
$(".close").on('click', function () {
    $('.outside').toggleClass('in');
    $('.bar').toggleClass('active');
    $(this).toggleClass('is-showing');
});
/*===========================  open sidebar menu ===========================*/

/*=========================== preloader ===========================*/
// Wait for window load
$(window).on('load', function () {
    $(".se-pre-con").fadeOut("slow");;
});
/*=========================== preloader ===========================*/



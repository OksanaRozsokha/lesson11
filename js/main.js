$(document).ready(function () {
    //popup
    var popup = $('.wrap-popup');
    $('.popup-btn').on('click', function () {
        popup.fadeIn();
    });
    $('#close-popup').on('click', function () {
        popup.fadeOut();
    });
    //
    //clickable icons
    $('.sound-btn').on('click', function () {
        $('#first-item').slideToggle();
    });
    $('.calendar-btn').on('click', function () {
        $('#second-item').slideToggle();
    });
    $('.growth-btn').on('click', function () {
        $('#third-item').slideToggle();
    });
    $('.like-btn').on('click', function () {
       $('#fourths-item').slideToggle();
    });
    $('.interface-btn').on('click', function () {
        $('#fifths-item').slideToggle();
    });
    //
    $(function() {
        $('.text-btn').click(function () {
            $(this).toggleClass('active');
        });
    });
    //
    //menu
    $('.menu-btn').on('click', function () {
        $('.menu-list').slideToggle();
    });
    //
});
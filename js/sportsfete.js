$(window).scroll(function(){

    if (isScrolledIntoView('#logo') === true) {
        $('#id1').addClass('in-view')
    }
    if (isScrolledIntoView('#AboutUs') === true) {
        $('#id2').addClass('in-view')
    }
    if (isScrolledIntoView('#logo1') === true) {
        $('#id1').addClass('in-view')
    }
    if (isScrolledIntoView('#AboutUs1') === true) {
        $('#id2').addClass('in-view')
    }

});
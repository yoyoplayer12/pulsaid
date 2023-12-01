$('.language').click(function() {
    var currentLanguage = $('html').attr('lang');
    var newLanguage;
    if (currentLanguage == 'en') {
        $('html').attr('lang', 'nl');
        newLanguage = 'nl';
    } else {
        $('html').attr('lang', 'en');
        newLanguage = 'en';
    }
    window.location.href = `https://www.pulsaid.be/${newLanguage}/`;
});
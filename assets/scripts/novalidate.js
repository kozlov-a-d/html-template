$(document).on('app.html', function (e, args) {
    if (0 === location.search.indexOf('?novalidate') || -1 !== location.search.indexOf('&novalidate')) {
        args.$html.find('form').attr('novalidate', 'novalidate');
    }
});

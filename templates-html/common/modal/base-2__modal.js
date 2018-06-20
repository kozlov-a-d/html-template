$('.js-ajax').modalAjax({
    template: function(params) {
        return  '<div class="modal test ' + params.dataClass + '" id="' + params.id + '">' +
            '<div class="modal__wrapper">' +
                '<div class="modal__bg"></div>' +
                    '<div class="modal__container">' +
                        '<button class="modal__btn-close">Close</button>' +
                        '<div class="modal__scroll">' +
                            params.html +
                        '</div>' +
                    '</div>' +
                    '<div class="modal__loader"></div>' +
                '</div>' +
            '</div>'

    }
});
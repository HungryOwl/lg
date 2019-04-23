(function() {

    [].slice.call(document.querySelectorAll('.ivi-textfield .ivi-textfield__input')).forEach(function(el) {
        // если инпут заполнен
        if (el.value.trim() !== '') {
            el.parentNode.classList.add('state_filled');
        }

        // события для инпута
        el.addEventListener('focus', onInputFocus);
        el.addEventListener('blur', onInputBlur);
        el.addEventListener('keyup', onInputKeyup);
    });

    // инпут получил фокус
    function onInputFocus(el) {
        el.target.parentNode.classList.add('state_focused');

        if (el.target.parentNode.classList.contains('state_error')) {
            el.target.value = '';
            el.target.parentNode.classList.remove('state_filled');
        }
    }

    // инпут потерял фокус
    function onInputBlur(el) {
        el.target.parentNode.classList.remove('state_focused');
    }

    // нажимаем клавишу в инпуте (ввод текста)
    function onInputKeyup(el) {

        // если стёрли все символы - убираем класс заполненности, но добавляем класс показа тултипа
        if (el.target.value.trim() === '') {
            el.target.parentNode.classList.remove('state_filled');
        } else {
            el.target.parentNode.classList.add('state_filled');
        }
    }

})();

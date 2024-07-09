(function ($) {
    $(document).ready(function () {
        const taskSelector = '.ghx-issue'; // Элементы задач
        const columnSelector = '.ghx-column'; // Элементы колонок

        // Добавляем классы при начале перетаскивания
        $(taskSelector).on('dragstart', function () {
            $(columnSelector).addClass('highlight-column');
        });

        // Удаляем классы при завершении перетаскивания
        $(taskSelector).on('dragend', function () {
            $(columnSelector).removeClass('highlight-column');
        });
    });
})(jQuery);

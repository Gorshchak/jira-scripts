(function($){
    $(document).ready(function(){
        console.log("Script loaded and document ready"); // Отладка

        var target = $('.ghx-columns');
        if (target.length) {
            console.log("Target found"); // Отладка

            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'childList' && mutation.addedNodes.length) {
                        console.log("Child nodes added"); // Отладка

                        var columns = $('.ghx-column');
                        columns.each(function() {
                            var column = $(this);
                            column.on('dragover', function() {
                                console.log("Drag over column"); // Отладка
                                column.css('background-color', 'rgba(0, 255, 0, 0.3)'); // Измените цвет по вашему усмотрению
                            });
                            column.on('dragleave', function() {
                                console.log("Drag leave column"); // Отладка
                                column.css('background-color', ''); // Вернуть первоначальный цвет
                            });
                        });
                    }
                });
            });

            observer.observe(target[0], { childList: true, subtree: true });
        } else {
            console.log("Target not found"); // Отладка
        }
    });
})(AJS.$);

(function($){
    $(document).ready(function(){
        var target = $('.ghx-columns');

        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length) {
                    var columns = $('.ghx-column');
                    columns.each(function() {
                        var column = $(this);
                        column.on('dragover', function() {
                            column.css('background-color', 'rgba(0, 255, 0, 0.3)'); // Измените цвет по вашему усмотрению
                        });
                        column.on('dragleave', function() {
                            column.css('background-color', ''); // Вернуть первоначальный цвет
                        });
                    });
                }
            });
        });

        if (target.length) {
            observer.observe(target[0], { childList: true, subtree: true });
        }
    });
})(AJS.$);

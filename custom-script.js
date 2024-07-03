document.addEventListener('DOMContentLoaded', function () {
    const board = document.querySelector('.ghx-columns');
    if (board) {
        board.addEventListener('dragover', function (event) {
            const targetColumn = event.target.closest('.ghx-column');
            if (targetColumn) {
                targetColumn.style.backgroundColor = '#FFD700';  // Замените на желаемый цвет
            }
        });

        board.addEventListener('dragleave', function (event) {
            const targetColumn = event.target.closest('.ghx-column');
            if (targetColumn) {
                targetColumn.style.backgroundColor = '';  // Возвращает стандартный цвет
            }
        });

        board.addEventListener('drop', function (event) {
            const targetColumn = event.target.closest('.ghx-column');
            if (targetColumn) {
                targetColumn.style.backgroundColor = '';  // Возвращает стандартный цвет
            }
        });
    }
});

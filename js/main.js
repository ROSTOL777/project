const modalWindow = document.querySelector('.modal'); /*Обращаемся к классу всплывающего окна*/
const buttonModals = document.querySelectorALL('.modal__button'); /*Обращаемся ко всем кнопкам, вызывающие это окно*/
const modalClose = document.querySelector('.modal__close'); /*Обьявляем переменную*/
const body = document.querySelector('body')

/*Открытие модального окна*/
buttonModals.forEach((item) => { /*Обращаемся к каждой кнопке*/
    item.addEventListener('click', () => { /*Вешаем прослушиватель, который обрабатывает событие (клик)*/
        modalWindow.style.display = 'flex'; /*Обращаемся через переменную к стилям и записываем значение флекс*/
        body.classList.add('noscroll');
    });
});

/*Закрытие модального окна*/
modalWindow.addEventListener('click', (e) => { /*При нажатии обьявляется новая переменная*/
    const isModal = e.target.closest('.modal__inner'); /*Обьявляем переменную, которая означает клик по окошку*/

    if(!isModal) { /*! - отрицание. Условие, если клик не по окну, оно закроется*/
        modalWindow.style.display = 'none';
        body.classList.remove('noscroll');
    }
})

modalWindow.addEventListener('click', () => {
    cmodalWindow.style.display = 'none';
    body.classList.remove('noscroll');
})
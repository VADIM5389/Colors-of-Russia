    function chooseTour(name, price) {
        // Сохраняем выбранный тур в localStorage
        localStorage.setItem('tourName', name);
        localStorage.setItem('tourPrice', price);

        // Перенаправляем на страницу с информацией о туре
        window.location.href = '../tour-page/tour-page.html';  // Здесь указана вторая страница
    }








    // // Получаем данные из localStorage
    // const tourName = localStorage.getItem('tourName');
    // const tourPrice = localStorage.getItem('tourPrice');

    // // Проверяем, если данные есть, отображаем их на странице
    // if (tourName && tourPrice) {
    //     document.getElementById('tour-name').innerText = "Тур: " + tourName;
    //     document.getElementById('tour-price').innerText = "Цена: " + tourPrice + " рублей";
    // } else {
    //     // Если данных нет, показываем сообщение об ошибке
    //     document.getElementById('tour-name').innerText = "Ошибка: не выбран тур!";
    // }
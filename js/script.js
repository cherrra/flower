document.addEventListener('DOMContentLoaded', function() {
    // Обработка формы заказа
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Собираем данные формы
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                bouquet: document.getElementById('bouquet').value,
                date: document.getElementById('delivery-date').value,
                address: document.getElementById('address').value,
                message: document.getElementById('message').value,
                giftWrap: document.getElementById('gift-wrap').checked
            };
            
            // Здесь можно добавить отправку данных на сервер
            console.log('Данные заказа:', formData);
            
            // Показываем сообщение об успехе
            alert('Спасибо за ваш заказ! Мы свяжемся с вами в ближайшее время для подтверждения.');
            
            // Очищаем форму
            orderForm.reset();
        });
    }
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Подсветка активного пункта меню
    const navLinks = document.querySelectorAll('.nav-main a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.style.color = '#e83e8c';
            link.style.fontWeight = 'bold';
        }
    });
});
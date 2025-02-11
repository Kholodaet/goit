document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal"); // Модальне вікно
  const mobileRegisterBtn = document.querySelector(".first_button"); // Кнопка відкриття
  const closeModal = document.querySelector(".close-modal"); // SVG-іконка закриття

  // Функція для оновлення лічильника
  function updateCountdown() {
    const eventDate = new Date("2025-03-01T00:00:00").getTime(); // Дата події
    const now = new Date().getTime(); // Поточна дата
    const timeLeft = eventDate - now; // Залишковий час

    if (timeLeft <= 0) {
      document.getElementById("days").textContent = "0";
      document.getElementById("hours").textContent = "0";
      document.getElementById("minutes").textContent = "0";
      document.getElementById("seconds").textContent = "0";
      document.getElementById("modal-days").textContent = "0";
      document.getElementById("modal-hours").textContent = "0";
      document.getElementById("modal-minutes").textContent = "0";
      document.getElementById("modal-seconds").textContent = "0";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Оновлення лічильника на головній сторінці
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Оновлення лічильника в модальному вікні
    document.getElementById("modal-days").textContent = days;
    document.getElementById("modal-hours").textContent = hours;
    document.getElementById("modal-minutes").textContent = minutes;
    document.getElementById("modal-seconds").textContent = seconds;
  }

  // Оновлення лічильника кожну секунду
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Відкриття модального вікна при натисканні кнопки
  mobileRegisterBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Закриття модального вікна при натисканні на іконку
  closeModal.addEventListener("click", (event) => {
    event.preventDefault(); // Для запобігання дефолтної поведінки посилання
    modal.style.display = "none";
  });

  // Закриття модального вікна при кліку поза ним
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

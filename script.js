document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const mobileRegisterBtn = document.querySelector(".first_button");
  const closeModal = document.querySelector(".close-modal");

  function updateCountdown() {
    const eventDate = new Date("2025-03-01T00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
    const hours = Math.max(
      0,
      Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const minutes = Math.max(
      0,
      Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    );
    const seconds = Math.max(0, Math.floor((timeLeft % (1000 * 60)) / 1000));

    ["days", "hours", "minutes", "seconds"].forEach((id) => {
      const element = document.getElementById(id);
      if (element) element.textContent = eval(id);

      const modalElement = document.getElementById("modal-" + id);
      if (modalElement) modalElement.textContent = eval(id);
    });
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  if (mobileRegisterBtn && modal) {
    mobileRegisterBtn.addEventListener("click", () => {
      modal.style.display = "flex";
      document.body.classList.add("modal-open");
    });
  }

  if (closeModal && modal) {
    closeModal.addEventListener("click", (event) => {
      event.preventDefault();
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    });
  }

  window.addEventListener("click", (event) => {
    if (modal && event.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
});

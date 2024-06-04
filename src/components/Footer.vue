<template>
  <section class="footer_section">
    <div class="container">
      <div class="footer-logo">
        <a class="navbar-brand" href="#">
          <img src="/images-cloud/logo.svg" width="142" height="50" alt="Ninja Taxi">
        </a>
        <p>Надійний партнер в інвестиціях та таксо-бізнесі</p>
        <a href="#">
          <button>Перейти в Telegram Bot</button>
        </a>
      </div>
      <div class="footer-about">
        <h2>Про</h2>
        <a href="#">Нас</a>
        <a href="#">Працевлаштування</a>
        <a href="#">Соц.мережі</a>
      </div>
      <div class="footer-quick-links">
        <h2>Швидкі посилання</h2>
        <a href="#">Колл-центр</a>
        <a href="#">Політика конфеденційності</a>
        <a href="#">Сервіс</a>
      </div>
      <div class="footer-contact">
        <h2>Контакти</h2>
        <p class="email">taxi.ninja.ua@gmail.com</p>
        <p class="phone">+380937531057</p>
        <div class="icon-social-network">
          <a href="https://www.instagram.com/ninjataxi.ua/" aria-label="instagram"><i
              class="fa-brands fa-instagram"></i></a>
          <a href="https://www.facebook.com/profile.php?id=61554407076136" aria-label="facebook"><i
              class="fa-brands fa-facebook"></i></a>
          <a href="https://www.tiktok.com/@ninja.taxi?_t=8gRmG4idFNl" aria-label="tiktok"><i
              class="fa-brands fa-tiktok"></i></a>
          <a href="https://www.linkedin.com/company/ninja-taxi/" aria-label="linkedin"><i
              class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.footer_section {
  margin-top: 100px;
  text-align: center;
  background-color: #a1e8b9;
  width: 100%;
  height: auto;
}

.footer_section .container {
  display: flex;
  justify-content: space-between;
  padding: 20px 144px;
  gap: 60px;
}

.footer_section .container>div {
  flex-basis: 25%;
}


.footer_section .container .footer-logo {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: auto;
  flex-direction: column;
}

.footer_section .container .footer-logo p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  text-align: left;
}

.footer_section .container .footer-logo a button {
  padding: 10px 20px;
  background-color: #ec6323;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 12px;
}

.footer_section .container .footer-about {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: auto;
  flex-direction: column;
}

.footer_section .container .footer-about h2 {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  text-align: left;
}

.footer_section .container .footer-about a {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  text-align: left;
  text-decoration: none;
  margin-top: 10px;
}

.footer_section .container .footer-quick-links {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: auto;
  flex-direction: column;
}

.footer_section .container .footer-quick-links h2 {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  text-align: left;
}

.footer_section .container .footer-quick-links a {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  text-align: left;
  text-decoration: none;
  margin-top: 10px;
}

.footer_section .container .footer-contact {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: auto;
  flex-direction: column;
}

.footer_section .container .footer-contact h2 {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  text-align: left;
}

.footer_section .container .footer-contact p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  text-align: left;
  text-decoration: none;
  margin: 10px 0 0 0;
}

.footer_section .container .footer-contact .icon-social-network {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 10px;
}

.footer_section .container .footer-contact .icon-social-network a {
  color: #EC6323;
  font-size: 40px;
}
</style>
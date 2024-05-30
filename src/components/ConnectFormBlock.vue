<template>
    <section class="conect-section">
      <div class="container">
        <div class="description">
          <h2>Збільшити прибуток автопарку</h2>
          <span>
            Зв'яжіться з нами, якщо у вас виникли запитання, або заповніть форму
            і очікуйте контакту з нашим менеджером.
          </span>
          <h3>Часи роботи</h3>
          <p>з 09.00 до 18.00</p>
          <h3>МЕНЕДЖЕР ПО РОБОТІ З КЛІЄНТАМИ</h3>
          <p class="phone">+380937531057</p>
          <h3>СОЦМЕРЕЖІ</h3>
          <div class="icon-social-network">
            <a href="https://www.instagram.com/ninjataxi.ua/" aria-label="instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61554407076136" aria-label="facebook">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.tiktok.com/@ninja.taxi?_t=8gRmG4idFNl" aria-label="tiktok">
              <i class="fa-brands fa-tiktok"></i>
            </a>
            <a href="https://www.linkedin.com/company/ninja-taxi/" aria-label="linkedin">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div class="box-form">
          <form>
            <div class="client-info">
              <label for="name">Ім'я:</label>
              <input type="text" id="name" name="name" placeholder="Ваше ім’я" required/>
              <span class="error-name error-message" style="color: red; display: none">Це поле обов'язкове</span>
            </div>
            <div class="client-info">
              <label for="phone">Номер телефону:</label>
              <input type="tel" id="phone" name="phone" placeholder="(###) ### - ## - ##" required/>
              <span class="error-phone error-message" style="color: red; display: none">Це поле обов'язкове</span>
            </div>
            <div class="client-info">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Ваш email" required/>
              <span class="error-email error-message" style="color: red; display: none">Це поле обов'язкове</span>
            </div>
            <button class="subscribe-client" type="submit">Надіслати</button>
          </form>
        </div>
      </div>
    </section>
</template>


<style scoped>
.conect-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 100px auto 0 auto;
}

.conect-section .container {
  display: flex;
  align-items: center;
}

.conect-section .container .description {
  width: 55%;
  padding: 10px 30px;
}

.conect-section .container .description h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  color: #141e17;
  margin: 0;
}

.conect-section .container .description span {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #53785e;
  margin: 25px 0;
}

.conect-section .container .description h3 {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: rgba(83, 120, 94, 0.5);
  margin-top: 25px;
  margin: 0;
}

.conect-section .container .description:first-child h3 {
  margin-top: 25px;
}

.conect-section .container .description p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #53785e;
  margin-top: 0;
}

.conect-section .container .description .icon-social-network a {
  display: inline-block;
  background-color: #ec6323;
  border-radius: 50%;
  margin: 5px;
  padding: 10px;
  text-align: center;
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  text-decoration: none;
}

.conect-section .container .description .icon-social-network a i {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}

.conect-section .container .box-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(/images-cloud/invest-page/invest-block-6.png) no-repeat;
  background-size: 100% 100%;
  padding: 76px 0 65px 25px;
}

.conect-section .container .box-form form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.conect-section .container .box-form form .client-info {
  width: 100%;
  margin-bottom: 25px;
  position: relative;
}

.conect-section .container .box-form form .client-info label {
  margin-right: 10px;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 25px;
  color: #fff;
}

.conect-section .container .box-form form .client-info input {
  width: 100%;
  border: none;
  border-radius: 25px 0 0 25px;
  padding: 10px 15px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
}

.conect-section .container .box-form form .client-info input::placeholder {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: rgba(83, 120, 94, 0.5);
}

.conect-section .container .box-form form .client-info .error-message {
  display: none;
  color: red;
  font-size: 15px;
  float: left;
  position: absolute;
  left: 15px;
  top: 105px;
}

.conect-section .container .box-form form button {
  border: none;
  border-radius: 20px;
  width: 285px;
  height: 56px;
  padding: 10px 50px;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 25px;
  color: #fff;
  background: #ec6323;
  cursor: pointer;
}
</style>
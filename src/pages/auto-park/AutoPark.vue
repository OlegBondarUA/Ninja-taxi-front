<template>
  <div class="wrapper">
    <TopNavbar />

    <section class="auto-park-section-one">
      <div class="container">
        <div class="images-block">
          <img src="/images-cloud/auto-park-page/park-block-1.png" />
        </div>
        <div class="information-block">
          <div class="background-img">
            <img src="/images-cloud/index-page/index-one-right.webp" />
          </div>
          <div class="description-info">
            <h2>переверніть свій автопарк на 180 градусів</h2>
            <p>
              Збільшуйте прибуток свого таксопарку з автоматизованою системою
              від NINJA TAXI, мінімізуючи витрати та ризики
            </p>
            <div class="btn-box">
              <button class="contact-me-btm">
                Отримати безкоштовний доступ на 30 днів
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="auto-park-section-two">
      <div class="container-park">
        <div class="img-box">
          <img
            src="/images-cloud/auto-park-page/park-block-2-1.png"
            alt=""
            loading="lazy"
          />
          <img
            src="/images-cloud/auto-park-page/park-block-2-2.png"
            alt=""
            loading="lazy"
          />
          <img
            src="/images-cloud/auto-park-page/park-block-2-3.png"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <div class="detail-box">
        <p class="description-section">
          Розширюйте свій таксопарк та розвивайте його за допомогою NINJA TAXI.
        </p>
        <div class="contact-us">
          <button class="free-access-button">Безкоштовний місяць</button>
          <router-link to="/pricing">
            <button class="get-price-button">Дізнатися вартість</button>
          </router-link>
        </div>
      </div>
    </section>

    <section class="background-section">
      <section class="auto-park-section-three">
        <div class="container">
          <div class="box-img">
            <img
              src="/images-cloud/auto-park-page/park-block-3.png"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="description">
            <h2>Інформаційна панель</h2>
            <p>
              Інформаційна панель об'єднує звітність з усіх агрегаторів в одному
              місці. Власник автопарку зможе відслідковувати витрати на
              автомобілі та водіїв, чистий прибуток автопарку, пробіг і середню
              ефективність авто.
            </p>
            <router-link to="/pricing">
              <button class="get-price-button">Дізнатися вартість</button>
            </router-link>
          </div>
        </div>
      </section>
    </section>

    <section class="auto-park-four-section">
      <div class="container">
        <div class="description">
          <h2>Дохідність водіїв</h2>
          <p>
            Дохідність водіїв дозволяє переглядати загальну суму заробітку водія
            за день або будь-який інший період в усіх агрегаторах, а також
            окремо відображає, скільки заробив водій готівкою та на карту.
          </p>
          <button class="free-access-button">
            Отримати безкоштовний доступ
          </button>
        </div>
        <div class="box-img">
          <img
            src="/images-cloud/auto-park-page/park-block-4.png"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section class="auto-park-section-five">
      <div class="container">
        <div class="box-img">
          <img
            src="/images-cloud/auto-park-page/park-block-5.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="description">
          <h2>Ефективність Автомобіля</h2>
          <p>
            Ефективність автомобіля відображає витрати, загальний чистий
            заробіток авто за певний період, його окупаємість та загальну
            вартість.
          </p>
          <div class="btn-box">
            <button class="free-access-button">
              Отримати безкоштовний доступ
            </button>
            <router-link to="/pricing">
              <button class="get-price-button">Дізнатися вартість</button>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="auto-park-section-six">
      <div class="container">
        <div class="box-img">
          <img
            src="/images-cloud/auto-park-page/park-block-6.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="description">
          <h2>Контроль готівки</h2>
          <p>
            Функція контролю готівки водія в автопарку забезпечує нагляд за
            гаманцем водія та запобігає накопиченню боргів перед автопарком.
            Власник автопарку має можливість самостійно встановлювати відсоток
            відключення готівки. Таким чином, ваш прибуток знаходиться під
            контролем.
          </p>
          <div class="btn-box">
            <router-link to="/pricing">
              <button class="get-price-button">Дізнатися вартість</button>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="background-section seven">
      <section class="auto-park-section-seven">
        <div class="container">
          <div class="box-img">
            <img
              src="/images-cloud/auto-park-page/park-block-7-1.png"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="description">
            <h2>Бонуси / штрафи</h2>
            <p>
              Ефективний облік штрафів та бонусів для кожного водія окремо
              забезпечить більшу прозорість та контроль над цими виплатами, що
              сприятиме поліпшенню управління флотом та спростить процеси виплат
              заробітної плати.
            </p>
            <button class="free-access-button">
              Отримати безкоштовний доступ
            </button>
          </div>
          <div class="box-img">
            <img
              src="/images-cloud/auto-park-page/park-block-7-2.png"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </section>

    <section class="auto-park-section-eight">
      <div class="container">
        <div class="box-img">
          <img
            src="/images-cloud/auto-park-page/park-block-8.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="description">
          <h2>Ефективність водіїв</h2>
          <p>
            В дашборді ефективності водіїв власники та менеджери автопарків
            матимуть можливість переглядати загальну активність в усіх
            агрегаторах, а також окремо в кожному з них.
          </p>
          <button class="free-access-button">Співпрацювати</button>
        </div>
      </div>
    </section>

    <section class="auto-park-nine-section">
      <div class="container">
        <div class="description">
          <h2>Автоматичний розрахунок водія</h2>
          <p>
            Менеджери та власники автопарків зможуть заощаджувати час, оскільки
            розрахунок заробітної плати водіїв автоматизований, а виплати водіям
            швидкі та прозорі.
          </p>
          <button class="free-access-button">
            Отримати безкоштовний доступ
          </button>
        </div>
        <div class="box-img">
          <img
            src="/images-cloud/auto-park-page/park-block-9.png"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section class="auto-park-section-ten">
      <div class="container">
        <div class="box-img">
          <img
            src="/images-cloud/auto-park-page/park-block-10.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="description">
          <h2>Розклад водіїв</h2>
          <p>
            Розклад водіїв дозволяє записувати усі робочі дні водіїв та
            автоматично їх повторювати для кожного з них. Це сприяє правильному
            розрахунку заробітної плати та холостого пробігу водіїв.
          </p>
          <router-link to="/pricing">
            <button class="get-price-button">Дізнатися вартість</button>
          </router-link>
        </div>
      </div>
    </section>

    <ConnectFormBlock />
    <Footer />
  </div>
</template>

<script setup>
import TopNavbar from "../../components/TopNavbar.vue";
import Footer from "../../components/Footer.vue";
import ConnectFormBlock from "../../components/ConnectFormBlock.vue";
</script>

<style scoped>
.auto-park-section-one {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 455px;
  max-width: 1152px;
  margin: 0 auto;
}

.auto-park-section-one .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

.auto-park-section-one .container > div {
  flex-basis: 50%;
}

.auto-park-section-one .container .images-block {
  width: 100%;
  height: 100%;
}

.auto-park-section-one .container .images-block img {
  position: absolute;
  z-index: 1;
  left: -35px;
  top: 25px;
}

.auto-park-section-one .container .information-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.auto-park-section-one .container .information-block .background-img {
  width: 100%;
  height: 100%;
}

.auto-park-section-one .container .information-block .background-img img {
  position: absolute;
  top: -55px;
  right: -145px;
}

.auto-park-section-one .container .information-block .description-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 0;
  position: relative;
  top: 0;
  right: -70px;
  padding-right: 25px;
}

.auto-park-section-one .container .information-block .description-info h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
  color: #ec6323;
  margin: 0;
}

.auto-park-section-one .container .information-block .description-info span {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  color: #fff;
}

.auto-park-section-one
  .container
  .information-block
  .description-info
  span
  img {
  margin-right: 15px;
}

.auto-park-section-one .container .information-block .description-info p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: #fff;
  margin: 0;
}

.auto-park-section-one
  .container
  .information-block
  .description-info
  .btn-box {
  width: 100%;
  display: flex;
  gap: 39px;
  align-items: center;
  justify-content: flex-start;
}

.auto-park-section-one .container .btn-box button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #ec6323;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 20px;
}

/* Section two */
.auto-park-section-two {
  position: relative;
  width: 100%;
  height: 824px;
  margin: 0 auto;
}

.auto-park-section-two .container-park {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auto-park-section-two .img-box {
  max-width: 1440px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.auto-park-section-two .img-box img {
  width: 100%;
  height: auto;
}

.auto-park-section-two .img-box img:nth-child(1) {
  width: 440px;
  position: relative;
  top: 80px;
}

.auto-park-section-two .img-box img:nth-child(2) {
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.auto-park-section-two .img-box img:nth-child(3) {
  width: 460px;
  position: relative;
  top: 82px;
  left: 0;
}

.auto-park-section-two .detail-box {
  display: flex;
  margin-right: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -135px;
}

.auto-park-section-two .detail-box p {
  width: 68%;
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 32px;
  text-align: center;
  color: #141e17;
}

.auto-park-section-two .contact-us {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.auto-park-section-two .contact-us a button {
  margin-top: 15px;
  width: 300px;
  border: 5px solid #ec6323;
  background: #fff;
  padding: 10px 35px;
  font-size: 20px;
  color: #38423b;
  cursor: pointer;
  font-weight: 700;
}

.auto-park-section-two .contact-us button {
  margin-top: 10px;
  padding: 10px 10px;
  background: #ec6323;
  border: 5px solid #ec6323;
  text-decoration: none;
  cursor: pointer;
  border-radius: 20px;
  width: 300px;
  height: 57px;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 20px;
  color: #fff;
}

.auto-park-section-two .contact-us a button {
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
  font-style: normal;
  line-height: normal;
  border: 6px solid #ec6323;
  border-radius: 20px;
  width: 300px;
  height: 57px;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 20px;
  color: #38423b;
}

/* Section three */
.background-section {
  background: url("/images-cloud/charging-page/charging-five-bg.png") no-repeat;
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  height: 100%;
  margin-top: 100px;
  padding: 125px 0;
}

.auto-park-section-three {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 455px;
  max-width: 1152px;
  margin: 0 auto;
}

.auto-park-section-three .container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: auto;
}

.auto-park-section-three .container > div {
  flex-basis: 50%;
}

.auto-park-section-three .container .box-img {
  width: 100%;
  height: 100%;
}

.auto-park-section-three .container .box-img img {
  width: 100%;
  height: auto;
}

.auto-park-section-three .container .description h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  color: #141e17;
  margin: 0;
}

.auto-park-section-three .container .description p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #38423b;
  margin: 25px 0;
}

.auto-park-section-three .container .description a button {
  padding: 10px 20px;
  background-color: #ec6323;
  color: #fff;
  border: none;
  border-radius: 20px;
  width: 300px;
  height: 57px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 20px;
}

/* Section four */
.auto-park-four-section {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 455px;
  max-width: 1152px;
  margin: 100px auto 0 auto;
}

.auto-park-four-section .container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: auto;
}

.auto-park-four-section .container > div {
  flex-basis: 50%;
}

.auto-park-four-section .container .description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.auto-park-four-section .container .description h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  color: #141e17;
  margin: 0;
}

.auto-park-four-section .container .description p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #38423b;
  margin: 25px 0;
}

.auto-park-four-section .container .description button {
  padding: 10px 20px;
  background-color: #ec6323;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 20px;
}

.auto-park-four-section .container .box-img {
  width: 100%;
  height: 100%;
}

.auto-park-four-section .container .box-img img {
  width: 100%;
  height: auto;
}

/* Section five */

.auto-park-section-five {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 100px auto 0 auto;
}

.auto-park-section-five .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  background: url("/images-cloud/auto-park-page/park-block-5-bg.png") no-repeat
    100% center;
}

.auto-park-section-five .container .box-img {
  width: 100%;
  height: 100%;
}

.auto-park-section-five .container .box-img img {
  width: 356px;
  height: 675px;
}

.auto-park-section-five .container .description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
}

.auto-park-section-five .container .description h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  color: #fff;
  margin: 0;
}

.auto-park-section-five .container .description p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #fff;
  margin: 25px 0;
}

.auto-park-section-five .container .description .btn-box {
  display: flex;
  gap: 20px;
}

.auto-park-section-five .container .description button {
  padding: 10px 20px;
  background-color: #ec6323;
  color: #fff;
  border: none;
  border-radius: 20px;
  width: 408px;
  height: 57px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 20px;
}

.auto-park-section-five .container .description .get-price-button {
  background-color: transparent;
  color: #fff;
  border: 4px solid #ec6323;
  width: 304px;
  height: 57px;
}

/* Section six */
.auto-park-section-six {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 100px auto 0 auto;
}

.auto-park-section-six .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 70px;
}

.auto-park-section-six .container > div {
  flex-basis: 50%;
}

.auto-park-section-six .container .box-img {
  width: 100%;
  height: 100%;
}

.auto-park-section-six .container .box-img img {
  width: 100%;
  height: auto;
}

.auto-park-section-six .container .description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
}

.auto-park-section-six .container .description h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  color: #141e17;
  margin: 0;
}

.auto-park-section-six .container .description p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #38423b;
  margin: 25px 0;
}

.auto-park-section-six .container .description .btn-box {
  display: flex;
  gap: 20px;
}

.auto-park-section-six .container .description button {
  padding: 10px 20px;
  background-color: #ec6323;
  color: #fff;
  border: none;
  border-radius: 20px;
  width: 408px;
  height: 57px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 20px;
}

/* Section seven */
.background-section.seven {
  padding: 5px;
}
.auto-park-section-seven {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 0 auto;
}

.auto-park-section-seven .container {
  display: flex;
  align-items: center;
}

.auto-park-section-seven .container .box-img {
  width: 50%;
}

.auto-park-section-seven .container .box-img img {
  width: 100%;
  height: auto;
}

.auto-park-section-seven .container .description {
  width: 100%;
  padding: 10px 30px;
}

.auto-park-section-seven .container .description h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  color: #141e17;
  text-align: center;
}

.auto-park-section-seven .container .description p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #38423b;
  text-align: center;
}

.auto-park-section-seven .container .description button {
  width: 100%;
  margin-top: 15px;
  border: 5px solid #ec6323;
  background-color: #ec6323;
  padding: 10px 10px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  border-radius: 25px;
  font-weight: 700;
}

/* Section eight */
.auto-park-section-eight {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 100px auto 0 auto;
}

.auto-park-section-eight .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
}

.auto-park-section-eight .container > div {
  flex-basis: 50%;
}

.auto-park-section-eight .container .box-img {
  width: 100%;
  height: 100%;
}

.auto-park-section-eight .container .box-img img {
  width: 100%;
  height: auto;
}

.auto-park-section-eight .container .description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
}

.auto-park-section-eight .container .description h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  color: #141e17;
  margin: 0;
}

.auto-park-section-eight .container .description p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #38423b;
  margin: 25px 0;
}

.auto-park-section-eight .container .description button {
  padding: 10px 20px;
  background-color: #ec6323;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 20px;
}

/* Section nine */
.auto-park-nine-section {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 100px auto 0 auto;
}

.auto-park-nine-section .container {
  display: flex;
  align-items: center;
  background: url("/images-cloud/auto-park-page/park-block-5-bg.png") no-repeat;
  background-size: 80% 100%;
  position: relative;
}

.auto-park-nine-section .container .box-img {
  width: 65%;
  position: absolute;
  bottom: -22px;
  right: -60px;
}

.auto-park-nine-section .container .box-img img {
  width: 100%;
  height: auto;
}

.auto-park-nine-section .container .description {
  width: 100%;
  padding: 167px 51px;
}

.auto-park-nine-section .container .description h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  color: #fff;
}

.auto-park-nine-section .container .description p {
  width: 45%;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #fff;
}

.auto-park-nine-section .container .description button {
  margin-top: 15px;
  border: 5px solid #ec6323;
  background-color: #ec6323;
  padding: 10px 35px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  border-radius: 25px;
  font-weight: 700;
}

/* Section ten */
.auto-park-section-ten {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 100px auto 0 auto;
}

.auto-park-section-ten .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
}

.auto-park-section-ten .container > div {
  flex-basis: 50%;
}

.auto-park-section-ten .container .box-img {
  width: 100%;
  height: 100%;
}

.auto-park-section-ten .container .box-img img {
  width: 100%;
  height: auto;
}

.auto-park-section-ten .container .description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
}

.auto-park-section-ten .container .description h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  color: #141e17;
  margin: 0;
}

.auto-park-section-ten .container .description p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #38423b;
  margin: 25px 0;
}

.auto-park-section-ten .container .description .btn-box {
  display: flex;
  gap: 20px;
}

.auto-park-section-ten .container .description button {
  padding: 10px 20px;
  background-color: #ec6323;
  color: #fff;
  border: none;
  border-radius: 20px;
  width: 408px;
  height: 57px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 20px;
}
</style>

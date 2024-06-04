<script setup>
import { ref } from 'vue';
import TopNavbar from '../../components/TopNavbar.vue';
import Footer from '../../components/Footer.vue';
import ContactMeForm from '../../components/ContactMeForm.vue';

const showContactForm = ref(false);

const toggleContactForm = () => {
  showContactForm.value = !showContactForm.value;
};
</script>

<template>
  <div class="wrapper">
    <TopNavbar />

    <section class="home-section-one">
      <div class="container">
        <div class="images-block">
          <img src="/images-cloud/index-page/index-one-left.webp" />
        </div>
        <div class="information-block">
          <div class="background-img">
            <img src="/images-cloud/index-page/index-one-right.webp" />
          </div>
          <div class="description-info">
            <h2>ninja taxi</h2>
            <span class="phone">
              <img src="/images-cloud/index-page/phone.svg" />+38(093) 753 1057
            </span>
            <p>
              Довірте свій автопарк та інвестиції досвідченому партнеру NINJA
              TAXI.
            </p>
            <button class="contact-me-btm" @click="toggleContactForm">Зв’яжіться зі мною</button>
          </div>
        </div>
      </div>
    </section>

    <section class="home-section-two">
      <div class="container">
        <div class="description-info">
          <h2>Що таке Ninja Taxi?</h2>
          <p>
            NINJA TAXI - ваш партнер для збільшення доходу в таксі. Ми розробляємо
            автоматизовану систему для ефективного управління автопарком,
            зменшуючи витрати. Наша мета - популяризувати екологічний транспорт в
            Україні, пропонуючи вигідні умови інвестування в китайські
            електрокари. Ми також розвиваємо мережу зарядних станцій для зручного
            заряджання. Ninja Taxi допомагає вашому бізнесу зростати, мінімізуючи
            ризики.
          </p>
        </div>
        <div class="images-block">
          <img src="/images-cloud/index-page/index-two.png" />
        </div>
      </div>
    </section>

    <section class="background-section">
      <section class="home-section-three">
        <div class="container">
          <div class="description-info">
            <h2>Інвестиція в екологічне майбутнє</h2>
            <p>
              Здайте свій електрокар в оренду чи інвестуйте гроші в електро-таксі
              та отримуйте пасивний дохід від 14 000 грн щомісячно з кожного авто.
            </p>
            <router-link to="/business/investors">
              <button class="learn-more-btn">Дізнатися більше</button>
            </router-link>
          </div>
          <div class="images-block">
            <img src="/images-cloud/index-page/index-three.png" />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GCf8iURnec8" frameborder="0"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </section>

      <section class="home-section-four">
        <div class="container">
          <div class="images-block">
            <img src="/images-cloud/index-page/index-four.png" />
          </div>
          <div class="description-info">
            <h2>переверніть свій автопарк на 180 градусів</h2>
            <p>
              Збільшуйте прибуток свого таксопарку з автоматизованою системою від
              NINJA TAXI, мінімізуючи витрати та ризики
            </p>
            <router-link to="/business/fleet-owners">
              <button class="learn-more-btn">Дізнатися більше</button>
            </router-link>
          </div>
        </div>
      </section>
    </section>

    <section class="home-section-five">
      <div class="container">
        <div class="description-info">
          <h2>Ninja Зарядні станції</h2>
          <p>
            - це швидкий, зручний та екологічно-чистий спосіб заряджати ваш
            електромобіль. З NINJA TAXI ви можете рухатися вперед у майбутнє без
            зайвих затримок.
          </p>
          <router-link to="/charging-stations">
            <button class="learn-more-btn">Читати більше</button>
          </router-link>
        </div>
        <div class="images-block">
          <img src="/images-cloud/index-page/index-five.png" />
        </div>
      </div>
    </section>

    <Footer />

    <ContactMeForm v-if="showContactForm" @close="toggleContactForm" />
  </div>
</template>

<style scoped>
.home-section-one {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 0 auto;
}

.home-section-one .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

.home-section-one .container>div {
  flex-basis: 50%;
}

.home-section-one .container .images-block {
  width: 100%;
  height: 100%;
}

.home-section-one .container .images-block img {
  width: 479px;
  height: 487px;
}

.home-section-one .container .information-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home-section-one .container .information-block .background-img {
  width: 100%;
  height: 100%;
}

.home-section-one .container .information-block .background-img img {
  position: absolute;
  top: -55px;
  right: -145px;
}

.home-section-one .container .information-block .description-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 0 50px;
  position: relative;
  top: -39px;
  right: -60px;
}

.home-section-one .container .information-block .description-info h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 64px;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  margin: 0;
}

.home-section-one .container .information-block .description-info span {
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  text-align: center;
  color: #ec6323;
}

.home-section-one .container .information-block .description-info span img {
  margin-right: 15px;
}

.home-section-one .container .information-block .description-info p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: #fff;
  margin: 0;
}

.home-section-one .container .information-block .description-info button {
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #ec6323;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 20px;
}


/* Section two */
.home-section-two {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 100px auto 0 auto;
}

.home-section-two .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 55px;
}

.home-section-two .container .description-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home-section-two .container .description-info h2 {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 32px;
  text-transform: uppercase;
  color: #141e17;
  margin: 0;
  text-align: left;
  width: 100%;
}

.home-section-two .container .description-info p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #53785e;
  margin: 15px 0 0 0;
}

.home-section-two .container .images-block {
  width: 100%;
  height: 100%;
}


/* Section three */
.background-section {
  background: url("/images-cloud/index-page/index-background.webp") no-repeat;
  background-size: 100% 93%;
}

.home-section-three {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 100px auto 0 auto;
}

.home-section-three .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 55px;
}

.home-section-three .container>div {
  flex-basis: 50%;
}

.home-section-three .container .images-block {
  width: 100%;
  height: 100%;
  position: relative;
}

.home-section-three .container .images-block img {
  width: 100%;
  height: 100%;
}

.home-section-three .container .images-block iframe {
  position: absolute;
  top: 7%;
  left: 13%;
  width: 74%;
  height: 77%;
}

.home-section-three .container .description-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.home-section-three .container .description-info h2 {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 32px;
  text-transform: uppercase;
  color: #fff;
  margin: 58px 0 0 0;
  text-align: left;
  width: 80%;
}

.home-section-three .container .description-info p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #fff;
  margin: 15px 0 15px 0;
}


/* Section four */
.home-section-four {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 65px auto 0 auto;
}

.home-section-four .container {
  display: flex;
  justify-content: flex-start;
  gap: 55px;
  align-items: center;
}

.home-section-four .container>div {
  flex-basis: 50%;
}

.home-section-four .container .description-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.home-section-four .container .description-info h2 {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 32px;
  text-transform: uppercase;
  color: #fff;
  margin: 0;
  text-align: left;
  width: 100%;
}

.home-section-four .container .description-info p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #fff;
  margin: 15px 0 15px 0;
}

.home-section-four .container .images-block {
  width: 100%;
  height: 100%;
}

.home-section-four .container .images-block img {
  width: 100%;
  height: 100%;
}


/* Section five */
.home-section-five {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 100px auto 0 auto;
}

.home-section-five .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 55px;
}

.home-section-five§ .container>div {
  flex-basis: 50%;
}

.home-section-five .container .description-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}

.home-section-five .container .description-info h2 {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 32px;
  text-transform: uppercase;
  color: #141e17;
  margin: 0;
  text-align: left;
  width: 100%;
}

.home-section-five .container .description-info p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #53785e;
  margin: 15px 0 15px 0;
}

.home-section-five .container .images-block {
  width: 100%;
  height: 100%;
}

.home-section-five .container .images-block img {
  width: 100%;
  height: 100%;
}

.contact-me-form {
  background-color: #A1E8B9;
  padding: 35px 66px 55px 66px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 62px;
  border: solid 20px #ec6323;
  width: 60% ;
  height: auto;
  z-index: 10;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
}
</style>
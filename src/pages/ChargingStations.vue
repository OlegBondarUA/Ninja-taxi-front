<template>
  <div class="wrapper">
    <TopNavbar />

    <section class="charging-section-one">
      <div class="container">
        <div class="images-block">
          <img src="/images-cloud/charging-page/charging-one.png" />
        </div>
        <div class="information-block">
          <div class="background-img">
            <img src="/images-cloud/index-page/index-one-right.webp" />
          </div>
          <div class="description-info">
            <h2>ninja ЗАРЯДКИ</h2>
            <p>
              - це швидкий, зручний та екологічно-чистий спосіб заряджати ваш
              електромобіль. З NINJA TAXI ви можете рухатися вперед у майбутнє
              без зайвих затримок.
            </p>
            <button class="learn-more-btn">Дізнатися більше</button>
          </div>
        </div>
      </div>
    </section>

    <section class="charging-section-two">
      <div class="container">
        <div class="title-block">
          <h2>прямуй прямо до цілі. Вже сьогодні</h2>
        </div>
        <Carousel
          :itemsToShow="3"
          :wrapAround="true"
          :transition="4000"
          :autoplay="true"
        >
          <Slide v-for="(card, index) in cards" :key="index">
            <div class="card" :class="{ 'first-card': index === 0 }">
              <img :src="card.image" />
              <h3>{{ card.title }}</h3>
              <p>{{ card.description }}</p>
            </div>
          </Slide>
        </Carousel>
        <button class="learn-more-btn">Співпрацювати</button>
      </div>
    </section>

    <section class="background-section-three">
      <section class="charging-section-three">
        <div class="container">
          <div class="description-info">
            <h2>Абонемент NINJA charger</h2>
            <p>
              Економте на зарядці електрокара! Найнижчі ціни по всій Україні з
              нашим абонементом на швидку зарядку.
            </p>
            <button class="learn-more-btn">Дізнатися подробиці</button>
          </div>
          <div class="images-block">
            <img src="/images-cloud/charging-page/charging-three.png" />
          </div>
        </div>
      </section>
    </section>

    <section class="charging-section-four">
      <div class="container">
        <div class="description-info">
          <h2>Зарядні станції NINJA для інвесторів</h2>
          <p>
            NINJA TAXI пропонує інвесторам вигідні умови співпраці. Ми
            забезпечуємо доступ до зарядних станцій NINJA для електрокарів за
            половину ціни в порівнянні з іншими станціями. Це дозволяє надавати
            вигідні умови для водіїв і уникнути зайвого потоку кандидатів. Кожен
            водій може експлуатувати автомобіль до його повного окупування.
          </p>
          <button class="learn-more-btn">Дізнатися подробиці співпраці</button>
        </div>
        <div class="images-block">
          <img src="/images-cloud/charging-page/charging-four.png" />
          <iframe
            src="https://www.youtube.com/embed/2A-H4y3zkPk"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>

    <section class="background-section-five">
      <section class="charging-section-five">
        <div class="container">
          <div class="images-block">
            <img src="/images-cloud/charging-page/charging-four.png" />
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1slrfdPVLqWA3k6K0VmX8OU6Q0Hx7Zj4&ehbc=2E312F&noprof=1"
              width="640"
              height="480"
            ></iframe>
          </div>
          <div class="description-info">
            <h2>ЗРозташування NINJA ЗАРЯДОК</h2>
            <p>
              Зарядні станції NINJA розташовані в Києві. Ви можете знайти наші
              зарядні станції на карті
            </p>
          </div>
        </div>
      </section>
    </section>

    <section class="charging-station-six">
      <div class="container">
        <div class="how-to-charge">
          <div>
            <h2>Як зарядити Електрокар</h2>
            <ul>
              <li>Завантажити застосунок ECOFACTOR</li>
              <li>Зареєструйтесь у додатку</li>
              <li>Поповнити гаманець в застосунку</li>
              <li>Розпочати зарядку</li>
              <li>Під’єднайте електрокар</li>
              <li>Відскануйте QR-код</li>
              <li>Почніть зарядку</li>
            </ul>
            <div class="images-box">
              <a
                href="https://play.google.com/store/apps/details?id=eu.ecofactor&hl=ru&gl=US&pli=1"
              >
                <img
                  class="img-1"
                  src="/images-cloud/charging-page/charging-six-1.webp"
                  alt=""
                  loading="lazy"
                />
              </a>
              <a
                href="https://apps.apple.com/ua/app/ecofactor-network/id1438716797?l="
              >
                <img
                  class="img-1"
                  src="/images-cloud/charging-page/charging-six-2.webp"
                  alt=""
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="img-box">
          <img
            class="img-1"
            src="/images-cloud/charging-page/charging-six-3.png"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TopNavbar from "../components/TopNavbar.vue";
import Footer from "../components/Footer.vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const cards = ref([
  {
    image: "/images-cloud/charging-page/charging-two-1.png",
    title: "Безпека",
    description:
      "Наші зарядні станції мають захист від перенапруги та системи ізоляції, що запобігають пошкодженню електроніки електромобіля.",
  },
  {
    image: "/images-cloud/charging-page/charging-two-2.png",
    title: "Швидкість",
    description:
      "Наші швидкісні зарядні станції можуть зарядити Ваш електрокар з 0 до 80 за 60 хвилин.",
  },
  {
    image: "/images-cloud/charging-page/charging-two-3.png",
    title: "Вид зарядної станції",
    description: "Наша зарядна станція - 40 kWt GBT/DC.",
  },
  {
    image: "/images-cloud/charging-page/charging-two-4.png",
    title: "Ми завжди на зв’язку",
    description: "Якщо у Вас виникнуть питання - ми завжди з Вами на зв’язку.",
  },
]);
</script>

<style scoped>
.charging-section-one {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 0 auto;
}

.charging-section-one .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

.charging-section-one .container > div {
  flex-basis: 50%;
}

.charging-section-one .container .images-block {
  width: 100%;
  height: 100%;
}

.charging-section-one .container .images-block img {
  width: 479px;
  height: 487px;
}

.charging-section-one .container .information-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.charging-section-one .container .information-block .background-img {
  width: 100%;
  height: 100%;
}

.charging-section-one .container .information-block .background-img img {
  position: absolute;
  top: -55px;
  right: -145px;
}

.charging-section-one .container .information-block .description-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 0 50px;
  position: relative;
  top: -20px;
  right: -60px;
}

.charging-section-one .container .information-block .description-info h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
  color: #ec6323;
  margin: 0;
}

.charging-section-one .container .information-block .description-info span {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  color: #fff;
}

.charging-section-one .container .information-block .description-info span img {
  margin-right: 15px;
}

.charging-section-one .container .information-block .description-info p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: #fff;
  margin: 0;
}

.charging-section-one .container .information-block .description-info button {
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

/* Section Two */
.charging-section-two {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 100px auto 0 auto;
}

.charging-section-two .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.charging-section-two .container .title-block {
  width: 100%;
  height: auto;
  margin-bottom: 50px;
}

.charging-section-two .container .title-block h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  color: #141e17;
  text-align: left;
  margin: 0;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #e5f9ec;
  margin-right: 41px;
  padding: 20px;
  border-radius: 25px;
}

.first-card {
  height: 602px;
}

.card:not(.first-card) {
  height: 558px;
}

.card img {
  width: 100px;
  height: 100px;
  margin: 58px 0 45px 0;
}

.card h3 {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  color: #141e17;
  margin: 0 0 15px 0;
}

.card p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  color: #53785e;
  margin: 0;
}

.charging-section-two .container .learn-more-btn {
  padding: 10px 20px;
  background-color: #ec6323;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: #fff;
  margin-top: 25px;
}

/* Section Three */
.background-section-three {
  background: url("/images-cloud/charging-page/charging-three-bg.png") no-repeat;
  background-size: 100% 100%;
  padding: 40px 0 0 0;
  margin: 100px 0 0 0;
}

.charging-section-three {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 0 auto;
}

.charging-section-three .container {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
}

.charging-section-three .container .description-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
}

.charging-section-three .container .description-info h2 {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 36px;
  text-transform: uppercase;
  color: #fff;
  margin: 0;
}

.charging-section-three .container .description-info p {
  width: 80%;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #fff;
  margin: 0;
}

.charging-section-three .container .description-info button {
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

.charging-section-three .container .images-block {
  width: 100%;
  height: 100%;
}

.charging-section-three .container .images-block img {
  position: relative;
  width: 648px;
  height: 626px;
  left: 12%;
  top: 0;
}

/* Section Four */
.charging-section-four {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 100px auto 0 auto;
}

.charging-section-four .container {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
}

.charging-section-four .container .description-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
}

.charging-section-four .container .description-info h2 {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 36px;
  text-transform: uppercase;
  color: #141e17;
  margin: 0;
}

.charging-section-four .container .description-info p {
  width: 80%;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #53785e;
  margin: 0;
}

.charging-section-four .container .description-info button {
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

.charging-section-four .container .images-block {
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: flex-start;
}

.charging-section-four .container .images-block img {
  width: 100%;
  height: auto;
}

.charging-section-four .container .images-block iframe {
  position: absolute;
  width: 74%;
  height: 79%;
  top: 7%;
  left: 13%;
}

/* Section Five */
.background-section-five {
  background: url("/images-cloud/charging-page/charging-five-bg.png") no-repeat;
  background-size: 100% 100%;
  padding: 115px 0 95px 0;
  margin: 100px 0 0 0;
}

.charging-section-five {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 0 auto;
}

.charging-section-five .container {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
}

.charging-section-five .container .description-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
}

.charging-section-five .container .description-info h2 {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 36px;
  text-transform: uppercase;
  color: #141e17;
  margin: 0;
}

.charging-section-five .container .description-info p {
  width: 80%;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #53785e;
  margin: 0;
}

.charging-section-five .container .images-block {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.charging-section-five .container .images-block img {
  width: 100%;
  height: auto;
}

.charging-section-five .container .images-block iframe {
  position: absolute;
  width: 74%;
  height: 79%;
  top: 7%;
  left: 13%;
}

/* Section Six */
.charging-station-six {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 100px auto 0 auto;
}

.charging-station-six .container {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
}

.charging-station-six .container .how-to-charge {
  display: flex;
  justify-content: center;
  align-items: center;
}

.charging-station-six .container .how-to-charge div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.charging-station-six .container .how-to-charge div h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  color: #141e17;
  margin: 0 0 0 70px;
}

.charging-station-six .container .how-to-charge div ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.charging-station-six .container .how-to-charge div ul li {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #53785e;
  margin: 0 0 15px 0;
}

.charging-station-six .container .how-to-charge ul li::before {
  content: "";
  display: inline-block;
  width: 50px;
  height: 50px;
  background-image: url("/images-cloud/app-check-mark.webp");
  background-size: cover;
  margin-right: 5px;
  vertical-align: middle;
}

.charging-station-six .container .how-to-charge div ul li img {
  margin-right: 15px;
}

.charging-station-six .container .how-to-charge div .images-box {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 100px;
}

.charging-station-six .container .how-to-charge div .images-box a {
  margin: 0 10px;
}

.charging-station-six .container .how-to-charge div .images-box img {
  width: 329px;
  height: 101px;
}

.charging-station-six .container .img-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.charging-station-six .container .img-box img {
  width: 860px;
  height: 470px;
}
</style>

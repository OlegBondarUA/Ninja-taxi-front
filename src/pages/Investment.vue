<template>
  <div class="wrapper">
    <TopNavbar />

    <section class="invest-section-one">
      <div class="container">
        <div class="images-block">
          <img src="/images-cloud/invest-page/invest-block-1.png" />
        </div>
        <div class="information-block">
          <div class="background-img">
            <img src="/images-cloud/index-page/index-one-right.webp" />
          </div>
          <div class="description-info">
            <h2>Інвестуйте в екологічне майбутнє</h2>
            <p>
              Здайте свій електрокар в оренду або інвестуйте гроші в
              електро-таксі та отримуйте пасивний дохід від 14 000 грн щомісячно
              з кожного авто.
            </p>
            <div class="btn-box">
              <button class="contact-me-btm">Інвестувати</button>
              <button class="how-it-works-btm">Як це працює?</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="invest-section-two">
      <div class="how-does-it-work">
        <h2 class="title-how-does-it">Як це працює?</h2>
        <p class="description-how-does-it">
          NINJA TAXI - Ваш надійний партнер, який буде з вами на кожному кроці,
          починаючи з першого дня. Ми забезпечимо вас усім необхідним та станемо
          на допомогу у вирішенні будь-яких питань. Наш підхід - це не просто
          надання послуги, a партнерство, спрямоване на масштабування вашого
          бізнесу.
        </p>
        <button class="free-access-button">Інвестувати</button>
      </div>
      <div class="investment-cards-container">
        <div class="investment-cards">
          <div class="investment-card">
            <h2>01</h2>
            <span class="cart-description">
              Ми знаходимо та допомагаємо придбати електрокар
            </span>
          </div>
          <div class="investment-card">
            <h2>02</h2>
            <span class="cart-description">
              Обладнуємо та готуємо до роботи електрокар
            </span>
          </div>
          <div class="investment-card">
            <h2>03</h2>
            <span class="cart-description">
              Шукаємо водія та запускаємо електрокар в роботу
            </span>
          </div>
          <div class="investment-card">
            <h2>04</h2>
            <span class="cart-description">
              Контролюємо роботу та обслуговуємо електрокар
            </span>
          </div>
          <div class="investment-card">
            <h2>05</h2>
            <span class="cart-description">
              Щотижня виплачуємо дохідність та надаємо звітність
            </span>
          </div>
          <div class="investment-card">
            <h2>06</h2>
            <span class="cart-description">
              Допомагаємо маштабувати Ваш електробізнес
            </span>
          </div>
        </div>
      </div>
      <button class="free-access-button invest-btn">Інвестувати</button>
    </section>

    <section class="invest-section-three">
      <div class="container">
        <div class="title-block">
          <h2>Чому саме NINJA TAXI?</h2>
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

    <section class="background-section">
      <section class="invest-section-four">
        <div class="container">
          <div class="potential-income">
            <h2 class="title-potential-income">
              Оцініть потенційний дохід з вашого електрокара з нашою допомогою!
            </h2>
            <p class="description-potential-income">
              Залиште свою заявку, і ми проаналізуємо ваші дані, щоб надати вам
              конкретний розрахунок доходу з вашого електрокара.
            </p>
          </div>
          <div class="potential-income-box-form">
            <form>
              <div class="client-info">
                <label for="client-city">Місто</label>
                <input
                  type="text"
                  id="client-city"
                  name="client-city"
                  placeholder="Вкажіть ваше місто"
                  required
                />
                <span
                  class="client-error-city error-message"
                  style="color: red; display: none"
                >
                  Це поле обов'язкове
                </span>
              </div>

              <div class="client-info">
                <label for="client-name">Ім’я</label>
                <input
                  type="text"
                  id="client-name"
                  name="client-name"
                  placeholder="Ваше ім’я"
                  required
                />
                <span
                  class="client-error-name error-message"
                  style="color: red; display: none"
                >
                  Це поле обов'язкове
                </span>
              </div>

              <div class="client-info">
                <label for="client-vehicle">Марка та модель</label>
                <input
                  type="text"
                  id="client-vehicle"
                  name="client-vehicle"
                  placeholder="Модель та марка вашого електрокара "
                  required
                />
                <span
                  class="client-error-vehicle error-message"
                  style="color: red; display: none"
                >
                  Це поле обов'язкове
                </span>
              </div>

              <div class="client-info">
                <label for="client-year">Рік</label>
                <input
                  type="text"
                  id="client-year"
                  name="client-year"
                  placeholder="Рік випуску вашого електрокара"
                  required
                />
                <span
                  class="client-error-year error-message"
                  style="color: red; display: none"
                >
                  Це поле обов'язкове
                </span>
              </div>

              <div class="client-info">
                <label for="client-phone">Номер телефону:</label>
                <input
                  type="tel"
                  id="client-phone"
                  name="client-phone"
                  placeholder="(###) ### - ## - ##"
                  required
                />
                <span
                  class="client-error-phone error-message"
                  style="color: red; display: none"
                >
                  Це поле обов'язкове
                </span>
              </div>
              <div class="box-btn">
                <button class="cost-calculation invest-btn">
                  Проконсультуватися
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>

    <section class="invest-section-five">
      <div class="container">
        <div class="asked-questions-container">
          <h2 class="asked-questions-title">Часті запитання</h2>
          <div
            v-for="(question, index) in questions"
            :key="index"
            class="question"
          >
            <h3 class="question-title" @click="toggleAnswer(index)">
              {{ question.title }}
              <svg
                :class="{ open: question.isOpen }"
                width="33"
                height="49"
                viewBox="0 0 33 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33 24.5L0 48.3157L0 0.684301L33 24.5Z"
                  fill="#53785E"
                ></path>
              </svg>
            </h3>
            <p class="answer" v-if="question.isOpen">
              {{ question.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <ConnectFormBlock />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TopNavbar from "../components/TopNavbar.vue";
import Footer from "../components/Footer.vue";
import ConnectFormBlock from "../components/ConnectFormBlock.vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const cards = ref([
  {
    image: "/images-cloud/invest-page/invest-block-3-1.png",
    title: "Почніть з 1 електрокара",
    description:
      "Навіть якщо ви розпочинаєте з одним електрокаром, ми готові підтримати вас. Це важливо зазначити, оскільки багато автопарків реєструються лише при наявності мінімум 5 машин.",
  },
  {
    image: "/images-cloud/invest-page/invest-block-3-2.png",
    title: "Спільні цілі",
    description:
      "Наші цілі з вами однакові - заробляти разом та забезпечувати ріст бізнесу, тому ми спрямовані на досягнення найвищої ефективності флоту елктрокара.",
  },
  {
    image: "/images-cloud/invest-page/invest-block-3-3.png",
    title: "Інфраструктура",
    description:
      "Ми гарантуємо належне функціонування важливої інфраструктури, зокрема, швидких зарядних станцій для вашого електрокара, зі знижкою 50%.",
  },
  {
    image: "/images-cloud/invest-page/invest-block-3-4.png",
    title: "Ефективне управління",
    description:
      "Ми організовуємо роботу з усіма основними агрегаторами, такими як UBER, UKLON та BOLT, за принципом 'єдиної платформи'.",
  },
]);

const questions = ref([
  {
    title: "Яка кількість автомобілів потрібна для реєстрації автопарку?",
    answer:
      "Зазвичай реєстрація автопарку вимагає мінімум 5 автомобілів, що належать одному власнику. Однак ми надаємо можливість розпочати з 1 автомобіля, що дозволяє вам переконатися у його ефективності з мінімальним вхідним порогом.",
    isOpen: false,
  },
  {
    title: "Кому належить автомобіль?",
    answer:
      "Автомобілі, придбані для роботи, реєструються на інвестора, що означає, що ви завжди контролюєте свій актив.",
    isOpen: false,
  },
  {
    title: "Як я можу керувати бізнесом?",
    answer:
      "Ви отримаєте доступ до застосунку власника автопарку, де зможете контролювати всю фінансову активність вашого бізнесу. Звітність за будь-який період дозволить вам тримати руку на пульсі та контролювати все онлайн, включаючи місцезнаходження водіїв. У Автоматизованій системі від NINJA TAXI ви зможете переглянути операційну активність автопарку.",
    isOpen: false,
  },
  {
    title: "Чи можна отримувати прибуток як ФОП або ТОВ?",
    answer:
      "Так, ми розуміємо, наскільки важливо продемонструвати високий рівень прибутку для отримання кредитування та розвитку вашого бізнесу. Ми готові допомогти вам знайти будь-який спосіб отримання прибутку від співпраці з нами.",
    isOpen: false,
  },
  {
    title: "Яка прибутковість такого бізнесу?",
    answer:
      "При оцінці прибутковості ми враховуємо кілька факторів, таких як початкова вартість, модель бізнесу та наявність брендування. Особистий розрахунок можна отримати від вашого персонального менеджера з розвитку автопарку. Наші партнери зазвичай очікують окупності протягом 24-36 місяців, в залежності від регіону.",
    isOpen: false,
  },
]);

const toggleAnswer = (index) => {
  questions.value[index].isOpen = !questions.value[index].isOpen;
};
</script>

<style scoped>
.invest-section-one {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 455px;
  max-width: 1152px;
  margin: 0 auto;
}

.invest-section-one .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

.invest-section-one .container > div {
  flex-basis: 50%;
}

.invest-section-one .container .images-block {
  width: 100%;
  height: 100%;
}

.invest-section-one .container .images-block img {
  position: absolute;
  z-index: 1;
  left: -100px;
  top: 65px;
}

.invest-section-one .container .information-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.invest-section-one .container .information-block .background-img {
  width: 100%;
  height: 100%;
}

.invest-section-one .container .information-block .background-img img {
  position: absolute;
  top: -55px;
  right: -145px;
}

.invest-section-one .container .information-block .description-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 0;
  position: relative;
  top: 0;
  right: -60px;
}

.invest-section-one .container .information-block .description-info h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
  color: #ec6323;
  margin: 0;
}

.invest-section-one .container .information-block .description-info span {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  color: #fff;
}

.invest-section-one .container .information-block .description-info span img {
  margin-right: 15px;
}

.invest-section-one .container .information-block .description-info p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: #fff;
  margin: 0;
}

.invest-section-one .container .information-block .description-info .btn-box {
  width: 100%;
  display: flex;
  gap: 39px;
  align-items: center;
  justify-content: flex-start;
}

.invest-section-one .container .btn-box button {
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #ec6323;
  color: #fff;
  border: none;
  border-radius: 20px;
  width: 261px;
  height: 56px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 20px;
}

.invest-section-one .container .btn-box .how-it-works-btm {
  color: #ec6323;
  background-color: #fff;
}

/* Section two */
.invest-section-two {
  grid-column-gap: 28px;
  grid-row-gap: 28px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
  max-width: 1152px;
  margin: 100px auto 0 auto;
}

.invest-section-two .how-does-it-work {
  position: sticky;
  top: 90px;
  grid-area: span 1 / span 1 / span 1 / span 1;
  align-self: start;
}

.invest-section-two .how-does-it-work h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 32px;
  text-transform: uppercase;
  color: #141e17;
}

.invest-section-two .how-does-it-work p {
  font-family: var(--font-family);
  width: 100%;
  margin-top: 25px;
  color: #53785e;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.invest-section-two .how-does-it-work .free-access-button {
  padding: 10px 20px;
  background-color: #ec6323;
  color: #fff;
  border: none;
  border-radius: 20px;
  width: 261px;
  height: 56px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 20px;
}

.invest-section-two .invest-btn {
  display: none;
}

.invest-section-two .investment-cards-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: url(/images-cloud/invest-page/invest-block-2.png) no-repeat;
  background-size: 100% 100%;
  padding: 52px 105px 58px 39px;
  border-radius: 25px;
}

.investment-cards-container .investment-cards {
  display: flex;
  width: 100%;
  gap: 25px;
  flex-direction: column;
}

.investment-cards-container .investment-cards .investment-card {
  background: #fff;
  padding: 33px 34px 33px 49px;
  border-radius: 20px;
}

.investment-cards-container .investment-cards .investment-card h2 {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 32px;
  text-transform: uppercase;
  color: #38423b;
  margin: 0;
}

.investment-cards-container .investment-cards .investment-card span {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  color: #53785e;
}

/* Section three */
.invest-section-three {
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

.invest-section-three .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.invest-section-three .container .title-block {
  width: 100%;
  height: auto;
  margin-bottom: 50px;
}

.invest-section-three .container .title-block h2 {
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
  margin: 10px 0 5px 0;
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

.invest-section-three .container .learn-more-btn {
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

/* Section four */
.background-section {
  background: url(/images-cloud/invest-page/invest-block-4.png) no-repeat;
  background-size: 100% 100%;
  padding: 50px 0;
  margin-top: 100px;
}

.invest-section-four {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 0 auto;
}

.invest-section-four .container {
  display: flex;
  justify-content: flex-start;
  padding: 50px 0;
  gap: 50px;
}

.invest-section-four .container .potential-income {
  width: 50%;
  padding-left: 50px;
}

.invest-section-four .container .potential-income h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 32px;
  font-variant: small-caps;
  color: #fff;
  margin: 0;
}

.invest-section-four .container .potential-income p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #fff;
  margin-top: 15px;
}

.invest-section-four .container .potential-income-box-form {
  width: 50%;
}

.invest-section-four .container .potential-income-box-form form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.invest-section-four .container .potential-income-box-form form .client-info {
  width: 100%;
  margin-bottom: 25px;
  position: relative;
}

.potential-income-box-form form .client-info label {
  margin-right: 10px;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 25px;
  color: #fff;
}

.potential-income-box-form form .client-info input {
  width: 100%;
  border: none;
  border-radius: 25px;
  padding: 10px 15px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
}

.potential-income-box-form form .client-info input::placeholder {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: rgba(83, 120, 94, 0.5);
}

.potential-income-box-form form .client-info .error-message {
  display: none;
  color: red;
  font-size: 15px;
  float: left;
  position: absolute;
  left: 15px;
  top: 105px;
}

.potential-income-box-form form .box-btn {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.potential-income-box-form form .box-btn button {
  padding: 10px 20px;
  background-color: #ec6323;
  color: #fff;
  border: none;
  border-radius: 20px;
  width: 285px;
  height: 56px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 20px;
}

/* Section five */
.invest-section-five {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1152px;
  margin: 100px auto 0 auto;
}

.invest-section-five .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.invest-section-five .container .asked-questions-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.asked-questions-container .asked-questions-title {
  width: 100%;
  text-align: center;
  margin-bottom: 55px;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 32px;
  font-variant: small-caps;
  color: #141e17;
  margin: 0;
}

.asked-questions-container .question {
  width: 100%;
  border-bottom: 3px solid #a1e8b9;
  margin-bottom: 25px;
}

.asked-questions-container .question-title {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #53785e;
}

.asked-questions-container .question-title svg {
  cursor: pointer;
}

.asked-questions-container .question-title svg.open {
  transform: rotate(90deg);
  .asked-questions-container .answer {
    display: block;
  }
}

.asked-questions-container .question-title svg path {
  transition: fill 0.3s;
}

.asked-questions-container .question-title h3 {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 25px;
  color: #141e17;
  margin: 0;
}

.asked-questions-container .answer {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #53785e;
}
</style>

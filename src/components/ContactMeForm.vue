<template>
  <div v-if="visible" class="contact-me-form">
    <div class="form-header">
      <h2>Зв’яжіться зі мною</h2>
      <h3>Заповніть форму та наш менеджер зв'яжеться з Вами</h3>
    </div>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <input type="text" id="name" placeholder="Ваше ім’я*" v-model="name" required>
      </div>
      <div class="form-group">
        <input type="tel" id="phone" placeholder="Ваш номер телефону*" v-model="phone" required>
      </div>
      <div class="form-group">
        <input type="email" id="email" placeholder="Ваша електронна адреса*" v-model="email" required>
      </div>
      <button type="submit" class="submit-btn">Зв'яжіться зі мною</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      name: '',
      phone: '',
      email: '',
    };
  },
  methods: {
    closeForm() {
      this.visible = false;
    },
    submitForm() {
      const clientData = {
        name: this.name,
        phone: this.phone,
        email: this.email,
      };
      console.log(clientData);
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.form-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.form-header h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
  color: #ec6323;
  margin: 0;
}

.form-header h3 {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  color: #38423b;
  margin: 15px 0 24px 0;
}

.form-group {
  margin-bottom: 15px;
}

.form-group input {
  width: 100%;
  border-radius: 62px;
  height: 75px;
  padding: 0 25px;
  border: none;
  font-size: 25px;
}

.form-group input::placeholder {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 25px;
  color: #53785e;
}

.submit-btn {
  width: 100%;
  padding: 10px;
  background: #ec6323;
  border: none;
  border-radius: 62px;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 25px;
  color: #fff;
}
</style>
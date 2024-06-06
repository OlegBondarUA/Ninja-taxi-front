<template>
  <div class="login-form">
    <h2>Особистий кабінет</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="login">Логін</label>
        <input type="text" id="login" v-model="login" required>
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <div class="password-input">
          <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" required>
          <button type="button" @click="toggleShowPassword">
            <span v-if="showPassword" class="password-icon">&#x2713;</span>
            <span v-else class="password-icon"></span>
            Показати пароль
          </button>
        </div>
      </div>
      <div class="btn-group">
        <div class="form-group-btn">
          <router-link to="/forgot-password">Я забув пароль</router-link>
        </div>
        <button type="submit">Вхід</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

export default {
  name: "LoginForm",
  data() {
    return {
      login: "",
      password: "",
      showPassword: false
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const csrfToken = getCookie('csrftoken');

        const response = await axios.post('http://localhost:8000/post-request/', {
          action: "login_invest",
          login: this.login,
          password: this.password
        }, {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken
          },
          withCredentials: true
        });

        if (response.data.success) {
          this.$emit('loginSuccess');
        }

        console.log('Response:', response.data['success']);
      } catch (error) {
        console.error('Error:', error);
      }
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  border: none;
  background-color: #ec6323;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}

button[type="button"] {
  background-color: transparent;
  color: #ec6323;
  margin-top: 5px;
  margin-left: 15px;
}

button[type="button"]:hover {
  text-decoration: underline;
}

.password-input {
  position: relative;
}

.password-icon {
  position: absolute;
  top: 77%;
  left: 0;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.password-icon::before {
  content: '';
}

.btn-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.btn-group button {
  width: 100%;
}

.btn-group a {
  color: #ec6323;
  text-decoration: none;
  text-align: center;
  border: 3px solid #ec6323;
  border-radius: 20px;
  padding: 5px 15px;
}

.form-group-btn {
    width: 100%;
}
</style>
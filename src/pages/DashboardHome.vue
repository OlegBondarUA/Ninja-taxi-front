<template>
    <div class="wrapper">
      <div class="sidebar">
        <router-link to="/" class="logo">Логотип</router-link>
        <nav class="nav">
          <router-link to="/dashboard" class="nav-item">Інформаційна панель</router-link>
          <router-link to="/cars" class="nav-item">Автомобілі</router-link>
          <router-link to="/drivers" class="nav-item">Водії</router-link>
          <router-link to="/fleet-management" class="nav-item">Керування автопарком</router-link>
          <router-link to="/driver-schedule" class="nav-item">Розклад водіїв</router-link>
          <router-link to="/aggregator-integration" class="nav-item">Підключення агрегаторів</router-link>
        </nav>
        <button class="logout-button" @click="logout">Вийти</button>
      </div>
      <div class="main-content">
        <header class="header">
          <h1>Назва автопарку</h1>
        </header>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        // Логіка виходу з системи
        console.log("Вихід з системи");
      }
    }
  }
  </script>
  
  <style scoped>
  .wrapper {
    display: flex;
    height: 100vh; /* Встановлення висоти на весь екран */
  }
  
  .sidebar {
    width: 380px; /* Встановлення ширини */
    background-color: #f0f0f0; /* Колір фону за бажанням */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Розташування елементів зверху і знизу */
    padding: 20px;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
    margin-bottom: 20px;
  }
  
  .nav {
    flex-grow: 1;
  }
  
  .nav-item {
    display: block;
    margin-bottom: 15px;
    text-decoration: none;
    color: #333;
  }
  
  .nav-item:hover {
    text-decoration: underline;
  }
  
  .logout-button {
    background-color: #d9534f;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    text-align: center;
  }
  
  .logout-button:hover {
    background-color: #c9302c;
  }
  
  .main-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .header {
    background-color: #f8f9fa; /* Світло-сірий фон */
    padding: 20px;
    border-bottom: 1px solid #e7e7e7; /* Сірий бордер знизу */
  }
  
  .header h1 {
    margin: 0;
    font-size: 24px;
  }
  
  .content {
    flex-grow: 1;
    padding: 20px;
  }
  </style>
  
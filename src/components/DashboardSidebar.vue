<template>
    <div :class="['sidebar', { 'collapsed': isSidebarCollapsed }]">
      <router-link :to="'/'" :class="{ 'collapsed-logo': isSidebarCollapsed }">
        <img
          :src="isSidebarCollapsed ? '/images-cloud/dasboard-home-sidebar/logo2.svg' : '/images-cloud/dasboard-home-sidebar/logo.svg'"
          alt="logo">
      </router-link>
      <nav class="nav">
        <router-link to="/dashboard" class="nav-item">
          <img src="/images-cloud/dasboard-home-sidebar/house.svg" alt="house" class="nav-icon">
          <span v-if="!isSidebarCollapsed">Інформаційна панель</span>
        </router-link>
        <router-link to="/cars" class="nav-item">
          <img src="/images-cloud/dasboard-home-sidebar/vehicle.svg" alt="vehicle" class="nav-icon">
          <span v-if="!isSidebarCollapsed">Автомобілі</span>
        </router-link>
        <router-link to="/drivers" class="nav-item">
          <img src="/images-cloud/dasboard-home-sidebar/drivers.svg" alt="drivers" class="nav-icon">
          <span v-if="!isSidebarCollapsed">Водії</span>
        </router-link>
        <router-link to="/fleet-management" class="nav-item">
          <img src="/images-cloud/dasboard-home-sidebar/key.svg" alt="key" class="nav-icon">
          <span v-if="!isSidebarCollapsed">Керування автопарком</span>
        </router-link>
        <router-link to="/driver-schedule" class="nav-item">
          <img src="/images-cloud/dasboard-home-sidebar/calendar.svg" alt="calendar" class="nav-icon">
          <span v-if="!isSidebarCollapsed">Розклад водіїв</span>
        </router-link>
        <router-link to="/aggregator-integration" class="nav-item">
          <img src="/images-cloud/dasboard-home-sidebar/agregators.svg" alt="agregators" class="nav-icon">
          <span v-if="!isSidebarCollapsed">Підключення агрегаторів</span>
        </router-link>
      </nav>
      <div class="exit-btn">
        <img v-if="isSidebarCollapsed" src="/images-cloud/dasboard-home-sidebar/exit.svg" alt="exit" class="logout-icon">
        <button v-if="!isSidebarCollapsed" class="logout-button" @click="logout">
          <span>Вийти</span>
        </button>
      </div>
      <button :class="['collapsing-sidebar', { 'collapsed-button': isSidebarCollapsed }]" @click="toggleSidebar">
        <img :class="{ 'rotated': !isSidebarCollapsed }" src="/images-cloud/dasboard-home-sidebar/arrows.svg" alt="arrows">
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isSidebarCollapsed: true
      };
    },
    methods: {
      logout() {
        console.log("Вихід з системи");
      },
      toggleSidebar() {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
      }
    }
  }
  </script>
  
  <style scoped>
  .sidebar {
    width: 380px;
    background-color: #a1e8b9;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
    position: relative;
    transition: width 0.3s;
  }
  
  .sidebar.collapsed {
    width: 115px;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
    margin-bottom: 20px;
  }
  
  .nav {
    margin-top: 55px;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin-bottom: 25px;
    text-decoration: none;
  }
  
  .nav-item img {
    width: 50px;
    height: auto;
  }
  
  .nav-item span {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 25px;
    color: #141e17;
  }
  
  .logout-button {
    width: 100%;
    border: none;
    padding: 10px;
    cursor: pointer;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #fff;
    border-radius: 25px;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    color: #141e17;
  }
  
  .collapsing-sidebar {
    position: absolute;
    border-radius: 18px;
    width: 35px;
    height: 37px;
    background: #a1e8b9;
    border: none;
    left: 96%;
    top: 48%;
    padding-right: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .collapsing-sidebar.collapsed-button {
    left: 87%;
  }
  
  a.collapsed-logo {
    width: 100%;
    height: auto;
  }
  
  a.collapsed-logo img {
    width: 100%;
    height: auto;
  }
  
  .exit-btn {
    width: 100%;
    height: auto;
  }
  
  .exit-btn img {
    width: 50px;
    height: auto;
  }
  
  .collapsing-sidebar img {
    transition: transform 0.3s;
  }
  
  .collapsing-sidebar img.rotated {
    transform: rotate(180deg);
  }
  </style>
  
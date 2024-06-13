<template>
  <div class="wrapper">
    <div class="sidebar">
      <router-link to="/">
        <img src="/images-cloud/dasboard-home-sidebar/logo.svg" alt="logo">
      </router-link>
      <nav class="nav">
        <router-link to="/dashboard" class="nav-item">
          <img src="/images-cloud/dasboard-home-sidebar/house.svg" alt="house" class="nav-icon">
          <span>Інформаційна панель</span>
        </router-link>
        <router-link to="/cars" class="nav-item">
          <img src="/images-cloud/dasboard-home-sidebar/vehicle.svg" alt="vehicle" class="nav-icon">
          <span>Автомобілі</span>
        </router-link>
        <router-link to="/drivers" class="nav-item">
          <img src="/images-cloud/dasboard-home-sidebar/drivers.svg" alt="drivers" class="nav-icon">
          <span>Водії</span>
        </router-link>
        <router-link to="/fleet-management" class="nav-item">
          <img src="/images-cloud/dasboard-home-sidebar/key.svg" alt="key" class="nav-icon">
          <span>Керування автопарком</span>
        </router-link>
        <router-link to="/driver-schedule" class="nav-item">
          <img src="/images-cloud/dasboard-home-sidebar/calendar.svg" alt="calendar" class="nav-icon">
          <span>Розклад водіїв</span>
        </router-link>
        <router-link to="/aggregator-integration" class="nav-item">
          <img src="/images-cloud/dasboard-home-sidebar/agregators.svg" alt="agregators" class="nav-icon">
          <span>Підключення агрегаторів</span>
        </router-link>
      </nav>
      <button class="logout-button" @click="logout">Вийти</button>
      <button class="collapsing-sidebar"><img src="/images-cloud/dasboard-home-sidebar/arrows.svg"
          alt="arrows"></button>
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
  height: 100vh;
}

.sidebar {
  width: 380px;
  background-color: #a1e8b9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  position: relative;
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

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 20px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.header h1 {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 36px;
  text-transform: uppercase;
  color: #141e17;
}

.content {
  flex-grow: 1;
  padding: 20px;
}

.collapsing-sidebar {
  position: absolute;
  border-radius: 18px;
  width: 90px;
  height: 37px;
  background: #a1e8b9;
  border: none;
  left: 85%;
  top: 37%;
  padding-right: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
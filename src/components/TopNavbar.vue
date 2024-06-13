<template>
  <nav class="header fixed-top" ref="headRef">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="/images-cloud/logo.svg" alt="logo">
        </router-link>
      </div>
      <ul class="nav me-auto">
        <li class="nav-item"><router-link to="/" class="nav-link px-2 active" aria-current="page">Головна</router-link>
        </li>
        <li class="nav-item dropdown" @mouseenter="showServiceDropdown = true" @mouseleave="showServiceDropdown = false">
          <span class="nav-link px-2" id="navbarDropdown" role="button" aria-expanded="false">Обрати послугу</span>
          <ul class="dropdown-menu dropdown-menu-service" aria-labelledby="navbarDropdown"
            :style="{ display: showServiceDropdown ? 'block' : 'none' }" @mouseenter="showServiceDropdown = true"
            @mouseleave="showServiceDropdown = false">
            <li><router-link to="/charging-stations" class="dropdown-item">Зарядні станції</router-link></li>
            <li><router-link to="/pricing" class="dropdown-item">Вартість автоматизованої системи</router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown" @mouseenter="showBusinessDropdown = true" @mouseleave="showBusinessDropdown = false">
          <span class="nav-link px-2" id="navbarDropdownBusiness" role="button" aria-expanded="false">Для бізнесу</span>
          <ul class="dropdown-menu dropdown-menu-business" aria-labelledby="navbarDropdownBusiness"
            :style="{ display: showBusinessDropdown ? 'block' : 'none' }" @mouseenter="showBusinessDropdown = true"
            @mouseleave="showBusinessDropdown = false">
            <li><router-link to="/business/investors" class="dropdown-item">Інвесторам</router-link></li>
            <li><router-link to="/business/fleet-owners" class="dropdown-item">Власникам автопарку</router-link></li>
          </ul>
        </li>
        <li class="nav-item dropdown" @mouseenter="showIconsDropdown = true" @mouseleave="showIconsDropdown = false">
          <span class="nav-link px-2" id="navbarDropdownIcons" role="button" aria-expanded="false">Приєднатися</span>
          <ul class="dropdown-menu social-icons" aria-labelledby="navbarDropdownIcons"
            :style="{ display: showIconsDropdown ? 'block' : 'none' }" @mouseenter="showIconsDropdown = true"
            @mouseleave="showIconsDropdown = false">
            <li class="icon"><a href="https://www.instagram.com/ninjataxi.ua/"><i class="fab fa-instagram"></i></a></li>
            <li class="icon"><a href="https://www.facebook.com/profile.php?id=61554407076136"><i
                  class="fab fa-facebook"></i></a></li>
            <li class="icon"><a href="https://www.tiktok.com/@ninja.taxi?_t=8gRmG4idFNl"><i
                  class="fab fa-tiktok"></i></a></li>
            <li class="icon"><a href="https://www.linkedin.com/company/ninja-taxi/"><i class="fab fa-linkedin"></i></a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="sing-in dropdown" @click="handleLoginClick">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M32.9948 17.0047C32.9948 22.106 30.6076 26.6578 26.8752 29.5802C24.1611 31.7259 20.7224 33 16.9995 33C13.2671 33 9.82841 31.7259 7.11437 29.5802C3.38672 26.6531 0.999512 22.106 0.999512 17.0047C0.999512 8.16163 8.16115 1 17.0042 1C25.8379 1 32.9948 8.16163 32.9948 17.0047Z"
            :fill="isLoggedIn ? '#a1e8b9' : '#fff'" stroke="#EC6323" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
          <path
            d="M23.6783 14.4942C23.6783 10.8045 20.6896 7.8157 16.9998 7.8157C13.31 7.8157 10.3213 10.8045 10.3213 14.4942C10.3213 18.184 13.31 21.1727 16.9998 21.1727C20.6896 21.1775 23.6783 18.184 23.6783 14.4942Z"
            fill="#EC6323" stroke="#EC6323" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M26.8804 29.5751C24.1664 31.7207 20.7277 32.9949 17.0048 32.9949C13.2724 32.9949 9.83366 31.7207 7.11963 29.5751C8.10956 25.0328 12.1593 21.6319 17.0048 21.6319C21.836 21.6319 25.8858 25.0328 26.8804 29.5751Z"
            fill="#EC6323" stroke="#EC6323" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  </nav>

  <div v-if="showLoginModal" class="modal-overlay" @click="hideLoginModal">
    <div class="modal-content" @click.stop>
      <LoginForm @close="hideLoginModal" @loginSuccess="handleLoginSuccess" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import axios from 'axios';
import LoginForm from "./LoginForm.vue";
import { useRouter } from 'vue-router';

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

export default defineComponent({
  name: "TopNavbar",
  components: {
    LoginForm,
  },
  setup() {
    const headRef = ref(null);
    const showLoginModal = ref(false);
    const showServiceDropdown = ref(false);
    const showBusinessDropdown = ref(false);
    const showIconsDropdown = ref(false);
    const isLoggedIn = ref(false);
    const router = useRouter();

    const checkToken = () => {
      const token = getCookie('jwt_token');
      if (token) {
        isLoggedIn.value = true;
      }
    };

    const handleScroll = () => {
      if (headRef.value) {
        const curr = window.scrollY;
        if (curr >= 10) {
          headRef.value.classList.add("fx");
        } else {
          headRef.value.classList.remove("fx");
        }
      }
    };

    onMounted(() => {
      checkToken();
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    const toggleBodyOverflow = (toggle) => {
      if (toggle) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    };

    const hideLoginModal = () => {
      showLoginModal.value = false;
      toggleBodyOverflow(false);
    };

    const handleLoginSuccess = () => {
      isLoggedIn.value = true;
      hideLoginModal();
    };

    const handleLoginClick = async () => {
      const token = getCookie('jwt_token');
      const csrfToken = getCookie('csrftoken');
      if (token) {
        try {
          const response = await axios.post('http://localhost:8000/verify-token/', {}, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'X-CSRFToken': csrfToken
            },
            withCredentials: true
          });

          if (response.data.success) {
            isLoggedIn.value = true;
            router.push('/dashboard');
          } else {
            showLoginModal.value = true;
            toggleBodyOverflow(true);
          }
        } catch (error) {
          console.error('Token verification failed:', error);
          showLoginModal.value = true;
          toggleBodyOverflow(true);
        }
      } else {
        showLoginModal.value = true;
        toggleBodyOverflow(true);
      }
    };

    return {
      headRef,
      showLoginModal,
      showServiceDropdown,
      showBusinessDropdown,
      showIconsDropdown,
      toggleBodyOverflow,
      hideLoginModal,
      handleLoginSuccess,
      handleLoginClick,
      isLoggedIn
    };
  },
});
</script>

<style scoped>
.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header.fx {
  background: rgba(255, 255, 255, .2);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
}

.header .container {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 0;
  max-width: 1152px;
  margin: 0 auto;
}

.header .logo {
  width: 160px;
  height: 42px;
}

.header .logo img {
  width: 100%;
  height: 100%;
}

.header .nav {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0 0 0 141px;
}

.header .nav li {
  list-style: none;
}

.header .nav li span,
.header .nav li a {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  color: #141e17;
  text-decoration: none;
}

.header .nav .nav-item:nth-child(2) {
  margin-left: 40px;
}

.header .nav .nav-item:nth-child(3) {
  margin-left: 33px;
}

.header .nav .nav-item:nth-child(4) {
  margin-left: 177px;
  background-color: #f0f0f0;
  border-radius: 25px;
  padding: 5px 10px;
  color: #EC6323;
  text-decoration: none;
  transition: background-color 0.3s;
  cursor: pointer;
}

.header .nav .nav-item:nth-child(4) span {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 16px;
  color: #ed6d30;
  text-decoration: none;
}

.header .nav .nav-item {
  position: relative;
}

.header .nav .nav-item .dropdown-menu {
  position: absolute;
  top: 30px;
  left: -10px;
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  width: 200px;
}


.header .nav .nav-item .dropdown-menu li a {
  display: block;
  margin: 0;
  padding: 10px;
  color: #666;
}

.header .nav .nav-item .dropdown-menu.social-icons {
  position: absolute;
  top: 40px;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 63px;
  width: 150px;
}

.header .nav .nav-item .dropdown-menu.social-icons li a {
  text-align: center;
}

.header .nav .nav-item .dropdown-menu.social-icons li a i {
  font-size: 50px;
  color: black;
}

.header .sing-in {
  margin-left: 58px;
  display: flex;
  align-items: center;
}

#dropdownUser2 {
  min-width: 40px;
}

.wrapper .fixed-top {
  position: sticky;
  z-index: 2100;
}

.modal-overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2200;
  width: 100%;
  height: 100vh;
}


.modal-content {
  background: #a1e8b9;
  padding: 30px;
  max-width: 470px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
}
</style>

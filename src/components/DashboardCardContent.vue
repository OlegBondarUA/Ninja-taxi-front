<template>
  <div class="dashboard-content">
    <DashboardCard title="Дохід" icon="/images-cloud/dasboard-home-sidebar/income.png" button-text="Список незакритих виплат" button-icon="/images-cloud/dasboard-home-sidebar/eyes.png" :button-action="showUnpaidList">
      <p><span>Загальний:</span> <span>{{ income.total }}</span></p>
      <p><span>Чистий:</span> <span>{{ income.net }}</span></p>
      <p><span>За холостий пробіг:</span> <span>{{ income.emptyMileage }}</span></p>
      <p><span>Не закриті виплати:</span> <span>{{ income.unpaid }}</span></p>
    </DashboardCard>
    <DashboardCard title="Витрати" icon="/images-cloud/dasboard-home-sidebar/income.png">
      <p><span>Витрати водія:</span> <span>{{ expenses.driver }}</span></p>
      <p><span>Витрати автомобіля:</span> <span>{{ expenses.vehicle }}</span></p>
      <p><span>Заряджено:</span> <span>{{ expenses.charged }}</span></p>
    </DashboardCard>
    <DashboardCard title="Пробіг (км)">
      <p><span>Холостий:</span> <span>{{ mileage.empty }}</span></p>
      <p><span>Холостий не виплачений:</span> <span>{{ mileage.unpaidEmpty }}</span></p>
      <p><span>Загальний:</span> <span>{{ mileage.total }}</span></p>
    </DashboardCard>
    <DashboardCard title="Ефективність (грн/км)">
      <p><span>Середня ефективність автомобіля:</span> <span>{{ efficiency.average }}</span></p>
    </DashboardCard>
  </div>
</template>

<script>
import DashboardCard from './DashboardCard.vue';

export default {
  components: {
    DashboardCard
  },
  data() {
    return {
      income: {
        total: '1000₴',
        net: '800₴',
        emptyMileage: '100₴',
        unpaid: '100₴'
      },
      expenses: {
        driver: '200₴',
        vehicle: '300₴',
        charged: '100₴'
      },
      mileage: {
        empty: '100',
        unpaidEmpty: '50',
        total: '1000'
      },
      efficiency: {
        average: '10.12'
      }
    };
  },
  methods: {
    showUnpaidList() {
      console.log("Показати список незакритих виплат");
    }
  }
}
</script>

<style scoped>
.dashboard-content {
  display: flex;
  gap: 20px;
  justify-content: space-around;
}



.card-content p {
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
}
</style>
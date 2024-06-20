<template>
  <div class="wrapper">
    <DashboardSidebar />
    <div class="main-content">
      <DashboardHeader />
      <div class="content">
        <div class="page-title">
          <h2>Інформаційна панель</h2>
        </div>
        <DashboardDateRangeFilter />
        <DashboardCardContent />
        <DasboardChartEarningsDrivers />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardSidebar from '../components/DashboardSidebar.vue';
import DashboardHeader from '../components/DashboardHeader.vue';
import DashboardCardContent from '../components/DashboardCardContent.vue';
import DashboardDateRangeFilter from '../components/DashboardDateRangeFilter.vue';
import DasboardChartEarningsDrivers from '../components/DasboardChartEarningsDrivers.vue';

export default {
  components: {
    DashboardSidebar,
    DashboardHeader,
    DashboardCardContent,
    DashboardDateRangeFilter,
    DasboardChartEarningsDrivers
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  height: auto;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
  padding: 20px;
}

.page-title h2 {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 32px;
  color: #141e17;
}
</style>

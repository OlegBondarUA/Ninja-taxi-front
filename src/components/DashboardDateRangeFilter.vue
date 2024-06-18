<template>
	<div class="date-range-filter">
		<div class="filter-controls">
			<label for="period-select">Обери період:</label>
			<select id="period-select" v-model="selectedPeriod" @change="handlePeriodChange">
				<option value="today">Сьогодні</option>
				<option value="yesterday">Вчора</option>
				<option value="currentWeek">Поточний тиждень</option>
				<option value="lastWeek">Минулий тиждень</option>
				<option value="currentMonth">Поточний місяць</option>
				<option value="lastMonth">Минулий місяць</option>
				<option value="currentQuarter">Поточний квартал</option>
				<option value="lastQuarter">Минулий квартал</option>
				<option value="custom">Обрати період</option>
			</select>
		</div>
		<div v-if="selectedPeriod === 'custom'" class="custom-date-range">
			<label for="start-date">З:</label>
			<input type="date" id="start-date" v-model="customStartDate" />
			<label for="end-date">По:</label>
			<input type="date" id="end-date" v-model="customEndDate" />
			<button class="filtered-castom-period-btn">Фільтрувати</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedPeriod: 'today',
			customStartDate: '',
			customEndDate: ''
		};
	},
	methods: {
		handlePeriodChange() {
			console.log("Selected period:", this.selectedPeriod);
			if (this.selectedPeriod !== 'custom') {
				this.customStartDate = '';
				this.customEndDate = '';
			}
		}
	}
};
</script>

<style scoped>
.date-range-filter {
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.filter-controls {
	display: flex;
	align-items: center;
	gap: 10px;
}

.custom-date-range {
	display: flex;
	gap: 10px;
	align-items: center;
}

.date-range-filter label {
	font-family: var(--font-family);
	font-weight: 400;
	font-size: 23px;
	color: #26392c;
}

.date-range-filter select,
.date-range-filter input {
	font-size: 16px;
	padding: 5px;
	border: none;
	border-radius: 25px;
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.date-range-filter select {
	font-family: var(--font-family);
	font-weight: 400;
	font-size: 23px;
	color: #53785e;
}

.date-range-filter select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url('..//../public/images-cloud/dasboard-home-sidebar/custom-arrow.svg') no-repeat right center;
  background-size: 1em;
  background-position: calc(100% - 0.5em) center;
  padding-right: 2em;
	padding-left: 0.5em;
}

.date-range-filter select:focus {
	outline: none;
}

.date-range-filter select::-ms-expand {
  display: none;
}

.custom-date-range button {
	border: none;
	border-radius: 25px;
	background: #EC6323;
	padding: 8px 16px;
	font-size: 16px;
	color: white;
	cursor: pointer;
	margin-left: 10px;
}
</style>
<template>
    <div v-if="visible" class="contact-me-form">
        <div class="form-header">
            <h2>Contact Me</h2>
            <button @click="closeForm" class="close-btn">×</button>
        </div>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="name">Ім'я:</label>
                <input type="text" id="name" v-model="name" required>
            </div>
            <div class="form-group">
                <label for="phone">Телефон:</label>
                <input type="tel" id="phone" v-model="phone" required>
            </div>
            <div class="form-group">
                <label for="email">Електронна пошта:</label>
                <input type="email" id="email" v-model="email" required>
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
            // Тут можна додати логіку для відправки даних в CRM
            const clientData = {
                name: this.name,
                phone: this.phone,
                email: this.email,
            };
            console.log(clientData);
            // Наприклад, використовуючи fetch або axios для відправки даних на сервер
            // axios.post('/api/contact', clientData).then(response => { ... })
            this.visible = false;
        },
    },
};
</script>

<style scoped>
.contact-me-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
}

.form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.close-btn {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input {
    width: calc(100% - 10px);
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.submit-btn {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

.submit-btn:hover {
    background-color: #0056b3;
}
</style>
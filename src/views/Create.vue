<template>
    <div class="create">
        <img src="https://img.icons8.com/color/96/000000/test-account.png" alt="image" />
        <h2>
            Name
            <input v-model="newEmployee.name" />
        </h2>Role
        <input v-model="newEmployee.role" />
        <p>
            Mobil
            <input v-model="newEmployee.mobile" />
        </p>
        <p>
            Epost
            <input v-model="newEmployee.email" />
        </p>
        <router-link v-bind:to="'/staff/'">
            <img
                class="checkmark"
                src="https://img.icons8.com/android/24/000000/checkmark.png"
                alt="icon"
                v-on:click="addEmployee"
            />
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {

            newEmployee: {
                id: 0,
                name: "",
                role: "",
                mobile: "",
                email: ""
            }
        };
    },
    methods: {
        addEmployee() {
             this.$store.dispatch('addEmployee',this.newEmployee);
        }
    }
};
</script>
<style lang="scss" scoped>
    .create{
        padding-top: 2rem;
    }
</style>

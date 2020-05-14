<template>
    <div class="edit" v-if="getEmployee">
        <h1>Detaljer</h1>
        <img src="https://img.icons8.com/color/96/000000/test-account.png" alt="image" />
        <h2>
            <input class="name" v-model="getEmployee.name" />

            <router-link v-bind:to="'/staff/' +getEmployee.id">
                <img
                    class="checkmark"
                    src="https://img.icons8.com/android/24/000000/checkmark.png"
                    alt="icon"
                />
            </router-link>
        </h2>

        <h3>
            <input class="role" v-model="getEmployee.role" />
        </h3>
        <p>
            <span>Mobil</span>
            <input v-model="getEmployee.mobile" />
        </p>
        <p>
            <span>Epost</span>
            <input v-model="getEmployee.email" />
        </p>
        <img
            class="trash"
            src="https://img.icons8.com/dotty/50/000000/trash.png"
            alt="remove"
            v-on:click="togglePopUp"
        />
        <div class="overlay" v-if="showPopUp">
            <div class="popup">
                <h2>Är du säker att di vill ta bort {{getEmployee.name}}?</h2>
                <router-link v-bind:to="'/staff'">
                    <button v-on:click="removeEmployee(getEmployee.id)">Ja</button>
                </router-link>
                <button v-on:click="togglePopUp">Nej</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditView",
    components: {},
    data() {
        return {
            showPopUp: false
        };
    },
    methods: {
        togglePopUp() {
            this.showPopUp = !this.showPopUp;
        },
        removeEmployee(id) {
            this.$root.removeEmployee(id);
        }
    },
    computed: {
        getEmployee() {
            return this.$root.getEmployee(this.$route.params.id);
        }
    }
};
</script>
<style lang="scss" scoped>
.edit {
    display: flex;
    flex-direction: column;
    min-width: 400px;
    padding: 2rem 0;
    margin: 1rem 0rem;
}
img {
    object-fit: contain;
}
.checkmark,
.trash {
    padding-left: 0.5rem;
    &:hover {
        cursor: pointer;
    }
}
.name {
    max-width: 70%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
}
.role {
    font-size: 1.17rem;
    text-align: center;
    font-weight: bold;
}

.overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.774);
    top: 0;
    left: 0;
}

.popup {
    position: relative;
    width: 300px;
    background: lightgray;
    border: 2px solid gray;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}
button {
    margin: 1rem 1rem;
    padding: 0.5rem 1rem;
    &:hover {
        cursor: pointer;
    }
}
span {
    font-weight: bold;
    padding-right: 1rem;
}
</style>

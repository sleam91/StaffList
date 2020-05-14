<template>
    <router-link class="employee-name" v-bind:to="'/staff/' + employee.id">
        <img src="https://img.icons8.com/color/24/000000/test-account.png" alt="image" />
        {{employee.name}}
    </router-link>
</template>

<script>
export default {
    name: "StaffName",
    props: {
        employee: Object
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
.employee-name {
    min-width: 200px;

    padding: 2rem 0;
    &:hover {
        background: lightgray;
    }
}
a {
    text-decoration: none;
    color: black;
}
</style>

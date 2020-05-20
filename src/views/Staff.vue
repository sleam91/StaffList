<template>
    <div class="staff">
        <div class="staff-list">
            <h1>Anställda</h1>
            <StaffName
                v-for="employee in $store.state.staff"
                v-bind:key="employee.id"
                v-bind:employee="employee"
            />
        </div>
        <div class="details" v-if="!this.$route.params.id"><h1>Detaljer</h1></div>
        <router-view />
    </div>
</template>

<script>
import StaffName from "@/components/StaffName.vue";

export default {
    name: "StaffView",
    components: {
        StaffName
    }
};
</script>
<style lang="scss" scoped>
.staff{
    display: flex;
    justify-content: center;
}   
.staff-list{
    padding: 2rem 5rem;
    margin: 1rem 3rem;
    display: flex;
    flex-direction: column;
    background: rgba(211, 211, 211, 0.205);
    
}
.details{
    min-width: 400px;
    padding: 2rem 0;
    margin: 1rem 0rem;
}


router-view {
    display: flex;
}
</style>

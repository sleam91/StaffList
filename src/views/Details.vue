<template>
    <div class="employee-details">
        <h1>Detaljer</h1>
        <img src="https://img.icons8.com/color/96/000000/test-account.png" alt="image" />
        <h2>
            {{getEmployee.name}}
             <router-link v-bind:to="'/staff/' +getEmployee.id+'/edit'"><img
                class="edit"
                src="https://img.icons8.com/material-rounded/24/000000/edit.png"
                alt="icon"
            /></router-link>
        </h2>
        <h3>{{getEmployee.role}}</h3>
        
        <p><span>Mobil</span> {{getEmployee.mobile}}</p>
        <p><span>Epost</span> {{getEmployee.email}}</p>
       
    </div>
</template>

<script>
export default {
    name: "DetailsView",
    components: {},
    computed: {
        getEmployee() {
            return this.$root.getEmployee(this.$route.params.id);
        }
    }
};
</script>
<style lang="scss" scoped>
.employee-details {
    display: flex;
    flex-direction: column;
    min-width: 400px;
    padding: 2rem 0;
    margin: 1rem 0rem;
}
img {
    object-fit: contain;
}
.edit{
    &:hover{
        cursor: pointer;
    }
}

span{
    font-weight: bold;
    padding-right: 1rem;
}
</style>

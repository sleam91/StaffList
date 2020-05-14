<template>
    <div id="app">
        <CookieConsent/>
        <router-link class="nav" to="/staff">Staff List</router-link>
        <router-link class="nav" to="/create">Add new Staff</router-link>
        
            
        <router-view />
        
    </div>
</template>
<script>
import CookieConsent from '@/components/CookieConsent'

export default {
    components:{
        CookieConsent
    },

    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="scss">



#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    align-items: center;

}
.nav{
    padding: 0.5rem 1rem ;
    text-decoration: none;
    color: rgb(42, 43, 124);
    font-size: 1.8rem;
    font-weight: bold;
        &:hover{
        text-decoration: underline;
        background: lightgray;
    }
}


</style>

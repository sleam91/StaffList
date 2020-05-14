<template>
    <div v-if="!cookieConsent" class="cookie">
        <div class="box">
            <p>
                Cookie Consent
                <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores repudiandae rerum voluptates tempore, et explicabo cupiditate nihil repellendus vitae illum suscipit aspernatur. Error eos libero amet eveniet exercitationem mollitia!
            </p>
            <button v-on:click="consent">Ok, I consent</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cookieConsent:false
        };
    },
    mounted(){
        this.cookieConsent= localStorage.getItem("cookie-consent") === "true" ? true : false
    },
    methods: {
        consent() {
            localStorage.setItem("cookie-consent", "true");
            this.cookieConsent = true;
        }
    }
};
</script>

<style lang="scss" scoped>
.cookie {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.774);
    top: 0;
    left: 0;
}
.box {
    width: 500px;
    padding: 2rem;

    background: white;
    position: relative;
    border: 2px solid black;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}

button {
    padding: 0.5rem 2rem;
    &:hover {
        cursor: pointer;
    }
    font-size: large;
}
</style>
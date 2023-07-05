<script setup>
import { useMq } from 'vue3-mq'
// Vue3Mq object
const mq = useMq()
</script>

<template>
    <div class="wrapper">
        <div class="title-wrapper">
            <h1 class="title">
                Thank You!
            </h1>
            <p class="subtitle">you registered!</p>
        </div>

        <div class="form-bottom-container">
            <p>
                Have an account? <a href="#" class="link">Login</a>
            </p>
        </div>
    </div>
</template>

<style scoped>
.title-wrapper {
    padding: 11.3rem 20.56rem 12.81rem 2.69rem;
}
.wrapper {
    display: flex;
    flex-direction: column;

    padding-left: 1.3rem;
    width: 32.9875rem;
    height: 30rem;
    flex-shrink: 0;
}

.form-bottom-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 0.8125rem;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

}

.title {
    color: #111;
    font-size: 1.375rem;
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.02875rem;
}

.subtitle {
    color: #111;
    font-size: 0.875rem;
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.link {
    font-weight: 500;
    text-decoration: underline;
    color: #5A61ED;
}
</style>


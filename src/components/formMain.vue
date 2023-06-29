<script setup>
import formInputsArea from './formInputsArea.vue';
</script>

<template>
    <div class="form-content">
        <!--  Background SVG Image -->
        <img 
            id="bg-image" 
            src="../assets/bg-svg.png" 
            alt="background"
        />

        <div class="form-title-container">
            <h1 class="form-title">New user?</h1>
            <span class="form-subtitle">Use the form below to create your account.</span>
        </div>
        
        <div>
            <formInputsArea/>
        </div>
    </div>
</template>

<style scoped>
* {
    font-family: 'Work Sans';
}

/* Background SVG Image */
#bg-image {
    z-index: -1;
    position: absolute;

    left: 46%;
    top: 26%;
}

.form-title {
    font-size: 1.375rem;
    font-weight: 500;
}

.form-subtitle {
    font-size: 0.875rem;
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
}

.form-content {
    position: relative;

    display: flex;
    flex-direction: column;

    padding: 2.41rem 1.37rem 2.72rem 1.3rem;
    width: 32.9875rem;
}
</style>

<script setup>
import leftFormBanner from './components/leftFormBanner.vue';
import formMain from './components/formMain.vue';
</script>

<template>
  <div class="form-container">
    <leftFormBanner />
    <formMain />
  </div>
</template>

<style>

* {
  margin: 0;
  padding: 0;
}

.form-container {
  display: flex;
  height: 30.0625rem;
}
</style>

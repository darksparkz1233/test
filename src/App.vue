<script setup>
import leftFormBanner from '@/components/leftFormBanner.vue';
import formView from '@/components/formView.vue';
// Import Vue3Mq (Vue library for adding breakpoints)
import { useMq } from 'vue3-mq'

const mq = useMq()
</script>

<template>
  <div class="form-container" :class="mq.phone ? 'form-container-phone' : 'form-container'">


    <leftFormBanner v-if="mq.tabletPlus" />



    <formView />
  </div>
</template>

<style >
* {
  margin: 0;
  padding: 0;

}


.form-container {
  display: flex;
  height: auto;
  width: auto;

  background: url(./assets/bg-svg.png) no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  background-size: 19.25rem;

  margin: 0 auto;
  height: 30.0625rem;
  width: 41.5625rem;

}

.form-container-phone {
  display: flex;
  background: none;
  height: fit-content;
  width: fit-content;
}
</style>

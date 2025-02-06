<template>
  <TimePicker v-model="time " bg="#30332E"/>
</template>

<script setup>
import TimePicker from './components/TimePicker.vue';
import { ref } from 'vue';

const time  = ref('14:30');


</script>

<style>

</style>
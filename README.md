# Vue Time Picker Pro

Vue Time Picker Pro is a customizable time picker component for Vue 3 that supports 12-hour format with AM/PM and returns 24-hour format data suitable for database storage.

![Vue Time Picker Pro Demo](https://i.imgur.com/FZEpuVx.png)

## Installation

First, install the package via npm:

```bash
npm install vue-time-picker-pro
```

## Usage

Import the component and its styles in your Vue 3 application:

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import VueTimePickerPro from "vue-time-picker-pro/dist/vue-time-picker-pro.umd.js";
import "vue-time-picker-pro/dist/vue-time-picker-pro.css";

createApp(App).component('vue-time-picker-pro', VueTimePickerPro).mount('#app');
```

## Example

Here is an example of how to use the Vue Time Picker Pro component in your template:

```html
<template>
    <div>
        <vue-time-picker-pro v-model="time"/>
    </div>
</template>

<script setup>
// Import the `ref` function from Vue to create a reactive reference.
import {ref} from 'vue';

// Create a reactive reference `time` initialized with an empty string.
// This can be used to store and reactively update the selected time in a Vue component.
const time = ref('');

</script>
```

## Props

- `v-model`: The binding value for the selected time.

## License

MIT# vue-time-picker

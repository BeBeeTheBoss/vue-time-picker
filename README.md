# Vue Time Picker Pro

Vue Time Picker Pro is a customizable time picker component for Vue 3 that supports 12-hour format with AM/PM and returns 24-hour format data suitable for database storage.

| Demo 1 | Demo 2 | Demo 3 |
|--------|--------|--------|
| ![Vue Time Picker Pro Demo 1](https://raw.githubusercontent.com/BeBeeTheBoss/vue-time-picker/refs/heads/main/public/demo1.png) | ![Vue Time Picker Pro Demo 2](https://raw.githubusercontent.com/BeBeeTheBoss/vue-time-picker/refs/heads/main/public/demo2.png) | ![Vue Time Picker Pro Demo 3](https://raw.githubusercontent.com/BeBeeTheBoss/vue-time-picker/refs/heads/main/public/demo3.png) |


## Installation

First, install the package via npm:

```bash
npm install vue-time-picker-pro
```

## Usage

Import the component and its styles in your Vue 3 application:

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import VueTimePickerPro from "vue-time-picker-pro/dist/vue-time-picker-pro.umd.js";
import "vue-time-picker-pro/dist/vue-time-picker-pro.css";

createApp(App).component("vue-time-picker-pro", VueTimePickerPro).mount("#app");
```

## Example

Here is an example of how to use the Vue Time Picker Pro component in your template:

```html
<template>
  <div>
    <vue-time-picker-pro v-model="time"/>  
    <!-- you can add color string or color code with bg attr eg: bg="black", bg="8C271E" -->
  </div>
</template>

<script setup>
  // Import the `ref` function from Vue to create a reactive reference.
  import { ref } from "vue";

  // Create a reactive reference `time` initialized with an empty string.
  // This can be used to store and reactively update the selected time in a Vue component.
  const time = ref("");
</script>
```

## Props

- `v-model`: The binding value for the selected time.

## License

MIT# vue-time-picker

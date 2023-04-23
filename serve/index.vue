<script lang="ts" setup>
import { reactive } from 'vue';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import DatePills from '../src/DatePills.vue';
// import DatePills from '../dist/vue-date-pills.es';
// import '../dist/style.css';

const selectedDate01 = dayjs();
const selectedDate01Format = 'YYYY-MM-DD';

const form = reactive({
  selectedDate01: {
    dateStart: selectedDate01.startOf('month').format(selectedDate01Format),
    dateEnd: selectedDate01.endOf('month').format(selectedDate01Format),
  },
  selectedDate02: '',
  selectedDate03: '',
  selectedDate04: ''
});
</script>

<template>
  <main>
    <h1>Vue date pills</h1>
    <section>
      <h2>Default</h2>
      <date-pills v-model="form.selectedDate01" />
      <pre>{{ form.selectedDate01 }}</pre>
    </section>
    <section>
      <h2>Years mode</h2>
      <date-pills v-model="form.selectedDate02" mode="year" />
      <pre>{{ form.selectedDate02 }}</pre>
    </section>
    <section>
      <h2>Wrap appearance</h2>
     <date-pills v-model="form.selectedDate03" wrap />
      <pre>{{ form.selectedDate03 }}</pre>
    </section>
    <section>
      <h2>Localization</h2>
      <date-pills v-model="form.selectedDate04" locale="es" />
      <pre>{{ form.selectedDate04 }}</pre>
    </section>
  </main>
</template>

<style lang="scss">
html, body, #app {
  height: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
  background-color: #e5e5e5;
  padding: 0;
  margin: 0;
}

main {
  max-width: 792px;
  min-height: 100vh;
  padding: 8px 16px;
  margin: auto;
  background-color: #fafafa;
}

section + section {
  margin-top: 8px;
}

h1, h2 {
  display: inline-block;
  background-color: #262626;
  color: #ffffff;
  padding: 4px 8px;
}

pre {
  padding: 16px;
  background-color: #ebebeb;
  border-radius: 8px;
}
</style>

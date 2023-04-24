# vue-date-pills

### Lightweight complete date pills component for filtering data by date range based on Vue 3 and DayJS

[![License](https://img.shields.io/npm/l/vue-date-pills)](https://github.com/storageddd/vue-date-pills/blob/main/LICENSE.md) 
[![Npm](https://img.shields.io/npm/v/vue-date-pills)](https://www.npmjs.com/package/vue-date-pills)
![Size](https://img.shields.io/bundlephobia/minzip/vue-date-pills?color=53ca2f)
![Downloads](https://img.shields.io/npm/dm/vue-date-pills)
![Release date](https://img.shields.io/github/last-commit/storageddd/vue-date-pills)

![Screenshot](https://github.com/storageddd/vue-date-pills/raw/master/screenshot.png "Screenshot")

## Description
Some mobile interfaces includes choice month intervals for grab related data. Also it based on dates range.
Vue data pills created for solve this issue and makes it easy.

## Features
- Month range selection
- Year range selection
- Flexible date format
- Mobile compatibility
- Locale support
- Ease CSS vars customization
- Lightweight
- SSR support
- Included type definitions

## Sections
* [Demo](#demo)
* [Installation](#installation)
* [API](#api)
  * [Props](#props)
  * [Events](#events)
* [Examples](#examples)
    * [Basic usage](#basic-usage)
    * [Localization](#localization)
* [Styling](#styling)

## Demo
https://storageddd.github.io/vue-date-pills/

## Installation
Note: package based and depends on Vue 3 and DayJS libraries and its excludes from build by vite. You must install in manually.

```shell
yarn add vue-date-pills

# or

npm install vue-date-pills
```

Import and register component

**Global**

```js
import { createApp } from 'vue';
import App from './App.vue';

import VueDatePills from 'vue-date-pills';
import 'vue-date-pills/dist/style.css';

const app = createApp(App);
app.component('VueDatePills', VueDatePills);
```

**Local**

```vue
<script>
  import VueDatePills from 'vue-date-pills';
  import 'vue-date-pills/dist/styles.css';
    
  export default {
    components: { VueDatePills }
  }
</script>
```

## API
### Props
| Name           | Type      | Default      | Description                                                 |
|----------------|-----------|--------------|-------------------------------------------------------------|
| **modelValue** | `object`  | `null`       | Default property for `v-model`                              |
| **dateTo**     | `string`  | `2022-01-01` | Date until shown pills                                      |
| **format**     | `string`  | `YYYY-MM-DD` | Date format. Can used any supported format by DayJS         |
| **mode**       | `string`  | `month`      | Mode of range pills. Available variants: `month` and `year` |
| **locale**     | `string`  | `en`         | Localization name. Can used any supported by DayJS          |
| **wrap**       | `boolean` | `false`      | Container wrap mode (same as flex)                          |

### Events
| Name        | Parameters | Description                                  |
|-------------|------------|----------------------------------------------|
| **@update** | `value`    | Emitted when model changed                   |
| **@change** | `value`    | Emitted in the same scenarios as in `@update`|

## Examples
### Basic usage
For control the value component uses `v-model`.
You can use DayJS methods like `dayjs().startOf('month').format('YYYY-MM-DD')` for filling current value
or if you leave `null`, component will fill it after initialization and also fire `update` event.
```vue
<script setup>
const form = reactive({
  selectedDate: {
    dateStart: '2023-04-01',
    dateEnd: '2023-04-30'
  }
});
</script>

<template>
  <date-pills v-model="form.selectedDate" />
</template>
```
### Localization
```vue
<script setup>
import 'dayjs/locale/es';
...
</script>

<template>
  <date-pills v-model="form.selectedDate" locale="es" />
</template>
```

## Styling
You can very easy and flexible customize styles as you want:
``` css
:root {
  --date-pills-font-size: 14px;
  --date-pills-font-family: Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;
  --date-pills-font-weight: normal;
  --date-pills-color: #262626;
  --date-pills-background-color: #ebebeb;
  --date-pills-hover-background-color: #e5e5e5;
  --date-pills-active-color: #ffffff;
  --date-pills-active-background-color: #262626;
  --date-pills-transition: all .3s cubic-bezier(.645, .045, .355, 1);
  --date-pills-padding: 8px 16px;
  --date-pills-gap: 8px;
  --date-pills-border-radius: 16px;
}
```

# vue-date-pills

### Lightweight complete date pills component for filtering data by date range based on Vue 3 and DayJS

[![License](https://img.shields.io/npm/l/vue-date-pills)](https://github.com/storageddd/vue-date-pills/blob/main/LICENSE.md) 
[![Npm](https://img.shields.io/npm/v/vue-date-pills)](https://www.npmjs.com/package/vue-date-pills)
![Size](https://img.shields.io/bundlephobia/minzip/vue-date-pills?color=53ca2f)
![Downloads](https://img.shields.io/npm/dm/vue-date-pills)
![Release date](https://img.shields.io/github/release-date/storageddd/vue-date-pills)

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
- Ease CSS vars theming
- Lightweight
- SSR support
- Included type definitions

## Demo
https://storageddd.github.io/vue-date-pills/

## Install
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
Coming soon

# vue-date-pills

### Lightweight complete date pills solution for filtering data by date range based on Vue 3 and DayJS

[![License](https://img.shields.io/npm/l/vue-date-pills)](https://github.com/storageddd/vue-date-pills/blob/main/LICENSE.md) 
[![Npm](https://img.shields.io/npm/v/vue-date-pills)](https://www.npmjs.com/package/vue-date-pills)
![Size](https://img.shields.io/bundlephobia/minzip/vue-date-pills?color=53ca2f)
![Downloads](https://img.shields.io/npm/dm/vue-date-pills)
[![Open issues](https://img.shields.io/github/issues-raw/storageddd/vue-date-pills)](https://github.com/storageddd/vue-date-pills/issues)
![Release date](https://img.shields.io/github/release-date/storageddd/vue-date-pills)

## Description
Date pills solution 

## Features

- Month range selection
- Year range selection
- Mobile devices compatibility
- Locale support
- Ease CSS vars theming
- SSR support
- Included type definitions

## Install

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

<script lang="ts" setup>
import { useClasses, useDates } from './composables';
import { EEvents, EMode } from './types';
import type { TMode, TModelValue } from './types.d';

export interface IProps {
  modelValue: TModelValue | null;
  dateTo: string;
  format: string;
  mode: TMode,
  locale: string;
  wrap: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  dateTo: '2022-01-01',
  format: 'YYYY-MM-DD',
  mode: EMode.month,
  locale: 'en'
});

const emit = defineEmits([EEvents.update, EEvents.change]);

const { parentClasses, getItemClasses } = useClasses(props);
const { items, handleSelect } = useDates(props, emit);
</script>

<template>
  <ul :class="parentClasses">
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="getItemClasses(item)"
      @click="handleSelect(item)"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<style lang="scss">
@import "./DatePills.scss";
</style>

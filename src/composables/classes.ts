import { computed } from 'vue';
import type { TItem } from '@/types.d';
import type { IProps } from '@/DatePills.vue';

export function useClasses(props: IProps) {
  const parentClasses = computed(() => ({
    'date-pills': true,
    'date-pills--wrap': props.wrap
  }));

  const getItemClasses = (item: TItem) => ({
    'date-pills__item': true,
    'date-pills__item--active': props.modelValue?.dateStart === item.dateStart && props.modelValue?.dateEnd === item.dateEnd
  });

  return {
    parentClasses,
    getItemClasses
  }
}

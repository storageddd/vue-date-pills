import { computed, watch } from 'vue';
import dayjs from 'dayjs';
import { prepareValue } from '@/utils';
import type { TEmit, TItem } from '@/types.d';
import { EEvents, ELabelFormat, EMode } from '@/types';
import type { IProps } from '@/DatePills.vue';

export const useDates = (props: IProps, emit: TEmit) => {
  const items = computed(() => {
    const now = dayjs();
    const currentYear = now.year();
    const currentMonth = now.month();
    const currentInterval = props.mode;
    const intervalDiff = dayjs(now).diff(props.dateTo, currentInterval);

    const items: TItem[] = [];
    let iterableMonth = currentMonth;
    let iterableYear = currentYear;

    for (let interval = 0; interval <= intervalDiff; interval++) {
      const isYearMode = currentInterval === EMode.year;

      let itemDate, labelFormat;
      if (isYearMode) {
        itemDate = dayjs().year(iterableYear);
        labelFormat = ELabelFormat.year;
      } else {
        itemDate = dayjs().year(iterableYear).month(iterableMonth);
        labelFormat = iterableYear === currentYear ? ELabelFormat.month : ELabelFormat.monthYear;
      }

      items.push({
        label: itemDate.locale(props.locale).format(labelFormat),
        dateStart: itemDate.startOf(currentInterval).format(props.format),
        dateEnd: itemDate.endOf(currentInterval).format(props.format),
      });

      if (isYearMode) {
        iterableYear--;
      } else {
        iterableMonth--;
        if (iterableMonth < 0) {
          iterableMonth = 11;
          iterableYear--;
        }
      }
    }

    return items;
  });

  const handleSelect = (item: TItem): void => {
    const preparedValue = prepareValue(item);
    emit(EEvents.update, preparedValue);
    emit(EEvents.change, preparedValue);
  };

  watch(items, (items) => {
    if (!items.length) {
      return;
    }

    if (!props.modelValue) {
      handleSelect(items[0]);
    }
  }, { deep: true, immediate: true });

  return {
    items,
    handleSelect
  };
}

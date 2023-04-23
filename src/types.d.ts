export type TMode = EMode.month | EMode.year;

export type TModelValue = {
  dateStart: string;
  dateEnd: string;
}

export type TEmit = Function;

export type TItem = {
  label: string;
  dateStart: string;
  dateEnd: string;
}

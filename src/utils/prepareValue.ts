export const prepareValue = (value: any) => {
  const preparedValue = Object.assign({}, value);
  delete preparedValue.label;
  return preparedValue;
}

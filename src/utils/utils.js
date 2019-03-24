export const updateItem = (list, index, increment) => {
  return increment
    ? { ...list[index], quantity: list[index].quantity + increment }
    : { ...list[index], quantity: 1 };
};

export const updateList = (list, index, item) => {
  return item
    ? [...list.slice(0, index), item, ...list.slice(index + 1)]
    : [...list.slice(0, index), ...list.slice(index + 1)];
};

export const formatCurrency = amount => {
  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  });
  return formatter.format(amount / 100);
};

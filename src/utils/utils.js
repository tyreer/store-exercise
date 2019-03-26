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

export const mapColor = (category, theme) => {
  switch (category) {
    case "Men’s Footwear":
      return theme.themeDarkBlue;
    case "Women’s Footwear":
      return theme.themeTeal;
    case "Men’s Casualwear":
      return theme.themeRed;
    case "Women’s Casualwear":
      return theme.themePurple;
    case "Men's Formalwear":
      return theme.themeGrey;
    case "Women’s Formalwear":
      return theme.themePink;
    default:
      return theme.themeGrey;
  }
};

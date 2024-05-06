function qualifiedLngFor(lng) {
  switch (lng) {
    case "uk":
      return "uk-UA";
    case "en":
      return "en-US";
    default:
      return lng;
  }
}

export function datetime(value, lng, options = null) {
  return new Intl.DateTimeFormat(qualifiedLngFor(lng), options).format(value);
}

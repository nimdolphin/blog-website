export const getDateMonthYearDate = (date) => {
  const fullDate = `${new Date(date).toLocaleString("default", {
    month: "long",
  })} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}`;

  return fullDate;
};

export const newDate = (today) => {
  return today.toISOString();
};

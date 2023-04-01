function normalizeNumber(num) {
  return num < 9 ? `0${num}` : num;
}

export const useDate = () => {
  const date = new Date();

  const splitArrayFromDate = date.toString().split(" ");

  const dayNumber = normalizeNumber(date.getDate());

  const monthName = splitArrayFromDate[1];
  const month = normalizeNumber(date.getMonth() + 1);

  const weekName = splitArrayFromDate[0];

  const year = date.getFullYear();

  const hours = normalizeNumber(date.getHours());
  const minutes = normalizeNumber(date.getMinutes());

  return { dayNumber, weekName, monthName, month, year, hours, minutes };
};

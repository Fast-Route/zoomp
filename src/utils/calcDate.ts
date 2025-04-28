function checkDateMonth(month: string, date: number, weekday: string): { month: string, day: number, weekday: string } {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const daysInMonth: Record<string, number> = {
    Jan: 31,
    Feb: 28, // Considerando anos não bissextos
    Mar: 31,
    Apr: 30,
    May: 31,
    Jun: 30,
    Jul: 31,
    Aug: 31,
    Sep: 30,
    Oct: 31,
    Nov: 30,
    Dec: 31,
  };

  const currentMonthIndex = months.indexOf(month);

  if (currentMonthIndex === -1) {
    throw new Error('Invalid month');
  }

  let targetMonthIndex = currentMonthIndex;
  let adjustedDate = date;

  if (date <= 4) {
    targetMonthIndex = (currentMonthIndex === 0) ? 11 : currentMonthIndex - 1;
    adjustedDate += daysInMonth[months[targetMonthIndex]];
  }

  const targetMonth = months[targetMonthIndex];

  return { month: targetMonth, day: adjustedDate, weekday: weekday };
}


export default checkDateMonth;
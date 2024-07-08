export const useGroupByDate = (events) =>  {
  const result = {};
  events.forEach((event) => {
    const dateStart = new Date(event.dateStart);
    if (!result[dateStart.toISOString().split('T')[0]]) {
      result[dateStart.toISOString().split('T')[0]] = [];
    }
    result[dateStart.toISOString().split('T')[0]].push(event);

    // Если у элемента есть значение в поле dateEnd, то добавляем элемент в каждый день между dateStart и dateEnd включительно
    const dateEnd = new Date(event.dateEnd);
    for (let i = dateStart.getTime(); i <= dateEnd.getTime(); i += 86400000) { // 86400000 — количество миллисекунд в сутках
      const key = new Date(i).toISOString().split("T")[0];
      if (!result[key]) {
        result[key] = [event];
      } else {
        const existingEvents = result[key];
        if (existingEvents.every((e) => e.id !== event.id)) {
          result[key].push(event);
        }
      }
    }
  });

  // Сортировка объектов по дате
  for (const [date, events] of Object.entries(result)) {
    events.sort((a, b) => a.dateStart.localeCompare(b.dateStart))
  }

  return result;
}

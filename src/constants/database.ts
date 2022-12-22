export const creditsData = [
  {
    id: '1',
    mark: '2',
    subject: 'ИТ',
    height: 1,
    isConfirmed: false,
  },
  {
    id: '2',
    mark: 'Зачет',
    subject: 'Типис',
    height: 1,
    isConfirmed: true,
  },
  {
    id: '3',
    mark: 'Не зачет',
    subject: 'Пи',
    height: 1,
    isConfirmed: false,
  }
];

export const mark = () => {
  let localMark = 0;
  creditsData.forEach(element => {
    if (element.mark === 'Зачет' || element.mark === 'Не зачет') {
      if (element.mark === 'Зачет') {
        localMark += 5 * element.height;
      } else {
        localMark += 2 * element.height;
      }
    } else {
      localMark += Number(element.mark) * element.height;
    }
  });
  let result = localMark / creditsData.length;
  return result.toFixed(2);
};

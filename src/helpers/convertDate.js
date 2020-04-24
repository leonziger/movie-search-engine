export const convertDate = (date) => {
  const monthes = [
    {
      number: '01',
      name: 'января',
    },
    {
      number: '02',
      name: 'февраля',
    },
    {
      number: '03',
      name: 'марта',
    },
    {
      number: '04',
      name: 'апреля',
    },
    {
      number: '05',
      name: 'мая',
    },
    {
      number: '06',
      name: 'июня',
    },
    {
      number: '07',
      name: 'июля',
    },
    {
      number: '08',
      name: 'августа',
    },
    {
      number: '09',
      name: 'сентября',
    },
    {
      number: '10',
      name: 'октября',
    },
    {
      number: '11',
      name: 'ноября',
    },
    {
      number: '12',
      name: 'декабря',
    }
  ];
  const arr = date.split('-');
  const monthNames = monthes.filter(month => month.number === arr[1]);

  return arr[2] + ' ' + monthNames[0].name + ' ' + arr[0] + ' г.';
};

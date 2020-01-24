import moment from 'moment';

// Get Visible Places to Stay
const getVisiblePlaces = (places, { text, sortBy, startDate, endDate }) => {
  return places
    .filter(place => {
      // const startDateMatch =//
      //   typeof startDate !== 'number' || place.createdAt >= startDate;
      // const endDateMatch =
      //   typeof endDate !== 'number' || place.createdAt <= endDate;
      const createdAtMoment = moment(place.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, 'day')
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, 'day')
        : true;
      const textMatch = place.title.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'price') {
        return a.price < b.price ? 1 : -1;
      }
    });
};

export default getVisiblePlaces;

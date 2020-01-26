import getVisiblePlaces from '../../selectors/places';
import moment from 'moment';

const places = [
  {
    id: 'asdvdvsdv-Vgvash-167hbdbanhsdb',
    type_of_place: 'Entire Apartment',
    title: 'Kayaks & Coffee in Novi',
    summary:
      'A true escape, yet at the same time being incredibly well connected to the greater Metro Detroit area',
    price: 5499,
    createdAt: 0,
    location: 'Southfield',
    number_of_guests: 2,
    number_of_bed_rooms: 1,
    number_of_beds: 1,
    number_of_bath_rooms: 1,
    amenities: ['Elevator', 'Wifi', 'Free parking on premises', 'Kitchen'],
    accessibility: 'Elevator',
    availability: '1 night minimum stay',
    reviews: [
      'The apartment is sparkling clean and i am glad i found this amazing apartment. The neighborhood is safe and the building is secure . I look forward to my future stays in this unit !!!',
      'The location was ideal. It was between Ann Arbor and Detroit which was perfect for exploring. There was plenty of parking and the building was secure. The residents that we came in contact with here all very nice as well as the lady working at the front desk. The place was nicely furnished. There was also a lot of really good food in the surrounding area.'
    ],
    bullet_points: [
      {
        heading: 'Entire home',
        sub_heading: 'You’ll have the apartment to yourself.'
      },
      {
        heading: 'Self check-in',
        sub_heading: 'You can check in with the doorman.'
      },
      {
        heading: 'Sparkling clean',
        sub_heading: '2 recent guests said this place was sparkling clean.'
      },
      {
        heading: 'Experienced host',
        sub_heading: 'Service has 159 reviews for other places.'
      }
    ]
  },
  {
    id: 'asdvdvsdv-fffsf-167hbdbanhsdb',
    type_of_place: 'Entire House',
    title: 'Cosy Apartment at the Park at Trowbridge - 739',
    summary:
      'A true escape, yet at the same time being incredibly well connected to the greater Metro Detroit area',
    price: 4999,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf(),
    location: 'Farmington Hills',
    number_of_guests: 4,
    number_of_bed_rooms: 2,
    number_of_beds: 2,
    number_of_bath_rooms: 2,
    amenities: ['Elevator', 'Wifi'],
    accessibility: 'Staircase',
    availability: '1 night minimum stay',
    reviews: [
      'The apartment is sparkling clean and i am glad i found this amazing apartment. The neighborhood is safe and the building is secure . I look forward to my future stays in this unit !!!',
      'The location was ideal. It was between Ann Arbor and Detroit which was perfect for exploring. There was plenty of parking and the building was secure. The residents that we came in contact with here all very nice as well as the lady working at the front desk. The place was nicely furnished. There was also a lot of really good food in the surrounding area.'
    ],
    bullet_points: [
      {
        heading: 'Entire home',
        sub_heading: 'You’ll have the apartment to yourself.'
      },
      {
        heading: 'Self check-in',
        sub_heading: 'You can check in with the doorman.'
      },
      {
        heading: 'Sparkling clean',
        sub_heading: '2 recent guests said this place was sparkling clean.'
      },
      {
        heading: 'Experienced host',
        sub_heading: 'Service has 159 reviews for other places.'
      }
    ]
  },
  {
    id: 'dawdfsfggg-fffsf-gdfgfsf',
    type_of_place: 'Entire Guest Suite',
    title: '2 bed & 2 bath at the Park at Trowbridge - 301',
    summary:
      'A true escape, yet at the same time being incredibly well connected to the greater Metro Detroit area',
    price: 1099,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf(),
    location: 'Farmington Hills',
    number_of_guests: 4,
    number_of_bed_rooms: 2,
    number_of_beds: 2,
    number_of_bath_rooms: 2,
    amenities: ['Elevator', 'Wifi'],
    accessibility: 'Lift',
    availability: '1 night minimum stay',
    reviews: [
      'The apartment is sparkling clean and i am glad i found this amazing apartment. The neighborhood is safe and the building is secure . I look forward to my future stays in this unit !!!',
      'The location was ideal. It was between Ann Arbor and Detroit which was perfect for exploring. There was plenty of parking and the building was secure. The residents that we came in contact with here all very nice as well as the lady working at the front desk. The place was nicely furnished. There was also a lot of really good food in the surrounding area.'
    ],
    bullet_points: [
      {
        heading: 'Entire home',
        sub_heading: 'You’ll have the apartment to yourself.'
      },
      {
        heading: 'Self check-in',
        sub_heading: 'You can check in with the doorman.'
      },
      {
        heading: 'Sparkling clean',
        sub_heading: '2 recent guests said this place was sparkling clean.'
      },
      {
        heading: 'Experienced host',
        sub_heading: 'Service has 159 reviews for other places.'
      }
    ]
  }
];

test('should filter by text value and sort by created Dates', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisiblePlaces(places, filters);
  expect(result).toEqual([places[2], places[0], places[1]]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = getVisiblePlaces(places, filters);
  expect(result).toEqual([places[2], places[0]]);
});

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  };
  const result = getVisiblePlaces(places, filters);
  expect(result).toEqual([places[0], places[1]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisiblePlaces(places, filters);
  expect(result).toEqual([places[2], places[0], places[1]]);
});

test('should sort by price', () => {
  const filters = {
    text: '',
    sortBy: 'price',
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisiblePlaces(places, filters);
  expect(result).toEqual([places[0], places[1], places[2]]);
});

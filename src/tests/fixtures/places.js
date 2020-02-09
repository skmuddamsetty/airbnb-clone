import moment from 'moment';
export default [
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
    bullet_points: [
      {
        heading: 'Entire home',
        sub_heading: 'You’ll have the apartment to yourself.'
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
    bullet_points: [
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
    bullet_points: [
      {
        heading: 'Sparkling clean',
        sub_heading: '2 recent guests said this place was sparkling clean.'
      }
    ]
  }
];

import {createSlice} from '@reduxjs/toolkit';
import {dispatch} from '..';
import {ToastAndroid} from 'react-native';

const initialState: {homeData: any; currentProductData: any} = {
  homeData: [
    {
      id: 1,
      title: 'Luxurious 4-Bedroom Villa',
      description:
        'A spacious 4-bedroom, 3-bathroom villa with a private garden and modern amenities in a prestigious neighborhood.',
      price: 7500000,
      locked: true,
      address: {
        street: '456 Lotus Lane',
        city: 'Mumbai',
        state: 'Maharashtra',
        zipCode: '400001',
        country: 'India',
      },
      location: {
        latitude: 19.076,
        longitude: 72.8777,
      },
      photos: [
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      features: {
        bedrooms: 4,
        bathrooms: 3,
        squareFeet: 3500,
        lotSize: '0.5 acres',
        yearBuilt: 2010,
        garage: true,
        swimmingPool: true,
        fireplace: false,
      },
      agent: {
        name: 'Ravi Kumar',
        phone: '+91-9823456789',
        email: 'ravi.kumar@example.com',
        agency: 'Kumar Realty',
      },
      listingDate: '2024-09-01',
      status: 'available',
      openHouseDates: [
        '2024-09-15T14:00:00+05:30',
        '2024-09-22T14:00:00+05:30',
      ],
    },
    {
      id: 2,
      title: 'Charming 3-Bedroom Cottage',
      description:
        'A cozy 3-bedroom, 2-bathroom cottage with a beautiful garden and rustic charm in the outskirts of Bangalore.',
      price: 5500000,
      locked: true,
      address: {
        street: '123 Pinewood Drive',
        city: 'Bangalore',
        state: 'Karnataka',
        zipCode: '560037',
        country: 'India',
      },
      location: {
        latitude: 12.9716,
        longitude: 77.5946,
      },
      photos: [
        'https://images.pexels.com/photos/259593/pexels-photo-259593.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      features: {
        bedrooms: 3,
        bathrooms: 2,
        squareFeet: 1800,
        lotSize: '0.25 acres',
        yearBuilt: 2005,
        garage: false,
        swimmingPool: false,
        fireplace: true,
      },
      agent: {
        name: 'Anita Sharma',
        phone: '+91-9876543210',
        email: 'anita.sharma@example.com',
        agency: 'Sharma Realty',
      },
      listingDate: '2024-08-20',
      status: 'available',
      openHouseDates: ['2024-09-10T11:00:00+05:30'],
    },
    {
      id: 3,
      title: 'Elegant 2-Bedroom Apartment',
      description:
        'A modern 2-bedroom apartment with city views and upscale amenities in the heart of Chennai.',
      price: 6000000,
      locked: true,
      address: {
        street: '789 Skyline Avenue',
        city: 'Chennai',
        state: 'Tamil Nadu',
        zipCode: '600028',
        country: 'India',
      },
      location: {
        latitude: 13.0827,
        longitude: 80.2707,
      },
      photos: [
        'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=400',
      ],
      features: {
        bedrooms: 2,
        bathrooms: 2,
        squareFeet: 1300,
        yearBuilt: 2021,
        garage: true,
        swimmingPool: true,
        fireplace: false,
      },
      agent: {
        name: 'Rajesh Kumar',
        phone: '+91-9123456789',
        email: 'rajesh.kumar@example.com',
        agency: 'Kumar Estates',
      },
      listingDate: '2024-09-05',
      status: 'available',
      openHouseDates: ['2024-09-12T10:00:00+05:30'],
    },
    {
      id: 4,
      title: 'Spacious 5-Bedroom Mansion',
      description:
        'An impressive 5-bedroom, 4-bathroom mansion with luxurious interiors and a large backyard in Delhi.',
      price: 12000000,
      locked: false,
      address: {
        street: '345 Imperial Lane',
        city: 'Delhi',
        state: 'Delhi',
        zipCode: '110021',
        country: 'India',
      },
      location: {
        latitude: 28.6139,
        longitude: 77.209,
      },
      photos: [
        'https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/210464/pexels-photo-210464.jpeg?auto=compress&cs=tinysrgb&w=400',
      ],
      features: {
        bedrooms: 5,
        bathrooms: 4,
        squareFeet: 4500,
        lotSize: '0.75 acres',
        yearBuilt: 2018,
        garage: true,
        swimmingPool: true,
        fireplace: true,
      },
      agent: {
        name: 'Sonia Mehta',
        phone: '+91-9911223344',
        email: 'sonia.mehta@example.com',
        agency: 'Mehta Real Estate',
      },
      listingDate: '2024-08-30',
      status: 'available',
      openHouseDates: ['2024-09-18T16:00:00+05:30'],
    },
    {
      id: 5,
      title: 'Chic 1-Bedroom Studio',
      description:
        'A trendy 1-bedroom studio with modern design and convenient city location in Hyderabad.',
      price: 3000000,
      locked: false,
      address: {
        street: '567 Urban Street',
        city: 'Hyderabad',
        state: 'Telangana',
        zipCode: '500032',
        country: 'India',
      },
      location: {
        latitude: 17.385,
        longitude: 78.4867,
      },
      photos: [
        'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=400',
      ],
      features: {
        bedrooms: 1,
        bathrooms: 1,
        squareFeet: 800,
        yearBuilt: 2022,
        garage: false,
        swimmingPool: false,
        fireplace: false,
      },
      agent: {
        name: 'Suresh Patel',
        phone: '+91-9001234567',
        email: 'suresh.patel@example.com',
        agency: 'Patel Properties',
      },
      listingDate: '2024-09-01',
      status: 'available',
      openHouseDates: ['2024-09-08T12:00:00+05:30'],
    },
  ],
  currentProductData: {},
};

const home = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getHomeData(state, action) {
      state.homeData = action.payload;
    },
    updateLockStatus(state, action) {
      const {id, status} = action.payload;
      let data = state.homeData.map((item: any) =>
        item.id === id ? {...item, locked: status} : item,
      );

      state.currentProductData = data.find((item: any) => item.id === id);
      state.homeData = data;
    },
    updateCurrentProductData(state, action) {
      state.currentProductData = action.payload;
    },
  },
});

export default home.reducer;

export const handleHomeData = (data: any) => {
  dispatch(home.actions.getHomeData(data));
};

export const toogleLock = (id: number, status: boolean) => {
  dispatch(home.actions.updateLockStatus({id, status}));
  if (status) {
    ToastAndroid.show('Home Locked Successfully', ToastAndroid.SHORT);
  } else {
    ToastAndroid.show('Home Unlocked Successfully', ToastAndroid.SHORT);
  }
};

export const handleCurrentProduct = (item: any) => {
  dispatch(home.actions.updateCurrentProductData(item));
};

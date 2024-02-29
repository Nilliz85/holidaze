export const API_BASE_URL = 'https://api.noroff.dev/api/v1/holidaze';

<<<<<<< HEAD
export const HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Replace with your real token
};

export const ENDPOINTS = {
  auth: {
    register: '/auth/register',
    login: '/auth/login',
  },
  profiles: {
    base: '/profiles',
    byName: (name) => `/profiles/${name}`,
    venuesByName: (name) => `/profiles/${name}/venues`,
    bookingsByName: (name) => `/profiles/${name}/bookings`,
    mediaByName: (name) => `/profiles/${name}/media`
  },
  venues: {
    base: '/venues',
    byId: (id) => `/venues/${id}`
  },
  bookings: {
    base: '/bookings',
    byId: (id) => `/bookings/${id}`
  }
=======
export const HEADERS = () => {
	const token = localStorage.getItem('token');
	return {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${token}`,
	};
};

export const ENDPOINTS = {
	auth: {
		register: '/auth/register',
		login: '/auth/login',
	},
	profiles: {
		base: '/profiles',
		byName: (name) => `/profiles/${name}`,
		venuesByName: (name) => `/profiles/${name}/venues`,
		bookingsByName: (name) => `/profiles/${name}/bookings`,
		mediaByName: (name) => `/profiles/${name}/media`,
	},
	venues: {
		base: '/venues',
		byId: (id) => `/venues/${id}`,
		bookingsByVenue: (id) => `/venues/${id}?_bookings=true`,
	},
	bookings: {
		base: '/bookings',
		byId: (id) => `/bookings/${id}`,
	},
>>>>>>> development-styledcomponents
};

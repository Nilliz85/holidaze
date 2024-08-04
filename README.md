<h1 align="center">Project Exam 2</h1>
<h2 align="center">Holidaze</h2>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Installation](#installation)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Pages](#pages)
- [Components](#components)
- [API Integration](#api-integration)
- [State Management](#state-management)
- [Routing](#routing)
- [Validation](#validation)
- [Deployment](#deployment)
- [Acknowledgments](#acknowledgments)

## Introduction

This project is a culmination of the React knowledge acquired during the Frontend Developer Program  
at Noroff School of Technology and Digital Media, applied to create a fully functional eCom store.  
As well as knowledge I have acquired from other sources like [Codecademy](https://www.codecademy.com) and [Udemy](https://www.udemy.com).

[Noroff's Website](https://www.noroff.no/en)

## Installation

> Instructions on setting up the project locally will be added on project completion.

## Features

- List of all venues on the explore page
- Look-ahead search bar
- filter function with several different filters
- Individual venue details pages
- Booking functionality

## Technologies Used

- React for the UI
- React Router for navigation
- State management using React Context API
- Styled-components for styling

## Pages

- **Homepage**: A Landing page with a Hero section and a popular venues section.
- **ExploreVenuesPage**: Displays all products with a search bar..
- **VenuePage**: Shows individual product details.
- **ContactPage**: Contains a validated form for user inquiries.
- **CreateVenuePage**: Contains a validated form for user inquiries.
- **ContactPage**: Contains a validated form for user inquiries.

## Components

- `<Layout>`: A reusable layout component for consistent page structure.
- `<NavBar>`: Navigation bar within the header.
- `<CartIcon>`: Displays the current cart count and acts as a button.
- `<Footer>`: Footer content for the site.
- `<VenueCard>`: Represents each product on the homepage.
  > Component names are placeholders and subject to change. If changed this will be updated upon completion of the project.

## API Integration

## State Management

> Explanation of state management strategy will be added later

## Routing

> Details on how React Router is implemented to navigate between pages will be added later.

## Validation

> Description of form validation logic on the Contact page will be added later.

## Deployment

> https://development--magenta-scone-f93b21.netlify.app/

## Acknowledgments

> Credits to the resources and tutorials followed during the course modules
> will be added after project completion.

---

> The README.md will be updated during and after the project development

---

## Latest Changes

- Made the page at least slightly more responsive
- Made it so that the Sign in form and the Sign up forms are now on seperate pages
- Fixed broken booking functionality
- fixed broken calendar so that both dates now "stick"
- fixed calendar so that you can no longer book a date that has already passed
- fixed so that you can no longer book a date that is already booked
- fixed so that you now have to be logged in to book a venue
- fixed so that unavailable dates now update on booking completion
- fixed so that the booking form now resets after a booking is completed
- fixed so that you are no longer logged out when you refresh the page
- fixed so that you are no longer logged out when you navigate to another page
- fixed so that you are now logged out when you have been inactive for 5 minutes
- fixed so that you are now redirected to the login page when you are logged out
- fixed so that you are now redirected to the login page when you try to access a page you are not authorized to access
- made the hamburger menu for smaller screen sizes
- fixed so that the forms now use react hooks and yup validation
- created a profile page where you can see your bookings and delete unwanted bookings

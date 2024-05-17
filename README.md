# Grocery Delivery App

## Overview

This project is a demonstration of a grocery delivery application developed using Next.js, Tailwind CSS, and Material-UI. The application allows users to browse and order groceries for same-day or scheduled delivery. It includes features such as browsing categories, searching for specific items, viewing current promotions, adding items to the cart, and checking out.

## Table of Contents

- [Demo](#demo)
- [User Persona](#user)
- [Usability Considerations](#usability)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Demo

You can see a live demo of the project [here](https://quickcartdelivery.vercel.app/).

## User

**Name:** Emily Johnson
**Age:** 32
**Occupation:** Marketing Manager
**Location:** Urban area, busy lifestyle

### Demographics:
- Emily is a busy professional living in a bustling urban area.
- She is tech-savvy and owns a smartphone and a laptop.
- She values convenience and time-saving solutions due to her hectic work schedule.

### Needs:
1. Time-saving: Emily is always on the go, juggling work and personal life. She needs a grocery delivery app that saves her time by offering quick and efficient browsing and ordering.
2. Convenience: She prefers the convenience of having groceries delivered to her doorstep rather than spending time shopping in-store.
3. Variety: Emily enjoys exploring different grocery options and discovering new products. She seeks a wide variety of items available on the app to cater to her diverse preferences.
4. Quality: As a health-conscious individual, Emily values high-quality and fresh produce. She expects the app to offer quality assurance and reliable delivery of fresh products.
5. Budget-conscious: While Emily appreciates quality, she is also mindful of her budget. She looks for deals, discounts, and promotions to save money on her grocery purchases.

### Goals:
1. Simplify grocery shopping: Emily aims to streamline her grocery shopping experience by using the app to quickly find and order the items she needs without the hassle of visiting multiple stores.
2. Save time: Her primary goal is to save time on grocery shopping so she can focus on other aspects of her busy life, such as work, family, and hobbies.
3. Maintain a healthy lifestyle: Emily intends to maintain a healthy lifestyle by easily accessing fresh and nutritious food options through the app.
4. Enjoy convenience: She seeks the convenience of having groceries delivered to her doorstep at a time that suits her schedule, eliminating the need for physical store visits.
5. Stick to her budget: Emily aims to stick to her grocery budget by taking advantage of discounts and promotions offered by the app while still purchasing quality products.

### Pain Points:
1. Time constraints: Emily finds it challenging to allocate time for grocery shopping amidst her busy schedule, leading to stress and inconvenience.
2. Limited options: She often feels restricted by the limited variety of products available at her local grocery stores, making it difficult to find specific items or explore new options.
3. Traffic and parking: The hassle of navigating through traffic and finding parking spaces at crowded supermarkets adds to Emily's stress and consumes valuable time.
4. Checkout queues: Long checkout queues at the grocery store can be frustrating for Emily, especially when she's in a hurry or has limited time available.
5. Budgeting concerns: Emily worries about overspending on groceries and seeks ways to stay within her budget without compromising on quality or variety.


## Usability

### Navigation:
- **Navbar**: The application features a responsive navbar that adapts to different screen sizes. It includes links to essential sections such as Home, Products, and About, providing easy navigation for users.
- **Drawer Menu**: On smaller screens, a drawer menu allows users to access navigation links conveniently, enhancing the mobile user experience.

### Information Hierarchy:
- **Banner**: The homepage includes a prominent banner showcasing the core value proposition of the app: "Fresh Groceries Delivered to Your Doorstep." This clear message establishes the app's purpose upfront.
- **Product Carousels**: Products are organized into carousels with titles such as "Products," "Top Rated," and "Recently Added," enabling users to quickly browse through different categories and find what they need.
- **Promo Cards**: Promotional cards highlight special offers, discounts, and free delivery options, providing users with relevant information to encourage engagement.

### Accessibility Features:
- **Responsive Design**: The application is built with responsiveness in mind, ensuring that it functions seamlessly across various devices and screen sizes. This inclusivity caters to users accessing the app from different devices.
- **Contrast and Readability**: Text and visual elements maintain adequate contrast ratios and readability, adhering to accessibility standards. This consideration ensures that users with visual impairments can comfortably interact with the app.
- **Keyboard Navigation**: Where applicable, keyboard navigation is implemented to facilitate interaction for users who rely on keyboard input or assistive technologies.
- **Alt Text for Images**: Images are accompanied by descriptive alt text, enhancing accessibility for users who rely on screen readers to navigate the content.
- **Focus States**: Interactive elements such as buttons and links have visible focus states, making it easier for users to navigate the app using keyboard controls.

### User-Friendliness:
- **Search Functionality**: The app incorporates a search feature that allows users to quickly find specific products by entering keywords. This feature saves users time and enhances the overall shopping experience.
- **Cart Visibility**: The shopping cart icon prominently displays the total number of items and the total amount, providing users with real-time updates on their shopping cart status.
- **Clear CTAs**: Call-to-action buttons, such as "Shop Now" and "Order Now," are strategically placed and visually distinct, guiding users towards desired actions effectively.
- **Visual Feedback**: Users receive immediate visual feedback when interacting with elements like buttons, ensuring a responsive and intuitive user experience.



## Installation

To run this project locally, follow these steps:

1. Clone the repository:
2. Navigate to the project directory:
3. Install dependencies:
```
   npm install
   ```

4. Start the development server:
```
npm run dev
````
Open your browser and navigate to http://localhost:3000 to view the app.

## Technologies Used

The grocery delivery application is built using the following technologies:

### Frontend Technologies:
- **React**: Used as the primary frontend library for building interactive user interfaces.
- **Next.js**: Employed for server-side rendering, routing, and providing a framework for React-based applications.
- **Tailwind CSS**: Utilized for styling the application components with a utility-first CSS framework.
- **Material-UI**: Integrated for implementing UI components and design systems following Google's Material Design principles.
- **Swiper**: Incorporated for creating responsive and touch-friendly carousels for displaying product listings.
- **GSAP (GreenSock Animation Platform)**: Utilized for animation effects and scroll-triggered animations to enhance user experience.

### Backend Technologies:
- **RESTful API**: Developed to provide endpoints for fetching product data and managing cart functionalities.

### Data Management:
- **Fetch API**: Utilized for making asynchronous HTTP requests to fetch product data from the backend server.
- **Context API**: Used for state management and sharing cart data across multiple components in the application.

### Other Tools and Libraries:
- **Webpack**: Employed as a module bundler for bundling JavaScript files and assets.
- **ESLint**: Integrated for static code analysis to maintain code quality and enforce coding standards.
- **GitHub**: Utilized for version control and collaborative development, hosting the project repository.



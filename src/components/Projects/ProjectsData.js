import imgRestaurant from "../../static/images/restaurant.jpg";
import imgFoodOrder from "../../static/images/food-order.png";
import imgPlanner from "../../static/images/planYourMeal.png";
import imgPortfolio from "../../static/images/portfolio.png";
import imgQuotes from "../../static/images/quotes.png";
import imgAuth from "../../static/images/auth.png";

const myProjects = [
   {
      img: imgRestaurant,
      heading: "The Lockdown",
      description: "The application allows user to book a table in a restaurant, with the additional function of choosing exactly the one that interests us, not counting on luck that the host will choose the best for us.",
      githubLink: "https://github.com/pepe199111/restaurant-reservation/tree/main/restaurant",
      liveLink: "https://pepe199111.github.io/restaurant-reservation/#/",
   },
   {
      img: imgPortfolio,
      heading: "Portfolio",
      description: "The page you are currently on. I have posted some information about me along with my projects. I hope you like it.",
      githubLink: "https://github.com/pepe199111/Piotr-Pustul-Portfolio",
      liveLink: "https://pepe199111.github.io/portfolio/#/",
   },
   {
      img: imgAuth,
      heading: "Authentication",
      description: "The authentication project allows user to create an account, firebase is used to store user data. Once logged in, the user is granted access to the rest of the site, where the user can change its password in the user panel.",
      githubLink: "https://github.com/pepe199111/authentication-project",
      liveLink: "https://auth-project-react-fb605.web.app/",
   },
   {
      img: imgFoodOrder,
      heading: "Food order",
      description: "The app allows user to order food. Features adding products to cart, entering shipping information. Menus and placed orders are retrieved from an external database (Firebase).",
      githubLink: "https://github.com/pepe199111/food-order",
      liveLink: "https://food-order-70879.firebaseapp.com/",
   },
   {
      img: imgQuotes,
      heading: "Quotes - React Router",
      description: "A react router was used in the project.It allows you to add your favourite quotes, which can be commented on by other users. Quotes and comments are retrieved from an external database (Firebase).",
      githubLink: "https://github.com/pepe199111/quotes-react-router",
      liveLink: "https://quotes-react-router.web.app/quotes",
   },
   {
      img: imgPlanner,
      heading: "Plan your meal",
      description: "This is an application that allows us to plan meals for a given day and week. This is my first project that I worked on together with others programmers, during the course at Coders Lab school, the project was conducted using the Scrum method and JSON server.",
      githubLink: "https://github.com/pepe199111/Nutrition",
      liveLink: "https://pepe199111.github.io/Nutrition/#/",
   },
];

export default myProjects;
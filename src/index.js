import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}
  const style = {};
  return (
    <header className="header">
      <h1>Fast Pizza Company</h1>
    </header>
  );
}

// PARENT COMPONENT - only update here not child component
// each items rendered needs a unique key property
function Menu() {
  // const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* react dont have boolean value, but render value, then use condition to make a true or false */}
      {numPizzas > 0 ? (
        // React fragment is like div but no trace in html tree, invicible wall
        <>
          <p> Authentic Italian cuisine from our stone oven, all organic.</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              /** making into object to render all data in array using MAP, but each needs a uniqe key property ***/
              <Pizza pizzaObk={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Please come back later.</p>
      )}
    </main>
  );
}

// ############ PROPS/PROPERTY
// 1. pass props in the component
// 2. receive the props in the component
// can pass anything even other components
// IMMUTABLE - read-only, only used states

function Pizza({ pizzaObk }) {
  console.log(pizzaObk);

  // we can always call many return in a conditional statement inside a component
  // if (pizzaObk.soldOut) return null;

  return (
    // setting classes and text conditionally, instead of classlist property
    <li className={`pizza ${pizzaObk.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObk.photoName} alt={pizzaObk.name} />
      <div>
        <h2>{pizzaObk.name}</h2>
        <p>{pizzaObk.ingredients}</p>

        {/* reference to code below
        {pizzaObk.soldOut ? (
          <span>"Sold Out"</span>
        ) : (
          <span>{pizzaObk.price}</span>
        )} */}

        {/* this is cleaner than the above code */}
        <span>Price: {pizzaObk.soldOut ? '"Sold Out"' : pizzaObk.price}</span>
      </div>
    </li>
  );
}

// ########## CONDITIONAL RENDERING

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {/* short circuiting if its true then trigger comment, with iterenary operator */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <div className="order">
          <p>
            We are open from {openHour} to {closeHour}.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open until {closeHour}.00</p>
      <button className="btn">Order</button>
    </div>
  );
}

// render app in DOM v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

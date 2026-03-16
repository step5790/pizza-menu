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
      {/* react dont have boolean value, but render value, then use condition */}
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            /** making into object to render all data in array using MAP, but each needs a uniqe key property ***/
            <Pizza pizzaObk={pizza} key={pizza.name} />
          ))}
        </ul>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach"
        photo="pizzas/spinaci.jpg"
        price={10}
      />
      
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        photo="pizzas/funghi.jpg"
        // use object for numbers
        price={12}
      /> */}
    </main>
  );
}

// ############ PROPS/PROPERTY
// 1. pass props in the compon ent
// 2. receive the props in the component
// can pass anything even other components
// IMMUTABLE - read-only, only used states

function Pizza(props) {
  console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObk.photoName} alt={props.name} />
      <div>
        <h2>{props.pizzaObk.name}</h2>
        <p>{props.pizzaObk.ingredients}</p>
        <span>Price: {props.pizzaObk.price + 3}</span>
      </div>
    </li>
  );
}

// ########## CONDITIONAL RENDERING

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {/* short circuiting if its true then trigger comment, with iterenary operator */}
      {/* {isOpen && (
        <div className="order">
          <p>We are open from {openHour}.00</p>
        </div>
      )}

      {!isOpen && (
        <div className="order">
          <p>We are closed</p>
        </div>
      )} */}
      <div className="order">
        <p>{isOpen ? `We are open from ${openHour}.00` : "We are closed"}</p>
      </div>
    </footer>
  );
}

// render app in DOM v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

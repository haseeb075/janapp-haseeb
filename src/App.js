// import "./App.css";

// importing images
// import { lemon } from "../src/assets/images/lemon.jpeg";

//importing components
// import StartReact from "../src/components/startreact";
// import WebsiteHome from "./pages/WebsiteHome";
// import Main from "./components/MainContent";
// import Footer from "./components/Footer";
// import TodoItem from "./components/TodoItem";
// import ContactCard s from "./components/ContactCards";

// import Joke from "./components/Joke";
// import JokesData from "./components/jokesData";
// import Product from "./components/Product";
// import Productdata from "./components/SchoolProducts.json";
// import StateComponent from "./components/StateComponent";
// Mosh
// import FebComponent from "./components/Febcomponent";
// import Parent from "./components/Parent";

//* json coming from jokesData that will be passed 1in map function

import Header from '../src/components/StaticComponents/Header'
import About from '../src/pages/About'

// styles
import '../src/global/styles/general.css'


function App(props) {
  // const Jokescomponent = () =>
  //   JokesData.map((joke) => (
  //     <Joke key={joke.id.} question={joke.question} punchline={joke.punchline} />
  //   ));

  //props component ha vingfunction
  // to display product's data, component must be wrapped in a function
  // const Data = ({ array }) => {
  //   return (
  //     <>
  //       {array.map((ele) => (
  //         <Product x={ele} />
  //       ))}{" "}
  //     </>
  //   );
  // };

  // schoolData
  // console.log("productdata", Productdata);
  // const schoolData = Productdata.map((product) => <Product id={product} />);
  // console.log("skooldata", schoolData);
  return (
    <div className='App'>
      
{/* All Routes */}
    
      <div>
        <Header/>
        <About />

      </div>
 


      {/* Props component */}
      {/* to display product's data, component must be wrapped in a function */}
      {/* <Data array={Productdata} /> */}

      {/* State Component  Running Code*/}

      {/* <StateComponent /> */}
      
      {/* <Main /> */}
      {/* <FebComponent /> */}
      {/* Parent Component Running Code*/}
      {/* <Parent/> */}
      {/* <Start React /> */}
      {/* <TodoItem /> */}

      {/* note: props are passing from parent component from App.js to child component (Contact cards) */}
      {/* <ContactCards
        contact={{
          imageURL: "../src/assets/images/lemon.jpeg",
          title: "Item Title 1",
          para: "Item para 1",
          number: "1",
        }}
      />

      <ContactCards
        contact={{
          imageURL: "../src/assets/images/lemon.jpeg",
          title: "Item Title 2",
          para: "Item para 2",
          number: "2",
        }}
      />
      <ContactCards
        contact={{
          imageURL: "../src/assets/images/lemon.jpeg",
          title: "Item Title 3",
          para: "Item para 3",
          number: "3",
        }}
      /> */}
      {/* <Joke jokes={{ question: "how's the joke", punchline: "hahahaha...." }} /> */}

      {/* json is coming from jokesData */}
      {/* try array methods filter, map, sort, reduce, every, some, find, findIndex */}

      {/* {Jokescomponent} */}

      {/* {() =>
        SchoolProducts.map((product) => (
          <d iv>
            <p>{props.product.id}</p>
            <p>{props.product.name}</p>
            <p>{props.product.price}</p>
          </d>
        ))
      } */}
      {/* 
      <Footer /> */}
    </div>
  );
}

export default App;

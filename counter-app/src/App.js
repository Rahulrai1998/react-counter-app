import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import React, { useState } from "react";

let i = 0;

const App = () => {
  // state = {
  //   counters: [
  //     // { id: 1, value: 0 },
  //     // { id: 2, value: 0 },
  //     // { id: 3, value: 0 },
  //     // { id: 4, value: 0 },
  //     // { id: 5, value: 0 },
  //   ],
  // };

  const [state, setState] = useState({
    counters: [],
  });

  const handleIncrement = (counter) => {
    // console.log(counter)

    const counters = [...state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    setState({ counters });
  };

  const handleRemove = (counter) => {
    const counters = [...state.counters];
    // console.log(counter)
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
    }
    setState({ counters });
  };

  const handleReset = () => {
    const counters = state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    setState({ counters });
  };

  const handleDelete = (counterId) => {
    const counters = state.counters.filter((c) => c.id !== counterId);
    setState({ counters });
  };

  const handleClearAll = () => {
    const counters = [...state.counters];
    counters.length = 0;
    setState({ counters });
  };

  // Add new components
  const handleAddItems = () => {
    const counters = [...state.counters];
    let v = 1;
    i++;
    counters.push({ id: i, value: v });
    setState({ counters });
  };

  return (
    <React.Fragment>
      <Navbar
        totalCounters={state.counters.filter((c) => c.value > 0).length}
      />
      <main className="container">
        <Counters
          counters={state.counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
          onRemove={handleRemove}
          onAddItems={handleAddItems}
          onClearAll={handleClearAll}
        />
      </main>
    </React.Fragment>
  );
};

export default App;

// class App extends Component {
//   state = {
//     counters: [
//       // { id: 1, value: 0 },
//       // { id: 2, value: 0 },
//       // { id: 3, value: 0 },
//       // { id: 4, value: 0 },
//       // { id: 5, value: 0 },
//     ],
//   };

//   handleIncrement = (counter) => {
//     // console.log(counter)

//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value++;
//     this.setState({ counters });
//   };

//   handleRemove = (counter) => {
//     const counters = [...this.state.counters];
//     // console.log(counter)
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     if (counters[index].value > 0) {
//       counters[index].value--;
//     }
//     this.setState({ counters });
//   };

//   handleReset = () => {
//     const counters = this.state.counters.map((c) => {
//       c.value = 0;
//       return c;
//     });
//     this.setState({ counters });
//   };

//   handleDelete = (counterId) => {
//     const counters = this.state.counters.filter((c) => c.id !== counterId);
//     this.setState({ counters });
//   };

//   handleClearAll=()=>{
//     const counters = [...this.state.counters];
//     counters.length = 0;
//     this.setState({ counters });

//   }

//   // Add new components
//   handleAddItems=()=>{

//     const counters = [...this.state.counters];
//     let v = 1 ; i++;
//     counters.push({id:i , value:v})
//     this.setState({counters})

//   }

//   render(){
//     return (
//       <React.Fragment>
//         <Navbar totalCounters = {this.state.counters.filter(c=>c.value > 0).length}/>
//         <main className="container">
//           <Counters
//             counters={this.state.counters}
//             onReset={this.handleReset}
//             onIncrement={this.handleIncrement}
//             onDelete={this.handleDelete}
//             onRemove={this.handleRemove}
//             onAddItems={this.handleAddItems}
//             onClearAll = {this.handleClearAll}
//           />
//         </main>
//       </React.Fragment>
//     );
//   }

//   }

// export default App;

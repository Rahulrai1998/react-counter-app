import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Counter = (props) => {
  return (
    <div>
      {/* <img src={this.state.imgURL} alt="" /> */}
      <span
        style={{ fontSize: 50, fontWeight: "bold" }}
        className={fnGetBadgeClasses()}
      >
        {formatCount()}
      </span>
      <button
        onClick={() => props.onIncrement(props.counter)}
        style={{ border: "none" }}
        className="btn btn-secondary btn-lg m-4"
      >
        Add
      </button>
      <button
        onClick={() => props.onRemove(props.counter)}
        style={{ border: "none" }}
        className="btn btn-secondary btn-lg m-4"
      >
        Remove
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        style={{ border: "none" }}
        className="btn btn-secondary btn-lg m-4 btn-danger"
      >
        Delete
      </button>

      {/* {this.state.tags.length === 0 && 'Please use a tag'}
      {this.renderTags()} */}
    </div>
  );

  function fnGetBadgeClasses() {
    let classes = "badge m-4 bg-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  function formatCount() {
    const { value } = props.counter; // object destructuring
    return value === 0 ? "0" : value;
  }
};

export default Counter;

// /props/CONTROLLED COMPONENT - NO state-object
// class Counter extends Component {

//   // styles = {

//   //     fontSize : 50 ,
//   //     fontWeight : "bold"

//   // };

// //   constructor(){
// //     super();
// //     this.handleIncrement = this.handleIncrement.bind(this);
// //   }

// //   btnStyles={
// //     backgroundColor : "black",
// //     border : "none"
// //   }

//   handleIncrement=product=>{
//     //console.log("Increment Clicked" , this)
//     console.log(product)

//     this.setState({value:this.state.value+1})
//   }

//   //For passing arguments to handleIncrement() method we need another temporary helper method like ,
// // doHandleIncrement = () =>
// // {
// //     this.handleIncrement({id : 1})

// // }
//   handleDecrement=()=>{
//     this.setState({value:this.state.value-1})
//   }

// renderTags(){
//     if(this.state.tags.length === 0) return <p>No Tags</p>;
//     return <ul>{this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}</ul>;

// }
//   render() {
//     // let classes = this.fnGetBadgeClasses();

//     //console.log('props' , this.props)
//     return (
//       <div>
//         {/* <img src={this.state.imgURL} alt="" /> */}
//         <span style={{ fontSize: 50, fontWeight: "bold" }} className={this.fnGetBadgeClasses()}>
//           {this.formatCount()}
//         </span>
//         <button onClick={()=> this.props.onIncrement(this.props.counter)} style={{border:'none'}} className="btn btn-secondary btn-lg m-4">Add</button>
//         <button onClick={()=> this.props.onRemove(this.props.counter)} style={{border:'none'}} className="btn btn-secondary btn-lg m-4">Remove</button>
//         <button onClick={() => this.props.onDelete(this.props.counter.id)} style={{border:'none'}} className="btn btn-secondary btn-lg m-4 btn-danger">Delete</button>

//         {/* {this.state.tags.length === 0 && 'Please use a tag'}
//         {this.renderTags()} */}
//       </div>
//     );
//   }

//   fnGetBadgeClasses() {
//     let classes = "badge m-4 bg-";
//     classes += this.props.counter.value === 0 ? "warning" : "primary";
//     return classes;
//   }

//   formatCount() {
//     const { value } = this.props.counter; // object destructuring
//     return value === 0 ? "0" : value;
//   }
// }

// export default Counter;

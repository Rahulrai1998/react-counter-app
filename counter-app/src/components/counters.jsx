import React from "react";
import Counter from "./counter";

const Counters = (props) => {
  const { onRemove, onDelete, onReset, onIncrement, counters, onAddItems,onClearAll } = props;
    
  return (
    <div
      style={{
        margin: "auto",
        width: 600,
        backgroundColor: "#ffeee6",
        borderRadius: "15px",
      }}
    >
      <button
        onClick={onReset}
        className="btn btn-lg btn-primary m-4"
        style={{ border: "none", width: "140px" }}
      >
        Reset All
      </button>

      <button
        className="btn btn-lg btn-primary m-4"
        style={{ border: "none", width: "140px" }}
        onClick={onAddItems}
      >
        Add items
      </button>
      <button
        className="btn btn-lg btn-primary m-4"
        style={{ border: "none", width: "140px" }}
        onClick={onClearAll}
      >
        Clear All
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onRemove={onRemove}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;

// class Counters extends Component {
//   render() {

//   }
// }

// export default Counters;

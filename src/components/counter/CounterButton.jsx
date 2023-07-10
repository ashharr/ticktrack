import { useState } from "react";
import "./Counter.css";
import { PropTypes } from "prop-types";
import Counter from "./Counter";

export default function CounterButton({by, incrementMethod, decrementMethod}) {
    const [count, setCount] = useState(0);
  
    // function incrementCounterFunction() {
    //   setCount(count + by);
    //   incrementMethod(by);
    // }
  
    // function decrementCounterFunction() {
    //   setCount(count - by);
    //   decrementMethod(by);
    // }

    return (
      <div className="Counter">
        <div>
          <button className="counterButton" onClick={()=>incrementMethod(by)}>
            +{by}
          </button>
          <button className="counterButton" onClick={()=> decrementMethod(by)}>
            -{by}
          </button>
        </div>
      </div>
    );
  }
  
  Counter.propTypes = {
    by: PropTypes.number,
  };
  
  Counter.defaultProps = {
    by: 5,
  };
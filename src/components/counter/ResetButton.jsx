import { useState } from "react";

export default function ResetButton({resetMethod}){
    const [count, setCount] = useState(0);
  
    function resetCounterMethod() {
      setCount(0);
      resetMethod();
    }

    return(
        <div>
            <button className="resetButton counterButton" onClick={resetCounterMethod}>
                Reset
            </button>
        </div>
    )
}
import React  from "react";

function Counter(props){
 const arrayDiv = props.box;

    return(
        <div className="counter-class" >
            {arrayDiv.map((el, i)=>
                <div key={i}>
                <h1>{el}</h1>
                    <button onClick={()=>props.addOne(i)}>+</button>
                    <button onClick={()=> props.minusOne(i)}>-</button>
                    <button onClick={()=> props.setToZero(i)}>0</button>
                    <button onClick={()=> props.removeBox(i)}>del</button>
                </div>
            )}
        </div>

    );
}

export default Counter;
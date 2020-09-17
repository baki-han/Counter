import React, {useState} from "react";

function Counter(props){
 const arrayDiv = props.box;

const [count , setCount] = useState(arrayDiv);

const addOne = (index) =>{
    const arr = [...count];
    arr[index] += 1;
    setCount(arr);
}
    const minusOne = (index) =>{
        const arr = [...count];
        arr[index] -= 1;
        setCount(arr);
    }

    const setToZero = (index) =>{
        const arr = [...count];
        arr[index] = 0;
        setCount(arr);
    }

    return(
        <div className="counter-class" >
            {count.map((el, i)=>
                <div key={i}>
                <h1>{el}</h1>
                    <button onClick={()=> addOne(i)}>+</button>
                    <button onClick={()=> minusOne(i)}>-</button>
                    <button onClick={()=> setToZero(i)}>0</button>
                </div>
            )}
        </div>

    );
}

export default Counter;
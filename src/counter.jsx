import { useEffect } from "react";

export default function Counter(props) {

  useEffect(function(){
    console.log("The random String was changed", props.randomString)
  }, [props.randomString])
  
  useEffect(function(){

    console.log("The counter was changed", props.counter)
    
  },[props.counter])

 

  return (
    <div>
      <h1>Count - {props.counter}</h1>

      <h2>Random String = {props.randomString}</h2>

      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  );
}

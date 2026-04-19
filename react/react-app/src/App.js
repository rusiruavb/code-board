import { useState, useEffect } from "react";
import Button from "./components/button";
import Form from "./components/form";

function App() {
  let [count, setCount] = useState(0);
  let [buttonText, setButtonText] = useState("Click");

  useEffect(() => {
    // Mount + Update
    console.log("Component is mounted and updated");
  });

  useEffect(() => {
    // Mount
    console.log("Component is mounted");
  }, []);

  useEffect(() => {
    // Unmount
    return () => {
      console.log("Component is unmounted");
    };
  }, []);

  const handleClick = (message) => {
    alert(message);
  };

  useEffect(() => {
    if (count === 5) {
      setButtonText("Add to cart");
    } else {
      setButtonText("Click");
    }
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Form />
    </div>
  );
}

export default App;

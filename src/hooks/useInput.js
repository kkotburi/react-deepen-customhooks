import { useState } from "react";

const useInput = () => {
  // state
  const [value, setValue] = useState("");

  // handler
  const handler = (event) => {
    setValue(event.target.value);
  };
  return [value, handler];
};

export default useInput;

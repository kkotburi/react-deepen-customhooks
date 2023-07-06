// import { useState } from "react";
import useInput from "./hooks/useInput";

const App = () => {
  const [name, onChangeNameHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();

  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");

  // const onChangeNameHandler = (event) => {
  //   setName(event.target.value);
  // };

  // const onChangePasswordHandler = (event) => {
  //   setPassword(event.target.value);
  // };

  return (
    <div>
      <input type="text" value={name} onChange={onChangeNameHandler} />
      <input
        type="pasword"
        value={password}
        onChange={onChangePasswordHandler}
      />
    </div>
  );
};

export default App;

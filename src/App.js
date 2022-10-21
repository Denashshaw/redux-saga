import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatsRequest } from "./catSlice";
import "./styles.css";

export default function App() {
  const data = useSelector((state) => state.cats.cats);
  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsRequest());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}

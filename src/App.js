import {
  Error,
  Homepage,
  Capsules,
  Cores,
  Crew,
  SingleCrew,
  Dragons,
  SingleDragon,
} from "./pages";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Header } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/*" element={<Error />}></Route>
        <Route path="/capsules" element={<Capsules />}></Route>
        <Route path="/cores" element={<Cores />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/crew/:id" element={<SingleCrew />}></Route>
        <Route path="/dragons" element={<Dragons />}></Route>
        <Route path="/dragons/:id" element={<SingleDragon />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

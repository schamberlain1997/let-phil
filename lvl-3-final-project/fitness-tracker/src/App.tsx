import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Exercises from "./pages/Exercises";
import WorkoutLog from "./pages/WorkoutLog"; 

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Exercises />} />
        <Route path="/workout-log" element={<WorkoutLog />} />
      </Routes>
    </BrowserRouter>
  );
}
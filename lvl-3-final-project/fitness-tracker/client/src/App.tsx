import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Exercises from "./pages/Exercises";
import WorkoutLog from "./pages/WorkoutLog";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateExercise from './pages/CreateExercise';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/exercises/create" element={
         <ProtectedRoute>
          <Header />
         <CreateExercise />
        </ProtectedRoute>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={
          <ProtectedRoute>
            <Header />
            <Exercises />
          </ProtectedRoute>
        } />
        <Route path="/workout-log" element={
          <ProtectedRoute>
            <Header />
            <WorkoutLog />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}
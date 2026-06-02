import { useState } from "react";
import { useEffect } from "react";

import "./App.css";
import Counter from "./components/useState/Counter"
import ContactForm from "./components/useState/SimpleForm";
import ThemeToggle from "./components/useState/ThemeToggle";
import NamePreview from "./components/useState/LiveNamePreview";
import CharacterCounter from "./components/useState/CharacterCountInput";
import TodoList from "./components/useState/TodoList";
import TitleUpdater from "./components/useEffect/SyncState";
import RenderLogger from "./components/useEffect/RenderLogger";
import RandomUser from "./components/useEffect/FetchData";
import Timer from "./components/useEffect/Cleanup";
import FetchWithStates from "./components/useEffect/ImprovedFetch";


function App() {

  const [value, setValue] = useState();
  /**
   * 
   */
  useEffect(()=>{
    console.log("useEffect");
  },[]);



  return (
    <>
      <ThemeToggle name={value}/>
      <ContactForm setterFunction={setValue} />
      <Counter />
      <NamePreview/>
      <CharacterCounter setterFunction={setValue}/>
      <TodoList/>
      <TitleUpdater/>
      <RenderLogger/>
      <RandomUser/>
      <Timer/>
      <FetchWithStates/>
    </>
  );
}

export default App;

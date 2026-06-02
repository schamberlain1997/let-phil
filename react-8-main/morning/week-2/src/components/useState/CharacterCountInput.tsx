// import type { kMaxLength } from "buffer";
import { useState } from "react";

/*
Requirements:
- Create a textarea input
- Show character count
- Limit to 100 characters
- If limit exceeded:
  - Show warning or change style
  - Disable submit button
*/
type CharacterCounter = {
  setterFunction: (text: string) => void;
}

export default function CharacterCounter({setterFunction}:CharacterCounter) {
  const [text, setText] = useState("")
  const limit = 100
  const [success, setSuccess] = useState(false)
  const isOverLimit = text.length > limit
  
  const handleChange = (e: any) => {
    setText(e.target.value)
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setterFunction(text);
    setSuccess(true);
  }


  return (
    <div>
      <textarea 
        value={text}
        onChange={handleChange}
        // maxLength={limit}
        rows={4}
        />
        <div style={{color: text.length > limit ? 'red' : 'inherit'}}>
          {text.length} / {limit}
        </div>
        <button onClick={handleSubmit} disabled={isOverLimit}>Submit</button>
        <p>
        {success
          ? "Successfully sent message"
          : "An error occurred when sending your message"}
      </p>
    </div>
  );
}
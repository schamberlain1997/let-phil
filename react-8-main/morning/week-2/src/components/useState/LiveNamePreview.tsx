import { useState } from "react";

/*
Requirements:
- Create an input field for a name
- Display: "Hello, [name]!"
- If input is empty, show: "Please enter your name"
- Limit input to 20 characters
*/

export default function NamePreview() {
  const [name, setName] = useState("");


  return <div>
    <input
      placeholder="Please enter your name"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      maxLength={20}
      />
      <p>Hello, {name}</p>

  </div>;
}

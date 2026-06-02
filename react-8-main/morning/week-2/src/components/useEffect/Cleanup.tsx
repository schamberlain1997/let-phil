import { useState, useEffect } from "react";

/*
Requirements:
- Create a timer that increments every second
- Display the count
- Add a button to stop the timer
- Use cleanup to clear interval
*/

export default function Timer() {
  const [count, setCount] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect (()=>{
    if (!isActive) return;

    const intervalId = setInterval(()=>{
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  
    return () => {
      clearInterval(intervalId);
    };
  }, [isActive]);

  return (<div>
    < h2>Timer: {count} seconds</h2>
    <button onClick={() => setIsActive(!isActive)}>
      {isActive ? "Stop Timer" : "Resume Timer"}
    </button>
  </div>
  );
}

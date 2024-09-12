import { useState, useEffect } from 'react';

const useTypingEffect = (text, speed) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return; // Prevent typing if already completed

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;
      if (index >= text.length -1) {
        clearInterval(interval);
        setIsComplete(true); // Mark as complete once typing is done
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, isComplete]);

  return displayedText;
};

export default useTypingEffect;

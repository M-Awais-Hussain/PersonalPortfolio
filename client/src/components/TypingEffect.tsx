import { useState, useEffect } from 'react';
import { TYPING_PHRASES } from '@/lib/constants';

interface TypingEffectProps {
  className?: string;
}

const TypingEffect = ({ className = '' }: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentPhrase = TYPING_PHRASES[phraseIndex];
      
      if (isDeleting) {
        // Removing characters
        setDisplayText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        setTypingSpeed(50);
      } else {
        // Adding characters
        setDisplayText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        setTypingSpeed(150);
      }
      
      // If word is complete, start deleting
      if (!isDeleting && charIndex === currentPhrase.length) {
        setIsDeleting(true);
        setTypingSpeed(1000); // Pause at end of word
      }
      
      // If deletion is complete, move to next word
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex(prev => (prev + 1) % TYPING_PHRASES.length);
        setTypingSpeed(500); // Pause before typing next word
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, typingSpeed]);

  return (
    <div className={className}>
      <span>{displayText}</span>
      <span className="typing-cursor">&nbsp;</span>
    </div>
  );
};

export default TypingEffect;

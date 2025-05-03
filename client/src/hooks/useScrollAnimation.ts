import { useEffect, useState, RefObject } from "react";

interface ScrollAnimationProps {
  ref: RefObject<HTMLElement>;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollAnimation({ 
  ref, 
  threshold = 0.2, 
  rootMargin = "0px", 
  once = true 
}: ScrollAnimationProps): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold, rootMargin, once]);

  return isVisible;
}

export default useScrollAnimation;

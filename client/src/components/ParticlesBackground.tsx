import { useTheme } from '@/context/ThemeContext';

const ParticlesBackground = () => {
  const { theme } = useTheme();
  
  // Simple animated background
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className={`w-full h-full ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-100 to-white'}`}>
        <div className="absolute top-0 left-0 w-full h-full">
          {Array(80).fill(0).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-indigo-500 dark:bg-indigo-300 animate-pulse"
              style={{
                width: `${Math.random() * 8 + 3}px`,
                height: `${Math.random() * 8 + 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.2,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParticlesBackground;

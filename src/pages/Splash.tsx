
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Activity } from "lucide-react";

const Splash = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Simulate checking auth state
    const timer = setTimeout(() => {
      setIsAnimating(false);
      // Navigate to welcome page after animation
      setTimeout(() => navigate("/welcome"), 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center medical-gradient">
      <div className="text-center text-white">
        <div className={`mb-8 transition-all duration-1000 ${isAnimating ? 'scale-100 opacity-100' : 'scale-110 opacity-90'}`}>
          <div className="relative">
            <Heart 
              className={`w-20 h-20 mx-auto mb-4 transition-all duration-2000 ${isAnimating ? 'animate-pulse' : ''}`} 
              fill="white"
            />
            <Activity 
              className={`w-8 h-8 absolute -top-2 -right-2 transition-all duration-1500 ${isAnimating ? 'animate-bounce' : ''}`} 
            />
          </div>
        </div>
        
        <h1 className={`text-4xl font-bold mb-2 transition-all duration-1000 delay-500 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-90'}`}>
          VitaCare
        </h1>
        
        <p className={`text-xl opacity-90 transition-all duration-1000 delay-700 ${isAnimating ? 'translate-y-0 opacity-90' : 'translate-y-4 opacity-70'}`}>
          Your Health, Our Priority
        </p>
        
        <div className="mt-8">
          <div className="flex justify-center space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 bg-white rounded-full animate-pulse`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;

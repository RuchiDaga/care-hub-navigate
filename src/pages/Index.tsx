
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to splash screen
    navigate("/");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to VitaCare</h1>
        <p className="text-xl text-muted-foreground">Your Health, Our Priority</p>
      </div>
    </div>
  );
};

export default Index;

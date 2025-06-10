import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Activity, Calendar, MessageSquare, FileText } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Book appointments with top doctors in seconds"
    },
    {
      icon: MessageSquare,
      title: "Chat with Doctors",
      description: "Get instant medical advice through secure chat"
    },
    {
      icon: FileText,
      title: "Health Records",
      description: "Keep all your medical records in one place"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <div className="flex justify-center items-center mb-6">
            <Heart className="w-12 h-12 text-primary mr-2" fill="currentColor" />
            <h1 className="text-3xl font-bold text-gray-900">VitaCare</h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome to Better Healthcare
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Connect with qualified doctors, manage your health records, and take control of your wellness journey.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="max-w-sm mx-auto space-y-4">
          <Button 
            onClick={() => navigate("/login")}
            className="w-full h-12 text-lg medical-gradient hover:opacity-90 transition-opacity"
          >
            Login to Your Account
          </Button>
          
          <Button 
            onClick={() => navigate("/signup")}
            variant="outline"
            className="w-full h-12 text-lg border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Create New Account
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

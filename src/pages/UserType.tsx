
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, User, MessageSquare } from "lucide-react";

const UserType = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<"patient" | "doctor" | null>(null);

  const handleContinue = () => {
    if (selectedType === "patient") {
      navigate("/patient-profile");
    } else if (selectedType === "doctor") {
      navigate("/doctor-profile");
    }
  };

  const userTypes = [
    {
      type: "patient" as const,
      icon: User,
      title: "I'm a Patient",
      description: "Book appointments, manage health records, and chat with doctors",
      features: ["Book Appointments", "Health Records", "Chat with Doctors", "Prescription Management"]
    },
    {
      type: "doctor" as const,
      icon: MessageSquare,
      title: "I'm a Doctor",
      description: "Manage appointments, consult patients, and provide healthcare services",
      features: ["Manage Appointments", "Patient Consultations", "Prescription Tools", "Schedule Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <div className="flex justify-center items-center mb-6">
            <Heart className="w-12 h-12 text-primary mr-2" fill="currentColor" />
            <h1 className="text-3xl font-bold text-gray-900">HealthCare+</h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How do you want to use HealthCare+?
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Select your role to get personalized features and experience
          </p>
        </div>

        {/* User Type Selection */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {userTypes.map((userType) => (
              <Card
                key={userType.type}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedType === userType.type
                    ? "ring-2 ring-primary border-primary bg-accent"
                    : "border-gray-200 hover:border-primary"
                }`}
                onClick={() => setSelectedType(userType.type)}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    selectedType === userType.type ? "bg-primary text-white" : "bg-blue-100 text-primary"
                  }`}>
                    <userType.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{userType.title}</h3>
                  <p className="text-gray-600 mb-6">{userType.description}</p>
                  
                  <div className="space-y-2">
                    {userType.features.map((feature, index) => (
                      <div key={index} className="flex items-center justify-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Continue Button */}
          <div className="text-center">
            <Button
              onClick={handleContinue}
              disabled={!selectedType}
              className="px-12 h-12 text-lg medical-gradient hover:opacity-90 disabled:opacity-50"
            >
              Continue as {selectedType === "patient" ? "Patient" : selectedType === "doctor" ? "Doctor" : "..."}
            </Button>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8 text-gray-500 text-sm max-w-md mx-auto">
            <p>You can always change your role later in your profile settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserType;

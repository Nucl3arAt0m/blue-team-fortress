import { Button } from "@/components/ui/button";
import { Shield, Download, Mail } from "lucide-react";
import sahilPortrait from "@/assets/sahil-portrait.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center cyber-pattern relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/90"></div>
      
      {/* Floating cyber elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full pulse-glow"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full pulse-glow" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-cyber-tertiary rounded-full pulse-glow" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-secondary/50 rounded-full border border-border">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Cybersecurity Specialist</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-cyber-tertiary bg-clip-text text-transparent">
                Sahil Sachin Borse
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Defensive Cybersecurity Expert building secure digital environments and tackling real-world security challenges
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-cyber transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              
              <Button 
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-full border-4 border-gradient-to-r from-primary to-accent overflow-hidden shadow-2xl float-animation">
                <img
                  src={sahilPortrait}
                  alt="Sahil Sachin Borse - Cybersecurity Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Cyber accent elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary rounded-lg rotate-45 animate-spin"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-accent rounded-full pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";
import { Shield, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Hacker Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      
      {/* Matrix-style falling code animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="matrix-rain"></div>
      </div>
      
      {/* Animated circuit lines */}
      <div className="absolute inset-0">
        <div className="circuit-lines"></div>
      </div>
      
      {/* Floating cyber elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full pulse-glow"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full pulse-glow" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-cyber-tertiary rounded-full pulse-glow" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-60 left-1/3 w-1 h-8 bg-primary/50 animate-pulse"></div>
      <div className="absolute bottom-60 right-1/3 w-8 h-1 bg-accent/50 animate-pulse" style={{ animationDelay: "1.5s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Centered Text Content */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-secondary/50 rounded-full border border-border">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Cybersecurity Specialist</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-cyber-tertiary bg-clip-text text-transparent">
              Sahil Sachin Borse
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Defensive Cybersecurity Expert building secure digital environments and tackling real-world security challenges
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-cyber transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open('https://drive.google.com/file/d/1ahhECvegTr6AKI5tjv9uEsxU8S6CvLBY/view?usp=sharing', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

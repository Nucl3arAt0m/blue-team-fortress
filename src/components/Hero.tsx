import { Button } from "@/components/ui/button";
import { Shield, Download, Mail, Zap, Eye, Lock } from "lucide-react";
import sahilPortrait from "@/assets/sahil-portrait.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingElements = [
    { icon: Shield, position: "top-20 left-10", delay: "0s", color: "primary" },
    { icon: Zap, position: "top-40 right-20", delay: "1s", color: "accent" },
    { icon: Eye, position: "bottom-40 left-20", delay: "2s", color: "cyber-tertiary" },
    { icon: Lock, position: "bottom-60 right-40", delay: "3s", color: "cyber-secondary" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0 cyber-pattern opacity-40"></div>
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-drift"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-cyber-secondary/20 to-cyber-tertiary/20 rounded-lg rotate-45 blur-lg animate-drift" style={{ animationDelay: '5s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 border-2 border-primary/30 rounded-full animate-morph"></div>

      {/* Floating cyber icons */}
      {floatingElements.map((element, index) => (
        <div 
          key={index}
          className={`floating-elements ${element.position} w-8 h-8 animate-pulse-glow`}
          style={{ animationDelay: element.delay }}
        >
          <div className={`p-2 bg-${element.color}/20 rounded-lg backdrop-blur-sm border border-${element.color}/30`}>
            <element.icon className={`h-4 w-4 text-${element.color}`} />
          </div>
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-6 py-3 cyber-glassmorphism rounded-full animate-fade-in">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Available for Opportunities</span>
            </div>
            
            {/* Main Heading with Enhanced Typography */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-2xl md:text-3xl font-normal text-muted-foreground mb-2">
                  Hello, I'm
                </span>
                <span className="block bg-gradient-to-r from-primary via-accent to-cyber-tertiary bg-clip-text text-transparent hero-glow">
                  Sahil Sachin
                </span>
                <span className="block bg-gradient-to-r from-accent via-cyber-secondary to-cyber-tertiary bg-clip-text text-transparent hero-glow">
                  Borse
                </span>
              </h1>
            </div>
            
            {/* Enhanced Subtitle */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-2xl md:text-3xl font-semibold text-foreground">
                Cybersecurity Specialist
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Building secure digital fortresses and defending against evolving cyber threats. 
                Specializing in <span className="text-primary font-semibold">blue team operations</span> and 
                <span className="text-accent font-semibold"> defensive security</span>.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Tools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyber-secondary">100%</div>
                <div className="text-sm text-muted-foreground">Blue Team</div>
              </div>
            </div>
            
            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button 
                onClick={scrollToContact}
                className="group relative bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-cyber transition-all duration-300 button-glow overflow-hidden"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Let's Connect
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
              
              <Button 
                variant="outline"
                className="group border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Enhanced Profile Image Section */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Animated background rings */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-accent to-cyber-secondary rounded-full blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Cyber border frame */}
                <div className="absolute inset-0 cyber-border rounded-full animate-morph"></div>
                
                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl animate-float">
                  <img
                    src={sahilPortrait}
                    alt="Sahil Sachin Borse - Cybersecurity Specialist"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating tech elements around image */}
                <div className="absolute -top-6 -right-6 w-12 h-12 cyber-glassmorphism rounded-lg rotate-12 animate-drift flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-10 h-10 cyber-glassmorphism rounded-full animate-pulse-glow flex items-center justify-center">
                  <Lock className="h-5 w-5 text-accent" />
                </div>
                
                <div className="absolute top-1/4 -left-8 w-8 h-8 border-2 border-cyber-secondary/50 rounded-lg rotate-45 animate-morph"></div>
                <div className="absolute bottom-1/4 -right-8 w-6 h-6 bg-cyber-tertiary/30 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
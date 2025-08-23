import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Database, Shield, Activity, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Sysmon Logs to ELK",
      description: "Comprehensive ELK stack implementation for advanced log management and security monitoring. Features custom Kibana dashboards for real-time threat detection and security incident analysis.",
      icon: Database,
      tags: ["ELK Stack", "Kibana", "Log Management", "SIEM"],
      gradient: "from-primary to-accent",
      githubUrl: "https://github.com/Nucl3arAt0m/Sysmon-Logs-to-ELK",
    },
    {
      title: "HoneyPot SentinelOne",
      description: "Cloud-based honeypot deployment in Azure integrated with Microsoft Sentinel. Designed to detect and analyze attacker behavior with comprehensive threat visualization capabilities.",
      icon: Shield,
      tags: ["Azure", "Microsoft Sentinel", "Honeypot", "Threat Detection"],
      gradient: "from-accent to-cyber-secondary",
      githubUrl: "https://github.com/Nucl3arAt0m/HoneyPot-SentinelOne",
    },
    {
      title: "EDR-Attack and Defense",
      description: "Advanced cybersecurity laboratory simulating real-world attack scenarios using Sliver C2 framework with LimaCharlie EDR for comprehensive detection and response capabilities.",
      icon: Activity,
      tags: ["EDR", "Sliver C2", "LimaCharlie", "Attack Simulation"],
      gradient: "from-cyber-secondary to-cyber-tertiary",
      githubUrl: "https://github.com/Nucl3arAt0m/EDR-Attack_and_Defense",
    },
    {
      title: "CTI Dashboard",
      description: "Real-time Cyber Threat Intelligence dashboard built with Python, Flask, and MongoDB. Provides comprehensive threat monitoring, visualization, and intelligence gathering capabilities.",
      icon: TrendingUp,
      tags: ["Python", "Flask", "MongoDB", "Threat Intelligence"],
      gradient: "from-cyber-tertiary to-primary",
      githubUrl: "https://github.com/Nucl3arAt0m/CTI-Dashboard",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my expertise in defensive cybersecurity through hands-on projects and real-world implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card card-hover group overflow-hidden">
              <CardHeader className="relative">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-bl-[100%] transition-all duration-500 group-hover:w-40 group-hover:h-40`}></div>
                <div className="flex items-center space-x-4 relative z-10">
                  <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-lg`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-secondary border border-border rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/50 text-primary hover:bg-primary/10"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Check out
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
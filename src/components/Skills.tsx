import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Shield, Search, AlertTriangle, FileText, Eye, Network } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "SIEM & Security Tools",
      icon: Shield,
      gradient: "from-primary to-accent",
      skills: [
        { name: "Splunk", level: 90 },
        { name: "QRadar", level: 85 },
        { name: "Microsoft Sentinel", level: 88 },
        { name: "ELK Stack", level: 92 },
      ],
    },
    {
      title: "Incident Response",
      icon: AlertTriangle,
      gradient: "from-accent to-cyber-secondary",
      skills: [
        { name: "Threat Hunting", level: 87 },
        { name: "Digital Forensics", level: 83 },
        { name: "Incident Management", level: 89 },
        { name: "Malware Analysis", level: 80 },
      ],
    },
    {
      title: "Vulnerability Management",
      icon: Search,
      gradient: "from-cyber-secondary to-cyber-tertiary",
      skills: [
        { name: "Vulnerability Assessment", level: 91 },
        { name: "Penetration Testing", level: 78 },
        { name: "Risk Assessment", level: 86 },
        { name: "Compliance Auditing", level: 82 },
      ],
    },
    {
      title: "Log Analysis & Monitoring",
      icon: FileText,
      gradient: "from-cyber-tertiary to-primary",
      skills: [
        { name: "Log Analysis", level: 93 },
        { name: "Network Monitoring", level: 88 },
        { name: "Behavioral Analytics", level: 85 },
        { name: "Anomaly Detection", level: 87 },
      ],
    },
    {
      title: "Security Operations",
      icon: Eye,
      gradient: "from-primary via-accent to-cyber-secondary",
      skills: [
        { name: "SOC Operations", level: 90 },
        { name: "Security Orchestration", level: 84 },
        { name: "Threat Intelligence", level: 89 },
        { name: "Security Automation", level: 81 },
      ],
    },
    {
      title: "Network Security",
      icon: Network,
      gradient: "from-cyber-secondary via-cyber-tertiary to-primary",
      skills: [
        { name: "Network Analysis", level: 86 },
        { name: "Intrusion Detection", level: 88 },
        { name: "Firewall Management", level: 83 },
        { name: "Network Forensics", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity skills focused on defensive operations and blue team methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card card-hover group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 bg-gradient-to-r ${category.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-muted-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground/80">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-secondary"
                      style={{
                        background: `linear-gradient(to right, transparent 0%, transparent ${skill.level}%, hsl(var(--secondary)) ${skill.level}%, hsl(var(--secondary)) 100%)`
                      }}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Competencies Summary */}
        <div className="mt-16">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Core Competencies
                </span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Security Tools Mastered</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">4</div>
                  <div className="text-sm text-muted-foreground">Major Projects Completed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-cyber-secondary">100%</div>
                  <div className="text-sm text-muted-foreground">Blue Team Focus</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-cyber-tertiary">24/7</div>
                  <div className="text-sm text-muted-foreground">Security Mindset</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
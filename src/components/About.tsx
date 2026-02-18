import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Building, Calendar } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "BTech CSE, Specialization in Cyber Security",
      institution: "Vellore Institute of Technology",
      year: "2025",
      icon: GraduationCap,
    },
    {
      degree: "Integrated 11th and 12th",
      institution: "Pace Junior Science College",
      year: "2021",
      icon: GraduationCap,
    },
  ];

  const experience = [
    {
      role: "Business Analyst - MD & CEO's office",
      company: "Allcargo Logistics",
      period: "November 2025 - Present",
      icon: Building,
    },
    {
      role: "Cybersecurity Intern",
      company: "Elevate Labs",
      period: "June - July 2025",
      icon: Building,
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about building secure digital environments and defending against evolving cyber threats
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border/50 shadow-card card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">My Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As a recent BTech graduate specializing in cybersecurity, I'm passionate about the defensive side of cybersecurity - 
                    the blue team operations that keep organizations safe from evolving threats.
                  </p>
                  <p>
                    My expertise lies in building robust security operations, implementing comprehensive monitoring solutions, 
                    and developing threat detection capabilities that provide real-time insights into potential security incidents.
                  </p>
                  <p>
                    I thrive on tackling real-world security challenges and I'm committed to continuous learning in this 
                    rapidly evolving field. My goal is to contribute to creating more secure digital environments where 
                    organizations can operate with confidence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education & Experience */}
          <div className="space-y-8">
            {/* Education */}
            <Card className="bg-gradient-card border-border/50 shadow-card card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                  <GraduationCap className="mr-3 h-6 w-6" />
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-secondary/30 rounded-lg border border-border/30">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <edu.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <div className="flex items-center mt-2 text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          {edu.year}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-gradient-card border-border/50 shadow-card card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                  <Building className="mr-3 h-6 w-6" />
                  Experience
                </h3>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-secondary/30 rounded-lg border border-border/30">
                      <div className="p-2 bg-accent/20 rounded-lg">
                        <exp.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{exp.role}</h4>
                        <p className="text-muted-foreground">{exp.company}</p>
                        <div className="flex items-center mt-2 text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

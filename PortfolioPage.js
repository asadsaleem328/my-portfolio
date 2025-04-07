import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import { useState } from "react";

export default function PortfolioPage() {
  const [projects, setProjects] = useState([
    {
      title: "Flywheel – E-commerce Ad & Retail Management Platform",
      client: "SSI",
      role: "Lead Senior Software Engineer",
      stack: "Java, Spring Boot, Spring Cloud, PostgreSQL, Snowflake, Redshift, GitHub Actions",
      description:
        "Led backend development for multi-platform retail optimization. Improved ad sync efficiency by 30% and reduced system response time by 20%.",
    },
    {
      title: "AI-Powered Microservices – Vroozi (B2B e-Procurement)",
      client: "Vroozi",
      role: "Senior Software Engineer",
      stack: "Java, Spring Boot, MongoDB, Python (ML), Azure",
      description:
        "Built REST services using AI APIs to automate procurement workflows. Reduced manual review time by 40%.",
    },
    {
      title: "Oracle PLM Automation Suite",
      client: "GoSaas Labs",
      role: "Lead Full Stack Developer",
      stack: "Java, Spring Boot, KnockoutJS, AWS, OCI",
      description:
        "Delivered security manager, approval matrix, and automation features for Oracle PLM. Automated 60% of user tasks.",
    },
    {
      title: "Similarity Search System Using Vector Embeddings",
      client: "Internal Project",
      role: "ML Developer (Python)",
      stack: "Python, FAISS, Sentence Transformers, FastAPI, MLFlow, Azure Functions",
      description:
        "Built semantic search engine with 95% similarity detection accuracy for 1M+ docs. Sub-second response time.",
    },
  ]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">👨‍💻 Portfolio – Muhammad Asad Saleem</h1>
      <p className="text-lg mb-4">
        Senior Software Engineer | Java | Spring Boot | Azure | AI/ML | Full-Stack Dev
      </p>
      <div className="flex gap-4 mb-6 flex-wrap">
        <Button variant="outline" asChild>
          <a href="mailto:asadsaleem.328@gmail.com">
            <Mail className="mr-2 h-4 w-4" /> Email 1
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="mailto:asadsaleem9151@gmail.com">
            <Mail className="mr-2 h-4 w-4" /> Email 2
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://github.com/asadsaleem328" target="_blank">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </a>
        </Button>
        <Button variant="default" asChild>
          <a href="https://www.upwork.com/freelancers/~011f770f960d9528f2" target="_blank">
            View Upwork Profile
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <Card key={idx} className="rounded-2xl shadow-md">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
              <p className="text-sm text-muted-foreground mb-1">Client: {proj.client}</p>
              <p className="text-sm text-muted-foreground mb-1">Role: {proj.role}</p>
              <p className="text-sm text-muted-foreground mb-1">Tech Stack: {proj.stack}</p>
              <p className="mt-2 text-base">{proj.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
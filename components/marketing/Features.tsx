import { CheckCircle, Clock, FileText, ShieldCheck } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div className="mb-4 p-2 bg-primary/10 rounded-full text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default function Features() {
  const features = [
    {
      icon: <FileText size={24} />,
      title: "Smart Form Filling",
      description:
        "Our intelligent system auto-fills application forms based on your information, reducing errors and saving time.",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Document Checklist",
      description:
        "Get personalized document checklists based on your travel purpose, ensuring you have everything needed for approval.",
    },
    {
      icon: <Clock size={24} />,
      title: "Time Efficient",
      description:
        "Complete your application up to 70% faster than traditional methods with our streamlined process.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Secure & Compliant",
      description:
        "Your data is protected with bank-level security, and all applications are fully compliant with Schengen requirements.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Features Designed to Simplify Your Visa Application
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform handles the complexities so you can focus on planning
            your European journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

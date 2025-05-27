import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

function Testimonial({ name, role, quote, rating }: TestimonialProps) {
  return (
    <div className="bg-background p-6 rounded-lg shadow-sm border">
      <div className="flex mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "fill-primary text-primary" : "text-muted"}
          />
        ))}
      </div>
      <p className="mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      role: "Business Traveler",
      quote:
        "VisaEase saved me hours of paperwork. My business visa was approved in record time!",
      rating: 5,
    },
    {
      name: "Zeynep Kaya",
      role: "Student",
      quote:
        "As a student applying for a study visa, VisaEase made the process so much easier to understand.",
      rating: 5,
    },
    {
      name: "Mehmet Demir",
      role: "Tourist",
      quote:
        "I was worried about my first Schengen application, but VisaEase guided me through every step.",
      rating: 4,
    },
    {
      name: "Ayşe Çelik",
      role: "Family Travel",
      quote:
        "Applying for my family of four was simple with VisaEase. The document checklist was invaluable!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied travelers who simplified their visa
            application process with VisaEase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

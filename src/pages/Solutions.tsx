import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scissors, Stethoscope, Dumbbell, Sparkles, Heart, Building, GraduationCap, ArrowRight } from "lucide-react";

const solutions = [
  { icon: Scissors, title: "Salons & Spas", points: ["Online booking automation", "WhatsApp appointment reminders", "Review collection after visits", "Missed call follow-up"] },
  { icon: Stethoscope, title: "Dental Clinics", points: ["Patient enquiry chatbot", "Appointment scheduling AI", "Follow-up reminders", "Google review automation"] },
  { icon: Dumbbell, title: "Gyms & Fitness", points: ["Lead capture websites", "Membership enquiry bot", "Trial class booking", "Automated renewals"] },
  { icon: Heart, title: "Clinics & Healthcare", points: ["Patient intake automation", "24/7 AI receptionist", "Prescription follow-ups", "Feedback collection"] },
  { icon: Building, title: "Real Estate", points: ["Property enquiry chatbot", "Automated lead nurturing", "Virtual tour scheduling", "CRM pipeline automation"] },
  { icon: GraduationCap, title: "Coaching Centers", points: ["Admission enquiry bot", "Course information automation", "Parent communication", "Fee reminder system"] },
];

const SolutionsPage = () => (
  <Layout>
    <section className="py-20 bg-canvas">
      <div className="container">
        <SectionHeading title="Industry Solutions" subtitle="Tailored AI automation packages for your specific industry." />
      </div>
    </section>
    <section className="py-16 bg-card">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((s) => (
          <div key={s.title} className="bg-canvas rounded-xl p-8 hover:shadow-lg transition-shadow">
            <s.icon className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-4">{s.title}</h3>
            <ul className="space-y-2 mb-6">
              {s.points.map((p) => (
                <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <Button asChild size="sm" variant="outline">
              <Link to="/book">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default SolutionsPage;

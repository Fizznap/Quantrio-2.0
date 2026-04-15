import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ConsultationFormProps {
  variant?: "light" | "dark";
}

const ConsultationForm = ({ variant = "dark" }: ConsultationFormProps) => {
  const isOnBlue = variant === "dark";

  return (
    <form
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <Input
        placeholder="Your Name"
        className={isOnBlue ? "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" : ""}
      />
      <Input
        placeholder="Business Name"
        className={isOnBlue ? "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" : ""}
      />
      <Input
        placeholder="Phone"
        className={isOnBlue ? "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" : ""}
      />
      <Input
        placeholder="Email"
        type="email"
        className={isOnBlue ? "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" : ""}
      />
      <Textarea
        placeholder="Tell us about your business..."
        className={`sm:col-span-2 ${isOnBlue ? "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" : ""}`}
        rows={4}
      />
      <div className="sm:col-span-2">
        <Button
          type="submit"
          size="lg"
          className={`w-full ${isOnBlue ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" : ""}`}
        >
          Book Free Consultation
        </Button>
      </div>
    </form>
  );
};

export default ConsultationForm;

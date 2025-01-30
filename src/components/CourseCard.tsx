import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  duration: string;
  image: string;
}

const CourseCard = ({ title, description, level, duration, image }: CourseCardProps) => {
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/enroll", { state: { course: { title } } });
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-neon bg-card border border-muted">
      <CardHeader className="p-0">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex gap-2 mb-4">
          <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary animate-glow">
            {level}
          </span>
          <span className="px-2 py-1 text-xs rounded-full bg-accent/20 text-accent">
            {duration}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full bg-primary hover:bg-primary/90 hover:shadow-neon transition-all duration-300"
          onClick={handleEnroll}
        >
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
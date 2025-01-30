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
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex gap-2 mb-4">
          <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
            {level}
          </span>
          <span className="px-2 py-1 text-xs rounded-full bg-secondary text-accent">
            {duration}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-accent">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full">Enroll Now</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
import { Card, CardContent } from "../components/UI/Card";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <Card className="group bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200">
      <CardContent className="p-6 text-center space-y-4">
        <div
          className="w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-transform group-hover:scale-110 bg-primary/10 bg-red-100"
        >
          <Icon className="w-8 h-8 text-primary text-red-600" />
        </div>

        <h3 className="text-xl font-bold text-foreground">{title}</h3>

        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

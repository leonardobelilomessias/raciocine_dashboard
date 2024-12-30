import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Description } from "@radix-ui/react-toast";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}


type dataDelivery = {
  title:string
  description:string
  items:{
    title: string;
    popular: number;
    price: number;
    description: string;
    buttonText: string;
    benefitList: string[];
  }[]
}
export const ProductDeliveryOne = ({data}:{data:dataDelivery}) => {
  return (
    <section
      id="pricing"
      className="container  my-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
       {data.title}
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        {data.description}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.items.map((item: PricingProps) => (
          <Card
            key={item.title}
            className={
              item.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {item.title}
                {item.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Mais popular
                  </Badge>
                ) : null}
              </CardTitle>
              {/* <div>
                <span className="text-3xl font-bold">R${pricing.price}</span>
                <span className="text-muted-foreground"> /mês</span>
              </div> */}

              <CardDescription>{item.description}</CardDescription>
            </CardHeader>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {item.benefitList.map((benefit: string) => (
                  <span
                  key={benefit}
                  className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
                  
                  
                          
              </div>
            </CardFooter>
            <CardFooter>

                                {/* <Button className="w-full">{pricing.buttonText}</Button> */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

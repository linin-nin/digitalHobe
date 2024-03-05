import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, CheckCircle, Leaf} from "lucide-react"

export default function Home() {
  const parks = [
    {
      name: "Instant Delivery",
      Icon: ArrowDownToLine,
      description: "Get your assetes delivered to your email in seconds and download them rihgt away."
    },
    {
      name: "Guaranted Quality",
      Icon: CheckCircle,
      description: "Try assetes on our plateform is verified by our team to insure our highed quality standard. Not happy? we offer a 30-day refund quaratee"
    },
    {
      name: "For the Planet",
      Icon: Leaf,
      description: "We'v pledged 1% of sales to the preservation and restoration of the natural environment ."
    },
  ]
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your marketplace for high-quality 
        <span className="text-blue-600"> digital assete</span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to DigitalHope. Every assete on our plateform is verified by our team to insure our highest quality standards.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link  href="/products" className={buttonVariants()}>Browse Tranding</Link>
          <Button variant="ghost">Our quality promise &rarr;</Button>
        </div>
      </div>

      {/* todo: list product */}

    </MaxWidthWrapper>
    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {
            parks.map((item) => (
              <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center" key={item.name}>
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<item.Icon className="w-1/3 h-1/3"/>}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm mt-3 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </MaxWidthWrapper>
    </section>
    </>
  );
}

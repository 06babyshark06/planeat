import HeroSub from "@/components/SharedComponent/HeroSub";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page | Venus ",
};

const ErrorPage = () => {
  return (
    <html lang="en">
      <body>
        <HeroSub
          title="404"
        />
        <NotFound />
      </body>
    </html>
  );
};

export default ErrorPage;

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { FoodCategories } from "@/components/food-categories";
import { BuffetSection } from "@/components/buffet-section";
import { Highlights } from "@/components/highlights";
import { Occasions } from "@/components/occasions";
import { Testimonials } from "@/components/testimonials";
import { InstagramSection } from "@/components/instagram-section";
import { LocationSection } from "@/components/location-section";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { restaurantConfig } from "@/config/restaurant.config";

export default function Home() {
  const { features } = restaurantConfig;

  return (
    <>
      <Header />

      <main>
        <Hero />
        {features.showExperience && <Experience />}
        <FoodCategories />
        {features.showBuffet && <BuffetSection />}
        <Highlights />
        {features.showOccasions && <Occasions />}
        {features.showTestimonials && <Testimonials />}
        {features.showInstagram && <InstagramSection />}
        <LocationSection />
        <FinalCta />
      </main>

      <Footer />

      {features.showWhatsappButton && <WhatsAppButton />}
    </>
  );
}
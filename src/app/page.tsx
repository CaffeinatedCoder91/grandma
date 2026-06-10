import { DressCodeSection } from "@/components/DressCodeSection";
import { FooterRemembrance } from "@/components/FooterRemembrance";
import { HeroSection } from "@/components/HeroSection";
import { RsvpForm } from "@/components/RsvpForm";
import { ServiceSection } from "@/components/ServiceSection";
import { ServiceLocationSection } from "@/components/ServiceLocationSection";
import { memorial } from "@/content/memorial";

export default function Home() {
  return (
    <>
      <HeroSection person={memorial.person} />
      <ServiceSection service={memorial.service} reception={memorial.reception} />
      <ServiceLocationSection serviceLocation={memorial.serviceLocation} />
      <DressCodeSection copy={memorial.dressCode} />
      <RsvpForm />
      <FooterRemembrance person={memorial.person} footer={memorial.footer} />
    </>
  );
}

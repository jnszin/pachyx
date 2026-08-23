import React from 'react';
import HeroSection from '../components/HeroSection';
import PainPointsSection from '../components/PainPointsSection';
import ExclusivitySection from '../components/ExclusivitySection';
import ServicesGrid from '../components/ServicesGrid';
import ContactForm from '../components/ContactForm';
import FadeIn from '../components/FadeIn';

export default function Home() {
  return (
    <>
      <main>
        <FadeIn delay={0.5} direction="none">
          <HeroSection />
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <PainPointsSection />
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <ExclusivitySection />
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <ServicesGrid />
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <ContactForm />
        </FadeIn>
      </main>
    </>
  );
}

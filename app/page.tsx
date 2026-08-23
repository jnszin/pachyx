import React from 'react';
import HeroSection from '../components/HeroSection';
import PainPointsSection from '../components/PainPointsSection';
import ExclusivitySection from '../components/ExclusivitySection';
import ServicesGrid from '../components/ServicesGrid';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PainPointsSection />
      <ExclusivitySection />
      <ServicesGrid />
      <ContactForm />
    </main>
  );
}

import Popup from "@/components/Popup";
import HeroSection from "@/components/HeroSection";
import BusinessGrowthSection from "@/components/BusinessGrowthSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustedBySection from "@/components/TrustedBySection";
import InventoryManagementSection from "@/components/InventoryManagementSection";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";
import SolarSystem from "@/components/SolarSystem";
import CustomerFeedbackSection from "@/components/CustomerFeedbackSection";
import FeatureHighlightsSection from "@/components/FeatureHighlightsSection";

export default function Home() {
  return (
    <div className="flex items-center w-full justify-center font-[family-name:var(--font-geist-sans)] x-overflow-hidden">
      <Popup />
      <main className="flex flex-col w-full h-full gap-0">
        <HeroSection />
        <BusinessGrowthSection />
        <HowItWorksSection />
        <FeatureHighlightsSection />
        <TrustedBySection />
        <InventoryManagementSection />
        <KeyFeaturesSection />

        {/* Seventh Section (Solar System) */}
        <section className="w-full h-full relative bg-slate-50 pt-10 transition-colors dark:bg-gray-900">
          <div className="md:max-w-7xl max-w-lg mx-auto h-full">
            <div className="flex flex-col h-full w-full items-center justify-center">
              <span className="pb-3 md:text-4xl text-3xl font-semibold text-center text-slate-900 dark:text-gray-100">
                Our Inventory Management System is Loaded <br />
                with Powerful Features
              </span>
              <div className="relative flex flex-col h-full w-full items-center justify-center overflow-hidden">
                <SolarSystem />
              </div>
            </div>
          </div>
        </section>

        <CustomerFeedbackSection />
      </main>
    </div>
  );
}

"use server";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AuroraBackground } from "@/components/AuroraBackground/aurora-background";
import { LampDemo } from "@/components/LampContainer/LampDemo";
import { SpotlightPreview } from "@/components/Spotlight/SpotlightComponent";
import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffect/CanvasRevealEffectDemo";
import { CanvasRevealEffectDemo3 } from "@/components/CanvasRevealEffect/CanvasSection";
import { InfocardDemo } from "@/components/Infocard/InfocardExample";
import { InfoteamDemo } from "@/components/Infoteam/InfoteamExample";
import { ContanctComponent } from "@/components/GlowingStars/ContactComponent";
import { SpotlightAirdrop } from "@/components/Spotlight/SpotlightAirdrop";

export default async function Home() {
  return (
    <div className="min-h-screen dark">
      <Header />
      <main className="flex flex-col">
        <AuroraBackground className="dark">
          <section
            id="tex-app"
            className="  lg:px-40 px-16  py-96 flex justify-center items-center"
          >
            <div className="flex flex-col justify-center items-center gap-4 pl-8 animate-fade-right">
              <h2 className="text-7xl font-bold text-white text-center">
                What is TEX?
              </h2>
              <p className="text-white text-center max-w-[520px] mt-4 text-xl">
                TEX is a global Blockchain development base, applied to many
                areas of life. Safe, secure, smart and effective solution.
              </p>
            </div>{" "}
          </section>
        </AuroraBackground>
        <section>
          <LampDemo></LampDemo>
        </section>
        <section id="tex-proplem" className=" py-24 bg-grid-white/[0.04] ">
          <div className="mb-34">
            <SpotlightPreview />
          </div>
          <CanvasRevealEffectDemo />
        </section>
        <section className="">
          <CanvasRevealEffectDemo3 />
        </section>
        <section id="tex-product" className="bg-grid-white/[0.04] py-24">
          <InfocardDemo />
        </section>
        <section id="tex-airdrop" className="z-40 bg-grid-white/[0.04] py-20">
          <SpotlightAirdrop />
        </section>
        <section id="tex-about" className="bg-grid-white/[0.04] py-24">
          <h2 className="text-7xl mb-10 font-bold text-white text-center">
            Meet Our Team
          </h2>
          <InfoteamDemo />
        </section>
        <section id="tex-contact" className="bg-grid-white/[0.04] p-12">
          <ContanctComponent />
        </section>
      </main>
      <Footer />
    </div>
  );
}

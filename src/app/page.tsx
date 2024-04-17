import ConfettiButton from "@/components/ConfettiButton/ConfettiButton";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-24 p-24">
        <ConfettiButton buttonText="oh hello" />
      </main>
      <Footer />
    </>
  );
}

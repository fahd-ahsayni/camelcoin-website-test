import ContactCard from "@/shared/ContactCard";
import Image from "next/image";
import ContactImage from "../assets/contact.png"

export default function Contact() {
  return (
    <main className="flex overflow-hidden">
      <div className="flex-1 relative hidden lg:block">
        <div className="absolute top-0 left-0 w-full h-16 backdrop-blur-sm bg-white/50 dark:bg-black/30" />
        <Image
          src={ContactImage}
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
        <div className="max-w-lg  mt-12 py-16 flex-1 mx-auto px-4 text-gray-700">
        <ContactCard />
        </div>
      </div>
    </main>
  );
}

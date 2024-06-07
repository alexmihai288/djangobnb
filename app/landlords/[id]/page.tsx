import { ContactButton } from "@/app/components/ContactButton";
import Image from "next/image";

const LandLordPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="col-span-1 mb-4">
          <div className="flex flex-col items-center p-6 rounded-xl border-x-gray-300 shadow-xl">
            <Image
              src="/profile_pic_1.jpg"
              width={200}
              height={200}
              alt="landlord name"
              className="rounded-full"
            />
            <h1 className="mt-6 text-2xl">Landlord name</h1>
            <ContactButton />
          </div>
        </aside>
        <div className="col-span-3 pl-0 md:pl-6">properties</div>
      </div>
    </main>
  );
};

export default LandLordPage;
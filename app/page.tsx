import LoginBtn from "@/components/LoginBtn";
import Image from "next/image";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center ">
        {/* <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
        <h1 className="text-2xl">Find out which serial killer you are based on your top artists</h1>

        <LoginBtn/>
      </main>
    </div>
  );
}

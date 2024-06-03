
import Image from "next/image";
import { ImageMap } from "./ImageMap";

export default function Home() {  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Image
              src={ImageMap["avatar"]}
              alt="Avatar"
              width={100}
              height={24}
              priority
            />
    </main>
  );
}

import Image from "next/image";
import logo from "@/assets/shared/logo.svg";
import line from "@/assets/shared/line.svg";
import NavigationList from "./NavigationList";

export default function Header() {
  return (
    <header className="w-full mx-auto flex items-center justify-between px-10 py-6">
      <Image src={logo} alt="Space Tourism Logo" height={48} width={48} />

      <Image
        src={line}
        alt="Line"
        width={1}
        height={1}
        className="w-full h-auto ml-10"
      />
      <NavigationList />
    </header>
  );
}

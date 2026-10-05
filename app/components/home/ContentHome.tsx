import Link from "next/link";

export default function ContentHome() {
  return (
    <main
      className="max-w-5xl w-full mx-auto flex items-end justify-between py-10
     "
    >
      <div className="flex flex-col justify-end gap-4">
        <h2 className="font-Barlow tracking-[4px] text-[24px] text-blue-300">
          ENTÃO, VOCÊ QUER VIAJAR PARA O
        </h2>
        <h1 className="font-Bellefair text-[144px] text-blue-300">ESPAÇO</h1>
        <p className="font-Barlow text-blue-300 text-[18px] leading-8 max-w-111">
          Vamos ser sinceros: se você quer ir ao espaço, é melhor ir de verdade
          para o espaço sideral, em vez de ficar apenas pairando na sua
          fronteira. Então, acomode-se e relaxe, pois vamos proporcionar a você
          uma experiência verdadeiramente de outro mundo!
        </p>
      </div>
      <div>
        <div>
          <button className="w-68.5 h-68.5 rounded-full bg-whitee text-blue-900 font-Bellefair text-[32px] tracking-[2px] hover:shadow-[0_0_0_64px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer">
            <Link href="/explore">EXPLORAR</Link>
          </button>
        </div>
      </div>
    </main>
  );
}

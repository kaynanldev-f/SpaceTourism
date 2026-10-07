import type { Metadata } from "next";

export default function DestinationLayout({ children }: LayoutProps<"/">) {
  return (
    <main className="max-w-5xl w-full mx-auto py-10">
      <h2 className="font-barlow text-[28px] text-whitee tracking-[4px] ">
        <span className="font-bold text-whitee/60">01</span> PICK YOUR
        DESTINATION
      </h2>
      {children}
    </main>
  );
}

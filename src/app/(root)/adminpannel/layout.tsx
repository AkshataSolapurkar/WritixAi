import type { Metadata } from "next";
import Sidebar from "@/components/shared/Sidebar";
import Sidebarsmall from "@/components/shared/sidebarsmall";
import Chart from "@/components/ui/chart";

export const metadata: Metadata = {
  title: "Writix",
  description:
    "Writix AI Takehome Assignment",
};

export default function RootLayout({
  children,
  params: { studentId },
}: {
  children: React.ReactNode;
  params: { studentId: string };
}) {
  return (
    
    <>
    <section>
    <div className={"flex text-black gap-5 h-full relative"}>
      <div className="no-scrollbar md:block hidden pr-[10px] h-[calc(100dvh-120px)]">
        <Sidebar id={studentId} />
      </div>
      <div className="md:hidden z-50">
        <Sidebarsmall  id={studentId}/>
      </div>
      <div className="w-full">{children}</div>
    </div>
    </section>
    </>
    
  );
}

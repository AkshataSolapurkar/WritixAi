import type { Metadata } from "next";
import Sidebar from "@/components/shared/Sidebar";

export const metadata: Metadata = {
  title: "Leadlly",
  description:
    "Say goodbye to one-size-fits-all! We tailor study plans and resources to your individual learning style and goals.",
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
      <div className="no-scrollbar pr-[10px] h-[calc(100dvh-120px)]">
        <Sidebar id={studentId} />
      </div>
      <div className="w-full">{children}</div>
    </div>
    </section>
    </>
    
  );
}

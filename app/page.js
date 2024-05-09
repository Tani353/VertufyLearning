import Course from "@/components/Course";
import Coursel from "@/components/Coursel";

export default function Home() {
  let homeP2 = "Master the industry-relevant skills with our online courses."
  let homeP1 = "Project-based Learning! ✍️";
  let homeH2 = "Take the first step to learn with us";
  return (
    <>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <div className="z-10 w-full items-center justify-between">
            <Coursel p1={homeP1} h2={homeH2} p2={homeP2} />
            <Course />
          </div>
        </main>
    </>
  );
}

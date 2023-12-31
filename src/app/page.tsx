import { Profile } from "@/app/components/Profile";
import { Projects } from "@/app/components/Projects";
import { Skills } from "@/app/components/Skills";

export default function Home() {
  return (
    <>
      <Profile />
      <Skills />
      <Projects />
    </>
  );
}

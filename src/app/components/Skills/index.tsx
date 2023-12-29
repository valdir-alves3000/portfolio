import { skills } from "@/utils/data/skills";
import { Skill } from "./Skill";
import "./styles.css";

export function Skills() {
  return (
    <section className="w-full py-24" id="skills">
      <div className="logos">
        {
          <div
            className="logos-slide
            animate-slide-to-left"
          >
            {skills.map(({ name, color, logo }) => (
              <Skill key={name} name={name} color={color} logo={logo} />
            ))}
          </div>
        }
      </div>
      <div className="logos">
        {
          <div className="logos-slide animate-slide-to-right">
            {skills.map(({ name, color, logo }) => (
              <Skill key={name} name={name} color={color} logo={logo} />
            ))}
          </div>
        }
      </div>
    </section>
  );
}

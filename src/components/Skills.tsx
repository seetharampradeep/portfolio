
import { useSheet } from "../hooks/useSheet";
import type { Skill } from "../types/portfolio";

const Skills = () => {
  const { data } = useSheet<Skill>("Skills");

  return (
    <section className="p-5 container">
      <h2 className="text-primary text-center">Skills</h2>
      <div className="row mt-4">
        {data.map((s, i) => (
          <div className="col-4 text-center" key={i}>
            <div className="border p-3 rounded">{s.Name} ({s.Level})</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;

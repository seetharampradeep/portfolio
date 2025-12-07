
import { useSheet } from "../hooks/useSheet";
import type { Experience } from "../types/portfolio";

const ExperienceCmp = () => {
  const { data } = useSheet<Experience>("Experience");

  return (
    <section className="p-5 container">
      <h2 className="text-primary text-center">Experience</h2>
      {data.map((e, i) => (
        <div key={i} className="border p-3 mt-2 rounded">
          <h5>{e.Role} - {e.Company}</h5>
          <small>{e.Duration}</small>
          <p>{e.Description}</p>
        </div>
      ))}
    </section>
  );
}
export default ExperienceCmp;

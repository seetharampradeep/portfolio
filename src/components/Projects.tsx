
import { useSheet } from "../hooks/useSheet";
import type { Project } from "../types/portfolio";

const Projects = () => {
  const { data } = useSheet<Project>("Projects");

  return (
    <section className="p-5 bg-light">
      <h2 className="text-primary text-center">Projects</h2>
      <div className="container mt-4">
        {data.map((p, i) => (
          <div key={i} className="border p-3 rounded mt-2">
            <h4>{p.Title}</h4>
            <p>{p.Description}</p>
            <a href={p.Link} target="_blank">Visit</a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;

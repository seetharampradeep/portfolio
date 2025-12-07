
import { useSheet } from "../hooks/useSheet";
import type { Profile } from "../types/portfolio";

const Hero = () => {
  const { data } = useSheet<Profile>("Profile");
  const profile = data[0];

  return profile ? (
    <section className="p-5 text-center bg-light">
      <img src={profile.Image} width="150" className="rounded-circle" />
      <h1>{profile.FullName}</h1>
      <h3 className="text-primary">{profile.Role}</h3>
      <p className="text-muted">{profile.About}</p>
    </section>
  ) : <p>Loading...</p>;
}

export default Hero;

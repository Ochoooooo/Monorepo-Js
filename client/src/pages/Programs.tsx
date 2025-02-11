import { useLoaderData } from "react-router-dom";

// Declare the action
interface ProgramTypes {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

export default function Programs() {
  const programs = useLoaderData() as ProgramTypes[];

  return (
    <>
      <h1>Programs</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <p>{program.synopsis}</p>
            <img src={program.poster} alt={program.title} />
            <p>{program.country}</p>
            <p>{program.year}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

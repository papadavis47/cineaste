import { v4 as uuidv4 } from "uuid";
export const moviesData = [
  {
    id: uuidv4(),
    name: "Platoon",
    director: "Oliver Stone",
    genre: "Drama",
    memories: "Seeing it for the first time with my Dad in '87 before Mom died",
    decadeCreated: "1980s",
  },
  {
    id: uuidv4(),
    name: "Days of Heaven",
    director: "Terrence Malick",
    genre: "Drama",
    memories: "Watching this at Scott's House",
    decadeCreated: "1970s",
  },
  {
    id: uuidv4(),
    name: "Lawrence of Arabia",
    director: "David Lean",
    genre: "Drama",
    memories: "Watching this with Dad in 1989 - in Seattle",
    decadeCreated: "1960s",
  },
  {
    id: uuidv4(),
    name: "Apocalypse Now",
    director: "Francis Ford Coppola",
    genre: "Drama",
    memories: "Watching the Redux version atleast 3 times in Seattle - around 2000",
    decadeCreated: "1970s",
  },
];

export const listsData = [
  {
    id: uuidv4(),
    title: "My Faves",
    description: "A list of my favorite films",
    notes: "This is the ultimate list of cool films",
  },
  {
    id: uuidv4(),
    title: "DVDS I Own",
    description: "These DVD have been purchased over the years since 2003",
    notes: "I am saving these for Nicaragua or the Airstream.",
  },
  {
    id: uuidv4(),
    title: "My Blu-Rays",
    description: "A list of Blu-Ray special films",
    notes: "These are the blu-rays I have invested in since 2009 or so",
  },
];

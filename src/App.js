import MovieList from "./components/MovieList";
import ListForm from "./components/ListForm";
import Title from "./components/Title";
import MovieForm from "./components/MovieForm/MovieForm.js";

function App() {
  return (
    <div className='container flex flex-col mx-8'>
      <Title />
      <ListForm />
      <MovieForm />
    </div>
  );
}

export default App;

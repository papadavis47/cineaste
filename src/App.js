import MovieList from "./components/MovieList";
import ListForm from "./components/ListForm";
import Title from "./components/Title";

function App() {
  return (
    <div className='container flex flex-col mx-8'>
      <Title />
      <ListForm />
    </div>
  );
}

export default App;

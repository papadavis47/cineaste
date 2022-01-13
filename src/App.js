import MovieList from "./components/MovieList";
import ListForm from "./components/ListForm";

function App() {
  return (
    <div className='container flex flex-col mx-8'>
      <section className='py-3 mt-8 text-center title'>
        <h1 className='py-3 text-3xl font-bold'>Cineaste</h1>
        <h2 className='text-2xl font-bold'>For Film Lovers</h2>
      </section>
      <ListForm />
    </div>
  );
}

export default App;

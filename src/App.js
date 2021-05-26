import './App.css';
import Movielist from './component/Movielist';
import {useState} from 'react';
import Movieadd from './component/Movieadd';

function App() {
  const [films, setFilms] = useState([
    {
      title : "Game of thrones",
      description : " Genre: Fantasty",
      posterUrl :"https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg ",
      rate :"4",
    } ,
    {
      title : "Train To Busan",
      description : " Genre: Action horror",
      posterUrl :"https://upload.wikimedia.org/wikipedia/ar/9/95/Train_to_Busan.jpg",
      rate :"5",
    },
    {
      title : "the boy",
      description : " Genre: horror",
      posterUrl :"https://i.pinimg.com/originals/81/dd/72/81dd7292396ed6edf218e0bb9d354f8a.jpg ",
      rate :"3",
    },
    
  ])
  const add=(newMovie)=>{
    setFilms([...films,newMovie])

  }
  return (
    <div className="App">
      <header className="App-header">
        <Movielist films={films}/>
        <Movieadd add={add}/>

      </header>
    </div>
  );
}

export default App;

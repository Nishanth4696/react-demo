import './App.css';
import { useState} from 'react';
import { ColorBox } from './ColorBox';
import MovieList from './MovieList';
import { Welcome } from './Welcome';
import { AddMovie } from './AddMovie';
import {NotFound} from './NotFound'
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { MovieDetails } from './MovieDetails';
import { EditMovie } from './EditMovie';
import { Mode } from './Mode';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { TicTacToe } from './TicTacToe';








export default function App() {
  
  const List_of_Movies=[
    {
     "id": "100",
     "name": "The Avengers",
     "rating": 8,
     "summary": "The Avengers are a fictional team of superheroes and the protagonists of the Marvel Cinematic Universe (MCU) media franchise, based on the Marvel Comics team of the same name created by Stan Lee and Jack Kirby in 1963",
     "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoF3VrrmOaUf8IjnQzl9S002WeSbgI6XBABA&usqp=CAU",
     "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
     "id": "101",
     "name": "The GodFather",
     "rating": 9.2,
     "summary": "The Godfather Don Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding",
     "poster": "https://pbs.twimg.com/media/EkE2MAWVcAEOosB?format=jpg&name=large",
     "trailer": "https://www.youtube.com/embed/sY1S34973zA"
    },
     {
     "id": "102",
     "name": "The Dark Knight",
     "rating": 9,
     "summary": "A gang of criminals rob a Gotham City mob bank; the Joker manipulates them into murdering each other for a higher share until only he remains and escapes with the money. Batman, District Attorney Harvey Dent and Lieutenant Jim Gordon form an alliance to rid Gotham of organized crime.",
     "poster": "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
     "trailer": "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
     {
     "id": "103",
     "name": "12 Angry Men",
     "rating": 7.8,
     "summary": "12 Angry Men explores many techniques of consensus-building and the difficulties encountered in the process among this group of men whose range of personalities adds to the intensity and conflict. It also explores the power one person has to elicit change",
     "poster": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/12_Angry_Men_%281957_film_poster%29.jpg/220px-12_Angry_Men_%281957_film_poster%29.jpg",
     "trailer": "https://www.youtube.com/embed/_13J_9B5jEk"
    },
     {
     "id": "104",
     "name": "Schindler's List",
     "rating": 8.9,
     "summary": "Schindler's List is a 1993 American historical drama film directed and produced by Steven Spielberg and written by Steven Zaillian. It is based on the 1982 non-fiction novel Schindler's Ark by Australian novelist Thomas Keneally",
     "poster": "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
     "trailer": "https://www.youtube.com/embed/_13J_9B5jEk"
    },
     {
     "id": "105",
     "name": "Forrest Gump",
     "rating": 8,
     "summary": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
     "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKZYymEq68d_bO0_lBCxvoQySp-xcQB84OQ&usqp=CAU",
     "trailer": "https://www.youtube.com/embed/bLvqoHBptjg"
    },
     {
     "id": "106",
     "name": "Inception",
     "rating": 7.9,
     "summary": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
     "poster": "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
     "trailer": "https://www.youtube.com/embed/YoHD9XEInc0"
    },
     {
     "id": "107",
     "name": "Spider-Man: No Way Home",
     "rating": 8.7,
     "summary": "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
     "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z",
     "trailer": "https://www.youtube.com/embed/JfVOs4VSpmA"
   }
   ];

  const [movies, setMovies] = useState(List_of_Movies);
  const history = useHistory();
  const [mode, setMode] = useState("dark");


  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
 
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={1} style={{borderRadius: "0px", minHeight: "100vh"}}>
        <div className="App">
          
          <AppBar position="sticky">
            <Toolbar variant="dense">
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./home")}>Home</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./movies")}>Movies</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./addmovies")}>Add Movies</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./colorgame")}>Color Game</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./mode")}>Mode</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./tictactoe")}>Tic-Tac-Toe</Button>
              <Button 
                startIcon ={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon /> }
                variant="text" 
                style={{marginLeft: "auto"}} 
                color="inherit" 
                onClick={() => setMode(mode ==='light'? 'dark' : 'light')}>  
              {mode==='light'? 'Dark' : 'Light'} Mode</Button>
            
            </Toolbar>
        </AppBar>
        
          <Switch>
            <Route path="/films">
              <Redirect to='/movies' />
            </Route>

            <Route path="/mode">
              <Mode />
            </Route>

            <Route path="/movies/edit/:id">
              <EditMovie Movies={movies} setMovies={setMovies}/>
            </Route>

            <Route path="/movies/:id">
              <MovieDetails Movies={movies}/>
            </Route>

          

            <Route path="/movies">
              <MovieList  Movies={movies} setMovies={setMovies}/> 
            </Route>

            <Route path="/addmovies">
                <AddMovie Movies={movies} setMovies={setMovies}/>
            </Route>

            <Route path="/colorgame">
              <ColorBox />
            </Route>

            <Route path="/tictactoe">
              <TicTacToe />
            </Route>

            <Route path="/">
                <Welcome />
            </Route>

            <Route path="**">
              <NotFound />
            </Route>
          </Switch>      
        </div>
        </Paper>
     </ThemeProvider> 
  );
}









const numberOfFilms = +prompt('How many films do you watch?', '')

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	isPrivate: false,
}

const lastMoviePreview = prompt('What was the last movie you watched?', ''),
	movieScore = +prompt('How much would you rate him?', '')

personalMovieDB.movies[lastMoviePreview] = movieScore

console.log(personalMovieDB)

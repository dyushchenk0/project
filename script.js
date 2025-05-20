const numberOfFilms = +prompt('How many films do you watch?', '')

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	isPrivate: false,
}

for (let i = 0; i < 2; i++) {
	const lastMoviePreview = prompt('What was the last movie you watched?', ''),
		movieScore = prompt('How much do you rate him?')
	if (
		lastMoviePreview != null &&
		lastMoviePreview != '' &&
		lastMoviePreview.length < 50 &&
		movieScore != null &&
		movieScore != '' &&
		movieScore > 0
	) {
		personalMovieDB.movies[lastMoviePreview] = movieScore
	} else {
		alert('You enter incorrect data!')
		i--
	}
}

if (personalMovieDB.count < 10) {
	console.log('Watched a fairly small number of movies!')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("You're a classic viewer!")
} else if (personalMovieDB.count >= 30) {
	console.log("You're a movie buff!")
} else {
	console.log('There was an error!')
}

console.log(personalMovieDB)

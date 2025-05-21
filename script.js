'use strict'

let numberOfFilms

function start() {
	numberOfFilms = +prompt('How many films do you watch?', '')

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('How many films do you watch?', '')
	}
}

start()

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	isPrivate: false,
}

function rememberMyFilms() {
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
}

rememberMyFilms()

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Watched a fairly small number of movies!')
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("You're a classic viewer!")
	} else if (personalMovieDB.count >= 30) {
		console.log("You're a movie buff!")
	} else {
		console.log('There was an error!')
	}
}
detectPersonalLevel()

function showMyDB(hidden) {
	if (!hidden) console.log(personalMovieDB)
	else console.log("You don't have enough rights!")
}

showMyDB(personalMovieDB.isPrivate)

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(
			`Your favorite genre is numbered ${i}`
		)
	}
}

writeYourGenres()

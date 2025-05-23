'use strict'

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	isPrivate: true,
	start: () => {
		personalMovieDB.count = +prompt('How many films do you watch?', '').trim()

		while (
			personalMovieDB.count == '' ||
			personalMovieDB.count == null ||
			isNaN(personalMovieDB.count)
		) {
			personalMovieDB.count = +prompt('How many films do you watch?', '').trim()
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const lastMoviePreview = prompt(
					'What was the last movie you watched?',
					''
				).trim(),
				movieScore = prompt('How much do you rate him?').trim()
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
	},
	detectPersonalLevel: () => {
		if (personalMovieDB.count < 10) {
			console.log('Watched a fairly small number of movies!')
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("You're a classic viewer!")
		} else if (personalMovieDB.count >= 30) {
			console.log("You're a movie buff!")
		} else {
			console.log('There was an error!')
		}
	},
	writeYourGenres: function () {
		this.genres = []

		for (let i = 1; i <= 3; i++) {
			let genre

			do {
				genre = prompt(`Your favorite genre number ${i}`)?.trim()
			} while (!genre)

			this.genres.push(genre)
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр #${i + 1} - это ${item}`)
		})
	},
	toggleVisibleDB: function () {
		this.isPrivate = !this.isPrivate
	},
	showDB: function () {
		if (!this.isPrivate) console.log(this)
		else console.log("You don't have enough rights!")
	},
}

personalMovieDB.writeYourGenres()

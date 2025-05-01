module.exports.run = async function(movies) {
/*
	You are given a list of urls that will be used to search up movies.
	Make a GET call with axios using the given urls to search each movies.
	Then return an array of objects with the properties 'Title, Year, Genre' of each movie in the same order it came in as.

	You are welcome to change this function to an async/await.

	Example:

	function (['https://www.omdbapi.com/?t=Lion%20King', 'https://www.omdbapi.com/?t=Up']) =>
	[
		{Title: 'The Lion King', Year: '1994', Genre: 'Animation, Adventure, Drama, Family, Musical'},
		{Title: 'Up', Year: '2009', Genre: 'Animation, Adventure, Comedy, Family'},
	]

	Write your code below the comment.
*/
	const axios = require('axios');

	try {
		const responses = await Promise.all(movies.map(url => axios.get(url)));

		return responses.map(res => ({
			Title: res.data.Title,
			Year: res.data.Year,
			Genre: res.data.Genre
		}));

	} catch (error) {
		return `Error: ${error.message}`;
	}
};

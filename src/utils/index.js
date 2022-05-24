exports.addMovie = async (movieObj, collection) => {
    const response = await collection.insertOne({ title: movieObj.title, actor: movieObj.actor, year: movieObj.year })
    if (response.acknowledged) {
        console.log("Succesfully added a movie")
    } else {
        console.log("Something went wrong")
    }
    console.log(response); 
}

exports.listMovies = async (collection) => {
    const movies = await collection.find().toArray();
    console.log(movies)
}

// exports.updateMovie = async (movieObj, collection) => {
//     const editMovie = await collection.updateOne({ title: movieObj.title} );
//     console.log(editMovie)
// }

exports.deleteMovie = async (movieObj, collection) => {
    const delMovie = await collection.deleteOne({ title: movieObj.title });
    if (delMovie.deletedCount === 1) {
        console.log("Succesfully deleted the movie")
    } else {
        console.log("Something went wrong")
    }
    console.log(delMovie); 
}
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

exports.findMovie = async (filter, collection) => {
    const result = await collection.findOne(filter);
    console.log(result);
}

exports.updateMovie = async (movieObj, updateObj, collection) => {
    console.log(updateObj)
    const options = { upsert: true }
    const updateDoc = {$set: {year: movieObj.year}}
    const editMovie = await collection.updateOne(movieObj, updateDoc, options);
    console.log(editMovie)
}

exports.deleteMovie = async (movieObj, collection) => {
    const delMovie = await collection.deleteOne({ title: movieObj.title });
    if (delMovie.deletedCount > 0) {
        console.log("Succesfully deleted the movie")
    } else {
        console.log("Something went wrong")
    }
    console.log(delMovie); 
}
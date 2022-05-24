exports.addMovie = async (movieObj, collection) => {
    const response = await collection.insertOne({ title: movieObj.title })
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
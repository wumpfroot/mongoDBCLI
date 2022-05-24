const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const { addMovie, listMovies, deleteMovie, updateMovie } = require("./utils");

const app = async (yargsObj) => {
    const collection = await connection();
    try {
        if (yargsObj.add) {
            //add movie to mongodb
            await addMovie({ title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year }, collection);
        }else if (yargsObj.update) {
            //update movie from mongodb
            await updateMovie({ title: yargsObj.title}, {$set: {director: yargsObj.director}}, collection);
        }else if (yargsObj.delete) {
            //delete movie from mongodb
            await deleteMovie({title: yargsObj.title}, collection);
        }else if (yargsObj.list) {
            //list movies from mongodb
            await listMovies(collection);
        }else {
            console.log("Incorrect command")
        }
    } catch (error) {
        console.log(error);
    }
    await client.close();
}

app(yargs.argv)
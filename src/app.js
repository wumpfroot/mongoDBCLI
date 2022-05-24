const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const { addMovie, listMovies } = require("./utils")

const app = async (yargsObj) => {
    const collection = await connection();
    try {
        if (yargsObj.add) {
            //add movie to mongodb
            await addMovie({ title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year }, collection);
        } else if (yargsObj.list) {
            //list movies from mongodb
            await listMovies(collection);
        } else {
            console.log("Incorrect command")
        }
    } catch (error) {
        console.log(error);
    }
    await client.close();
}

app(yargs.argv)
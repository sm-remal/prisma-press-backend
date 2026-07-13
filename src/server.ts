// server

import app from "./app";
import config from "./config";

const port = config.port;

const main = async () => {
    try {

        // await prisma.$connect();
        console.log(`Prima Connect to the database successfully`);

        app.listen(port, () => {
            console.log(`Server is running on ${port}`)
        })
    } catch (error) {
        console.log(`Error Starting The Server ${error}`)
        // await prisma.$disconnect();
        process.exit(1);
    }
}

main()
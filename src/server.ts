// server

import app from "./app";

const port = process.env.PORT || 5000;

const main = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

main()
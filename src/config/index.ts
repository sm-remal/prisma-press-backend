import dotenv from "dotenv";
import path from "path"

dotenv.config({path: path.join(process.cwd(), ".env")});

export default {
    port: process.env.PORT || 5000,
    database_url: process.env.DATABASE_URL,
    app_url: process.env.APP_URL,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    jwt_access_secrete: process.env.JWT_ACCESS_SECRETE,
    jwt_refresh_secrete: process.env.JWT_REFRESH_SECRETE,
    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
    jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN
}
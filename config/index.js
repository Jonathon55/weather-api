const dotenv = require("dotenv");

dotenv.config();

const {
 WEATHER_API_URL,
 WEATHER_API_KEY
} = process.env;

module.exports = {
 WEATHER_API_URL,
 WEATHER_API_KEY
}
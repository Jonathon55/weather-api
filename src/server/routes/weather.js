const routes = require('express').Router();
const { asyncMiddleware } = require('../middleware');
const { weatherController } = require('../controllers');


/**
 * @swagger
 * 
 *  definitions:
 *    longitude:
 *      type: string
 *    lattitude:
 *      type: string 
 */


/**
 * @swagger
 * /api/weather-api/v1/weather:
 *   get:
 *     description: Get Weather Data based on GPS Coordinates
 *     requestBody: 
 *           required: true
 *           content: 
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    longitude:
 *                      type: string
 *                      description: string representing starting longitude
 *                    lattitude:
 *                      type: string
 *                      description: string representing starting longitude
 *     responses:
 *       200:
 *         description: weather retrieved
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:
 *                weather_type:
 *                  type: string
 *                  description: Brief Description of the weather
 *                payment_redemptions:
 *                  type: object
 *                  description: An intacct payment redemption order entry create response
 *                shipper_virtual:
 *                  type: object
 *                  description: An Intacct shipper virtual create response
 * 
 */

routes.get('/',  asyncMiddleware(weatherController.getWeather), (req, res, next) => {
    //if check make sure weather
    res.send(res.locals.getWeather);
});

  
module.exports = routes;
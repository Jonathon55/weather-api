const { 

 } = require('../../lib/master/queries');
 const { getWeather } = require('../services/weather');
 const { formatWeather, weatherCondition, getWeatherAlerts } = require('../../lib/helpers/weather');
const weatherController  = {};

weatherController.getWeather = async (req, res, next) => {
  try {
    const {body} = req;
       
    if(!body.hasOwnProperty('longitude')) return next({message : "Missing longitude"});
    if(!body.hasOwnProperty('lattitude')) return next({message : "Missing lattitude"});
        
    //call to weather api
    const weatherResponse = await getWeather(body);

    //what is response incase of bad coordinates

    let {weather, current, alerts} = weatherResponse;
       
      
    const condition = weather[0].main;
    const feelsLike = formatWeather(current.feels_like);
    const weatherAlerts = alerts[0];
       //what if no weather alerts

    res.locals.getWeather = {
      weather_feels : feelsLike,
      weather_condition : condition,
      alerts : weatherAlerts
    }
       
    return next();
    
   } catch (error) {
       return next({error})
     }
}


module.exports = weatherController;

const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const lat = encodeURIComponent(latitude)
    const long = encodeURIComponent(longitude)
    const location = lat + ',' + long
    const url = 'https://api.darksky.net/forecast/7be51744b9e7cadb02216eb393d9f4fe/'+location+'?units=si'

    request({url: url, json:true}, (error, {body}) =>{
        if(error){
            callback('Unable to connect services.',undefined)
        } else if(body.error){
            callback('Unable to get forecast, Try another search.',undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ` It is currently ${body.currently.temperature} degrees out. The high ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow}. There is a ${body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast;




// const url = 'https://api.darksky.net/forecast/7be51744b9e7cadb02216eb393d9f4fe/37.8267,-122.4233?units=si'

// request({ url: url, json: true }, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else { 
//     const current = response.body.currently
//     console.log(response.body.daily.data[0].summary + ` It is currently ${current.temperature} degrees out. There is a ${current.precipProbability}% chance of rain.`)
//     }
// })

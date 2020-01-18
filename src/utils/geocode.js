const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibXJkYXJyZW4iLCJhIjoiY2s1Zmw4bTdpMmM0czNkbXV1and5bWEyYiJ9.y-1BXPUaWo-zEwCfbB9HaQ&limit=1'

    request({url: url, json:true}, (error, response) =>{
        if(error){
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode




// const geocodeURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibXJkYXJyZW4iLCJhIjoiY2s1Zmw4bTdpMmM0czNkbXV1and5bWEyYiJ9.y-1BXPUaWo-zEwCfbB9HaQ&limit=1'

// request({url: geocodeURL, json:true}, (error,response) =>{
//     const feature = response.body.features[0]
//     if(error){
//         console.log('Unable to connect to Services.')
//     } else if (!feature){
//         console.log('No match has been found.')
//     } else {
//         const longitude = feature.center[0];
//         const latitude = feature.center[1];
//         console.log(latitude, longitude);
//     }
// })
var express = require('express');
var router = express.Router();

const https = require('https');

/* Generate long/lat  based on address */
//Postman: http://localhost:3000/longLat/33 Somercrest Circle SW, Calgary, AB
router.get('/:address', async function(req, res) {  

  const fetch = require('node-fetch');
  
    (async () => {
      try {
    
        // using Govenment of Canada geolocation API
        // const response = await fetch('http://geogratis.gc.ca/services/geolocation/en/locate?q=' + supplierToUpdate[0].address1 + ' ' + supplierToUpdate[0].city + ' ' + supplierToUpdate[0].province )
        // console.log("json latitude = ", json[0].geometry.coordinates[0])
        // console.log("json longitude = ", json[0].geometry.coordinates[1])
        
        // using mapbox geocoding api.  Need to sign up to get a public token to use their api
        // works for address
        const response = await fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/' + req.params.address  +  '.json?access_token=pk.eyJ1Ijoicmlja3NoYXc4ODgiLCJhIjoiY2tyanlyNWV6MXZxMzMxbzI0bnA3dm5hMyJ9.jmu4biSr9nQwLErIGJeG6A&limit=1')
        const json = await response.json()
        //console.log("json = ", json.features[0].center[0])
        //console.log("json = ", json.features[0].center[1])
  
        let result = { latitude: json.features[0].center[1], longitude: json.features[0].center[0] }

        console.log("result = ", result)

        // //works for postal code
        // const response = await fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/' + 't2y4p6'  +  '.json?access_token=pk.eyJ1Ijoicmlja3NoYXc4ODgiLCJhIjoiY2tyanlyNWV6MXZxMzMxbzI0bnA3dm5hMyJ9.jmu4biSr9nQwLErIGJeG6A&limit=1')
        // const json = await response.json()
        // console.log("json = ", json.features[0].center[0])
        // console.log("json = ", json.features[0].center[1])
  
        // console.log(json.url);
        // console.log(json.explanation);

        res.send(result);

      } catch (error) {
        console.log(error.response.body);
      }
    })();
  
  })

  module.exports = router;
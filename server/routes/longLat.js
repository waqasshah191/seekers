var express = require('express');
var router = express.Router();

const https = require('https');

/* Update a supplier by ID. */
router.get('/:address', async function(req, res) {  
    let supplierToUpdate = req.body
  
    const fetch = require('node-fetch');
  
    (async () => {
      try {
    
        //const response = await fetch('http://geogratis.gc.ca/services/geolocation/en/locate?q=' + supplierToUpdate[0].address1 + ' ' + supplierToUpdate[0].city + ' ' + supplierToUpdate[0].province )
        // console.log("json latitude = ", json[0].geometry.coordinates[0])
        // console.log("json longitude = ", json[0].geometry.coordinates[1])
        
        //works for address
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
const axios = require( 'axios' );

exports.handler = async (event) => {
    
    let response = { statusCode: 404, body: JSON.stringify("default") };

     try{
        const res = await axios.get( `https://maps.googleapis.com/maps/api/place/textsearch/json?query=attractions+in+los+angelos&key=${process.env.API_KEY}`);
        console.log(res);
         const poi = res.data.results.filter( el => el.types.includes( "tourist_attraction" ) );
       response = {
            statusCode: 200,
            body: JSON.stringify(poi[0]),
            //poi[0].name
            //poi[0].place_id
            //poi[0].
        };
        
    } catch (e) {
        console.log(e);

        response = {
            statusCode: 400,
            body: JSON.stringify(e),
        };
    }
        
    return response

};


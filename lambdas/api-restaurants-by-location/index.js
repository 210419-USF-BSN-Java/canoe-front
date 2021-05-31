const axios = require( 'axios' );

exports.handler = async (event) => {
    
    let response = { statusCode: 404, body: JSON.stringify("default") };

     try{
        const res = await axios.get( `https://maps.googleapis.com/maps/api/place/textsearch/json?query=food+in+los+angelos&key=${process.env.API_KEY}`);
        console.log(res);
         const restaurant = res.data.results.filter( el => el.types.includes( "restaurant" ) );
       response = {
            statusCode: 200,
            body: JSON.stringify(restaurant[0]),
            //restaurant[0].name
            //restaurant[0].place_id
            //restaurant[0].
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

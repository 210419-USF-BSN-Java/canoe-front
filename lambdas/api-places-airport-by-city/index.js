<<<<<<< HEAD
const { Client } = require( "@googlemaps/google-maps-services-js" );

// Google Maps Client docs here: https://googlemaps.github.io/google-maps-services-js/

exports.handler = async ( event ) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify( 'Hello from Lambda!' ),
    };
    return response;
};
=======
const axios = require( 'axios' );

exports.handler = async ( event ) => {
    let response = { statusCode: 400, body: JSON.stringify( "couldn't find an airport within 150km radius of target" ) };

    // get "place from post" 
    const body = JSON.parse( event.body )

    const place = body.place;

    const queryString = `airport ${ place }`;

    try {
        const result = await axios.get( `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${ queryString }&radius=150000&key=${ process.env.API_KEY }` );
        console.log( result.data )

        // filter out any non-airports that slipped through
        const airports = result.data.results.filter( el => el.types.includes( "airport" ) );

        response = { statusCode: 200, body: JSON.stringify( airports ) }

    } catch ( err ) {
        console.log( "#### ERROR RETRIEVING AIRPORTS #####" )
        console.log( err )
    }
    return response
};

>>>>>>> 22c450ed3ad8f0979ac20570c5f90fbc2827f96b

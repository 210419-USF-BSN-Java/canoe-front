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

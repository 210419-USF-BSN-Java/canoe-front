const Amadeus = require( 'amadeus' )

const amadeus = new Amadeus( {
    clientId: 'GTRk3pzTSwgnA2Xyjmej7dVuWGt54b9i',
    clientSecret: 'DXr2K7C7tUjllll1'
} )

exports.handler = async ( event ) => {

    amadeus.shopping.flightOffersSearch.get( {
        originLocationCode: 'SYD',
        destinationLocationCode: 'BKK',
        departureDate: '2021-08-01',
        adults: '2'
    } ).then( function ( response ) {
        console.log( response.data );
    } ).catch( function ( responseError ) {
        console.log( responseError.code );
    } );


    // // TODO implement
    // const response = {
    //     statusCode: 200,
    //     body: JSON.stringify( 'Hello from Lambda!' ),
    // };
    // return response;
};

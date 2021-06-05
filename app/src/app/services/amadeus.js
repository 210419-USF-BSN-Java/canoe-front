

const Amadeus = require( 'amadeus' );

const amadeus = new Amadeus( {
    clientId: 'GTRk3pzTSwgnA2Xyjmej7dVuWGt54b9i',
    clientSecret: 'DXr2K7C7tUjllll1'
} )

function getAirport( city ) {
    const result = await amadeus.referenceData.locations.get( {
        keyword: city,
        subType: Amadeus.locations.any
    } )

    return result
}

module.exports = {
    getAirport
}
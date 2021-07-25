const bcrypt = require( 'bcrypt' );

bcrypt.genSalt().then( salt => {
  bcrypt.hash( 'thepassword', salt ).then( hash => {
    console.log( `this is the salt ${salt}` );
    console.log( `this is the hash ${hash}` );
    bcrypt.compare( 'thepassword', hash ).then( result => {
      console.log( `this is the result ${result}` );
    } );
  } );
} );

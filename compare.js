const bcrypt = require( 'bcrypt' );

bcrypt.genSalt().then( salt => {
  bcrypt.hash( 'mysuperpassword', salt ).then( hash => {
    bcrypt.compare( 'mysuperpassword', hash ).then( verdict => {
      console.log( verdict );
    } )
  } )
} );

const bcrypt = require( 'bcrypt' );

bcrypt.genSalt().then( salt => {
  bcrypt.hash( 'password123', salt ).then( hash => {
    console.log( hash );
  } );
} )
bcrypt.genSalt().then( salt => {
  bcrypt.hash( 'password123', salt ).then( hash => {
    console.log( hash );
  } );
} )
bcrypt.genSalt().then( salt => {
  bcrypt.hash( 'password123', salt ).then( hash => {
    console.log( hash );
  } );
} )
bcrypt.genSalt().then( salt => {
  bcrypt.hash( 'password123', salt ).then( hash => {
    console.log( hash );
  } );
} )
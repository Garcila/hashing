const bcrypt = require( 'bcrypt' );
const now = require( 'performance-now' );

async function hashing ( password, cost ) {

  let start = now()
  const salt = await bcrypt.genSalt( cost );
  let mid = now();
  let hash = await bcrypt.hash( password, salt );

  let end = now()
  console.log( `${password} hash at ${cost} cost: `, ( end - start ).toFixed( 3 ) );
}
hashing( 'password', 10 );
hashing( 'password', 12 );
hashing( 'password', 14 );
hashing( 'password', 16 );
hashing( 'password', 18 );
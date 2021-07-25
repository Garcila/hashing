const sentence = "The quick brown fox jumps over the lazy dog";

let obj = {};

let numSignature = ( sentence ) => {
  let words = sentence.split( "" );

  for ( let i = 0; i < words.length; i++ ) {
    let word = words[i];
    if ( word in obj ) {
      obj[word]++;
    } else {
      obj[word] = 1;
    }
  }
  const hash = Object.values( obj ).join( "" );
  console.log( hash );
}

numSignature( sentence );
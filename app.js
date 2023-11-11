import crypto from 'crypto';
import colors from 'colors';


const alice = crypto.getDiffieHellman('modp15');
const bob = crypto.getDiffieHellman('modp15');


alice.generateKeys()
bob.generateKeys()



// alice key on her end


const aliceSecret = alice.computeSecret(bob.getPublicKey(), null, 'hex')

// bob key on his end
const bobSecret = bob.computeSecret(alice.getPublicKey(), null, 'hex')

if (aliceSecret === bobSecret) {
    console.log("Success: Key Matched" .green);
} else {
    console.log("Key Failed" .red);

}
console.log(`alice secretcode is : ${aliceSecret} `.yellow)
console.log(`alice secretcode is : ${bobSecret} ` .blue)
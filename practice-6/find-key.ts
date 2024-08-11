import { Keypair } from "@solana/web3.js";

const desiredPrefix = "md";
let keypair;
let found = false;

while (!found) {
    keypair = Keypair.generate();
    const publicKey = keypair.publicKey.toBase58();

    if (publicKey.startsWith(desiredPrefix)) {
        found = true;
        console.log('=============================');
        console.log(desiredPrefix);
        console.log('^^^^^ Used initials(md stands for mykola dzoban) to run script');
        console.log('Found matching keypair!');
        console.log('Generated public key: ', publicKey);
        console.log('Generated secret key: ', keypair.secretKey);
        console.log('=============================');
    }
}

console.log('=============================');

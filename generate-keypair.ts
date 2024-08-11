import 'dotenv/config'
import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log('Generated public key: ', keypair.publicKey.toBase58());
console.log('Generated secret key: ', keypair.secretKey);

console.log('=============================');

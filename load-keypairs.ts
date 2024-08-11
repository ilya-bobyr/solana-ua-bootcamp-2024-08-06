import 'dotenv/config'
import { Keypair } from "@solana/web3.js";

console.log('=============================');

const keypairFromEnvironment = Uint8Array.from(JSON.parse(process.env['SECRET_KEY'] as string));
const keypairFromSecret = Keypair.fromSecretKey(keypairFromEnvironment);

console.log('From env keypair', keypairFromSecret.publicKey.toBase58());

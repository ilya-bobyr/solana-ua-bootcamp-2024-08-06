import { Keypair } from '@solana/web3.js';

let isFound = false
let attempts = 0
let publicKey = ''
let secretKey
const startWith = process.argv[2] ?? 'wqq'

console.log("In progress...");

while (!isFound) {
    const keypair = Keypair.generate()

    publicKey = keypair.publicKey.toBase58()
    attempts++

    if (publicKey.toLowerCase().startsWith(startWith.toLowerCase())) {
        isFound = true
        secretKey = keypair.secretKey
    }
}

console.log(`Attempts: ${attempts}\nKey start with prefix ${startWith}: ${publicKey}\nSecret key: ${secretKey}`);

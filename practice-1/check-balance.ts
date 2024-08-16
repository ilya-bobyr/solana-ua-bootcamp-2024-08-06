import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { airdropIfRequired } from "@solana-developers/helpers";
import { getPublicKey } from "./load-keypair";

const PUBLIC_KEY = getPublicKey()
const publicKey = new PublicKey(PUBLIC_KEY)

try {
    const connection = new Connection(clusterApiUrl("devnet"));

    console.log(`⚡️ Connected to devnet!`);

    const balanceInLamports = await connection.getBalance(publicKey)
    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL

    console.log(`The balance for the wallet at address ${publicKey} is: ${balanceInSOL}`);

    console.log('Getting sol...');

    const newBalance = await airdropIfRequired(
        connection,
        publicKey,
        1 * LAMPORTS_PER_SOL,
        4.6 * LAMPORTS_PER_SOL,
    );

    console.log(`The new balance for the wallet at address ${publicKey} is: ${newBalance / LAMPORTS_PER_SOL}`);

} catch (error) {
    console.error(error);
}

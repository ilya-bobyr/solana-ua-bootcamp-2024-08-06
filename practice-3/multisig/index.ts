import "dotenv/config";
import { Connection, Keypair, clusterApiUrl } from "@solana/web3.js";
import {
  createMint,
  createMultisig,
  getMint,
  getOrCreateAssociatedTokenAccount,
  mintTo,
} from "@solana/spl-token";
import { getExplorerLink } from "@solana-developers/helpers";

const secretKey = process.env.SECRET_KEY;

if (!secretKey) {
  console.error("SECRET_KEY env is required");

  process.exit(1);
}

const signer1 = Keypair.generate();
const signer2 = Keypair.generate();
const signer3 = Keypair.generate();

const asArray = Uint8Array.from(JSON.parse(secretKey));
const sender = Keypair.fromSecretKey(asArray);

const connection = new Connection(clusterApiUrl("devnet"));

console.log(`🔑 Our public key is: ${sender.publicKey.toBase58()}`);

const multisigKey = await createMultisig(
  connection,
  sender,
  [signer1.publicKey, signer2.publicKey, signer3.publicKey],
  2
);

console.log(`Created 2/3 multisig ${multisigKey.toBase58()}`);

const tokenMint = await createMint(
  connection,
  sender,
  multisigKey,
  multisigKey,
  7
);

const associatedTokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  sender,
  tokenMint,
  signer1.publicKey
);

try {
  await mintTo(
    connection,
    sender,
    tokenMint,
    associatedTokenAccount.address,
    multisigKey,
    1
  );
} catch (error: any) {
  console.error("Failed to mint to associated token account", error.message);
}

await mintTo(
  connection,
  sender,
  tokenMint,
  associatedTokenAccount.address,
  multisigKey,
  1,
  [signer1, signer2]
);

const mintInfo = await getMint(connection, tokenMint);

console.log(`Minted ${mintInfo.supply} token`);

const link = getExplorerLink("address", tokenMint.toString(), "devnet");

console.log(`✅ Token Mint: ${link}`);

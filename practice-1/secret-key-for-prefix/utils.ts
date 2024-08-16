import { Keypair } from "@solana/web3.js";
import base58 from "bs58";

export const isSecretKeyStartWithPrefix = (secretKey: string, prefix: string) =>
  secretKey.startsWith(prefix);

export const generateSecretKeyForPrefix = (prefix: string) => {
  const timerLabel = `secret-key-${prefix}-timer`;

  let secretKeyBase58: string;

  console.time(timerLabel);

  do {
    const { secretKey } = Keypair.generate();

    secretKeyBase58 = base58.encode(secretKey);

    console.log(`Generated secret key:\n ${secretKeyBase58}`);
  } while (
    !isSecretKeyStartWithPrefix(
      secretKeyBase58.toLowerCase(),
      prefix.toLowerCase()
    )
  );

  console.timeEnd(timerLabel);

  return secretKeyBase58;
};

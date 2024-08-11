import { Keypair } from "@solana/web3.js";
import { KeyPair } from "../generate-keypair-by-search-key";

type GenerateKeypairsParams = {
  withLogs?: boolean;
};

export const generateKeypairs = ({
  withLogs = false,
}: GenerateKeypairsParams = {}): KeyPair => {
  const { publicKey, secretKey } = Keypair.generate();
  if (withLogs) {
    console.log("publicKey :", publicKey.toBase58());
    console.log("secretKey : ", secretKey);
  }

  return { publicKey: publicKey.toBase58(), secretKey };
};

import { generateKeypairs } from "../generate-keypairs";
import { getExecutionTime } from "../utils";

export type KeyPair = { publicKey?: string; secretKey?: Uint8Array };

export const generateKeypairBySearchKey = (searchKey: string) => {
  let count = 0;
  const keyPair: KeyPair = {};

  const startTime = performance.now();
  do {
    const { publicKey, secretKey } = generateKeypairs();
    keyPair.publicKey = publicKey;
    keyPair.secretKey = secretKey;
    count++;
  } while (!keyPair.publicKey.toLowerCase().startsWith(searchKey));

  console.log("Search time :", getExecutionTime(startTime), "ms");
  console.log("publicKey : ", keyPair.publicKey, "| Try #", count);
  // console.log("secretKey : ", keyPair.secretKey);
};

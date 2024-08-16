import { generateSecretKeyForPrefix } from "./utils";

const prefix = "anza";

const secretKey = generateSecretKeyForPrefix(prefix);

console.log(`Secret key with ${prefix} prefix:\n ${secretKey}`);

import { generateKeypairs } from "./generate-keypairs";
import { generateKeypairBySearchKey } from "./generate-keypair-by-search-key";

generateKeypairs({ withLogs: true });
generateKeypairBySearchKey("ui");

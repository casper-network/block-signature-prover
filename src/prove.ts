import { CLPublicKey, decodeBase16 } from "casper-js-sdk";
import nacl from "tweetnacl";
import { BlockAddedEvent, FinalitySignatureEvent } from "./interfaces";

/**
 * Function to verify that the block was signed by the public keys in the FinalitySignature events.
 * @param blockAddedEvent - The BlockAdded event.
 * @param finalitySignatureEvents - Array of FinalitySignature events.
 * @returns An array of booleans indicating the verification result for each signature.
 */
export function verifyBlockSignatures(
	blockAddedEvent: BlockAddedEvent,
	finalitySignatureEvents: FinalitySignatureEvent[]
): boolean[] {
	const results: boolean[] = [];

	const blockHashHex = blockAddedEvent.BlockAdded.block_hash;
	const blockHash: Uint8Array = decodeBase16(blockHashHex);

	finalitySignatureEvents.forEach(event => {
		const signatureData = event.FinalitySignature.V2;

		const publicKeyHex = signatureData.public_key;
		const signatureHex = signatureData.signature;
		const eraId = signatureData.era_id;

		const publicKey = CLPublicKey.fromHex(publicKeyHex);
		const publicKeyBytes = publicKey.value();

		const signatureBytes = decodeBase16(signatureHex.slice(2)); // Remove the prefix

		const isValid = nacl.sign.detached.verify(
			blockHash,
			signatureBytes,
			publicKeyBytes
		);

		results.push(isValid);

		console.log(
			`Signature from public key ${publicKeyHex} is ${
				isValid ? "valid" : "invalid"
			}.`
		);
	});

	return results;
}

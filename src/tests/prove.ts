import { verifyBlockSignatures } from "../prove";
import { BlockAddedEvent, FinalitySignatureEvent } from "../interfaces";

const blockAddedEvent: BlockAddedEvent = {
	BlockAdded: {
		block_hash:
			"291b5ba1429d8c6faddabdb1b37663c27c033e758e515aaa45613ba06c8bda2a",
		block: {
			Version2: {
				hash: "291b5ba1429d8c6faddabdb1b37663c27c033e758e515aaa45613ba06c8bda2a",
				header: {
					parent_hash:
						"5eae814ce2f61aed09f8272df3d8ce8491c1a26c514e41a4b01dd8531cc7ab7a",
					state_root_hash:
						"d1c603c67bf497cd3e69fbfe43eb102df12b7de82fead580f66b37b9c53acbd0",
					body_hash:
						"18937e8cf4338b5f5fdc2581f8d7d6a47de736d2799e3f3bc9b0ff9f1e7cf106",
					random_bit: false,
					accumulated_seed:
						"a63e27c1967be04e3787a622bac2ff645952f1bacf9da875f6fdc8b328bca0f1",
					era_end: null,
					timestamp: "2024-08-27T22:23:51.842Z",
					era_id: 2,
					height: 18,
					protocol_version: "2.0.0",
					proposer:
						"01f0aaadbf1ef00a83e161eaccadaf4e499d9730a09e8979cb9e8c2d3fc4d8b6f7",
					current_gas_price: 1,
					last_switch_block_hash:
						"24a8ef5ddc9f55c6d89594dcd6bf2d8a8f7081f063b22ef5d2aca45272aa58c8"
				},
				body: { transactions: {}, rewarded_signatures: [[248], [0], [0]] }
			}
		}
	}
};

const finalitySignatureEvents: FinalitySignatureEvent[] = [
	{
		FinalitySignature: {
			V2: {
				block_hash:
					"291b5ba1429d8c6faddabdb1b37663c27c033e758e515aaa45613ba06c8bda2a",
				block_height: 18,
				era_id: 2,
				chain_name_hash:
					"7b63d2e3c5c0c7821b9c7aa73eb288e694ab476056f17c1ccc963b2f7c287b48",
				signature:
					"01ba7179fbc3bd0836a6514808c7eef1c392ab3c92291a9be588077aed77bb66608a2f59c088bd50d4b507305e75b2c09f2f0e63a6c6223bc969f79e878e3d870f",
				public_key:
					"018b2bda41097182c387b72c41a490984aad26a64bc75cd926dee7f0b8d82b4e43"
			}
		}
	},
	{
		FinalitySignature: {
			V2: {
				block_hash:
					"291b5ba1429d8c6faddabdb1b37663c27c033e758e515aaa45613ba06c8bda2a",
				block_height: 18,
				era_id: 2,
				chain_name_hash:
					"7b63d2e3c5c0c7821b9c7aa73eb288e694ab476056f17c1ccc963b2f7c287b48",
				signature:
					"0188565563eb1e58eab294a1d82fb5c933f76f4acc118bfbac1e62f68b954ddd3647448c6dee20790f5c737a94740f82247e96966f5576127c2726dcef761df50f",
				public_key:
					"01f0aaadbf1ef00a83e161eaccadaf4e499d9730a09e8979cb9e8c2d3fc4d8b6f7"
			}
		}
	},
	{
		FinalitySignature: {
			V2: {
				block_hash:
					"291b5ba1429d8c6faddabdb1b37663c27c033e758e515aaa45613ba06c8bda2a",
				block_height: 18,
				era_id: 2,
				chain_name_hash:
					"7b63d2e3c5c0c7821b9c7aa73eb288e694ab476056f17c1ccc963b2f7c287b48",
				signature:
					"0154b53800b408eb318dfa752e8f96688c6870effa4c48a3b3566fb6f3672ffa1d01c2b51158ebdc0e0aa1c3c9737b9e06c5da6e15e7663b1de4595510ae985105",
				public_key:
					"019b5bd3e7f3c2ba280bb264928ba0d18aab832eb92714d9a455e7737e976c8a41"
			}
		}
	},
	{
		FinalitySignature: {
			V2: {
				block_hash:
					"291b5ba1429d8c6faddabdb1b37663c27c033e758e515aaa45613ba06c8bda2a",
				block_height: 18,
				era_id: 2,
				chain_name_hash:
					"7b63d2e3c5c0c7821b9c7aa73eb288e694ab476056f17c1ccc963b2f7c287b48",
				signature:
					"01c235a89ded26620a2cb791938679fca9fef9060a3c2e002e4b9c59f1a8806c5abd0ebea313a04d28b0661bc588d3957689643b92c19353d82c6b60434faaac0a",
				public_key:
					"01706f36a2ebfccea720b49a6424c196cf0bb7aa929f39842975865848b87773ef"
			}
		}
	},
	{
		FinalitySignature: {
			V2: {
				block_hash:
					"291b5ba1429d8c6faddabdb1b37663c27c033e758e515aaa45613ba06c8bda2a",
				block_height: 18,
				era_id: 2,
				chain_name_hash:
					"7b63d2e3c5c0c7821b9c7aa73eb288e694ab476056f17c1ccc963b2f7c287b48",
				signature:
					"0108933dac4be12b6a7c0ce807f2c49a6a20f3ed200770bae0a75fb5ff8da13ea81ffbc02c5f5b91d6e89bce1a5265317d20263366e3df2f5dc6581a60477a2e0d",
				public_key:
					"016c07fa407f46f7381bb424fbe18c320e8184a7d3e4360acb38d2d58172a9028a"
			}
		}
	}
];

const results = verifyBlockSignatures(blockAddedEvent, finalitySignatureEvents);

console.log("Verification results:", results);

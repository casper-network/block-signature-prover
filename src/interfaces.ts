export interface FinalitySignatureEvent {
  FinalitySignature: {
    V2: {
      block_hash: string;
      block_height: number;
      era_id: number;
      chain_name_hash: string;
      signature: string;
      public_key: string;
    };
  };
}

export interface BlockAddedEvent {
  BlockAdded: {
    block_hash: string;
    block: {
      Version2: {
        hash: string;
        header: {
          parent_hash: string;
          state_root_hash: string;
          body_hash: string;
          random_bit: boolean;
          accumulated_seed: string;
          era_end: null | object;
          timestamp: string;
          era_id: number;
          height: number;
          protocol_version: string;
          proposer: string;
          current_gas_price: number;
          last_switch_block_hash: string;
        };
        body: {
          transactions: object;
          rewarded_signatures: number[][];
        };
      };
    };
  };
}
import { Matches } from "class-validator";

export class CreateOwnerDto {
  // Bundled validator for ethereum addresses doesn't seem to work.
  @Matches(`/^0x[a-fA-F0-9]{40}$/g`)
  walletAddress: string;
}

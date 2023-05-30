import { IsEthereumAddress } from "class-validator";

export class CreateOwnerDto {
  // FIXME this validation doesn't seem to work
  @IsEthereumAddress()
  walletAddress: string;
}

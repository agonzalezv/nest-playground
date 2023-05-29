import { IsEthereumAddress } from 'class-validator';

export class CreateOwnerDto {
  @IsEthereumAddress()
  walletAddress: string;
}

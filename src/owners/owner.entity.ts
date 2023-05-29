import { Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Nft } from '../nfts/nft.entity';

@Entity()
export class Owner {
  @PrimaryColumn()
  walletAddress: string;

  @OneToMany(() => Nft, (nft) => nft.owner)
  nfts: Nft[];
}

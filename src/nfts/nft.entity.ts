import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Owner } from "../owners/owner.entity";

@Entity()
export class Nft {
  // NOTE: This may be better suited as a `PrimaryColumn` string,
  // since NFT IDs can be of any type.
  // For the sake of simplicity, will leave as autonumeric.
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Will assume a URL, i.e `https://etherscan.io/nft/[contractAddress]/[tokenID]
  @Column({ unique: true })
  blockchainLink: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  imageUrl: string;

  // Can be either passed by the user, or will default to current date if not.
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  mintDate: string;

  @ManyToOne(() => Owner, (owner) => owner.nfts)
  owner: Owner;
}

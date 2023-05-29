
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NftData {
    name: string;
    blockchainLink: string;
    description?: Nullable<string>;
    imageUrl: string;
    mintDate: string;
}

export abstract class IQuery {
    abstract nft(id: string): Nullable<Nft> | Promise<Nullable<Nft>>;

    abstract getByOwner(ownerId: string): Nullable<Nft> | Promise<Nullable<Nft>>;

    abstract owner(walletAddress: string): Nullable<Owner> | Promise<Nullable<Owner>>;
}

export abstract class IMutation {
    abstract createNft(ownerId: string, data: NftData): Nullable<Nft> | Promise<Nullable<Nft>>;

    abstract transferNft(id: string, newOwner: string): Nullable<Nft> | Promise<Nullable<Nft>>;

    abstract createOwner(walletAddress: string): Nullable<Owner> | Promise<Nullable<Owner>>;
}

export class Nft {
    name: string;
    blockchainLink: string;
    description?: Nullable<string>;
    imageUrl: string;
    owner: string;
    mintDate?: Nullable<string>;
}

export class Owner {
    walletAddress: string;
}

type Nullable<T> = T | null;

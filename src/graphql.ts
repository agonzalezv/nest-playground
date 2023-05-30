
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
    mintDate?: Nullable<string>;
}

export abstract class IMutation {
    abstract login(walletAddress: string): Nullable<ValidateUserResponse> | Promise<Nullable<ValidateUserResponse>>;

    abstract createNft(walletAddress: string, data: NftData): Nft | Promise<Nft>;

    abstract transferNft(id: string, walletAddress: string): Nft | Promise<Nft>;

    abstract createOwner(walletAddress: string): Nullable<Owner> | Promise<Nullable<Owner>>;
}

export abstract class IQuery {
    abstract getCurrentUser(): Nullable<Owner> | Promise<Nullable<Owner>>;

    abstract nft(id: string): Nullable<Nft> | Promise<Nullable<Nft>>;

    abstract getByOwner(walletAddress: string, limit?: Nullable<number>, page?: Nullable<number>): GetByOwnerResponse | Promise<GetByOwnerResponse>;

    abstract owner(walletAddress: string): Nullable<Owner> | Promise<Nullable<Owner>>;

    abstract owners(): Nullable<Owner>[] | Promise<Nullable<Owner>[]>;
}

export class ValidateUserResponse {
    user?: Nullable<Owner>;
    token?: Nullable<string>;
}

export class Nft {
    name: string;
    blockchainLink: string;
    description?: Nullable<string>;
    imageUrl: string;
    mintDate: string;
}

export class GetByOwnerResponse {
    nfts?: Nullable<Nullable<Nft>[]>;
    total?: Nullable<number>;
}

export class Owner {
    walletAddress: string;
}

type Nullable<T> = T | null;

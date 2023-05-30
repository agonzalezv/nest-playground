import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateNftDto } from "./dto/create-nft.dto";
import { Nft } from "./nft.entity";
import { Owner } from "src/owners/owner.entity";
import { isInt } from "class-validator";

type PaginatedNfts = {
  nfts: Nft[];
  total: number;
};
@Injectable()
export class NftsService {
  constructor(
    @InjectRepository(Nft)
    private readonly nftsRepository: Repository<Nft>,
    @InjectRepository(Owner)
    private readonly ownersRepository: Repository<Owner>
  ) {}

  async create(
    walletAddress: string,
    createNftDto: CreateNftDto
  ): Promise<Nft> {
    const nft = new Nft();
    nft.owner = await this.findOneOwner(walletAddress);
    nft.name = createNftDto.name;
    nft.blockchainLink = createNftDto.blockchainLink;
    nft.description = createNftDto.description;
    nft.imageUrl = createNftDto.imageUrl;
    nft.mintDate = createNftDto.mintDate;
    return this.nftsRepository.save(nft);
  }

  async findPaginatedNftsByOwner(limit: number, page: number, owner: Owner) {
    const offset = (Number(page) - 1) * limit;
    const result = await this.nftsRepository.findAndCount({
      where: { owner: owner },
      take: limit,
      skip: offset,
    });
    return result;
  }

  async findAllByOwner(
    limit: number,
    page: number,
    walletAddress: string
  ): Promise<PaginatedNfts> {
    // TODO default values from query don't seem to be working.
    // TODO improve validation to cater for negative or non-number values
    const _limit = limit || 10;
    const _page = page || 1;

    const owner = await this.findOneOwner(walletAddress);
    const [nfts, count] = await this.findPaginatedNftsByOwner(
      _limit,
      _page,
      owner
    );
    return { nfts, total: count };
  }

  findOne(id: number): Promise<Nft> {
    return this.nftsRepository.findOneBy({ id });
  }

  async updateOwner(id: number, walletAddress: string): Promise<Nft> {
    const owner = await this.findOneOwner(walletAddress);
    await this.nftsRepository.update({ id }, { owner });
    // TODO return updated object from above call.
    return await this.findOne(id);
  }

  findOneOwner(walletAddress: string): Promise<Owner> {
    return this.ownersRepository.findOneByOrFail({
      walletAddress: walletAddress,
    });
  }
}

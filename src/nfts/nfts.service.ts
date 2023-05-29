import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateNftDto } from './dto/create-nft.dto';
import { Nft } from './nft.entity';
import { Owner } from 'src/owners/owner.entity';

@Injectable()
export class NftsService {
  constructor(
    @InjectRepository(Nft)
    private readonly nftsRepository: Repository<Nft>,
    @InjectRepository(Owner)
    private readonly ownersRepository: Repository<Owner>,
  ) {}

  async create(ownerId: string, createNftDto: CreateNftDto): Promise<Nft> {
    const nft = new Nft();
    nft.owner = await this.findOneOwner(ownerId);
    nft.name = createNftDto.name;
    nft.blockchainLink = createNftDto.blockchainLink;
    nft.description = createNftDto.description;
    nft.imageUrl = createNftDto.imageUrl;
    nft.mintDate = createNftDto.mintDate;
    return this.nftsRepository.save(nft);
  }

  async findAllByOwner(ownerId: string): Promise<Nft[]> {
    const owner = await this.findOneOwner(ownerId);
    return this.nftsRepository.findBy({ owner });
  }

  findOne(id: number): Promise<Nft> {
    return this.nftsRepository.findOneBy({ id });
  }

  async updateOwner(id: number, newOwner: string): Promise<UpdateResult> {
    const owner = await this.findOneOwner(newOwner);
    return this.nftsRepository.update({ id }, { owner });
  }

  findOneOwner(id: string): Promise<Owner> {
    return this.ownersRepository.findOneBy({ walletAddress: id });
  }
}

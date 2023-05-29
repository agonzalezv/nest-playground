import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { Owner } from './owner.entity';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner)
    private readonly ownersRepository: Repository<Owner>,
  ) {}

  create(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    const owner = new Owner();
    owner.walletAddress = createOwnerDto.walletAddress;
    return this.ownersRepository.save(owner);
  }

  async findAll(): Promise<Owner[]> {
    return this.ownersRepository.find();
  }

  findOne(id: string): Promise<Owner> {
    return this.ownersRepository.findOneBy({ walletAddress: id });
  }
}

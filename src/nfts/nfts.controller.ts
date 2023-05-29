import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateNftDto } from './dto/create-nft.dto';
import { Nft } from './nft.entity';
import { NftsService } from './nfts.service';

@Controller('nfts')
export class NftsController {
  constructor(private readonly nftsService: NftsService) {}

  @Post()
  create(@Body() ownerId, createNftDto: CreateNftDto): Promise<Nft> {
    return this.nftsService.create(ownerId, createNftDto);
  }

  @Get()
  findByOwner(@Param('ownerId', ParseIntPipe) ownerId: string): Promise<Nft[]> {
    return this.nftsService.findAllByOwner(ownerId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Nft> {
    return this.nftsService.findOne(id);
  }
}

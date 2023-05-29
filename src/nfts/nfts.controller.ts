import { Body, Controller, Param, ParseIntPipe } from "@nestjs/common";
import { CreateNftDto } from "./dto/create-nft.dto";
import { Nft } from "./nft.entity";
import { NftsService } from "./nfts.service";

@Controller("nfts")
export class NftsController {
  constructor(private readonly nftsService: NftsService) {}

  create(@Body() walletAddress, createNftDto: CreateNftDto): Promise<Nft> {
    return this.nftsService.create(walletAddress, createNftDto);
  }

  findByOwner(
    @Param("ownerId", ParseIntPipe) walletAddress: string,
    @Param("limit", ParseIntPipe) limit: number,
    @Param("page", ParseIntPipe) page: number
  ): Promise<Nft[]> {
    return this.nftsService.findAllByOwner(limit, limit, walletAddress) as any;
  }

  findOne(@Param("id", ParseIntPipe) id: number): Promise<Nft> {
    return this.nftsService.findOne(id);
  }
}

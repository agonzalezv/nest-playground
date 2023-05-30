import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { NftsService } from "./nfts.service";
import { CreateNftDto } from "./dto/create-nft.dto";
@Resolver("Nft")
export class NftsResolver {
  constructor(private nftsService: NftsService) {}

  @Query()
  async nft(@Args("id") id: number) {
    return this.nftsService.findOne(id);
  }

  @Query()
  async getByOwner(
    @Args("walletAddress") walletAddress: string,
    // TODO this defaultValues don't seem to do anything
    @Args("limit", { type: () => Int, defaultValue: 10 }) limit: number,
    @Args("page", { type: () => Int, defaultValue: 1 }) page: number
  ) {
    return this.nftsService.findAllByOwner(limit, page, walletAddress);
  }

  @Mutation()
  async createNft(
    @Args("walletAddress") walletAddress: string,
    @Args("data") data: CreateNftDto
  ) {
    return this.nftsService.create(walletAddress, data);
  }

  @Mutation()
  async transferNft(
    @Args("id") id: number,
    @Args("walletAddress") walletAddress: string
  ) {
    // TODO IRL this should also trigger a blockchain event,
    // and potentially update DB after comfirmed, to avoid inconsistencies.
    return this.nftsService.updateOwner(id, walletAddress);
  }
}

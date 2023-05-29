import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NftsService } from './nfts.service';
import { CreateNftDto } from './dto/create-nft.dto';

@Resolver('Nft')
export class NftsResolver {
  constructor(private nftsService: NftsService) {}

  @Query()
  async nft(@Args('id') id: number) {
    return this.nftsService.findOne(id);
  }

  @Query()
  async getByOwner(@Args('ownerId') ownerId: string) {
    return this.nftsService.findAllByOwner(ownerId);
  }

  @Mutation()
  async createNft(
    @Args('ownerId') ownerId: string,
    @Args('data') data: CreateNftDto,
  ) {
    return this.nftsService.create(ownerId, data);
  }

  @Mutation()
  async transferNft(
    @Args('id') id: number,
    @Args('newOwner') newOwner: string,
  ) {
    return this.nftsService.updateOwner(id, newOwner);
  }
}

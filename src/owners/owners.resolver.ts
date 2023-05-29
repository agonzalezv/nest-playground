import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OwnersService } from './owners.service';

@Resolver('Owner')
export class OwnersResolver {
  constructor(private ownersService: OwnersService) {}

  @Query()
  async owner(@Args('id') id: string) {
    return this.ownersService.findOne(id);
  }

  @Mutation()
  async createOwner(@Args('walletAddress') walletAddress: string) {
    return this.ownersService.create({ walletAddress });
  }
}

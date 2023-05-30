import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { OwnersService } from "./owners.service";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "src/auth/gql-auth.guard";

@Resolver("Owner")
export class OwnersResolver {
  constructor(private ownersService: OwnersService) {}

  @Query()
  @UseGuards(GqlAuthGuard)
  async owner(@Args("walletAddress") walletAddress: string) {
    return this.ownersService.findOne(walletAddress);
  }

  @Query()
  @UseGuards(GqlAuthGuard)
  async owners() {
    return this.ownersService.findAll();
  }

  @Mutation()
  @UseGuards(GqlAuthGuard)
  async createOwner(@Args("walletAddress") walletAddress: string) {
    return this.ownersService.create({ walletAddress });
  }
}

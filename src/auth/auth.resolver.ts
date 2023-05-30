import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { Owner } from "src/owners/owner.entity";
import { AuthService } from "./auth.service";
import { GqlAuthGuard } from "./gql-auth.guard";
import { UseGuards } from "@nestjs/common";
import { CurrentUser } from "./current-user.decorator";

@Resolver(() => Owner)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation()
  async login(@Args("walletAddress") walletAddress: string) {
    return this.authService.validateUser(walletAddress);
  }

  @UseGuards(GqlAuthGuard)
  @Query()
  async getCurrentUser(@CurrentUser() user: Owner): Promise<Owner> {
    return user;
  }
}

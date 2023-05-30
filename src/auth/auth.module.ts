import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { GqlAuthGuard } from "./gql-auth.guard";
import { AuthResolver } from "./auth.resolver";
import { NftsModule } from "src/nfts/nfts.module";
import { AuthController } from "./auth.controller";

@Module({
  imports: [
    NftsModule,
    JwtModule.register({
      secret:
        "SUPER-SECRET-STRING-THAT-IS-SUPER-SAFE-TO-USE-IN-A-LIVE-ENVIRONMENT",
    }),
  ],
  controllers: [AuthController],
  providers: [AuthResolver, AuthService, GqlAuthGuard],
  exports: [AuthResolver, AuthService, GqlAuthGuard],
})
export class AuthModule {}

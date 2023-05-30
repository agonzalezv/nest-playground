import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OwnersController } from "./owners.controller";
import { OwnersService } from "./owners.service";
import { OwnersResolver } from "./owners.resolver";
import { Owner } from "./owner.entity";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([Owner]), AuthModule],
  providers: [OwnersService, OwnersResolver],
  controllers: [OwnersController],
  exports: [TypeOrmModule, OwnersService],
})
export class OwnersModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnersController } from './owners.controller';
import { OwnersService } from './owners.service';
import { OwnersResolver } from './owners.resolver';
import { Owner } from './owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Owner])],
  providers: [OwnersService, OwnersResolver],
  controllers: [OwnersController],
  exports: [TypeOrmModule],
})
export class OwnersModule {}

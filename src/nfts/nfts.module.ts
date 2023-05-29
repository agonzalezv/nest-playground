import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nft } from './nft.entity';
import { NftsController } from './nfts.controller';
import { NftsService } from './nfts.service';
import { NftsResolver } from './nfts.resolver';
import { Owner } from 'src/owners/owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Nft]), TypeOrmModule.forFeature([Owner])],
  providers: [NftsService, NftsResolver],
  controllers: [NftsController],
  exports: [TypeOrmModule],
})
export class NftsModule {}

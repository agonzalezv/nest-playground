import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { Owner } from './owner.entity';
import { OwnersService } from './owners.service';

@Controller('owners')
export class OwnersController {
  constructor(private readonly ownersService: OwnersService) {}

  @Post()
  create(@Body() createOwnerDto: CreateOwnerDto): Promise<Owner> {
    return this.ownersService.create(createOwnerDto);
  }

  @Get()
  findAll(): Promise<Owner[]> {
    return this.ownersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string): Promise<Owner> {
    return this.ownersService.findOne(id);
  }
}

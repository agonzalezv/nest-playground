import { Body, Controller, Param, ParseIntPipe } from "@nestjs/common";
import { CreateOwnerDto } from "./dto/create-owner.dto";
import { Owner } from "./owner.entity";
import { OwnersService } from "./owners.service";

@Controller("owners")
export class OwnersController {
  constructor(private readonly ownersService: OwnersService) {}

  create(@Body() createOwnerDto: CreateOwnerDto): Promise<Owner> {
    return this.ownersService.create(createOwnerDto);
  }

  findAll(): Promise<Owner[]> {
    return this.ownersService.findAll();
  }

  findOne(@Param("walletAddress") walletAddress: string): Promise<Owner> {
    return this.ownersService.findOne(walletAddress);
  }
}

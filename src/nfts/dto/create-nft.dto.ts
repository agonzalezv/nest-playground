import {
  IsNotEmpty,
  IsDateString,
  IsUrl,
  IsString,
  IsOptional,
} from "class-validator";

export class CreateNftDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsUrl()
  blockchainLink: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsUrl()
  imageUrl: string;

  @IsOptional()
  @IsDateString()
  mintDate: string;
}

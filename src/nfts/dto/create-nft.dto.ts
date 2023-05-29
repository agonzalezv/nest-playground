import {
  IsNotEmpty,
  IsDateString,
  IsUrl,
  IsInt,
  IsString,
} from 'class-validator';

export class CreateNftDto {
  @IsInt()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsUrl()
  blockchainLink: string;

  @IsString()
  description: string;

  @IsUrl()
  @IsNotEmpty()
  imageUrl: string;

  @IsDateString()
  mintDate: EpochTimeStamp;
}

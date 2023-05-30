import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Owner } from "src/owners/owner.entity";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";

type ValidateTokenResponse = { isValid: boolean; user?: Owner };
type ValidateUserResponse = { user: Owner; token: string };

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Owner)
    private readonly ownersRepository: Repository<Owner>
  ) {}

  async validateUser(walletAddress: string): Promise<ValidateUserResponse> {
    const user = await this.ownersRepository.findOneBy({
      walletAddress: walletAddress,
    });
    if (!user) {
      throw "user not found";
    }
    const token = this.jwtService.sign({
      userId: walletAddress,
    });
    return { user, token };
  }

  async validateToken(token: string): Promise<ValidateTokenResponse> {
    try {
      const { walletAddress } = this.jwtService.verify(token);
      const user = await this.ownersRepository.findOneBy({
        walletAddress: walletAddress,
      });
      return { user, isValid: true };
    } catch (e) {
      return { isValid: false };
    }
  }
}

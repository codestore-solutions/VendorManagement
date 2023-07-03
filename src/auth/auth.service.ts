import { Injectable, OnModuleInit } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService implements OnModuleInit {
    constructor(
        private jwtService: JwtService,
    ) {}

    onModuleInit() {}

    decodeToken(token: string) {
        return this.jwtService.decode(token.trim());
    }
}

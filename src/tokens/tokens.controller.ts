import { Controller, Get, Post } from '@nestjs/common';
import { TokensService } from './tokens.service';

@Controller('tokens')
export class TokensController {
    constructor(private readonly TokenService: TokensService) { }

    /* Get all tokens */
    @Get()
    async sayTokens() {
        var tokens = await this.TokenService.returnAllTokens();
        return tokens;
    }
}

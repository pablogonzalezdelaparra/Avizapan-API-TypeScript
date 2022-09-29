import { Body } from '@nestjs/common';
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

    @Post()
    async AddToken(@Body() body){
        const action = this.TokenService.insertToken(body.token);
        return "Se ingreso el Token correctamente";       
    }
}
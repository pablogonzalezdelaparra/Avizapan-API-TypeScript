import { Param } from '@nestjs/common';
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

    /*Get just the dates when the tokens were added */
    @Get('date')
    async sayDates(){
        var dates = await this.TokenService.returnDateTokens();
        return dates; 
    }

    /*Insert a token */
    @Get('/:token')
    async AddToken(@Param('token') token){
        //console.log(token)
        const action = this.TokenService.insertToken(token);
        return "Se ingreso el Token correctamente";       
    }
}

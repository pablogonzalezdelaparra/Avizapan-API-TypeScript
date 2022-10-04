import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tokens } from './tokens.entity';

@Injectable()
export class TokensService {
    constructor(
        @InjectRepository(Tokens)
        private TokenRepository: Repository<Tokens>,
    ) { }

    /* Return all tokens */
    async returnAllTokens() {
        const tokens = this.TokenRepository
            .createQueryBuilder("token")
            //.leftJoinAndSelect("notification.category", "category")
            /*.where("notification.id = :id", { id: 1 })*/
            .getMany()
        return tokens
    }

    /*Return just the dates of the tokens registered*/
    async returnDateTokens(){
        const dates = this.TokenRepository
            .createQueryBuilder("token")
            .select("token.added")
            .getMany()
        return dates
    }

    /* Insert Token */
    async insertToken(token: any){
        const action = this.TokenRepository
            .createQueryBuilder()
            .insert()
            .into(Tokens)
            .values([{token}])
            .execute();
    }
}

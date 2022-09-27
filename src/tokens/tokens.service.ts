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

    /* Return all notifications */
    async returnAllTokens() {
        const tokens = this.TokenRepository
            .createQueryBuilder("token")
            //.leftJoinAndSelect("notification.category", "category")
            /*.where("notification.id = :id", { id: 1 })*/
            .getMany()
        return tokens
    }
}

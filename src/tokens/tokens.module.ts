import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokensController } from './tokens.controller';
import { Tokens } from './tokens.entity';
import { TokensService } from './tokens.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tokens])],
  controllers: [TokensController],
  providers: [TokensService]
})
export class TokensModule {}

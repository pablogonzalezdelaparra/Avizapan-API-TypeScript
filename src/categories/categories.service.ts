import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from './categories.entity';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Categories)
        private CategoriesRepository: Repository<Categories>,
    ) { }

    /* Return all categories */
    async returnAllCategories() {
        const categories = this.CategoriesRepository
            .createQueryBuilder("categories")
            .select("categories.category")
            .getOne()
        return categories
    }

}

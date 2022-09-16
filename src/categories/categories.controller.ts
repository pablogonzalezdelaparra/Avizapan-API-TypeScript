import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';


@Controller('categories')
export class CategoriesController {
    constructor(private readonly CategoriesService: CategoriesService) { }

    /* Get all categories */
    @Get()
    async sayCategories() {
        var categories = await this.CategoriesService.returnAllCategories();
        return categories;
    }}
    
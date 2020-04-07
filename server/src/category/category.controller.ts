import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe, Body, Patch, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { CategoryDto } from 'src/dto/category.dto';

@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService) { }

    @Get()
    getCategories(): Promise<Category[]> {
        return this.categoryService.getCategories()
    }

    @Get('/:id')
    getCategoryById(@Param('id', ParseIntPipe) id: number): Promise<Category> {
        return this.categoryService.getCategoryById(id);
    }
    @Post()
    @UsePipes(ValidationPipe)
    createCategory(@Body() createCategoryDto: CategoryDto): Promise<Category> {
        return this.categoryService.createCategory(createCategoryDto);
    }

    @Patch('/:id/update')
    updateCategory(@Param('id', ParseIntPipe) id: number, @Body() updateCategoryDto: CategoryDto): Promise<void> {
        return this.categoryService.updateCategory(id, updateCategoryDto);
    }

    @Delete('/:id')
    deleteCategory(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.categoryService.deleteCategory(id);
    }

}

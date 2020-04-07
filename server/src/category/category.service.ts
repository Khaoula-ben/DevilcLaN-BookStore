import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { Category } from './category.entity';
import { CategoryDto } from 'src/dto/category.dto';

@Injectable()
export class CategoryService {

    constructor(@InjectRepository(CategoryRepository)
    private CategoryRepository: CategoryRepository,
    ) { }

    async getCategories(): Promise<Category[]> {
        return await this.CategoryRepository.find();
    }

    async getCategoryById(id: number): Promise<Category> {
        const category = await this.CategoryRepository.findOne(id);
        if (!category)
            throw new NotFoundException(`The category with ID "${id}" is not found `);
        else
            return category;
    }

    async  createCategory(createCategoryDto: CategoryDto): Promise<Category> {
        const category = this.CategoryRepository.create(createCategoryDto);
        return await this.CategoryRepository.save(category);
    }

    async updateCategory(id: number, updateCategoryDto: CategoryDto): Promise<void> {
        const result = await this.CategoryRepository.update(id, updateCategoryDto);
        if (result.affected === 0)
            throw new NotFoundException(`Category with ID "${id}" not found`);

    }

    async  deleteCategory(id: number): Promise<void> {
        const result = await this.CategoryRepository.delete(id);
        if (result.affected === 0)
            throw new NotFoundException(`Category with ID "${id}" not found`);
    }
}

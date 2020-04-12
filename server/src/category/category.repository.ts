import { Repository, EntityRepository } from "typeorm";
import { Category } from "./category.entity";
import { NotFoundException } from "@nestjs/common/exceptions/not-found.exception";


@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {

    //**************************************************************************************************** */
    async getCategoryByName(category_name: string): Promise<any> {
        const category = await this.findOne({ category_name });
        if (!category)
            return '';
        else
            return category;
    }
    //**************************************************************************************************** */

}
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}
class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error('categoria ja existe');
    }
    this.categoriesRepository.create({ name, description });
  }
}
// eslint-disable-next-line prettier/prettier
export { CreateCategoryService };

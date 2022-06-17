import { Category } from '../model/Category';

interface ICreateCategoryDTo {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTo): void;
}
export { ICategoriesRepository, ICreateCategoryDTo };

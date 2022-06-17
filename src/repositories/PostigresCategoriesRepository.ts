import { Category } from '../model/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTo,
} from './ICategoriesRepository';

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategoryDTo): void {
    return null;
  }
}

export { PostgresCategoriesRepository };

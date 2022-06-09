import { Category } from '../model/Category';
// DTO data transfer object
interface ICreateCategoryDTo {
  name: string;
  description: string;
}
class CategoriesRepository {
  private categories: Category[];
  constructor() {
    this.categories = [];
  }
  create({ name, description }: ICreateCategoryDTo): void {
    const category = new Category();
    // console.log(category, '===='); Category { id: 'ae8efc65-5d99-4a30-a63a-2a663a9d227f' } ====
    Object.assign(category, { name, description, created_at: new Date() });

    this.categories.push(category);
  }
  list(): Category[] {
    return this.categories;
  }
  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
}
export { CategoriesRepository };

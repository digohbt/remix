import { Request, Response, Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCaregoryService = new CreateCategoryService(categoriesRepository);

  createCaregoryService.execute({ name, description });

  return response.status(201).send();
});
categoriesRoutes.get('/', (request: Request, response: Response) => {
  const all = categoriesRepository.list();
  response.json(all);
});

export { categoriesRoutes };

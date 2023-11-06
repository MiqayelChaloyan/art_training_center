import { SchemaTypeDefinition } from 'sanity';

import courses_names from './project-schema/courses-names-schema';
import home_content from './project-schema/home-schema';

export const schemaTypes = [courses_names, home_content];
export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};
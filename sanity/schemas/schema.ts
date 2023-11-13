import { SchemaTypeDefinition } from 'sanity';

import home_content from './project-schema/home-schema';
import courses from './project-schema/courses-schema';

export const schemaTypes = [home_content, courses];
export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};
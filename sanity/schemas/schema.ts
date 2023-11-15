import { SchemaTypeDefinition } from 'sanity';

import home_content from './project-schema/home-schema';
import courses from './project-schema/courses-schema';
import co_workers from './project-schema/co-workers-schema';

export const schemaTypes = [home_content, courses, co_workers];
export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};
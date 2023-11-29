import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schema } from './sanity/schemas/schema';
import { visionTool } from '@sanity/vision';
import { apiVersion, dataset, projectId, title, basePath } from './sanity/env'
import { dashboardTool, projectUsersWidget, projectInfoWidget } from '@sanity/dashboard';
import { documentInternationalization } from '@sanity/document-internationalization'

const config = defineConfig(
  {
    projectId,
    dataset,
    title,
    apiVersion,
    basePath,
    plugins: [
      deskTool({
        structure: (S) =>
          S.list()
            .title('Base')
            .items([...S.documentTypeListItems()]),

      }),
      dashboardTool({
        widgets: [
          projectInfoWidget(),
          projectUsersWidget(),
        ],
      }),
      visionTool({
        defaultApiVersion: 'v2023-11-04',
        defaultDataset: dataset,
      }),
    ],
    schema,
  }
);

export default config;
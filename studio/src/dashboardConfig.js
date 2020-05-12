export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebb36c6d4d5829405ad0901',
                  title: 'Sanity Studio',
                  name: 'gatsby-cloud-preview-studio',
                  apiId: '7ccdad47-495c-4933-ab72-e7bc0d4a76ec'
                },
                {
                  buildHookId: '5ebb36c67a239b2d1f4cd9eb',
                  title: 'Blog Website',
                  name: 'gatsby-cloud-preview',
                  apiId: '20f92a2b-828b-4dff-bc02-696a78093b9e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sharan7blue/gatsby-cloud-preview',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://gatsby-cloud-preview.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

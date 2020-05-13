export default {
  title: 'SEO',
  name: 'seo',
  type: 'object',
  fields: [
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      validation: (Rule) =>
        Rule.max(160).error('Please keep the SEO description below 160 characters.'),
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'A set of keywords that populates meta-tags on the webpage',
      of: [{ type: 'string' }],
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
    },
  ],
};

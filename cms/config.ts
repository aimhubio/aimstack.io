import SITE_URL from '../config';

export default {
  backend: {
    name: 'github',
    repo: 'AshotSimonyan/ashotsimonyan.github.io',
    branch: 'main',
    site_domain: SITE_URL,
    base_url: 'https://github.com',
    // auth_endpoint: 'api/auth'
  },
  load_config_file: false,
  media_folder: 'public/images',
  public_folder: '/images',
  collections: [
    {
      label: 'Blog',
      name: 'blog',
      folder: 'posts',
      create: true,
      fields: [
        { label: 'Author', name: 'author', widget: 'string' },
        { label: 'Categories', name: 'categories', widget: 'list' },
        { label: 'Publish Date', name: 'date', widget: 'datetime' },
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Featured Image', name: 'image', widget: 'image' },
        { label: 'Description', name: 'description', widget: 'string' },
        { label: 'Body', name: 'body', widget: 'markdown' },
        {
          label: 'Draft post',
          name: 'draft',
          widget: 'boolean',
          hint: 'Publish post to set to false',
          required: true,
          default: true,
        },
      ],
    },
  ],
};

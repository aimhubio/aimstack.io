import SITE_URL from '../config';

export default {
  backend: {
    name: 'github',
    repo: 'aimhubio/aimstack.io',
    branch: 'main',
    site_domain: 'harmonious-capybara-084750.netlify.app'
    // base_url: 'https://github.com',
    // auth_endpoint: 'api/auth'
  },
  load_config_file: false,
  media_folder: 'public/images/dynamic',
  public_folder: '/images/dynamic',
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
          default: false,
        },
      ],
    },
    {
      label: 'Package',
      name: 'package',
      folder: 'packages',
      create: true,
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Author', name: 'author', widget: 'string' },
        { label: 'Logo', name: 'logo', widget: 'image' },
        { label: 'Organization Name', name: 'org_name', widget: 'string' },
        { label: 'Organization Link', name: 'org_link', widget: 'string' },
        { label: 'Repo Name', name: 'repo_name', widget: 'string' },
        { label: 'Repo Link', name: 'repo_link', widget: 'string' },
        { label: 'Version', name: 'version', widget: 'string' },
        { label: 'Installation', name: 'installation', widget: 'string' },
        { label: 'Main Content', name: 'body', widget: 'markdown' },
        { label: 'About', name: 'about', widget: 'string' },
        { label: 'Badges', name: 'badges_body', widget: 'markdown' },
      ],
    },
  ],
};

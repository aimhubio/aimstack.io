import {
  defineDocumentType,
  makeSource,
  defineNestedType,
} from 'contentlayer/source-files';

const Tag = defineNestedType(() => ({
  name: 'Tag',
  fields: {
    title: { type: 'string' },
  },
}));

const Categories = defineNestedType(() => ({
  name: 'Categories',
  fields: {
    title: { type: 'string' },
  },
}));

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
    },
    date: {
      type: 'date',
    },
    author: {
      type: 'string',
    },

    description: {
      type: 'string',
    },
    slug: {
      type: 'string',
    },
    id: {
      type: 'number',
    },
    image: {
      type: 'string',
    },
    draft: {
      type: 'string',
    },
    tags: {
      type: 'list',
      of: Tag,
    },
    categories: {
      type: 'list',
      of: Categories,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}));

const Package = defineDocumentType(() => ({
  name: 'Package',
  filePathPattern: `subpackages/**/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
    },
    author: {
      type: 'string',
    },
    logo: {
      type: 'string',
    },
    org_name: {
      type: 'string',
    },
    org_link: {
      type: 'string',
    },
    repo_name: {
      type: 'string',
    },
    repo_link: {
      type: 'string',
    },
    installation: {
      type: 'string',
    },
    about: {
      type: 'string',
    },
    badges_body: {
      type: 'string',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}));
export default makeSource({
  contentDirPath: '.',
  contentDirInclude: [],
  documentTypes: [Post, Package],
});

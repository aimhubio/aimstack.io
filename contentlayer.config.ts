import {
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files';
import { slugify } from './utils';


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
      type: 'boolean',
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    categories: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => slugify(doc._raw.sourceFileName.replace(/\.md/, '')),
    },
  },
}));

const Package = defineDocumentType(() => ({
  name: 'Package',
  filePathPattern: `packages/**/*.md`,
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
    version: {
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
      resolve: (doc) => slugify(doc._raw.sourceFileName.replace(/\.md/, '')),
    },
  },
}));
export default makeSource({
  contentDirPath: '.',
  contentDirInclude: [],
  documentTypes: [Post, Package],
});

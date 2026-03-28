import { project } from './project';
import { post } from './post';
import { author, category } from './author-category';
import { blockContent } from './blockContent';
import { settings } from './settings';

export const schemaTypes = [project, post, author, category, blockContent, settings];
export { project, post, author, category, blockContent, settings };

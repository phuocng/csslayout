import loadable from '@loadable/component';

//import slug from './helpers/slug';
const slug = item => item.toLowerCase().split(' ').join('-');

const CoverLoader = loadable(props => import(`../patterns/${slug(props.pattern)}/Cover`));

export default CoverLoader;

import loadable from '@loadable/component';

const slug = item => item.toLowerCase().split(' ').join('-');

const DetailsLoader = loadable(props => import(`../patterns/${slug(props.pattern)}/Details`));

export default DetailsLoader;

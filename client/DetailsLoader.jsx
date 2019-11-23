import loadable from '@loadable/component';

const slug = item => item.toLowerCase().split(' ').join('-');

const DetailsLoader = loadable(props => import(`./layouts/${slug(props.pattern)}/Details`));

export default DetailsLoader;

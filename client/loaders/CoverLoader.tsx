import loadable, { LoadableComponent } from '@loadable/component';

interface CoverLoaderProps {
    pattern: string;
}

//import slug from './helpers/slug';
const slug = (item: string) => item.toLowerCase().split(' ').join('-');

const CoverLoader: LoadableComponent<CoverLoaderProps> = loadable(props => import(`../patterns/${slug(props.pattern)}/Cover`));

export default CoverLoader;

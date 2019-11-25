import loadable, { LoadableComponent } from '@loadable/component';

import Pattern from '../constants/Pattern';

interface CoverLoaderProps {
    pattern: Pattern;
}

const slug = (item: string) => item.toLowerCase().split(' ').join('-');

const CoverLoader: LoadableComponent<CoverLoaderProps> = loadable((props: CoverLoaderProps) => import(`../patterns/${slug(props.pattern)}/Cover`));

export default CoverLoader;

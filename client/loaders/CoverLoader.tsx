import loadable, { LoadableComponent } from '@loadable/component';

interface CoverLoaderProps {
    pattern: string;
}

const slug = (item: string) => item.toLowerCase().split(' ').join('-');

const CoverLoader: LoadableComponent<CoverLoaderProps> = loadable((props: CoverLoaderProps) => import(`../patterns/${slug(props.pattern)}/Cover`));

export default CoverLoader;

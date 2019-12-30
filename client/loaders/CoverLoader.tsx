/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import loadable, { LoadableComponent } from '@loadable/component';

import Pattern from '../constants/Pattern';

interface CoverLoaderProps {
    pattern: Pattern;
}

const slug = (item: string) => item.toLowerCase().split(' ').join('-');

const CoverLoader: LoadableComponent<CoverLoaderProps> = loadable((props: CoverLoaderProps) => import(`../patterns/${slug(props.pattern)}/Cover`));

export default CoverLoader;

import loadable from '@loadable/component';

import slug from './helpers/slug';

const CoverLoader = loadable(props => import(`./layouts/${slug(props.pattern)}/Cover`));

export default CoverLoader;

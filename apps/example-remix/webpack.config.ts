import { composePlugins, withNx } from '@nx/webpack';
import { withDeepkit } from '@deepkit-community-test/nx-webpack-plugin';

// eslint-disable-next-line import/no-default-export
export default composePlugins(withNx(), withDeepkit(), config => ({
  ...config,
  output: {
    ...config.output,
    clean: false,
  },
}));

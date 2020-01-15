import COLORS from './colors';
import SIZES from './sizes';

const TYPOGRAPHY = {
  navigation: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: SIZES.spaceXS,
    color: COLORS.light,
  },
  h2: {
    fontSize: 22,
    marginBottom: SIZES.spaceXS,
    color: COLORS.light,
  },
  h3: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: SIZES.spaceS,
    color: COLORS.light,
  },
  text: {
    color: COLORS.light,
    lineHeight: 20,
  },
};

export default TYPOGRAPHY;
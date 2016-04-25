import reallyBad from './ReallyBad/reallyBad';
import bad from './Bad/bad';
import mediocre from './Mediocre/mediocre';
import good from './Good/good';
import reallyGood from './ReallyGood/reallyGood';
import outOfBound from './OutOfBound/outOfBound';

function commentRScore(rScore) {
  if (rScore > 0 && rScore <= 18) {
    return reallyBad(rScore);
  }

  if (rScore > 18 && rScore <= 26) {
    return bad(rScore);
  }

  if (rScore > 26 && rScore <= 30) {
    return mediocre(rScore);
  }

  if (rScore > 30 && rScore <= 34) {
    return good(rScore);
  }

  if (rScore > 34 && rScore <= 44) {
    return reallyGood(rScore);
  }

  // easter eggs
  if (rScore === 69) {
    return ['You are either Yunhan or you are BFFs with Yunhan ;)'];
  }

  return outOfBound(rScore);
}

export default commentRScore;

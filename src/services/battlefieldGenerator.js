import {
  PRIMARY_OBJECTIVES,
  SECONDARY_OBJECTIVES,
  TWISTS,
  TERRAIN_TYPES,
  MAPS,
  UNIT_TYPES,
} from "../data/data";
import { getRandomFromArray } from "./randomization";

function generateBattlefield(roundConfig) {
  const twists = [];
  for (let i = 0; i < roundConfig.numberOfTwists; i++) {
    twists.push(getRandomFromArray(TWISTS));
  }

  const primaryObjective = getRandomFromArray(PRIMARY_OBJECTIVES);
  const secondaryObjective = getRandomFromArray(SECONDARY_OBJECTIVES);
  const terrain = getRandomFromArray(TERRAIN_TYPES);
  const map = getRandomFromArray(MAPS);

  const rewardUnitType = getRandomFromArray(UNIT_TYPES);

  return {
    twists,
    primaryObjective,
    secondaryObjective,
    terrain,
    rewardUnitType,
    map,
    pointTotal: roundConfig.pointTotal,
  };
}

export { generateBattlefield };

import {
  PRIMARY_OBJECTIVES,
  SECONDARY_OBJECTIVES,
  TWISTS,
  MAPS,
  UNIT_TYPES,
} from "../data/data";
import { WORLDS } from "../data/nameData";
import { getRandomFromArray, shuffleAndSelect } from "./randomization";

function getBattlefieldLocation() {
  const worldType = getRandomFromArray(WORLDS);
  const worldTypeTitle = worldType.title;
  const worldName = getRandomFromArray(worldType.names);

  return {
    terrain: worldTypeTitle,
    worldName,
  };
}

function generateBattleName(roundConfig, location) {
  const descriptor = getRandomFromArray(roundConfig.battleDescriptors);
  const locationName = location.worldName;
  return `${descriptor} at ${locationName}`;
}

function generateBattlefield(roundConfig) {
  const locationInfo = getBattlefieldLocation();

  const battleName = generateBattleName(roundConfig, locationInfo);
  const twists = shuffleAndSelect(TWISTS, roundConfig.numberOfTwists);
  const primaryObjective = getRandomFromArray(PRIMARY_OBJECTIVES);
  const secondaryObjective = getRandomFromArray(SECONDARY_OBJECTIVES);
  const terrain = locationInfo.terrain;
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
    battleName,
    id: crypto.randomUUID(),
  };
}

export { generateBattlefield };

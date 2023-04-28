import {
  PRIMARY_OBJECTIVES,
  SECONDARY_OBJECTIVES,
  TWISTS,
  MAPS,
  UNIT_TYPES,
} from "../data/data";
import { STATION_WORLD_TYPES, WORLDS } from "../data/nameData";
import { getRandomFromArray, shuffleAndSelect } from "./randomization";

function getBattlefieldLocation() {
  const worldType = getRandomFromArray(WORLDS);
  const worldName = getRandomFromArray(worldType.names);

  return {
    terrain: worldType.title,
    worldName,
    description: worldType.description,
  };
}

function generateBattleFlavor(roundConfig, location) {
  const descriptor = getRandomFromArray(roundConfig.battleDescriptors);
  const locationName = location.worldName;
  let battleName = `${descriptor} at ${locationName}`;
  if (STATION_WORLD_TYPES.includes(location.terrain)) {
    battleName = `${descriptor} on ${locationName}`;
  }
  const description = location.description.replace("BATTLE_NAME", battleName);

  return {
    battleName,
    description,
  };
}

function generateBattlefield(roundConfig) {
  const locationInfo = getBattlefieldLocation();

  const battleFlavor = generateBattleFlavor(roundConfig, locationInfo);
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
    battleFlavor,
    id: crypto.randomUUID(),
  };
}

export { generateBattlefield };

import {
  PRIMARY_OBJECTIVES,
  SECONDARY_OBJECTIVES,
  TWISTS,
  MAPS,
  UNIT_TYPES,
  ADVANCED_POOL_NAME,
  ADVANCED_REWARDS,
  BASIC_POOL_NAME,
  BASIC_REWARDS,
} from "../data/data";
import { STATION_WORLD_TYPES, WORLDS } from "../data/nameData";
import { LOCAL_STORAGE_KEY } from "./constants";
import { getRandomFromArray, shuffleAndSelect } from "./randomization";

function generateRewardList(roundConfig, numberOfRewards = 2) {
  const usedRewards = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  let rewards = [...roundConfig.rewardPool].filter(
    (e) => !usedRewards.includes(e)
  );

  if (rewards.length < 1) {
    if (roundConfig.rewardPoolName == ADVANCED_POOL_NAME) {
      rewards = ADVANCED_REWARDS;
    } else if (roundConfig.rewardPoolName == BASIC_POOL_NAME) {
      rewards = BASIC_REWARDS;
    }
  } else if (rewards.length < 2) {
    usedRewards.push(rewards[0]);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(usedRewards));
    const remainingRewards = shuffleAndSelect(usedRewards, numberOfRewards - 1);
    return [rewards[0], ...remainingRewards];
  }

  const selectedRewards = shuffleAndSelect(rewards, numberOfRewards);
  usedRewards.push(...selectedRewards);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(usedRewards));
  return selectedRewards;
}

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

function generateBattlefield(roundConfig, reward = null) {
  const locationInfo = getBattlefieldLocation();

  const battleFlavor = generateBattleFlavor(roundConfig, locationInfo);
  const twists = shuffleAndSelect(TWISTS, roundConfig.numberOfTwists);
  const primaryObjective = getRandomFromArray(PRIMARY_OBJECTIVES);
  const secondaryObjective = getRandomFromArray(SECONDARY_OBJECTIVES);
  const terrain = locationInfo.terrain;
  const map = getRandomFromArray(MAPS);

  const rewardUnitType = reward ? reward : getRandomFromArray(UNIT_TYPES);

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

export { generateBattlefield, generateRewardList };

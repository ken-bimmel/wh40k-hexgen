import Annihilation from "../maps/Annihilation.svg";

const PRIMARY_OBJECTIVES = [
  {
    name: "Incisive Attack",
    description: "",
    category: "Combat Patrol",
    map: Annihilation,
  },
  {
    name: "Outriders",
    description: "",
    category: "Combat Patrol",
    map: Annihilation,
  },
  {
    name: "Encircle",
    description: "",
    category: "Combat Patrol",
    map: Annihilation,
  },
  {
    name: "Divide and Conquer",
    description: "",
    category: "Incursion Missions",
    map: Annihilation,
  },
  {
    name: "Crossfire",
    description: "",
    category: "Incursion Missions",
    map: Annihilation,
  },
  {
    name: "Centre Ground",
    description: "",
    category: "Incursion Missions",
    map: Annihilation,
  },
  {
    name: "Forward Push",
    description: "",
    category: "Incursion Missions",
    map: Annihilation,
  },
  {
    name: "Ransack",
    description: "",
    category: "Incursion Missions",
    map: Annihilation,
  },
  {
    name: "Shifting Front",
    description: "",
    category: "Incursion Missions",
    map: Annihilation,
  },
  {
    name: "Retrieval Mission",
    description: "",
    category: "Strike Force Missions",
    map: Annihilation,
  },
  {
    name: "Front-line Warfare",
    description: "",
    category: "Strike Force Missions",
    map: Annihilation,
  },
  {
    name: "The Four Pillars",
    description: "",
    category: "Strike Force Missions",
    map: Annihilation,
  },
  {
    name: "No Man's Land",
    description: "",
    category: "Strike Force Missions",
    map: Annihilation,
  },
  {
    name: "Scorched Earth",
    description: "",
    category: "Strike Force Missions",
    map: Annihilation,
  },
  {
    name: "Vital Intelligence",
    description: "",
    category: "Strike Force Missions",
    map: Annihilation,
  },
  {
    name: "Lines of Battle",
    description: "",
    category: "Onslaught Missions",
    map: Annihilation,
  },
  {
    name: "All-out War",
    description: "",
    category: "Onslaught Missions",
    map: Annihilation,
  },
  {
    name: "Pathway to Glory",
    description: "",
    category: "Onslaught Missions",
    map: Annihilation,
  },
  //   {
  //     name: "Incisive Attack",
  //     description: "",
  //     category: "Open War",
  //   },
  {
    name: "Objective Drop",
    description: "",
    category: "Open War",
    map: Annihilation,
  },
  {
    name: "Search and Secure",
    description: "",
    category: "Open War",
    map: Annihilation,
  },
  {
    name: "Storm Their Lines",
    description: "",
    category: "Open War",
    map: Annihilation,
  },
  {
    name: "Stand Off",
    description: "",
    category: "Open War",
    map: Annihilation,
  },
  {
    name: "The Prize",
    description: "",
    category: "Open War",
    map: Annihilation,
  },
  {
    name: "Take & Hold",
    description: "",
    category: "Open War",
    map: Annihilation,
  },
  {
    name: "War of Attrition",
    description: "",
    category: "Open War",
    map: Annihilation,
  },
  {
    name: "Domination",
    description: "",
    category: "Open War",
    map: Annihilation,
  },
];

const SECONDARY_OBJECTIVES = [
  {
    name: "Assassinate",
    description: "",
    category: "Purge The Enemy",
    defaultSelected: true,
  },
  {
    name: "Bring it Down",
    description: "",
    category: "Purge The Enemy",
    defaultSelected: true,
  },
  {
    name: "Titan Slayers",
    description: "",
    category: "Purge The Enemy",
    defaultSelected: true,
  },
  {
    name: "Slay the Warlord",
    description: "",
    category: "Purge The Enemy",
    defaultSelected: true,
  },
  {
    name: "Thin Their Ranks",
    description: "",
    category: "No Mercy, No Respite",
    defaultSelected: true,
  },
  {
    name: "Attrition",
    description: "",
    category: "No Mercy, No Respite",
    defaultSelected: true,
  },
  {
    name: "While We Stand, We Fight",
    description: "",
    category: "No Mercy, No Respite",
    defaultSelected: true,
  },
  {
    name: "Engage on All Fronts",
    description: "",
    category: "Battlefield Supremacy",
    defaultSelected: true,
  },
  {
    name: "Linebreaker",
    description: "",
    category: "Battlefield Supremacy",
    defaultSelected: true,
  },
  {
    name: "Domination",
    description: "",
    category: "Battlefield Supremacy",
    defaultSelected: true,
  },
  {
    name: "Investigate Sites",
    description: "",
    category: "Shadow Operations",
    defaultSelected: true,
  },
  {
    name: "Raise the Banners High",
    description: "",
    category: "Shadow Operations",
    defaultSelected: true,
  },
  {
    name: "Repair Teleport Homer",
    description: "",
    category: "Shadow Operations",
    defaultSelected: true,
  },
  {
    name: "Mental Interrogation",
    description: "",
    category: "Warpcraft",
    defaultSelected: true,
  },
  {
    name: "Psychic Ritual",
    description: "",
    category: "Warpcraft",
    defaultSelected: true,
  },
  {
    name: "Abhor the Witch",
    description: "",
    category: "Warpcraft",
    defaultSelected: true,
  },
  //   {
  //     name: "Surgical Assault",
  //     description:
  //       "Score 5 victory points if you control the objective marker in your opponent's deployment zone at the end of your turn.",
  //     category: "Combat Patrol",
  //     defaultSelected: false,
  //   },
  //   {
  //     name: "Survey",
  //     description:
  //       "Score 5 victory points if you control both of the objective markers that are not in either player’s deployment zone at the end of your Command phase. This secondary objective cannot be scored in the first battle round.",
  //     category: "Combat Patrol",
  //     defaultSelected: false,
  //   },
  //   {
  //     name: "Encircle",
  //     description:
  //       "Score 3 victory points if you have at least one unit from your army (excluding AIRCRAFT) wholly within 6 inches of your battlefield edge and at least one unit from your army (excluding AIRCRAFT) wholly within 6 inches of your opponent's battlefield edge at the end of your turn (score 5 victory points instead if one of these units is also wholly within your opponent’s deployment zone).",
  //     category: "Combat Patrol",
  //     defaultSelected: false,
  //   },
  //   {
  //     name: "Lines of Demarcation",
  //     description:
  //       "At the end of your turn, you score 4 victory points if you control both objective markers labelled A, or 2 victory points if you control both objective markers labelled B.",
  //     category: "Incursion",
  //     defaultSelected: false,
  //   },
  //   {
  //     name: "Outflank",
  //     description:
  //       "At the end of your Command phase, you score 3 victory points if you control both of the objective markers labelled A. Score 5 victory points instead if, at the end of your Command phase, you control both of the objective markers labelled A and there is at least one enemy unit within 9inches of the centre of the battlefield. This secondary objective cannot be scored in the first battle round.",
  //     category: "Incursion",
  //     defaultSelected: false,
  //   },
  //   {
  //     name: "Centre Ground",
  //     description:
  //       "Each time a unit from your army successfully completes the following action, you score 3 victory points if you currently control one of the objective markers labelled A, or 5 victory points if you currently control both objective markers labelled A:",
  //     category: "Incursion",
  //     defaultSelected: false,
  //   },
  //   {
  //     name: "Forward Push",
  //     description: "",
  //     category: "Incursion",
  //     defaultSelected: false,
  //   },
  //   {
  //     name: "",
  //     description: "",
  //     category: "Incursion",
  //     defaultSelected: false,
  //   },
  //   {
  //     name: "",
  //     description: "",
  //     category: "Incursion",
  //     defaultSelected: false,
  //   },
  //   {
  //     name: "",
  //     description: "",
  //     category: "",
  //     defaultSelected: false,
  //   },
];

const TWISTS = [
  {
    name: "Gales",
    description: "",
  },
  {
    name: "Blackout",
    description: "",
  },
  {
    name: "Cyclone",
    description: "",
  },
  {
    name: "Tempest",
    description: "",
  },
  {
    name: "Blinding Sun",
    description: "",
  },
  {
    name: "Inimical Atmosphere",
    description: "",
  },
  {
    name: "Warp Storm",
    description: "",
  },
  {
    name: "Unstable Reality",
    description: "",
  },
  {
    name: "Null Zone",
    description: "",
  },
  {
    name: "System Interference",
    description: "",
  },
  {
    name: "Indiscriminate Projectiles",
    description: "",
  },
  {
    name: "Unrelenting Turmoil",
    description: "",
  },
  {
    name: "Last Stand",
    description: "",
  },
  {
    name: "Rage",
    description: "",
  },
  {
    name: "Exhausted",
    description: "",
  },
  {
    name: "Invigorated",
    description: "",
  },
  {
    name: "Champion",
    description: "",
  },
  {
    name: "Hatred",
    description: "",
  },
];

const SUDDEN_DEATH_CONDITIONS = [
  {
    name: "Kill Order",
    description: "",
  },
  {
    name: "Vendetta",
    description: "",
  },
  {
    name: "Endure",
    description: "",
  },
  {
    name: "Vital Ground",
    description: "",
  },
  {
    name: "Blunt",
    description: "",
  },
  {
    name: "Hold The Line",
    description: "",
  },
];

const RUSES = [
  {
    name: "Ambush",
    description: "",
  },
  {
    name: "Outflank",
    description: "",
  },
  {
    name: "Tactical Reserves",
    description: "",
  },
  {
    name: "Dug In",
    description: "",
  },
  {
    name: "Brilliant Strategist",
    description: "",
  },
  {
    name: "Priority Target",
    description: "",
  },
];

export {
  PRIMARY_OBJECTIVES,
  SECONDARY_OBJECTIVES,
  TWISTS,
  SUDDEN_DEATH_CONDITIONS,
  RUSES,
};

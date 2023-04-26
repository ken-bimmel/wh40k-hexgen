import {
  AllOutWar,
  CentreGround,
  Crossfire,
  DivideAndConquer,
  Encircle,
  ForwardPush,
  FrontLineWarfare,
  IncisiveAttack,
  LinesOfBattle,
  NoMansLand,
  Outriders,
  PathwayToGlory,
  Ransack,
  RetrievalMission,
  ScorchedEarth,
  ShiftingFront,
  TheFourPillars,
  VitalIntelligence,
  OpenWar1,
  OpenWar2,
  OpenWar3,
  OpenWar4,
  OpenWar5,
  OpenWar6,
  OpenWar7,
  OpenWar8,
  OpenWar9,
  OpenWar10,
  OpenWar11,
  OpenWar12,
} from "../maps";

const ETERNAL_WAR_MISSIONS = [
  {
    name: "Incisive Attack",
    category: "Combat Patrol",
    primaryObjective: `**Take and Hold (Progressive)**: At the end of each player’s Command phase, the player whose turn it is scores 5 victory points for each of the following conditions they satisfy (for a maximum of 15 victory points):  
    
    -   They control one or more objective markers.
    -   They control two or more objective markers.
    -   They control more objective markers than their opponent controls.
    
    This primary objective cannot be scored in the first battle round.`,
    optionalSecondary: `**Surgical Assault (Progressive)**: Score 5 victory points if you control the objective marker in your opponent’s deployment zone at the end of your turn.`,
    missionRules: `**Sweep and Clear**: In this mission, if you control an  objective marker  at the end of your  Command phase , it remains under your control, even if you have no models within range of it, unless your opponent controls it at the end of any subsequent phase.`,
    map: IncisiveAttack,
  },
  {
    name: "Outriders",
    category: "Combat Patrol",
    primaryObjective: `**Take and Hold (Progressive)**: At the end of each player’s  Command phase , the player whose turn it is scores 5 victory points for each of the following conditions they satisfy (for a maximum of 15 victory points):  
    
    -   They control one or more objective markers.
    -   They control two or more objective markers.
    -   They control more objective markers than their opponent controls.
    
    This primary objective cannot be scored in the first battle round.`,
    optionalSecondary: `**Survey (Progressive)**: Score 5 victory points if you control both of the objective markers that are not in either player’s deployment zone at the end of your Command phase. This secondary objective cannot be scored in the first battle round.`,
    missionRules: null,
    map: Outriders,
  },
  {
    name: "Encircle",
    category: "Combat Patrol",
    primaryObjective: `**Take and Hold (Progressive)**: At the end of each player’s  Command phase , the player whose turn it is scores 5 victory points for each of the following conditions they satisfy (for a maximum of 15 victory points):  
    
    -   They control one or more objective markers.
    -   They control two or more objective markers.
    -   They control more objective markers than their opponent controls.
    
    This primary objective cannot be scored in the first battle round.`,
    optionalSecondary: `**Encircle (Progressive)**: Score 3 victory points if you have at least one unit from your army (excluding  AIRCRAFT ) wholly within 6" of your battlefield edge and at least one unit from your army (excluding AIRCRAFT) wholly within 6" of your opponent's battlefield edge at the end of your turn (score 5 victory points instead if one of these units is also wholly within your opponent’s deployment zone).`,
    missionRules: null,
    map: Encircle,
  },
  {
    name: "Divide and Conquer",
    category: "Incursion Missions",
    primaryObjective: `**Take and Hold (Progressive)**: At the end of each player's  Command phase , the player whose turn it is scores 5 victory points for each of the following conditions they satisfy (for a maximum of 15 victory points):  
    
    -   They control one or more objective markers.
    -   They control two or more objective markers.
    -   They control more objective markers than their opponent controls.
    
    This primary objective cannot be scored in the first battle round.`,
    optionalSecondary: `**Lines of Demarcation (Progressive)**: At the end of your turn, you score 4 victory points if you control both objective markers labelled A, or 2 victory points if you control both objective markers labelled B.`,
    missionRules: null,
    map: DivideAndConquer,
  },
  {
    name: "Crossfire",
    category: "Incursion Missions",
    primaryObjective: `**Take and Hold (Progressive)**: At the end of each player's  Command phase , the player whose turn it is scores 5 victory points for each of the following conditions they satisfy (for a maximum of 15 victory points):  
    
    -   They control one or more objective markers.
    -   They control two or more objective markers.
    -   They control more objective markers than their opponent controls.
    
    This primary objective cannot be scored in the first battle round.`,
    optionalSecondary: `**Outflank (Progressive)**: At the end of your Command phase, you score 3 victory points if you control both of the objective markers labelled A. Score 5 victory points instead if, at the end of your Command phase, you control both of the objective markers labelled A and there is at least one enemy unit within 9" of the centre of the battlefield. This secondary objective cannot be scored in the first battle round.`,
    missionRules: `**Crossfire**: When resolving attacks against target units that are within 9" of the centre of the battlefield, those attacks ignore the benefits of cover provided you can satisfy at least one of the following conditions:  

    -   You control both  objective markers  labelled A and the attacking model’s unit is in range of an objective marker labelled A.
    -   You control both objective markers labelled B and the attacking model's unit is in range of an objective marker labelled B.`,
    map: Crossfire,
  },
  {
    name: "Centre Ground",
    category: "Incursion Missions",
    primaryObjective: `**Take and Hold (Progressive)**: At the end of each player's  Command phase , the player whose turn it is scores 5 victory points for each of the following conditions they satisfy (for a maximum of 15 victory points):  
    
    -   They control one or more objective markers.
    -   They control two or more objective markers.
    -   They control more objective markers than their opponent controls.
    
    This primary objective cannot be scored in the first battle round.`,
    optionalSecondary: `**Centre Ground (Progressive)**: Each time a unit from your army successfully completes the following  action , you score 3 victory points if you currently control one of the objective markers labelled A, or 5 victory points if you currently control both objective markers labelled A:  
  
    **Centre Ground (Action)**: One unit from your army can start to perform this action at the end of your  Movement phase  if it is within range of an objective marker labelled A and no enemy units (excluding  AIRCRAFT ) are within range of that objective marker. The action is completed at the end of your next Command phase so long as the unit performing it is still within range of the same objective marker.`,
    missionRules: null,
    map: CentreGround,
  },
  {
    name: "Forward Push",
    category: "Incursion Missions",
    primaryObjective: `**Take and Hold (Progressive)**: At the end of each player’s  Command phase , the player whose turn it is scores 5 victory points for each of the following conditions they satisfy (for a maximum of 15 victory points):  
    
    -   They control one or more objective markers.
    -   They control two or more objective markers.
    -   They control more objective markers than their opponent controls.
    
    This primary objective cannot be scored in the first battle round.`,
    optionalSecondary: `**Forward Push (Progressive)**: If you select this objective, then units in your army can perform the following  action :  
  
    **Forward Push (Action)**: One unit from your army can start to perform this action at the start of your  Movement phase  if it is within range of an objective marker that you control. The action is completed at the end of your turn and you score a number of victory points depending on which objective marker this action was performed on:`,
    missionRules: `**Quick March**: Any Advance rolls of less than 3 made in the first battle round instead count as 3.`,
    map: ForwardPush,
  },
  {
    name: "Ransack",
    category: "Incursion Missions",
    primaryObjective: `**Domination (Progressive)**: At the end of each player's  Command phase , the player whose turn it is scores 5 victory points for each of the following conditions they satisfy (for a maximum of 15 victory points):  

    -   They control two or more objective markers.
    -   They control three or more objective markers.
    -   They control more objective markers than their opponent controls.
    
    This primary objective cannot be scored in the first battle round.`,
    optionalSecondary: `**Ransack (Progressive)**: Score a number of victory points at the end of your Command phase if you control one or more of the objective markers that are within your opponent's territory, as shown in the table below:  
  

    | **NUMBER OF OBJECTIVE MARKERS IN OPPONENT’S TERRITORY YOU CONTROL** | **VICTORY POINTS SCORED** |
    | --- | --- |
    | 1 | 2 |
    | 2 | 3 |
    | 3 | 5 |`,
    missionRules: null,
    map: Ransack,
  },
  {
    name: "Shifting Front",
    category: "Incursion Missions",
    primaryObjective: `**Take and Hold (Progressive)**: At the end of each player's Command phase, the player whose turn it is scores 5 victory points for each of the following conditions they satisfy (for a maximum of 15 victory points):  

    -   They control one or more objective markers.
    -   They control two or more objective markers.
    -   They control more objective markers than their opponent controls.
    
    This primary objective cannot be scored in the first battle round.`,
    optionalSecondary: `**Test Their Line (Progressive)**: Score 3 victory points at the end of your turn if two or more units from your army (excluding  AIRCRAFT ) are wholly within your opponent's deployment zone and at least two different battlefield edges have at least one of those units wholly within 6" of them (if one of those battlefield edges is your opponent's battlefield edge, score 5 victory points instead). For the purposes of this objective, a unit can only count as being wholly within 6" of one battlefield edge at a time - if a unit is within 6" of two battlefield edges because it is in the corner of the battlefield, you can select which battlefield edge it counts as being wholly within 6" of at the end of your turn.`,
    missionRules: `**Supply Lines**: In this mission, a player only receives the  Battle-forged CP bonus  at the start of their  Command phase  if they control the  objective marker  in their deployment zone.`,
    map: ShiftingFront,
  },
  {
    name: "Retrieval Mission",
    category: "Strike Force Missions",
    primaryObjective: `**Take and Hold (Progressive)**: At the end of each player's  Command phase , the player whose turn it is scores 5 victory points for each of the following conditions they satisfy (for a maximum of 15 victory points):  

    -   They control one or more objective markers.
    -   They control two or more objective markers.
    -   They control more objective markers than their opponent controls.
    
    This primary objective cannot be scored in the first battle round.`,
    optionalSecondary: `**Minimise Losses (End Game)**: At the start of the battle, add up the number of units in your army — this is your army’s Strength. If a unit splits to form two or more individual units during the battle, then immediately increase your army’s Strength accordingly (e.g. if one unit in your army splits to form three individual units, your army’s Strength is increased by 2). If a unit merges with another to form a combined unit during the battle, then decrease your army’s strength accordingly (e.g. if two units from your army merge to form one unit, you immediately decrease your army’s strength by 1).  
  
    At the end of the battle, add up how many units from your army are left on the battlefield, including all units embarked within  TRANSPORTS , but excluding all units that have been added to your army during the battle. If the total is 75% or more of your army’s Strength, score 15 victory points; if the total is less than 75%, but is 50% or more of your army's Strength, score 10 victory points; if the total is less than 50%, but is 25% or more of your army's Strength, score 5 victory points.`,
    missionRules: null,
    map: RetrievalMission,
  },
  {
    name: "Front-line Warfare",
    category: "Strike Force Missions",
    primaryObjective: `**Take and Hold (Progressive)**: At the end of each player's  Command phase , the player whose turn it is scores 5 victory points for each of the following conditions they satisfy (for a maximum of 15 victory points):  

    -   They control one or more objective markers.
    -   They control two or more objective markers.
    -   They control more objective markers than their opponent controls.
    
    This primary objective cannot be scored in the first battle round.`,
    optionalSecondary: `**Vital Ground (Progressive)**: At the end of each of your Command phases, you score 3 victory points if you control the objective marker in your opponent's deployment zone, and score 2 victory points for each objective marker that you control that is not in either player’s deployment zone (for a maximum of 7 victory points). This secondary objective cannot be scored in the first battle round.`,
    missionRules: null,
    map: FrontLineWarfare,
  },
  {
    name: "The Four Pillars",
    category: "Strike Force Missions",
    primaryObjective: `**Take and Hold (Progressive)**: At the end of each player's  Command phase , the player whose turn it is scores 5 victory points for each of the following conditions they satisfy (for a maximum of 15 victory points):  

    -   They control one or more objective markers.
    -   They control two or more objective markers.
    -   They control more objective markers than their opponent controls.
    
    This primary objective cannot be scored in the first battle round.`,
    optionalSecondary: `**Siphon Power (Progressive)**: If you select this objective, units in your army can perform the following  action :  
  
    **Siphon Power (Action)**: One or more units from your army can start to perform this action at the end of your  Movement phase . Each unit that starts to perform this action must be within range of a different objective marker. A unit cannot start this action while any enemy units (excluding  AIRCRAFT ) are in range of the same objective marker. The action is completed at the end of your next Command phase, and you score a number of victory points depending on how many units completed this action this phase, as shown in the table below:  
      
    
    | **SIPHON POWER ACTIONS** | **VICTORY POINTS** |
    | --- | --- |
    | 1 | 1 |
    | 2 | 3 |
    | 3 | 6 |
    | 4 | 10 |
    `,
    missionRules: `**The Pillars**: In this mission,  Reinforcement units  cannot be set up within range of any  objective markers .`,
    map: TheFourPillars,
  },
  {
    name: "No Man's Land",
    category: "Strike Force Missions",
    primaryObjective: `**Take and Hold (Progressive)**: At the end of each player's  Command phase , the player whose turn it is scores 5 victory points for each of the following conditions they satisfy (for a maximum of 15 victory points):  

    -   They control one or more objective markers.
    -   They control two or more objective markers.
    -   They control more objective markers than their opponent controls.
    
    This primary objective cannot be scored in the first battle round.`,
    optionalSecondary: `**Secure No Man’s Land (Progressive)**: At the end of each of your turns, if you control the central objective marker you score a number of victory points equal to the current battle round number (so 1 victory point in the first battle round, 2 victory points in the second battle round etc.).`,
    missionRules: `**No Man’s Land**: If a unit has a pre-battle rule that allows it to be set up anywhere on the battlefield, that unit must still be set up wholly within your deployment zone. If a unit has a pre-battle rule that allows it to make a move, it must end that move wholly within your deployment zone.`,
    map: NoMansLand,
  },
  {
    name: "Scorched Earth",
    category: "Strike Force Missions",
    primaryObjective: `**Take and Hold (Progressive)**: At the end of each player's  Command phase , the player whose turn it is scores 5 victory points for each of the following conditions they satisfy (for a maximum of 15 victory points):  

    -   They control one or more objective markers.
    -   They control two or more objective markers.
    -   They control more objective markers than their opponent controls.
    
    This primary objective cannot be scored in the first battle round.`,
    optionalSecondary: `**Raze (End Game)**: At the end of the battle, a player scores 5 victory points if one objective marker was removed from the battlefield due to a successful Raze Objective action performed by a unit from their army during the battle, and 15 victory points if two objective markers were so removed.`,
    missionRules: `**Raze Objective (Action)**: One unit from your army can start to perform this  action  at the start of your  Movement phase  if it is within range of an  objective marker  that can be razed and no enemy units (excluding  AIRCRAFT ) are within range of that objective marker. Player A can only attempt to raze the objective markers labelled B, and player B can only attempt to raze the objective markers labelled A. The action is completed at the end of your turn. If this action is successfully completed, that objective marker is razed and removed from the battlefield.`,
    map: ScorchedEarth,
  },
  {
    name: "Vital Intelligence",
    category: "Strike Force Missions",
    primaryObjective: `**Domination (Progressive)**: At the end of each player's Command phase, the player whose turn it is scores 5 victory points for each of the following conditions they satisfy (for a maximum of 15 victory points):  

    -   They control two or more objective markers.
    -   They control three or more objective markers.
    -   They control more objective markers than their opponent controls.
    
    This primary objective cannot be scored in the first battle round.`,
    optionalSecondary: `**Data Intercept (Progressive)**: Each time a unit from your army successfully completes the following action, you score a number of victory points equal to the number of objective markers you currently control:  
  
    **Data Intercept (Action)**: One unit from your army can start to perform this action at the end of your  Movement phase  if it is within range of an objective marker and no enemy units (excluding  AIRCRAFT ) are within range of that objective marker. The action is completed at the end of your next Command phase so long as the unit performing it is still within range of the same objective marker.`,
    missionRules: `**Data Terminals**: The  objective markers  in this mission represent data terminals. In this mission, if you control an objective marker at the end of your  Command phase , it remains under your control unless your opponent controls it at the end of any subsequent phase, even if you have no models within range of it.`,
    map: VitalIntelligence,
  },
  {
    name: "Lines of Battle",
    category: "Onslaught Missions",
    primaryObjective: `**Unified Advance (Progressive)**: At the end of each player’s  Command phase , the player whose turn it is scores 5 victory points for each of the following conditions they satisfy (for a maximum of 15 victory points):  

    -   They control one or more objective markers.
    -   They control at least one objective marker labelled A, and at least one objective marker labelled C.
    -   They control at least one objective marker labelled A, at least one objective marker labelled B and at least one objective marker labelled C.
    
    This primary objective cannot be scored in the first battle round.`,
    optionalSecondary: `**Hold the Centre (Progressive)**: Score 5 victory points at the end of your Command phase if you control more objective markers labelled B than your opponent does and you have more models wholly within 12" of the centre of the battlefield than your opponent does. This secondary objective cannot be scored in the first battle round.`,
    missionRules: null,
    map: LinesOfBattle,
  },
  {
    name: "All-out War",
    category: "Onslaught Missions",
    primaryObjective: `**Domination (Progressive)**: At the end of each player’s  Command phase , the player whose turn it is scores 5 victory points for each of the following conditions they satisfy (for a maximum of 15 victory points):  

    -   They control two or more objective markers.
    -   They control three or more objective markers.
    -   They control more objective markers than their opponent controls.
    
    This primary objective cannot be scored in the first battle round.`,
    optionalSecondary: `**Surround Them (Progressive and End Game)**: Score 4 victory points at the end of your Command phase and at the end of the battle if you control both the objective markers in your deployment zone and one or more objective markers in your opponent's deployment zone. Score 8 victory points instead if you control all four objective markers that are in deployment zones.`,
    missionRules: null,
    map: AllOutWar,
  },
  {
    name: "Pathway to Glory",
    category: "Onslaught Missions",
    primaryObjective: `**Domination (Progressive)**: At the end of each player’s Command phase, the player whose turn it is scores 5 victory points for each of the following conditions they satisfy (for a maximum of 15 victory points):  

    -   They control two or more objective markers.
    -   They control three or more objective markers.
    -   They control more objective markers than their opponent controls.
    
    This primary objective cannot be scored in the first battle round.`,
    optionalSecondary: `**Search for the Portal (Progressive)**: Each time a unit from your army successfully completes the Search for the Portal action (see below) you score 1 victory point, plus 1 additional victory point for each objective marker labelled A that is currently under your control (for a maximum of 5 victory points).  
  
    **Search for the Portal (Action)**: One INFANTRY unit from your army (excluding CHARACTERS) can start to perform this action at the end of your  Movement phase  if it is wholly within the Search Area shown on the deployment map. The action is completed at the end of your next Command phase so long as the unit performing it is still wholly within the Search Area.`,
    missionRules: `Secure the Search Area: The area of the battlefield within 12" of the centre of the battlefield is the search area. In this mission, if you control an  objective marker  labelled A at the end of your  Command phase , it remains under your control, even if you have no models within range of it, unless your opponent controls it at the end of any subsequent phase.`,
    map: PathwayToGlory,
  },
];

const PRIMARY_OBJECTIVES = [
  {
    id: "1",
    name: "Incisive Attack",
    description: `Your forces must probe the enemy’s position to discover weak points in their line, whilst reacting to their advances and sending reinforcements where needed.

    The players roll off; starting with the winner, each player alternates placing  objective markers  numbered 1-3 until three have been set up. Each objective marker must be more than 3" away from the edge of the battlefield, more than 9" away from other objective markers and not within a deployment zone.  
      
    At the start of the first battle round, one player randomly determines one objective marker to be active by rolling one D3. At the end of each battle round, each player scores 1 victory point for each objective marker they control, scoring 1 additional victory point if they control the objective marker that is active. The player with the most victory points at the end of the battle is the winner.`,
    category: "Open War",
  },
  {
    id: "2",
    name: "Objective Drop",
    category: "Open War",
    description: `Hurtling down through the atmosphere comes a vital objective of great value. A supply drop or escape pod - whatever the case, it must be yours!

    Place an  objective marker  in the centre of the battlefield. At the start of each battle round, the players roll off. The winner can move the objective marker 2D6".  
      
    Starting from the third battle round, a player scores 1 victory point if they control the objective marker at the end of their  Command phase . In addition, a player scores 2 victory points if they control the objective marker at the end of the battle. The player with the most victory points at the end of the battle is the winner.`,
  },
  {
    id: "3",
    name: "Search and Secure",
    category: "Open War",
    description: `A key objective has been triangulated to this position, but its exact location still remains unclear. You must find it and secure it whilst preventing the enemy from doing the same.

    The players roll off; starting with the winner, each player alternates placing  objective markers  numbered 1-6 until six have been set up. Each objective marker must be more than 6" away from the edge of the battlefield and more than 12" away from any other objective markers.  
      
    At the start of each battle round after the first, randomly select one objective marker on the battlefield by rolling one D6. Remove that objective marker from the battlefield. If the D6 rolled does not correspond to an objective marker on the battlefield, keep rolling until it does.  
      
    Each player scores 1 victory point for each objective marker they control at the end of their turn. The player with the most victory points at the end of the battle is the winner.`,
  },
  {
    id: "4",
    name: "Storm Their Lines",
    category: "Open War",
    description: `Braving the guns of the enemy, courageous warriors must charge across no man’s land to overrun the enemy position, over the bodies of their fallen brethren.

    After determining deployment zones, starting with the defender, each player alternates placing  objective markers  until six have been set up. Each objective marker must be within the deployment zone of the player placing it, more than 6" away from the edge of the battlefield and more than 9" away from any other objective markers.  
      
    At the end of each of their turns, each player scores one victory point for each objective marker within their own deployment zone that they control and two victory points for each objective marker within their opponent’s deployment zone that they control. The player with the most victory points at the end of the battle is the winner.`,
  },
  {
    id: "5",
    name: "Stand Off",
    category: "Open War",
    description: `Two forces have faced off for long enough. The time is nigh to strike out, claim this territory and seize victory.

    Place one  objective marker  in the centre of the battlefield. After determining deployment zones, starting with the defender, each player places one objective marker within their deployment zone, more than 6" away from the edge of the battlefield.  
      
    At the end of each battle round, each player scores one victory point if they control the objective marker within their own deployment zone, two victory points if they control the objective marker in the centre of the battlefield and three victory points if they control the objective marker within their opponent’s deployment zone. The player with the most victory points at the end of the battle is the winner.`,
  },
  {
    id: "6",
    name: "The Prize",
    category: "Open War",
    description: `No matter how much blood is shed, how many lives lost or hardships endured, nothing else matters but to seize the prize.

    Place an  objective marker  in the centre of the battlefield. An INFANTRY model can pick up the prize by ending any kind of move on the objective marker. Remove that objective marker from the battlefield - the model is now carrying the prize.  
      
    The model can drop the prize at any time, and must drop it if destroyed. If it is dropped by a player’s model, their opponent places an objective marker within 1" of the model that dropped it. The player whose model is carrying the prize at the end of the fifth battle round is the winner. Otherwise, the player controlling the objective marker at the end of the fifth battle round is the winner. Failing that, the battle is a draw.`,
  },
  {
    id: "7",
    name: "Take & Hold",
    category: "Open War",
    description: `Whether command posts or communication beacons, holy shrines or munitions dumps, these assets must be seized at any cost, for with them comes victory.

    The players roll off; starting with the winner, each player alternates placing  objective markers  until six have been set up. Each objective marker must be more than 6 away from the edge of the battlefield and more than 12" away from other objective markers.  
      
    Starting from the second battle round, each player scores 1 victory point for each objective marker they control at the end of their  Command phase . The player with the most victory points at the end of the battle is the winner.`,
  },
  {
    id: "8",
    name: "War of Attrition",
    category: "Open War",
    description: `Amidst the horror and carnage of battle, victory is sometimes a question of simple butchery.

    Each player adds up the Power Ratings or points values of all enemy units that have been destroyed during the battle. If players are not using Power Ratings or points values, add up the number of all enemy models that have been destroyed during the battle.  
      
    At the end of the fifth battle round, the player with the highest total is the winner (even if their own army has been completely destroyed).`,
  },
  {
    id: "9",
    name: "Domination",
    category: "Open War",
    description: `Dominance on all fronts is required, a show of force so resolute that all will know your victory is inevitable.

    The players roll off; starting with the winner, each player alternates placing  objective markers  until six have been set up. Each objective marker must be more than 6" away from the edge of the battlefield and more than 12" away from other objective markers.  
      
    At the end of each battle round, if more enemy units were destroyed from one player’s army during that battle round, their opponent scores 1 victory point. In addition, the player who controls the most objective markers at the end of each battle round scores 1 victory point. The player with the most victory points at the end of the battle is the winner.`,
  },
];

const SECONDARY_OBJECTIVES = [
  {
    name: "Assassinate",
    description: `End Game Objective

    Score 3 victory points at the end of the battle for each enemy CHARACTER model that is destroyed.`,
    category: "Purge The Enemy",
    defaultSelected: true,
  },
  {
    name: "Bring it Down",
    description: `End Game Objective

    Score 2 victory points at the end of the battle for each enemy MONSTER or VEHICLE model with a Wounds characteristic of 10 or less that is destroyed, and 3 victory points for each enemy MONSTER or VEHICLE model with a Wounds characteristic of 11 or more that is destroyed.`,
    category: "Purge The Enemy",
    defaultSelected: true,
  },
  {
    name: "Titan Slayers",
    description: `End Game Objective

    Score 10 victory points at the end of the battle if one enemy TITANIC model is destroyed, or 15 victory points if two or more enemy TITANIC models are destroyed.`,
    category: "Purge The Enemy",
    defaultSelected: true,
  },
  {
    name: "Slay the Warlord",
    description: `End Game Objective

    Score 6 victory points at the end of the battle if the enemy WARLORD is destroyed.`,
    category: "Purge The Enemy",
    defaultSelected: true,
  },
  {
    name: "Thin Their Ranks",
    description: `End Game Objective

    If you select this objective, keep a tally of kill points; each time an enemy model is destroyed, add 1 to this tally (add 10 to this tally instead if the model that was destroyed had a Wounds characteristic of 10 or more). A model can, if it is resurrected for any reason (i.e. it was destroyed and subsequently returned to the battlefield), potentially add several points to this tally (assuming it is resurrected and subsequently destroyed several times over). At the end of the battle, divide your kill points tally by 10 and round down - the result is the number of victory points you score.`,
    category: "No Mercy, No Respite",
    defaultSelected: true,
  },
  {
    name: "Attrition",
    description: `Progressive Objective

    Score 4 victory points at the end of the battle round if more enemy units than friendly units were destroyed this battle round.`,
    category: "No Mercy, No Respite",
    defaultSelected: true,
  },
  {
    name: "While We Stand, We Fight",
    description: `End Game Objective

    If you select this objective, then before the battle you must identify which three units from your army (excluding models with the Fortifications  Battlefield Role ) have the highest points value, and make a note of them on your  army roster  (if two or more units are tied, you can choose between them). If your army has three or fewer units, then you instead identify all the units in your army. A unit’s points cost includes the points of all weapons and wargear it is equipped with. You score 5 VPs for each of these units that are on the battlefield at the end of the battle. If a unit splits into several smaller units during the battle, all of those separate units must be destroyed for the original unit to count as being destroyed for the purposes of this secondary objective.`,
    category: "No Mercy, No Respite",
    defaultSelected: true,
  },
  {
    name: "First Strike",
    description: `End Game Objective

    Score 5 victory points at the end of the battle if any enemy units were destroyed in the first battle round, and score an additional 3 victory points if more enemy units than friendly units were destroyed in the first battle round.`,
    category: "No Mercy, No Respite",
    defaultSelected: true,
  },
  {
    name: "Engage on All Fronts",
    description: `Progressive Objective

    Score 2 victory points at the end of your turn if you have one or more units from your army wholly within three different table quarters, and those units are all more than 6" from the centre of the battlefield. Score 3 victory points instead if you have one or more units from your army wholly within each table quarter, and those units are all more than 6" from the centre of the battlefield.`,
    category: "Battlefield Supremacy",
    defaultSelected: true,
  },
  {
    name: "Linebreaker",
    description: `Progressive Objective

    Score 4 victory points at the end of your turn if two or more units from your army (excluding  AIRCRAFT ) are wholly within your opponent's deployment zone.`,
    category: "Battlefield Supremacy",
    defaultSelected: true,
  },
  {
    name: "Domination",
    description: `Progressive Objective

    Score 3 victory points if you control more than half the total number of  objective markers  on the battlefield at the end of your turn.`,
    category: "Battlefield Supremacy",
    defaultSelected: true,
  },
  {
    name: "Investigate Sites",
    description: `Progressive Objective

    Score 3 victory points each time a unit from your army successfully completes the following  action :  
    **Investigate Site (Action):** One INFANTRY unit (excluding CHARACTERS) from your army can start to perform this action at the end of your Movement phase if it is within 6" of the centre of the battlefield and no enemy units (excluding  AIRCRAFT ) are within 6" of the centre of the battlefield. The Action is completed at the end of your turn.`,
    category: "Shadow Operations",
    defaultSelected: true,
  },
  {
    name: "Raise the Banners High",
    description: `Progressive and End Game Objective

    If you select this objective, then units in your army can perform the following  action :  
    **Raise Banners (Action):** One or more INFANTRY units from your army can start to perform this action at the end of your  Movement phase . Each unit from your army that starts to perform this action must be in range of a different  objective marker  that does not have one of your banners raised upon it (see below). A unit cannot start this action while there are any enemy units (excluding  AIRCRAFT ) in range of the same objective marker. The Action is completed at the end of your turn. If this Action is successfully completed, that objective marker is said to have one of your army’s banners raised on it (the banner is ‘removed’ if your opponent controls the objective marker at the start of any phase). You score 1 victory point at the end of each of your  Command phases , and 1 victory point at the end of the battle, for each objective marker on the battlefield that has one of your banners raised upon it.`,
    category: "Shadow Operations",
    defaultSelected: true,
  },
  {
    name: "Repair Teleport Homer",
    description: `Progressive Objective

    Score 5 victory points each time a unit from your army successfully completes the following  action :  
    **Repair Teleport Homer (Action):** One INFANTRY unit from your army can start to perform this action at the end of your  Movement phase  if it is wholly within your opponent's deployment zone. The Action is completed at the end of your next  Command phase  provided the unit attempting it is still wholly within your opponent's deployment zone.`,
    category: "Shadow Operations",
    defaultSelected: true,
  },
  {
    name: "Mental Interrogation",
    description: `Progressive Objective

    Score 3 victory points each time you successfully complete the following  psychic action :  
    **Mental Interrogation (Psychic Action - Warp Charge 4):** One PSYKER CHARACTER from your army can attempt to perform this psychic action in your  Psychic phase  if it is within 18" of any enemy CHARACTER models.`,
    category: "Warpcraft",
    defaultSelected: true,
  },
  {
    name: "Psychic Ritual",
    description: `End Game Objective

    Score 15 victory points at the end of the battle if any unit from your army successfully completed the following  psychic action  3 times during the battle:  
    **Psychic Ritual (Psychic Action - Warp Charge 3):** One PSYKER CHARACTER unit from your army can attempt to perform this psychic action in your  Psychic phase  if it is within 6" of the centre of the battlefield.`,
    category: "Warpcraft",
    defaultSelected: true,
  },
  {
    name: "Abhor the Witch",
    description: `You cannot select this secondary objective if your army includes any PSYKER units. Score 5 victory points at the end of the battle for each enemy PSYKER CHARACTER unit that is destroyed, and 3 victory points for every other enemy PSYKER unit that is destroyed.`,
    category: "Warpcraft",
    defaultSelected: true,
  },
];

const TWISTS = [
  {
    name: "Gales",
    description: `Intense winds gust across the battlefield, hampering all attempts at haste.

    Subtract 1 from the Move characteristic of all models. Subtract 1 from Advance and charge rolls.`,
  },
  {
    name: "Blackout",
    description: `Sheer darkness consumes all, restricting the vision of your warriors.

    The maximum range of all shooting attacks and psychic powers is limited to 18".`,
  },
  {
    name: "Cyclone",
    description: `The elements dictate the battle, curtailing projectiles on their flight path towards the enemy.

    Subtract 1 from the Strength of attacks if the target is more than 18" away.`,
  },
  {
    name: "Tempest",
    description: `Torrential rain and wind make it all but impossible to focus on an enemy at a distance.

    Models receive the benefit of light cover if they are more than 18" away from the attacking unit.`,
  },
  {
    name: "Blinding Sun",
    description: `In a cloudless sky the suns rays blind those who must face it.

    At the start of the first battle round, one player randomly selects one battlefield edge to determine the sun’s battlefield edge.  
      
    At the start of the third battle round, one player randomly selects one battlefield edge adjacent to the sun’s battlefield edge. That battlefield edge is now the sun’s battlefield edge.  
      
    Subtract 1 from hit rolls for ranged attacks that target units that are closer to the sun’s battlefield edge than the firing model is.`,
  },
  {
    name: "Inimical Atmosphere",
    description: `The chemistry of the planets atmosphere has an adverse effect on those present, compromising peak performance.

    Units cannot Advance and you can only declare units within 7" of a charging unit as the target of its charge.`,
  },
  {
    name: "Warp Storm",
    description: `The roiling tides of the warp spill out into realspace.

    Add 1 to Psychic tests and add 6" to the range of psychic powers. If a  PSYKER  suffers Perils of the Warp, it suffers 3 mortal wounds rather than D3.`,
  },
  {
    name: "Unstable Reality",
    description: `Reality contorts before the eyes of your forces, moving them to question their strength of mind and will.

    Subtract 1 from the Leadership characteristic of all models. Subtract 1 from Combat Attrition tests.`,
  },
  {
    name: "Null Zone",
    description: `The area creates a shadow of psychic blank, rendering psykers near useless in its midst.

    Subtract 2 from Psychic tests. You cannot re-roll any dice when taking Psychic tests.`,
  },
  {
    name: "System Interference",
    description: `Stellar flares, malicious scrapcode and electromagnetic energy restrict communications.

    The range of all aura abilities is reduced to 2".`,
  },
  {
    name: "Indiscriminate Projectiles",
    description: `Falling debris, burning meteors and orbital barrages rain down indiscriminately across the battlefield.

    Each player rolls three D6 at the start of their turn. For each roll of 6, they can select one enemy unit on the battlefield and inflict D3 mortal wounds upon it, or 1 mortal wound if that unit is a CHARACTER with a Wounds characteristic of less than 10. Each unit can be selected no more than once per turn.`,
  },
  {
    name: "Unrelenting Turmoil",
    description: `Little respite or sanctuary is available across the galaxies of the 41st millennium.

    Draw two more Twist cards and use both.`,
  },
  {
    name: "Last Stand",
    description: `Retreat is not an option. Your forces must fight to the last.

    Units automatically pass Morale tests.`,
  },
  {
    name: "Rage",
    description: `Your warriors give in to the rage burning through them - a fire only battle will extinguish.

    Add 1 to the Attacks characteristic of all models.`,
  },
  {
    name: "Exhausted",
    description: `Your forces are on their last legs, but their sheer willpower keeps them standing to try to finally snatch a victory.

    Subtract 1 from the Strength characteristic of all models.`,
  },
  {
    name: "Invigorated",
    description: `Energised and eager, your forces are quick to join the fray.

    Add 1 to the Move characteristic of all models. Add 1 to Advance and charge rolls.`,
  },
  {
    name: "Champion",
    description: `Whilst two forces clash, mighty warriors step forward to defend the honour of their army.

    Before the battle, each player selects one CHARACTER model or one model with a Wounds characteristic of 9 or less from their army to be their army’s Champion. Increase that models Strength and Toughness characteristics by 1 and its Attacks and Wounds characteristics by 2.`,
  },
  {
    name: "Hatred",
    description: `Seething enmity drives your forces to rid the galaxy of a hated foe.

    When making an attack against the closest enemy unit, re-roll a wound roll of 1.`,
  },
];

const SUDDEN_DEATH_CONDITIONS = [
  {
    name: "Kill Order",
    description: `Bringing down a key asset is enough to win the day.

    At the start of the first battle round, secretly note down which model in your opponent’s army has the highest Wounds characteristic. This must be a CHARACTER, VEHICLE or MONSTER model. If more than one model is tied for the highest Wounds characteristic choose which of those models to note down. If that model is destroyed, the battle ends immediately and you are the winner. If your opponent does not have a CHARACTER, VEHICLE or MONSTER model, draw another Sudden Death card.`,
  },
  {
    name: "Vendetta",
    description: `Slaying a bitter rival and powerful warlord will strike a crucial blow upon enemy morale.

    If the enemy WARLORD is destroyed as a result of an attack made by your WARLORD, the battle ends immediately and you are the winner.`,
  },
  {
    name: "Endure",
    description: `Just one surviving warrior could be considered a victory in the face of seemingly certain death.

    If you have at least one model on the battlefield at the end of the battle, you are the winner.`,
  },
  {
    name: "Vital Ground",
    description: `Your warriors must do all to defend a key objective from the approaching masses.

    At the end of your opponent’s third or subsequent turn, if there are no enemy models within 9" of the centre of the battlefield, the battle ends immediately and you are the winner.`,
  },
  {
    name: "Blunt",
    description: `Dealing significant damage to a complacent foe could be enough to stall their offense before it begins.

    If the total, in Power Ratings or points values, of enemy units destroyed is half or more of the enemy’s starting total, the battle ends immediately and you are the winner.`,
  },
  {
    name: "Hold The Line",
    description: `If your forces can hold the line against superior numbers, the battle will be won.

    If there are no enemy units (excluding  AIRCRAFT ) wholly within your deployment zone at the end of the battle, you are the winner.`,
  },
];

const RUSES = [
  {
    name: "Ambush",
    description: `The enemy marches unsuspectingly into your carefully laid trap.

    During  deployment , up to three units from your army (excluding  AIRCRAFT  or TITANIC units) can be set up anywhere on the battlefield that is more than 9" away from the enemy deployment zone and any enemy models.`,
  },
  {
    name: "Outflank",
    description: `Swift manoeuvring allows you to advance key units into superior positions.

    During  deployment , up to three units from your army can be set up in outflank instead of placing them on the battlefield. Starting from the second battle round, each unit can arrive in the  Reinforcements step  of your  Movement phase . Set that unit up  wholly within  6" of the edge of the battlefield and more than 9" away from enemy models.`,
  },
  {
    name: "Tactical Reserves",
    description: `Despite being overwhelmed, the application of superior tactics and strategy could be enough to achieve victory.

    Once per turn you can re-roll one hit roll, wound roll, damage roll, Advance roll, charge roll, saving throw, Psychic test, Deny the Witch test or a roll to determine the number of attacks made by a weapon. You cannot re-roll any of your opponent’s rolls.`,
  },
  {
    name: "Dug In",
    description: `Your forces have prepared defensive positions to repel the enemy.

    While within your deployment zone, each model from your army gains the benefit of light cover if its unit Remained Stationary in your previous  Movement phase  or it is the first battle round. If that model is also in a  terrain feature , it gains the benefit of dense cover as well.`,
  },
  {
    name: "Brilliant Strategist",
    description: `One key unit joins the fray to tip the scales in your favour at the crucial moment.

    Once per battle, you can select one unit from your army that has been destroyed and return it to the battle. During the  Reinforcements step  of your  Movement phase , set that unit up  wholly within  your deployment zone, wholly within 6" of the edge of the battlefield and more than 9" away from enemy models.`,
  },
  {
    name: "Priority Target",
    description: `Focusing on one key unit in the enemy army could cripple their battle plan entirely.

    At the start of the first battle round, select one unit from your opponent’s army. You can re-roll wound rolls of 1 for attacks that target that unit or any other unit with the same  datasheet  as that unit.`,
  },
];

const MAPS = [
  { name: "OpenWar1", image: OpenWar1 },
  { name: "OpenWar2", image: OpenWar2 },
  { name: "OpenWar3", image: OpenWar3 },
  { name: "OpenWar4", image: OpenWar4 },
  { name: "OpenWar5", image: OpenWar5 },
  { name: "OpenWar6", image: OpenWar6 },
  { name: "OpenWar7", image: OpenWar7 },
  { name: "OpenWar8", image: OpenWar8 },
  { name: "OpenWar9", image: OpenWar9 },
  { name: "OpenWar10", image: OpenWar10 },
  { name: "OpenWar11", image: OpenWar11 },
  { name: "OpenWar12", image: OpenWar12 },
];

const TERRAIN_TYPES = [
  "Imperial City",
  "Ruined Imperial City",
  "Woodlands",
  "Mountains",
  "Plains",
  "Swamp",
  "Tundra",
  "Ork Encampment",
  "Space Hulk",
  "Tomb World",
  "Craftworld",
  "Manufactorum",
  "Chaos Gate",
  "Desert",
  "Wasteland",
  "Ocean Platform",
  "Underhive",
  "Imperial Fortifications",
];

const WINNER_REWARDS = [
  "200pts of HQ Units",
  "200pts of Troop Units",
  "200pts of Elite Units",
  "200pts of Fast Attack Units",
  "200pts of Heavy Support Units",
  "200pts of Flyer Units",
  "200pts of Dedicated Transport Units",
  "200pts of Wargear",
  "200pts of Unit Upgrades",
  "200pts of Unrestricted Use",
  "Warlord Trait",
  "Relic Item",
  "Faction Stratagem",
];

const LOSER_REWARDS = [
  "175pts of HQ Units",
  "175pts of Troop Units",
  "175pts of Elite Units",
  "175pts of Fast Attack Units",
  "175pts of Heavy Support Units",
  "175pts of Flyer Units",
  "175pts of Dedicated Transport Units",
  "175pts of Wargear",
  "175pts of Unit Upgrades",
  "180pts of Fortifications",
  "Ruse Access",
  "Faction Stratagem",
];

const UNIT_TYPES = [
  "HQ",
  "Troop",
  "Elite",
  "Fast Attack",
  "Heavy Support",
  "Flyer",
];

const ROUND_CONFIGS = [
  {
    roundMin: 1,
    roundMax: 1,
    pointTotal: 250,
    numberOfTwists: 1,
    battleDescriptors: ["Skirmish", "Duel"],
  },
  {
    roundMin: 2,
    roundMax: 4,
    pointTotal: 400,
    numberOfTwists: 1,
    battleDescriptors: ["Skirmish", "Duel", "Melee", "Encounter"],
  },
  {
    roundMin: 5,
    roundMax: 9,
    pointTotal: 600,
    numberOfTwists: 1,
    battleDescriptors: ["Encounter", "Attack", "Clash", "Battle"],
  },
  {
    roundMin: 10,
    roundMax: 14,
    pointTotal: 950,
    numberOfTwists: 2,
    battleDescriptors: ["Attack", "Combat", "Struggle", "Assault", "Battle"],
  },
  {
    roundMin: 15,
    roundMax: 9999,
    pointTotal: 1200,
    numberOfTwists: 2,
    battleDescriptors: [
      "Attack",
      "Battle",
      "Onslaught",
      "Siege",
      "War",
      "Assault",
      "Battle",
    ],
  },
];

export {
  ETERNAL_WAR_MISSIONS,
  PRIMARY_OBJECTIVES,
  SECONDARY_OBJECTIVES,
  TWISTS,
  SUDDEN_DEATH_CONDITIONS,
  RUSES,
  TERRAIN_TYPES,
  WINNER_REWARDS,
  LOSER_REWARDS,
  MAPS,
  UNIT_TYPES,
  ROUND_CONFIGS,
};

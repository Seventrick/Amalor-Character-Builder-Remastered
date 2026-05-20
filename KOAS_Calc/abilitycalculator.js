var initialized = false;
var hash_init = '0000000000000000000000000000000000000000000000000000000000000000000000000000000';
window['onhashchange'] = function () {};
var pointsspent = 0;
var mightpoints = 0;
var finessepoints = 0;
var sorcerypoints = 0;
var bonusmax = 7;
var mightbonuspoints = 0;
var finessebonuspoints = 0;
var sorcerybonuspoints = 0;
var levelrequired = 0;
var mightbackground = new Image();
mightbackground['src'] = 'https://' + window.location.origin  + '/KOAS_Calc/images/mighttree.png';
var finessebackground = new Image();
finessebackground['src'] = 'https://' + document.location.host + '/KOAS_Calc/images/finessetree.png';
var sorcerybackground = new Image();
sorcerybackground['src'] = 'https://' + document.location.host + '/KOAS_Calc/images/sorcerytree.png';
var mightactive = new Image();
mightactive['src'] = 'https://' + document.location.host + '/KOAS_Calc/images/mightactive.png';
var finesseactive = new Image();
finesseactive['src'] = 'https://' + document.location.host + '/KOAS_Calc/images/finesseactive.png';
var sorceryactive = new Image();
sorceryactive['src'] = 'https://' + document.location.host + '/KOAS_Calc/images/sorceryactive.png';
var currenttree = 'might';


// Might Ability Tree 
var MightCollection = new Object();
Title = 'Brutal Weaponry I';
Type = 'Weapon Attacks';
Desc = 'Unlocks Charge special attacks for the Longsword, Greatsword, and Hammer.';
Ranks = new Array();
Ranks[1] = 'Unlocks <b>Comet Strike</b>, <b>Whirlwind</b>, and <b>Minotaur Rush</b>.';
Ranks[2] = '<b>Comet Strike</b>, <b>Whirlwind</b>, and <b>Minotaur Rush</b> can apply damage over time in addition to their base damage.';
Ranks[3] = '<b>Comet Strike</b>, <b>Whirlwind</b>, and <b>Minotaur Rush</b> award bonus Fate.';
MightCollection['a11'] = new Ability('a11', Title, Type, 3, 3, 0, null, 'might/might_brutal-weaponry', Desc, Ranks);

Title = 'Longsword Mastery';
Type = 'Passive';
Desc = 'A combination of perfect form and raw strength lend additional damage to your Longsword attacks.';
Ranks = new Array();
Ranks[1] = '+4 Physical Damage with Longswords, +5% Damage with Longswords.';
Ranks[2] = '+5 Physical Damage with Longswords, +10% Damage with Longswords.';
Ranks[3] = '+6 Physical Damage with Longswords, +15% Damage with Longswords.';
Ranks[4] = '+8 Physical Damage with Longswords, +20% Damage with Longswords.';
Ranks[5] = '+10 Physical Damage with Longswords, +25% Damage with Longswords.';
Ranks[6] = '+13 Physical Damage with Longswords, +30% Damage with Longswords.';
Ranks[7] = '+16 Physical Damage with Longswords, +35% Damage with Longswords.';
Ranks[8] = '+20 Physical Damage with Longswords, +40% Damage with Longswords.';
MightCollection['a12'] = new Ability('a12', Title, Type, 6, 8, 0, null, 'might/might_longsword-mastery', Desc, Ranks);

Title = 'Hammer Mastery';
Type = 'Passive';
Desc = 'Raw muscle and a superb sense of balance make you incredibly effective with the mighty Hammer.';
Ranks = new Array();
Ranks[1] = '+8 Physical Damage with Hammers, +5% Damage with Hammers.';
Ranks[2] = '+9 Physical Damage with Hammers, +10% Damage with Hammers.';
Ranks[3] = '+10 Physical Damage with Hammers, +15% Damage with Hammers.';
Ranks[4] = '+12 Physical Damage with Hammers, +20% Damage with Hammers.';
Ranks[5] = '+14 Physical Damage with Hammers, +25% Damage with Hammers.';
Ranks[6] = '+17 Physical Damage with Hammers, +30% Damage with Hammers.';
Ranks[7] = '+20 Physical Damage with Hammers, +35% Damage with Hammers.';
Ranks[8] = '+25 Physical Damage with Hammers, +40% Damage with Hammers.';
MightCollection['a13'] = new Ability('a13', Title, Type, 6, 8, 0, null, 'might/might_hammer-mastery', Desc, Ranks);

Title = 'Harpoon';
Type = 'Active';
Desc = ' <font color="#bcd">Cooldown: 3 seconds.</font><br>Snag an enemy and pull it back to you. May have the opposite effect with larger enemies.';
Ranks = new Array();
Ranks[1] = 'Pull enemies from 14 meters away and deals 15 Physical Damage and 8 Piercing Damage. <br><font color="#bcd">Cost: 20 mana.</font>';
Ranks[2] = 'Pull enemies from 14 meters away and deals 20 Physical Damage and 11 Piercing Damage. <br><font color="#bcd">Cost: 23 mana.</font>';
Ranks[3] = 'Pull enemies from 14 meters away and deals 25 Physical Damage and 14 Piercing Damage. <br><font color="#bcd">Cost: 26 mana.</font>';
Ranks[4] = 'Pull enemies from 14 meters away and deals 30 Physical Damage and 17 Piercing Damage. <br><font color="#bcd">Cost: 30 mana.</font>';
Ranks[5] = 'Pull enemies from 14 meters away and deals 35 Physical Damage and 20 Piercing Damage. <br><font color="#bcd">Cost: 30 mana.</font>';
MightCollection['a15'] = new Ability('a15', Title, Type, 4, 5, 0, null, 'might/might_harpoon', Desc, Ranks);

Title = 'Skillful Defense';
Type = 'Passive';
Desc = 'Your masterful use of shields greatly increases your damage resistance while blocking. At the highest level, you unlock a special <b>Shield Bash</b> move.';
Ranks = new Array();
Ranks[1] = '+10% Damage Mitigation while blocking.';
Ranks[2] = '+15% Damage Mitigation while blocking.';
Ranks[3] = '+20% Damage Mitigation while blocking.';
Ranks[4] = '+25% Damage Mitigation while blocking.';
Ranks[5] = '+30% Damage Mitigation while blocking. <br><br><b>Shield Bash</b> - Charge into enemies from a defensive stance to safely open them up to further attacks.';
Ranks[6] = '+35% Damage Mitigation while blocking.';
Ranks[7] = '+40% Damage Mitigation while blocking.';
MightCollection['a17'] = new Ability('a17', Title, Type, 5, 7, 0, null, 'might/might_skillfuldefense', Desc, Ranks);

Title = 'Brutal Weaponry II';
Type = 'Weapon Attacks';
Desc = 'Unlocks special attacks from Block for the Longsword, Greatsword, and Hammer.';
Ranks = new Array();
Ranks[1] = 'Unlocks <b>Phantom Edge</b>, <b>Guillotine</b>, and <b>Spine Bender</b>.';
Ranks[2] = '<b>Phantom Edge</b>, <b>Guillotine</b>, and <b>Spine Bender</b> can apply damage over time in addition to their base damage.';
Ranks[3] = '<b>Phantom Edge</b>, <b>Guillotine</b>, and <b>Spine Bender</b> award bonus Fate.';
MightCollection['a21'] = new Ability('a21', Title, Type, 3, 3, 5, MightCollection['a11'], 'might/might_brutal-weaponry', Desc, Ranks);

Title = 'Greatsword Mastery';
Type = 'Passive';
Desc = 'Your brute strength enables you to wield the Greatsword with spectacular results.';
Ranks = new Array();
Ranks[1] = '+8 Physical Damage with Greatswords, +5% Damage with Greatswords.';
Ranks[2] = '+9 Physical Damage with Greatswords, +10% Damage with Greatswords.';
Ranks[3] = '+10 Physical Damage with Greatswords, +15% Damage with Greatswords.';
Ranks[4] = '+12 Physical Damage with Greatswords, +20% Damage with Greatswords.';
Ranks[5] = '+14 Physical Damage with Greatswords, +25% Damage with Greatswords.';
Ranks[6] = '+17 Physical Damage with Greatswords, +30% Damage with Greatswords.';
Ranks[7] = '+20 Physical Damage with Greatswords, +35% Damage with Greatswords.';
Ranks[8] = '+25 Physical Damage with Greatswords, +40% Damage with Greatswords.';
MightCollection['a22'] = new Ability('a22', Title, Type, 6, 8, 5, null, 'might/might_greatsword-mastery', Desc, Ranks);

Title = 'Quake';
Type = 'Active';
Desc = '<font color="#bcd">Cooldown: 2 seconds.</font> <br>Smash the ground to cause a tremor, damaging enemies in an area. Cast the spell rapidly in succession to chain up to 3 attacks.';
Ranks = new Array();
Ranks[1] = 'Each Quake hit does 24-42 Physical Damage. <br><font color="#bcd">Cost: 14 mana.</font>';
Ranks[2] = 'Each Quake hit does 32-54 Physical Damage. <br><font color="#bcd">Cost: 15 mana.</font>';
Ranks[3] = 'Each Quake hit does 40-66 Physical Damage. <br><font color="#bcd">Cost: 16 mana.</font>';
Ranks[4] = 'Each Quake hit does 48-78 Physical Damage. <br><font color="#bcd">Cost: 18 mana.</font>';
Ranks[5] = 'Each Quake hit does 56-90 Physical Damage. <br><font color="#bcd">Cost: 20 mana.</font>';
Ranks[6] = 'Each Quake hit does 64-102 Physical Damage. <br><font color="#bcd">Cost: 20 mana.</font>';
Ranks[7] = 'Each Quake hit does 72-114 Physical Damage. <br><font color="#bcd">Cost: 20 mana.</font>';
MightCollection['a24'] = new Ability('a24', Title, Type, 5, 7, 5, null, 'might/might_quake', Desc, Ranks);

Title = 'Adrenaline Surge';
Type = 'Semi-Passive';
Desc = '<font color="#bcd">Cooldown: 300 seconds.</font> <br>The threat of immediate death grants you a chance for a surge of health and a short span of greatly increased damage whenever your Health falls below 25%.';
Ranks = new Array();
Ranks[1] = '30% chance to trigger.<br>Restores 20% of your Health, +30% Damage for 10 seconds.';
Ranks[2] = '40% chance to trigger.<br>Restores 20% of your Health, +40% Damage for 10 seconds.';
Ranks[3] = '50% chance to trigger.<br>Restores 20% of your Health, +50% Damage for 10 seconds.';
Ranks[4] = '60% chance to trigger.<br>Restores 20% of your Health, +60% Damage for 10 seconds.';
Ranks[5] = '70% chance to trigger.<br>Restores 20% of your Health, +70% Damage for 10 seconds.';
Ranks[6] = '80% chance to trigger.<br>Restores 20% of your Health, +80% Damage for 10 seconds.';
Ranks[7] = '90% chance to trigger.<br>Restores 20% of your Health, +90% Damage for 10 seconds.';
MightCollection['a26'] = new Ability('a26', Title, Type, 5, 7, 5, null, 'might/might_Adrenaline-Surge', Desc, Ranks);

Title = 'Hardy Constitution';
Type = 'Passive';
Desc = 'Your durable nature enables you to survive nearly anything, from sword wounds to magic flames.';
Ranks = new Array();
Ranks[1] = '+5% Max Health,<br>+3% Elemental Resistance.';
Ranks[2] = '+8% Max Health,<br>+5% Elemental Resistance.';
Ranks[3] = '+11% Max Health,<br>+7% Elemental Resistance.';
Ranks[4] = '+14% Max Health,<br>+9% Elemental Resistance.';
Ranks[5] = '+17% Max Health,<br>+11% Elemental Resistance.';
Ranks[6] = '+20% Max Health,<br>+13% Elemental Resistance.';
Ranks[7] = '+23% Max Health,<br>+16% Elemental Resistance.';
Ranks[8] = '+26% Max Health,<br>+20% Elemental Resistance.';
MightCollection['a27'] = new Ability('a27', Title, Type, 6, 8, 5, MightCollection['a17'], 'might/might_Hardy-Constitution', Desc, Ranks);

Title = 'Concussive Force';
Type = 'Passive';
Desc = 'Mastery over the art of blunt trauma grants you increased damage versus Stunned enemies.';
Ranks = new Array();
Ranks[1] = '+20% Damage vs. Stunned Enemies.';
Ranks[2] = '+30% Damage vs. Stunned Enemies.';
Ranks[3] = '+40% Damage vs. Stunned Enemies.';
Ranks[4] = '+50% Damage vs. Stunned Enemies.';
Ranks[5] = '+60% Damage vs. Stunned Enemies.';
Ranks[6] = '+70% Damage vs. Stunned Enemies.';
Ranks[7] = '+80% Damage vs. Stunned Enemies.';
MightCollection['a32'] = new Ability('a32', Title, Type, 5, 7, 20, null, 'might/might_concussiveforce', Desc, Ranks);

Title = 'Aftershock';
Type = 'Upgrade';
Desc = 'The final hit of your Quake attack causes lasting tremors which can Stun your foes, and all Quake damage is increased.';
Ranks = new Array();
Ranks[1] = 'Quake does 10% more Damage and adds a 20% chance for a 3 second Stun to the final hit. <br><font color="#bcd">Increases Quake Cost: 10 mana.</font>';
Ranks[2] = 'Quake does 20% more Damage and adds a 25% chance for a 3 second Stun to the final hit. <br><font color="#bcd">Increases Quake Cost: 12 mana.</font>';
Ranks[3] = 'Quake does 30% more Damage and adds a 30% chance for a 4 second Stun to the final hit. <br><font color="#bcd">Increases Quake Cost: 14 mana.</font>';
Ranks[4] = 'Quake does 40% more Damage and adds a 35% chance for a 4 second Stun to the final hit. <br><font color="#bcd">Increases Quake Cost: 16 mana.</font>';
Ranks[5] = 'Quake does 50% more Damage and adds a 40% chance for a 5 second Stun to the final hit. <br><font color="#bcd">Increases Quake Cost: 18 mana.</font>';
Ranks[6] = 'Quake does 55% more Damage and adds a 45% chance for a 5 second Stun to the final hit. <br><font color="#bcd">Increases Quake Cost: 18 mana.</font>';
Ranks[7] = 'Quake does 60% more Damage and adds a 50% chance for a 5 second Stun to the final hit. <br><font color="#bcd">Increases Quake Cost: 18 mana.</font>';
MightCollection['a34'] = new Ability('a34', Title, Type, 5, 7, 20, MightCollection['a24'], 'might/might_aftershock', Desc, Ranks);

Title = 'Relentless Assault';
Type = 'Active';
Desc = 'Grants a short-term resistance to interruption at the expense of armor, allowing you to shrug off blows while taking slightly more damage.';
Ranks = new Array();
Ranks[1] = 'Relentless Assault lasts 6 seconds and reduces your armor by 50%. <br><font color="#bcd">Cost: 25 mana.</font> <br><font color="#bcd">Cooldown: 21 seconds.</font>';
Ranks[2] = 'Relentless Assault lasts 8 seconds and reduces your armor by 40%. <br><font color="#bcd">Cost: 30 mana.</font> <br><font color="#bcd">Cooldown: 23 seconds.</font>';
Ranks[3] = 'Relentless Assault lasts 10 seconds and reduces your armor by 30%. <br><font color="#bcd">Cost: 35 mana.</font> <br><font color="#bcd">Cooldown: 25 seconds.</font>';
Ranks[4] = 'Relentless Assault lasts 13 seconds and reduces your armor by 20%. <br><font color="#bcd">Cost: 40 mana.</font> <br><font color="#bcd">Cooldown: 28 seconds.</font>';
Ranks[5] = 'Relentless Assault lasts 16 seconds and reduces your armor by 10%. <br><font color="#bcd">Cost: 45 mana.</font> <br><font color="#bcd">Cooldown: 31 seconds.</font>';
Ranks[6] = 'Relentless Assault lasts 20 seconds and no longer reduces your armor. <br><font color="#bcd">Cost: 50 mana.</font> <br><font color="#bcd">Cooldown: 35 seconds.</font>';
Ranks[7] = 'Relentless Assault lasts 25 seconds. <br><font color="#bcd">Cost: 50 mana.</font> <br><font color="#bcd">Cooldown: 40 seconds.</font>';
Ranks[8] = 'Relentless Assault lasts 30 seconds. <br><font color="#bcd">Cost: 50 mana.</font> <br><font color="#bcd">Cooldown: 45 seconds.</font>';
MightCollection['a35'] = new Ability('a35', Title, Type, 6, 8, 20, null, 'might/might_relentless-assault', Desc, Ranks);

Title = 'Power Strike';
Type = 'Upgrade';
Desc = 'You achieve new heights of focus while an Adrenaline Surge is in effect, increasing your chance to deal Critical Hits.';
Ranks = new Array();
Ranks[1] = '+5% Chance to Critical Hit while Adrenaline Surge is in effect.';
Ranks[2] = '+10% Chance to Critical Hit while Adrenaline Surge is in effect.';
Ranks[3] = '+15% Chance to Critical Hit while Adrenaline Surge is in effect.';
Ranks[4] = '+20% Chance to Critical Hit while Adrenaline Surge is in effect.';
Ranks[5] = '+25% Chance to Critical Hit while Adrenaline Surge is in effect.';
Ranks[6] = '+30% Chance to Critical Hit while Adrenaline Surge is in effect.';
Ranks[7] = '+35% Chance to Critical Hit while Adrenaline Surge is in effect.';
MightCollection['a36'] = new Ability('a36', Title, Type, 5, 7, 20, MightCollection['a26'], 'might/might_Power-Strike', Desc, Ranks);

Title = 'Brutal Weaponry III';
Type = 'Weapon Attacks';
Desc = 'Unlocks special attacks from Dodge for the Longsword and Greatsword.';
Ranks = new Array();
Ranks[1] = 'Unlocks <b>Horizon Edge</b>, and <b>Gravedigger</b>.';
Ranks[2] = 'Horizon <b>Edge</b>, and <b>Gravedigger</b> can apply damage over time in addition to their base damage.';
Ranks[3] = 'Horizon <b>Edge</b>, and <b>Gravedigger</b> award bonus Fate.';
MightCollection['a41'] = new Ability('a41', Title, Type, 3, 3, 35, MightCollection['a21'], 'might/might_brutal-weaponry', Desc, Ranks);

Title = 'Bulwark';
Type = 'Passive';
Desc = 'Your impenetrable defenses often surprise your foes, stunning them as their blows bounce off you in a fierce melee.';
Ranks = new Array();
Ranks[1] = '+1% chance of stunning your attacker every time you get hit with a melee attack.';
Ranks[2] = '+2% chance of stunning your attacker every time you get hit with a melee attack.';
Ranks[3] = '+3% chance of stunning your attacker every time you get hit with a melee attack.';
Ranks[4] = '+4% chance of stunning your attacker every time you get hit with a melee attack.';
Ranks[5] = '+5% chance of stunning your attacker every time you get hit with a melee attack.';
Ranks[6] = '+6% chance of stunning your attacker every time you get hit with a melee attack.';
Ranks[7] = '+7% chance of stunning your attacker every time you get hit with a melee attack.';
MightCollection['a42'] = new Ability('a42', Title, Type, 5, 7, 35, null, 'might/might_bulwark', Desc, Ranks);

Title = 'Battle Frenzy';
Type = 'Sustained';
Desc = 'Go into a berserker rage, dealing greater and greater amounts of damage with each enemy you defeat in a short time.';
Ranks = new Array();
Ranks[1] = '+10% Total Damage for your 1st kill, +20% Total Damage for your 2nd consecutive kill. Battle Frenzy buff lasts 10 seconds, each kill resets the duration. <br><font color="#bcd">Sustained Cost: 30% mana.</font>';
Ranks[2] = '+40% Total Damage increase unlocked for your 3rd consecutive kill. Battle Frenzy buff lasts 11 seconds, each kill resets the duration. <br><font color="#bcd">Sustained Cost: 30% mana.</font>';
Ranks[3] = '+60% Total Damage increase unlocked for your 4th consecutive kill. Battle Frenzy buff lasts 12 seconds, each kill resets the duration. <br><font color="#bcd">Sustained Cost: 30% mana.</font>';
Ranks[4] = '+80% Total Damage increase unlocked for your 5th consecutive kill. Battle Frenzy buff lasts 13 seconds, each kill resets the duration. <br><font color="#bcd">Sustained Cost: 30% mana.</font>';
Ranks[5] = '+100% Total Damage increase unlocked for your 6th consecutive kill. Battle Frenzy buff lasts 15 seconds, each kill resets the duration. <br><font color="#bcd">Sustained Cost: 30% mana.</font>';
Ranks[6] = '+100% Total Damage increase unlocked for your 6th consecutive kill. Battle Frenzy buff lasts 17 seconds, each kill resets the duration. <br><font color="#bcd">Sustained Cost: 30% mana.</font>';
Ranks[7] = '+100% Total Damage increase unlocked for your 6th consecutive kill. Battle Frenzy buff lasts 20 seconds, each kill resets the duration. <br><font color="#bcd">Sustained Cost: 30% mana.</font>';
MightCollection['a43'] = new Ability('a43', Title, Type, 5, 7, 35, null, 'might/might_battle-frenzy', Desc, Ranks);

Title = 'Vengeance';
Type = 'Upgrade';
Desc = 'Your refined battle techniques allow you to reflect damage back at your opponents whenever Relentless Assault is in effect.';
Ranks = new Array();
Ranks[1] = '10% chance for Reflection.';
Ranks[2] = '12% chance for Reflection.';
Ranks[3] = '14% chance for Reflection.';
Ranks[4] = '16% chance for Reflection.';
Ranks[5] = '18% chance for Reflection.';
Ranks[6] = '20% chance for Reflection.';
Ranks[7] = '22% chance for Reflection.';
Ranks[8] = '25% chance for Reflection.';
MightCollection['a45'] = new Ability('a45', Title, Type, 6, 8, 35, MightCollection['a35'], 'might/might_vengeance', Desc, Ranks);

Title = 'Brutal Assault IV';
Type = 'Weapon Attacks';
Desc = 'Unlocks special attacks from Parry for the Longsword, Greatsword, and Hammer.';
Ranks = new Array();
Ranks[1] = 'Unlocks <b>Riposte</b>, <b>Gut Thrust</b>, and <b>Crushing Blow</b>.';
Ranks[2] = '<b>Riposte</b>, <b>Gut Thrust</b>, and <b>Crushing Blow</b> can apply damage over time in addition to their base damage.';
Ranks[3] = '<b>Riposte</b>, <b>Gut Thrust</b>, and <b>Crushing Blow</b> award bonus Fate.';
MightCollection['a51'] = new Ability('a51', Title, Type, 3, 3, 50, MightCollection['a41'], 'might/might_brutal-weaponry', Desc, Ranks);

Title = 'Stoneskin';
Type = 'Upgrade';
Desc = 'Your unquenchable rage grants you Physical and Piercing Damage Resistance while Battle Frenzy is active.';
Ranks = new Array();
Ranks[1] = '+4% Physical and Piercing Damage Resistance during Battle Frenzy.';
Ranks[2] = '+8% Physical and Piercing Damage Resistance during Battle Frenzy.';
Ranks[3] = '+12% Physical and Piercing Damage Resistance during Battle Frenzy.';
Ranks[4] = '+16% Physical and Piercing Damage Resistance during Battle Frenzy.';
Ranks[5] = '+20% Physical and Piercing Damage Resistance during Battle Frenzy.';
Ranks[6] = '+24% Physical and Piercing Damage Resistance during Battle Frenzy.';
Ranks[7] = '+28% Physical and Piercing Damage Resistance during Battle Frenzy.';
MightCollection['a53'] = new Ability('a53', Title, Type, 5, 7, 50, MightCollection['a43'], 'might/might_stoneskin', Desc, Ranks);

Title = 'Bloodlust';
Type = 'Upgrade';
Desc = 'While Relentless Assault is in effect, each of your strikes may grant you a measure of renewed vigor.';
Ranks = new Array();
Ranks[1] = 'While Relentless Assault is active: +20% chance to Steal 22 Health.';
Ranks[2] = 'While Relentless Assault is active: +20% chance to Steal 24 Health.';
Ranks[3] = 'While Relentless Assault is active: +20% chance to Steal 26 Health.';
Ranks[4] = 'While Relentless Assault is active: +20% chance to Steal 28 Health.';
Ranks[5] = 'While Relentless Assault is active: +20% chance to Steal 30 Health.';
Ranks[6] = 'While Relentless Assault is active: +20% chance to Steal 32 Health.';
Ranks[7] = 'While Relentless Assault is active: +20% chance to Steal 35 Health.';
MightCollection['a55'] = new Ability('a55', Title, Type, 5, 7, 50, MightCollection['a45'], 'might/might_bloodlust', Desc, Ranks);

Title = 'War Cry';
Type = 'Active';
Desc = '<font color="#bcd">Cooldown: 8 seconds.</font> <br>Let loose a terrifying cry that intimidates enemies, reducing their Damage output. Can be upgraded to knock down enemies.';
Ranks = new Array();
Ranks[1] = 'Reduces enemies\' Damage by 20% for 6 seconds. <br><font color="#bcd">Cost: 15 mana.</font>';
Ranks[2] = 'Reduces enemies\' Damage by 25% for 8 seconds. <br><font color="#bcd">Cost: 20 mana.</font>';
Ranks[3] = 'Reduces enemies\' Damage by 30% for 10 seconds. <br><font color="#bcd">Cost: 25 mana.</font>';
Ranks[4] = 'Reduces enemies\' Damage by 35% for 12 seconds and knocks them down. <br><font color="#bcd">Cost: 30 mana.</font>';
Ranks[5] = 'Reduces enemies\' Damage by 40% for 14 seconds and knocks them down. <br><font color="#bcd">Cost: 35 mana.</font>';
Ranks[6] = 'Reduces enemies\' Damage by 45% for 16 seconds and knocks them down. <br><font color="#bcd">Cost: 40 mana.</font>';
Ranks[7] = 'Reduces enemies\' Damage by 50% for 18 seconds and knocks them down. <br><font color="#bcd">Cost: 40 mana.</font>';
Ranks[8] = 'Reduces enemies\' Damage by 60% for 20 seconds and knocks them down. <br><font color="#bcd">Cost: 40 mana.</font>';
MightCollection['a57'] = new Ability('a57', Title, Type, 6, 8, 50, null, 'might/might_warcry', Desc, Ranks);

Title = 'Celerity';
Type = 'Upgrade';
Desc = 'Unbridled rage propels you to inhuman speed while in a Battle Frenzy.';
Ranks = new Array();
Ranks[1] = '+5% Attack Speed while in Battle Frenzy.';
Ranks[2] = '+10% Attack Speed while in Battle Frenzy.';
Ranks[3] = '+15% Attack Speed while in Battle Frenzy.';
Ranks[4] = '+20% Attack Speed while in Battle Frenzy.';
MightCollection['a63'] = new Ability('a63', Title, Type, 3, 4, 70, MightCollection['a53'], 'might/might_celerity', Desc, Ranks);

Title = 'Wrath';
Type = 'Active';
Desc = '<font color="#bcd">Cooldown: 8 seconds.</font> <br>Jump skyward, hurling nearby enemies along with you into the air and slamming them back down. Button mash to increase damage.';
Ranks = new Array();
Ranks[1] = 'Each impulse of Wrath does 50 Physical Damage, final hit does 300 Physical Damage. <br><font color="#bcd">Cost: 120 mana, +10 per impulse.</font>';
Ranks[2] = 'Each impulse of Wrath does 55 Physical Damage, final hit does 360 Physical Damage. <br><font color="#bcd">Cost: 130 mana, +10 per impulse.</font>';
Ranks[3] = 'Each impulse of Wrath does 60 Physical Damage, final hit does 420 Physical Damage. <br><font color="#bcd">Cost: 140 mana, +10 per impulse.</font>';
Ranks[4] = 'Each impulse of Wrath does 65 Physical Damage, final hit does 480 Physical Damage. <br><font color="#bcd">Cost: 150 mana, +10 per impulse.</font>';
Ranks[5] = 'Each impulse of Wrath does 70 Physical Damage, final hit does 540 Physical Damage. <br><font color="#bcd">Cost: 160 mana, +10 per impulse.</font>';
Ranks[6] = 'Each impulse of Wrath does 75 Physical Damage, final hit does 600 Physical Damage. <br><font color="#bcd">Cost: 170 mana, +10 per impulse.</font>';
Ranks[7] = 'Each impulse of Wrath does 80 Physical Damage, final hit does 660 Physical Damage. <br><font color="#bcd">Cost: 170 mana, +10 per impulse.</font>';
Ranks[8] = 'Each impulse of Wrath does 85 Physical Damage, final hit does 720 Physical Damage. <br><font color="#bcd">Cost: 170 mana, +10 per impulse.</font>';
MightCollection['a64'] = new Ability('a64', Title, Type, 6, 8, 70, MightCollection['a34'], 'might/might_wrath', Desc, Ranks);

Title = 'Terror';
Type = 'Upgrade';
Desc = 'Your War Cry gains the ability to reduce enemy Armor, opening foes up for your attacks and sometimes causing them to panic.';
Ranks = new Array();
Ranks[1] = 'Reduces enemy Armor by 10%';
Ranks[2] = 'Reduces enemy Armor by 20%';
Ranks[3] = 'Reduces enemy Armor by 30%, 10% chance to cause Panic.';
Ranks[4] = 'Reduces enemy Armor by 40%, 14% chance to cause Panic.';
Ranks[5] = 'Reduces enemy Armor by 50%, 18% chance to cause Panic.';
Ranks[6] = 'Reduces enemy Armor by 60%, 20% chance to cause Panic.';
Ranks[7] = 'Reduces enemy Armor by 70%, 26% chance to cause Panic.';
Ranks[8] = 'Reduces enemy Armor by 80%, 30% chance to cause Panic.';
MightCollection['a67'] = new Ability('a67', Title, Type, 6, 8, 70, MightCollection['a57'], 'might/might_terror', Desc, Ranks);


// Finesse Ability Tree
var FinesseCollection = new Object();
Title = 'Precise Weaponry I';
Type = 'Weapon Attacks';
Desc = 'Unlocks Charge special attacks for Daggers and Faeblades.';
Ranks = new Array();
Ranks[1] = 'Unlocks <b>Shadow Strike</b>, and <b>Twisted Claw</b>.';
Ranks[2] = '<b>Shadow Strike</b>, and <b>Twisted Claw</b> can apply damage over time in addition to their base damage.';
Ranks[3] = '<b>Shadow Strike</b>, and <b>Twisted Claw</b> award bonus Fate.';
FinesseCollection['a11'] = new Ability('a11', Title, Type, 3, 3, 0, null, 'finesse/finesse_precise-weaponry', Desc, Ranks);

Title = 'Dagger Mastery';
Type = 'Passive';
Desc = 'Your prowess with Daggers lets you get the most out of every cut and thrust.';
Ranks = new Array();
Ranks[1] = '+2 Physical Damage with Daggers, +5% Damage with Daggers.';
Ranks[2] = '+3 Physical Damage with Daggers, +10% Damage with Daggers.';
Ranks[3] = '+4 Physical Damage with Daggers, +15% Damage with Daggers.';
Ranks[4] = '+6 Physical Damage with Daggers, +20% Damage with Daggers.';
Ranks[5] = '+8 Physical Damage with Daggers, +25% Damage with Daggers.';
Ranks[6] = '+10 Physical Damage with Daggers, +30% Damage with Daggers.';
Ranks[7] = '+13 Physical Damage with Daggers, +35% Damage with Daggers.';
Ranks[8] = '+16 Physical Damage with Daggers, +40% Damage with Daggers.';
FinesseCollection['a12'] = new Ability('a12', Title, Type, 6, 8, 0, null, 'finesse/finesse_dagger-mastery', Desc, Ranks);

Title = 'Longbow Mastery';
Type = 'Passive';
Desc = 'Your skill at archery grants you a large bonus to damage while using a Longbow and increases the number of arrows that can be fired before reloading your quiver.';
Ranks = new Array();
Ranks[1] = '+2 Physical Damage with Longbows, +5% Damage with Longbows.<br>Increases max arrows by 1.';
Ranks[2] = '+3 Physical Damage with Longbows, +10% Damage with Longbows.';
Ranks[3] = '+4 Physical Damage with Longbows, +15% Damage with Longbows.';
Ranks[4] = '+5 Physical Damage with Longbows, +20% Damage with Longbows.';
Ranks[5] = '+6 Physical Damage with Longbows, +25% Damage with Longbows.';
Ranks[6] = '+7 Physical Damage with Longbows, +30% Damage with Longbows.';
Ranks[7] = '+8 Physical Damage with Longbows, +35% Damage with Longbows.';
Ranks[8] = '+9 Physical Damage with Longbows, +40% Damage with Longbows.';
FinesseCollection['a13'] = new Ability('a13', Title, Type, 6, 8, 0, null, 'finesse/finesse_longbow-mastery', Desc, Ranks);

Title = 'Shadow Flare';
Type = 'Active';
Desc = '<font color="#bcd">Cooldown: 1.5 seconds.</font> <br>Weaving a burst of shadow magic to wound and stagger enemies in an arc before you. Quickly press the button again to throw a volley of shadowy blades, dealing Pierce and Bleeding Damage.';
Ranks = new Array();
Ranks[1] = 'Attack 1: Staggers targets 4 meters in front of you and deals 3 Physical Damage. <br><font color="#bcd">Cost: 5 Mana. </font><br><br>Attack 2: 3 blade projectiles each deal 20 Piercing Damage and 10 Bleeding Damage over 5 seconds. <br><font color="#bcd">Cost: 5 Mana.</font>';
Ranks[2] = 'Attack 1: Staggers targets 5 meters in front of you and deals 5 Physical Damage. <br><font color="#bcd">Cost: 7 Mana. </font><br><br>Attack 2: 3 blade projectiles each deal 35 Piercing Damage and 10 Bleeding Damage over 5 seconds. <br><font color="#bcd">Cost: 10 Mana.</font>';
Ranks[3] = 'Attack 1: Staggers targets 5 meters in front of you and deals 8 Physical Damage. <br><font color="#bcd">Cost: 10 Mana. </font><br><br>Attack 2: 5 blade projectiles each deal 50 Piercing Damage and 12 Bleeding Damage over 6 seconds. <br><font color="#bcd">Cost: 15 Mana.</font>';
Ranks[4] = 'Attack 1: Staggers targets 6 meters in front of you and deals 12 Physical Damage. <br><font color="#bcd">Cost: 15 Mana. </font><br><br>Attack 2: 5 blade projectiles each deal 65 Piercing Damage and 12 Bleeding Damage over 6 seconds. <br><font color="#bcd">Cost: 20 Mana.</font>';
Ranks[5] = 'Attack 1: Staggers targets 6 meters in front of you and deals 17 Physical Damage. <br><font color="#bcd">Cost: 20 Mana. </font><br><br>Attack 2: 5 blade projectiles each deal 70 Piercing Damage and 14 Bleeding Damage over 7 seconds. <br><font color="#bcd">Cost: 25 Mana.</font>';
Ranks[6] = 'Attack 1: Staggers targets 6 meters in front of you and deals 23 Physical Damage. <br><font color="#bcd">Cost: 20 Mana. </font><br><br>Attack 2: 5 blade projectiles each deal 85 Piercing Damage and 14 Bleeding Damage over 7 seconds. <br><font color="#bcd">Cost: 25 Mana.</font>';
Ranks[7] = 'Attack 1: Staggers targets 6 meters in front of you and deals 30 Physical Damage. <br><font color="#bcd">Cost: 20 Mana. </font><br><br>Attack 2: 5 blade projectiles each deal 100 Piercing Damage and 16 Bleeding Damage over 8 seconds. <br><font color="#bcd">Cost: 25 Mana.</font>';
FinesseCollection['a14'] = new Ability('a14', Title, Type, 5, 7, 0, null, 'finesse/finesse_shadow-flare', Desc, Ranks);

Title = 'Assassin\'s Art';
Type = 'Passive';
Desc = 'Your deadly grace allows you to deal tremendous amounts of damage from stealth. Unlocks new sneak attacks with Daggers or Faeblades that can instantly kill an unaware enemy if you deal enough damage.';
Ranks = new Array();
Ranks[1] = '+10% Critical Damage when attacking unaware enemies from Stealth, Unlocks Dagger and Faeblade sneak attacks.';
Ranks[2] = '+20% Critical Damage when attacking unaware enemies from Stealth, +30% Damage with Dagger and Faeblade sneak attacks.';
Ranks[3] = '+30% Critical Damage when attacking unaware enemies from Stealth, +60% Damage with Dagger and Faeblade sneak attacks.';
Ranks[4] = '+40% Critical Damage when attacking unaware enemies from Stealth, +90% Damage with Dagger and Faeblade sneak attacks.';
Ranks[5] = '+50% Critical Damage when attacking unaware enemies from Stealth, +120% Damage with Dagger and Faeblade sneak attacks.';
Ranks[6] = '+60% Critical Damage when attacking unaware enemies from Stealth, +150% Damage with Dagger and Faeblade sneak attacks.';
Ranks[7] = '+65% Critical Damage when attacking unaware enemies from Stealth, +150% Damage with Dagger and Faeblade sneak attacks.';
Ranks[8] = '+70% Critical Damage when attacking unaware enemies from Stealth, +150% Damage with Dagger and Faeblade sneak attacks.';
FinesseCollection['a17'] = new Ability('a17', Title, Type, 6, 8, 0, null, 'finesse/finesse_assassins-art', Desc, Ranks);

Title = 'Precise Weaponry II';
Type = 'Weapon Attacks';
Desc = 'Unlocks Delayed special attacks for Daggers and Faeblades.';
Ranks = new Array();
Ranks[1] = 'Unlocks <b>Crossfire</b>, and <b>Talon Strikes</b>.';
Ranks[2] = '<b>Crossfire</b>, and <b>Talon Strikes</b> can apply damage over time in addition to their base damage.';
Ranks[3] = '<b>Crossfire</b>, and <b>Talon Strikes</b> award bonus Fate.';
FinesseCollection['a21'] = new Ability('a21', Title, Type, 3, 3, 5, FinesseCollection['a11'], 'finesse/finesse_precise-weaponry', Desc, Ranks);

Title = 'Faeblade Mastery';
Type = 'Passive';
Desc = 'Diligent practice has granted you mastery over the Faeblades, chief weapon of the Summer Court Fae.';
Ranks = new Array();
Ranks[1] = '+2 Physical Damage with Faeblades, +5% Damage with Faeblades.';
Ranks[2] = '+3 Physical Damage with Faeblades, +10% Damage with Faeblades.';
Ranks[3] = '+4 Physical Damage with Faeblades, +15% Damage with Faeblades.';
Ranks[4] = '+5 Physical Damage with Faeblades, +20% Damage with Faeblades.';
Ranks[5] = '+6 Physical Damage with Faeblades, +25% Damage with Faeblades.';
Ranks[6] = '+7 Physical Damage with Faeblades, +30% Damage with Faeblades.';
Ranks[7] = '+8 Physical Damage with Faeblades, +35% Damage with Faeblades.';
Ranks[8] = '+9 Physical Damage with Faeblades, +40% Damage with Faeblades.';
FinesseCollection['a22'] = new Ability('a22', Title, Type, 6, 8, 5, null, 'finesse/finesse_faeblade-mastery', Desc, Ranks);

Title = 'Drawpower';
Type = 'Passive';
Desc = 'With your incredible drawpower, each arrow you fire can penetrate even the thickest armor or carapace.<br>Also increases the size of your quiver.';
Ranks = new Array();
Ranks[1] = '+1 Piercing Damage with Longbows, +9% piercing Damage with Longbows.<br>Increases max arrows by 1.';
Ranks[2] = '+2 Piercing Damage with Longbows, +12% piercing Damage with Longbows.';
Ranks[3] = '+3 Piercing Damage with Longbows, +15% piercing Damage with Longbows.';
Ranks[4] = '+4 Piercing Damage with Longbows, +18% piercing Damage with Longbows.';
Ranks[5] = '+5 Piercing Damage with Longbows, +21% piercing Damage with Longbows.';
Ranks[6] = '+6 Piercing Damage with Longbows, +24% piercing Damage with Longbows.';
Ranks[7] = '+7 Piercing Damage with Longbows, +27% piercing Damage with Longbows.';
FinesseCollection['a23'] = new Ability('a23', Title, Type, 5, 7, 5, FinesseCollection['a13'], 'finesse/finesse_drawpower', Desc, Ranks);

Title = 'Envenomed Edge';
Type = 'Sustained';
Desc = 'The careful application of vile poisons to all your edged weapons and arrowheads allows you to weaken your opponents.';
Ranks = new Array();
Ranks[1] = '15% chance per hit to deal 10 Poison Damage over 5 seconds. <br><font color="#bcd">Sustained Cost: 25% Mana.</font>';
Ranks[2] = '15% chance per hit to deal 20 Poison Damage over 5 seconds. <br><font color="#bcd">Sustained Cost: 25% Mana.</font>';
Ranks[3] = '15% chance per hit to deal 30 Poison Damage over 5 seconds. <br><font color="#bcd">Sustained Cost: 25% Mana.</font>';
Ranks[4] = '15% chance per hit to deal 40 Poison Damage over 5 seconds. <br><font color="#bcd">Sustained Cost: 25% Mana.</font>';
Ranks[5] = '15% chance per hit to deal 50 Poison Damage over 5 seconds. <br><font color="#bcd">Sustained Cost: 25% Mana.</font>';
Ranks[6] = '15% chance per hit to deal 60 Poison Damage over 5 seconds. <br><font color="#bcd">Sustained Cost: 25% Mana.</font>';
Ranks[7] = '15% chance per hit to deal 70 Poison Damage over 5 seconds. <br><font color="#bcd">Sustained Cost: 25% Mana.</font>';
Ranks[8] = '15% chance per hit to deal 80 Poison Damage over 5 seconds. <br><font color="#bcd">Sustained Cost: 25% Mana.</font>';
FinesseCollection['a25'] = new Ability('a25', Title, Type, 6, 8, 5, null, 'finesse/finesse_envenomed_edge', Desc, Ranks);

Title = 'Frost Trap';
Type = 'Active';
Desc = '<font color="#bcd">Cooldown: 2 seconds.</font> <br>Plant a Frost Trap which causes Ice and Freezing damage to all nearby enemies when it explodes. A maximum of 4 traps can be placed at a time.';
Ranks = new Array();
Ranks[1] = 'Frost Trap deals 30 Ice Damage and 4 Freezing Damage over 2 seconds. <br><font color="#bcd">Cost: 20 Mana.</font>';
Ranks[2] = 'Frost Trap deals 35 Ice Damage and 6 Freezing Damage over 3 seconds. <br><font color="#bcd">Cost: 25 Mana.</font>';
Ranks[3] = 'Frost Trap deals 40 Ice Damage and 10 Freezing Damage over 4 seconds. <br><font color="#bcd">Cost: 30 Mana.</font>';
Ranks[4] = 'Frost Trap deals 45 Ice Damage and 12 Freezing Damage over 5 seconds. <br><font color="#bcd">Cost: 35 Mana.</font>';
Ranks[5] = 'Frost Trap deals 55 Ice Damage and 15 Freezing Damage over 5 seconds. <br><font color="#bcd">Cost: 40 Mana.</font>';
FinesseCollection['a26'] = new Ability('a26', Title, Type, 4, 5, 5, null, 'finesse/finesse_frost-trap', Desc, Ranks);

Title = 'Arrow Storm';
Type = 'Weapon Attacks';
Desc = 'Your skill with the Longbow allows you to fire a volley of arrows into the sky, raining death down on your foes.<br>Also increases the size of your quiver.';
Ranks = new Array();
Ranks[1] = 'Unlocks Arrow Storm, a Longbow Special executed from block.<br>Increases max arrows by 1.';
Ranks[2] = '+20% damage to Arrow Storm.';
Ranks[3] = '+40% damage to Arrow Storm.';
Ranks[4] = '+60% damage to Arrow Storm.';
FinesseCollection['a33'] = new Ability('a33', Title, Type, 3, 4, 20, FinesseCollection['a23'], 'finesse/finesse_arrow-storm', Desc, Ranks);

Title = 'Inoculation';
Type = 'Upgrade';
Desc = 'Your extensive experience with Poisons grants you a heightened resistance to their effects.';
Ranks = new Array();
Ranks[1] = '+10% Poison Resistance.';
Ranks[2] = '+20% Poison Resistance.';
Ranks[3] = '+30% Poison Resistance.';
Ranks[4] = '+40% Poison Resistance.';
Ranks[5] = '+50% Poison Resistance.';
Ranks[6] = '+60% Poison Resistance.';
Ranks[7] = '+70% Poison Resistance.';
FinesseCollection['a35'] = new Ability('a35', Title, Type, 5, 7, 20, FinesseCollection['a25'], 'finesse/finesse_inoculation', Desc, Ranks);

Title = 'Icy Explosion';
Type = 'Upgrade';
Desc = 'Your roguish ingenuity allows you to build Frost Traps that deal additional damage and disorient your enemies.';
Ranks = new Array();
Ranks[1] = 'Frost Trap does 10 additional damage and has a 20% chance to Stun targets for 3 seconds.';
Ranks[2] = 'Frost Trap does 15 additional damage and has a 25% chance to Stun targets for 3 seconds.';
Ranks[3] = 'Frost Trap does 20 additional damage and has a 30% chance to Stun targets for 4 seconds.';
Ranks[4] = 'Frost Trap does 25 additional damage and has a 35% chance to Stun targets for 4 seconds.';
Ranks[5] = 'Frost Trap does 30 additional damage and has a 40% chance to Stun targets for 5 seconds.';
Ranks[6] = 'Frost Trap does 35 additional damage and has a 40% chance to Stun targets for 5 seconds.';
Ranks[7] = 'Frost Trap does 40 additional damage and has a 40% chance to Stun targets for 6 seconds.';
FinesseCollection['a36'] = new Ability('a36', Title, Type, 5, 7, 20, FinesseCollection['a26'], 'finesse/finesse_icy-explosion', Desc, Ranks);

Title = 'Lunge';
Type = 'Active';
Desc = '<font color="#bcd">Cooldown: 3 seconds.</font> <br>Lunge past your foes with preternatural speed to attack them from behind.';
Ranks = new Array();
Ranks[1] = '40 Physical Damage. <br><font color="#bcd">Cost: 40 Mana.</font>';
Ranks[2] = '55 Physical Damage. <br><font color="#bcd">Cost: 45 Mana.</font>';
Ranks[3] = '70 Physical Damage. <br><font color="#bcd">Cost: 50 Mana.</font>';
Ranks[4] = '85 Physical Damage. <br><font color="#bcd">Cost: 55 Mana.</font>';
Ranks[5] = '100 Physical Damage. <br><font color="#bcd">Cost: 60 Mana.</font>';
Ranks[6] = '115 Physical Damage. <br><font color="#bcd">Cost: 60 Mana.</font>';
Ranks[7] = '130 Physical Damage. <br><font color="#bcd">Cost: 60 Mana.</font>';
FinesseCollection['a37'] = new Ability('a37', Title, Type, 5, 7, 20, null, 'finesse/finesse_lunge', Desc, Ranks);

Title = 'Precise Weaponry III';
Type = 'Weapon Attacks';
Desc = 'Unlocks special attacks from Dodge for Daggers and Faeblades.';
Ranks = new Array();
Ranks[1] = 'Unlocks <b>Cross Slash</b>, and <b>Cyclone</b>.';
Ranks[2] = '<b>Cross Slash</b>, and <b>Cyclone</b> can apply damage over time in addition to their base damage.';
Ranks[3] = '<b>Cross Slash</b>, and <b>Cyclone</b> award bonus Fate.';
FinesseCollection['a41'] = new Ability('a41', Title, Type, 3, 3, 35, FinesseCollection['a21'], 'finesse/finesse_precise-weaponry', Desc, Ranks);

Title = 'Smoke Bomb';
Type = 'Active';
Desc = '<font color="#bcd">Cooldown: 60 seconds.</font> <br>Throw down a smokescreen to stun enemies and blind them to your presence for a short duration.';
Ranks = new Array();
Ranks[1] = 'Smoke Bomb deals 7 Damage and Stuns enemies for 2 seconds, You are hidden from detection for 6 seconds. <br><font color="#bcd">Cost: 40 Mana.</font>';
Ranks[2] = 'Smoke Bomb deals 10 Damage and Stuns enemies for 3 seconds, You are hidden from detection for 6 seconds. <br><font color="#bcd">Cost: 45 Mana.</font>';
Ranks[3] = 'Smoke Bomb deals 14 Damage and Stuns enemies for 4 seconds, You are hidden from detection for 6 seconds. <br><font color="#bcd">Cost: 50 Mana.</font>';
Ranks[4] = 'Smoke Bomb deals 19 Damage and Stuns enemies for 5 seconds, You are hidden from detection for 6 seconds. <br><font color="#bcd">Cost: 55 Mana.</font>';
Ranks[5] = 'Smoke Bomb deals 25 Damage and Stuns enemies for 5 seconds, You are hidden from detection for 6 seconds. <br><font color="#bcd">Cost: 55 Mana.</font>';
FinesseCollection['a42'] = new Ability('a42', Title, Type, 4, 5, 35, null, 'finesse/finesse_smoke-bomb', Desc, Ranks);

Title = 'Barbed Arrows';
Type = 'Passive';
Desc = 'By affixing small barbs to your arrows, each Longbow shot has a chance to deal heavy Bleeding Damage to your foes.<br>Also increases the size of your quiver.';
Ranks = new Array();
Ranks[1] = 'Each arrow has a 10% chance to cause 80 Bleeding Damage over 5 seconds.<br>Increases max arrows by 1.';
Ranks[2] = 'Each arrow has a 12% chance to cause 90 Bleeding Damage over 5 seconds.';
Ranks[3] = 'Each arrow has a 14% chance to cause 100 Bleeding Damage over 5 seconds.';
Ranks[4] = 'Each arrow has a 17% chance to cause 110 Bleeding Damage over 5 seconds.';
Ranks[5] = 'Each arrow has a 20% chance to cause 120 Bleeding Damage over 5 seconds.';
Ranks[6] = 'Each arrow has a 20% chance to cause 135 Bleeding Damage over 5 seconds.';
Ranks[7] = 'Each arrow has a 20% chance to cause 150 Bleeding Damage over 5 seconds.';
FinesseCollection['a43'] = new Ability('a43', Title, Type, 5, 7, 35, FinesseCollection['a33'], 'finesse/finesse_barbed-arrows', Desc, Ranks);

Title = 'Enduring Agony';
Type = 'Upgrade';
Desc = 'Secret techniques enable you to extend the duration of all your Poison and Bleeding attacks. Also increases Shadow Flare damage.';
Ranks = new Array();
Ranks[1] = 'Increases Bleeding and Poison effects by 20% and Shadow Flare damage by 10%.';
Ranks[2] = 'Increases Bleeding and Poison effects by 30% and Shadow Flare damage by 20%.';
Ranks[3] = 'Increases Bleeding and Poison effects by 40% and Shadow Flare damage by 30%.';
Ranks[4] = 'Increases Bleeding and Poison effects by 55% and Shadow Flare damage by 40%.';
Ranks[5] = 'Increases Bleeding and Poison effects by 70% and Shadow Flare damage by 50%.';
Ranks[6] = 'Increases Bleeding and Poison effects by 85% and Shadow Flare damage by 55%.';
Ranks[7] = 'Increases Bleeding and Poison effects by 100% and Shadow Flare damage by 60%.';
FinesseCollection['a44'] = new Ability('a44', Title, Type, 5, 7, 35, FinesseCollection['a14'], 'finesse/finesse_enduring-agony', Desc, Ranks);

Title = 'Blade Honing';
Type = 'Sustained';
Desc = 'The razor sharp blades of your weapons cut into your foes with ease.<br>While this Ability is active, Critical Hit Damage for Longswords, Daggers, Faeblades and Greatswords is substantially increased.';
Ranks = new Array();
Ranks[1] = '+10% Critical Hit Damage. <br><font color="#bcd">Sustained Cost: 15% Mana.</font>';
Ranks[2] = '+15% Critical Hit Damage. <br><font color="#bcd">Sustained Cost: 15% Mana.</font>';
Ranks[3] = '+20% Critical Hit Damage. <br><font color="#bcd">Sustained Cost: 15% Mana.</font>';
Ranks[4] = '+25% Critical Hit Damage. <br><font color="#bcd">Sustained Cost: 15% Mana.</font>';
Ranks[5] = '+30% Critical Hit Damage. <br><font color="#bcd">Sustained Cost: 15% Mana.</font>';
Ranks[6] = '+35% Critical Hit Damage. <br><font color="#bcd">Sustained Cost: 15% Mana.</font>';
Ranks[7] = '+40% Critical Hit Damage. <br><font color="#bcd">Sustained Cost: 15% Mana.</font>';
FinesseCollection['a46'] = new Ability('a46', Title, Type, 5, 7, 35, null, 'finesse/finesse_blade-honing', Desc, Ranks);

Title = 'Precise Weaponry IV';
Type = 'Weapon Attacks';
Desc = 'Unlocks special attacks from Parry for Daggers and Faeblades.';
Ranks = new Array();
Ranks[1] = 'Unlocks <b>Punishment</b>, and <b>Savage Wing</b>.';
Ranks[2] = '<b>Punishment</b>, and <b>Savage Wing</b> can apply damage over time in addition to their base damage.';
Ranks[3] = '<b>Punishment</b>, and <b>Savage Wing</b> award bonus Fate.';
FinesseCollection['a51'] = new Ability('a51', Title, Type, 3, 3, 50, FinesseCollection['a41'], 'finesse/finesse_precise-weaponry', Desc, Ranks);

Title = 'Poison Bomb';
Type = 'Upgrade';
Desc = 'Further tinkering has enabled you to add a deadly Poison cloud to the effects of your Smoke Bomb.';
Ranks = new Array();
Ranks[1] = 'Adds 30 Poison Damage over 5 seconds to Smoke Bomb.';
Ranks[2] = 'Adds 60 Poison Damage over 5 seconds to Smoke Bomb.';
Ranks[3] = 'Adds 90 Poison Damage over 5 seconds to Smoke Bomb.';
Ranks[4] = 'Adds 120 Poison Damage over 5 seconds to Smoke Bomb.';
Ranks[5] = 'Adds 150 Poison Damage over 5 seconds to Smoke Bomb.';
FinesseCollection['a52'] = new Ability('a52', Title, Type, 4, 5, 50, FinesseCollection['a42'], 'finesse/finesse_poison-bomb', Desc, Ranks);

Title = 'Scattershot';
Type = 'Weapon Attacks';
Desc = 'Your skill with Longbows enables you to fire multiple arrows simultaneously.<br>Also increases the size of your quiver.';
Ranks = new Array();
Ranks[1] = 'Release 1 charged and 2 uncharged arrows from the Bow\'s Charged Shot.<br>Increases max arrows by 1.';
Ranks[2] = 'Release 3 charged arrows from the Bow\'s Charged Shot.';
Ranks[3] = 'Release 3 charged and 2 uncharged arrows from the Bow\'s Charged Shot.';
Ranks[4] = 'Release 5 charged arrows from the Bow\'s Charged Shot.';
Ranks[5] = 'Release 5 charged and 2 uncharged arrows from the Bow\'s Charged Shot.';
Ranks[6] = 'Release 7 charged arrows from the Bow\'s Charged Shot.';
Ranks[7] = 'Increase the damage of your Scatter Shot.';
Ranks[8] = 'Increase the damage of your Scatter Shot.';
FinesseCollection['a53'] = new Ability('a53', Title, Type, 6, 8, 50, FinesseCollection['a43'], 'finesse/finesse_scattershot', Desc, Ranks);

Title = 'Mysterious Toxins';
Type = 'Upgrade';
Desc = 'The skilled mixing of obscure toxins allows your Poison attacks to propagate to other enemies.';
Ranks = new Array();
Ranks[1] = '+10% chance to trigger a Poison Cloud when a Poisoned enemy dies. Poison Cloud deals 150 Poison Damage.';
Ranks[2] = '+20% chance to trigger a Poison Cloud when a Poisoned enemy dies. Poison Cloud deals 175 Poison Damage.';
Ranks[3] = '+30% chance to trigger a Poison Cloud when a Poisoned enemy dies. Poison Cloud deals 200 Poison Damage.';
Ranks[4] = '+40% chance to trigger a Poison Cloud when a Poisoned enemy dies. Poison Cloud deals 225 Poison Damage.';
Ranks[5] = '+50% chance to trigger a Poison Cloud when a Poisoned enemy dies. Poison Cloud deals 250 Poison Damage.';
Ranks[6] = '+60% chance to trigger a Poison Cloud when a Poisoned enemy dies. Poison Cloud deals 275 Poison Damage.';
Ranks[7] = '+70% chance to trigger a Poison Cloud when a Poisoned enemy dies. Poison Cloud deals 300 Poison Damage.';
FinesseCollection['a55'] = new Ability('a55', Title, Type, 5, 7, 50, FinesseCollection['a35'], 'finesse/finesse_mysterious_toxins', Desc, Ranks);

Title = 'Gambit';
Type = 'Active';
Desc = '<font color="#bcd">Cooldown: 10 seconds.</font> <br>With an acrobatic leap, you distribute explosives across the battlefield that damage and launch enemies.';
Ranks = new Array();
Ranks[1] = '7 traps are dispersed across the field in a 5 meter radius. Each trap deals 80 Damage. <br><font color="#bcd">Cost: 80 Mana. </font><br><br>Holding the attack increases output to 18 traps. <br><font color="#bcd">Cost: 120 Mana.</font>';
Ranks[2] = '7 traps are dispersed across the field in a 5 meter radius. Each trap deals 90 Damage. <br><font color="#bcd">Cost: 80 Mana. </font><br><br>Holding the attack increases output to 18 traps. <br><font color="#bcd">Cost: 120 Mana.</font>';
Ranks[3] = '7 traps are dispersed across the field in a 5 meter radius. Each trap deals 100 Damage. <br><font color="#bcd">Cost: 80 Mana. </font><br><br>Holding the attack increases output to 18 traps. <br><font color="#bcd">Cost: 120 Mana.</font>';
Ranks[4] = '7 traps are dispersed across the field in a 5 meter radius. Each trap deals 110 Damage. <br><font color="#bcd">Cost: 80 Mana. </font><br><br>Holding the attack increases output to 18 traps. <br><font color="#bcd">Cost: 120 Mana.</font>';
Ranks[5] = '7 traps are dispersed across the field in a 5 meter radius. Each trap deals 120 Damage. <br><font color="#bcd">Cost: 80 Mana. </font><br><br>Holding the attack increases output to 18 traps. <br><font color="#bcd">Cost: 120 Mana.</font>';
Ranks[6] = '7 traps are dispersed across the field in a 5 meter radius. Each trap deals 130 Damage. <br><font color="#bcd">Cost: 80 Mana. </font><br><br>Holding the attack increases output to 18 traps. <br><font color="#bcd">Cost: 120 Mana.</font>';
Ranks[7] = '7 traps are dispersed across the field in a 5 meter radius. Each trap deals 140 Damage. <br><font color="#bcd">Cost: 80 Mana. </font><br><br>Holding the attack increases output to 18 traps. <br><font color="#bcd">Cost: 120 Mana.</font>';
Ranks[8] = '7 traps are dispersed across the field in a 5 meter radius. Each trap deals 150 Damage. <br><font color="#bcd">Cost: 80 Mana. </font><br><br>Holding the attack increases output to 18 traps. <br><font color="#bcd">Cost: 120 Mana.</font>';
FinesseCollection['a64'] = new Ability('a64', Title, Type, 6, 8, 70, null, 'finesse/finesse_gambit', Desc, Ranks);

Title = 'Paralytic Poisons';
Type = 'Upgrade';
Desc = 'You have discovered long-hidden secrets of poisoncraft, enabling your poison attacks to temporarily stun your opponents.';
Ranks = new Array();
Ranks[1] = '2% chance to Stun a poisoned enemy for 5 seconds.';
Ranks[2] = '4% chance to Stun a poisoned enemy for 5 seconds.';
Ranks[3] = '6% chance to Stun a poisoned enemy for 5 seconds.';
Ranks[4] = '8% chance to Stun a poisoned enemy for 5 seconds.';
Ranks[5] = '10% chance to Stun a poisoned enemy for 5 seconds.';
FinesseCollection['a65'] = new Ability('a65', Title, Type, 4, 5, 70, FinesseCollection['a55'], 'finesse/finesse_paralytic_poisons', Desc, Ranks);

Title = 'Execution';
Type = 'Passive';
Desc = 'With anatomical precision, you deal out higher damage to bleeding foes.';
Ranks = new Array();
Ranks[1] = 'Each hit against a Bleeding enemy has a 10% chance to do 100 bonus Damage.';
Ranks[2] = 'Each hit against a Bleeding enemy has a 11% chance to do 120 bonus Damage.';
Ranks[3] = 'Each hit against a Bleeding enemy has a 12% chance to do 140 bonus Damage.';
Ranks[4] = 'Each hit against a Bleeding enemy has a 13% chance to do 160 bonus Damage.';
Ranks[5] = 'Each hit against a Bleeding enemy has a 14% chance to do 180 bonus Damage.';
Ranks[6] = 'Each hit against a Bleeding enemy has a 15% chance to do 200 bonus Damage.';
Ranks[7] = 'Each hit against a Bleeding enemy has a 16% chance to do 220 bonus Damage.';
FinesseCollection['a67'] = new Ability('a67', Title, Type, 5, 7, 70, null, 'finesse/finesse_execution', Desc, Ranks);


// Sorcery Ability Tree
var SorceryCollection = new Object();
Title = 'Arcane Weaponry I';
Type = 'Weapon Attacks';
Desc = 'Unlocks Charge special attacks for the Staff and Chakrams.'
Ranks = new Array();
Ranks[1] = 'Unlocks <b>Charged Entropy</b>, and <b>Maelstrom</b>.<br>Reduce Sceptre costs to 5% of max Mana instead of 6%.';
Ranks[2] = '<b>Charged Entropy</b>, and <b>Maelstrom</b> can apply damage over time in addition to their base damage.';
Ranks[3] = '<b>Charged Entropy</b>, and <b>Maelstrom</b> award bonus Fate.';
SorceryCollection['a11'] = new Ability('a11', Title, Type, 3, 3, 0, null, 'sorcery/sorcery_arcane-weaponry', Desc, Ranks);

Title = 'Sceptre Mastery';
Type = 'Passive';
Desc = 'Long hours of study and practice enable you to wield Sceptres very effectively.';
Ranks = new Array();
Ranks[1] = '+2 Physical Damage with Sceptres, +5% Damage with Sceptres.';
Ranks[2] = '+3 Physical Damage with Sceptres, +10% Damage with Sceptres.';
Ranks[3] = '+4 Physical Damage with Sceptres, +15% Damage with Sceptres.';
Ranks[4] = '+6 Physical Damage with Sceptres, +20% Damage with Sceptres.';
Ranks[5] = '+8 Physical Damage with Sceptres, +25% Damage with Sceptres.';
Ranks[6] = '+10 Physical Damage with Sceptres, +30% Damage with Sceptres.';
Ranks[7] = '+13 Physical Damage with Sceptres, +35% Damage with Sceptres.';
Ranks[8] = '+16 Physical Damage with Sceptres, +40% Damage with Sceptres.';
SorceryCollection['a12'] = new Ability('a12', Title, Type, 6, 8, 0, null, 'sorcery/sorcery_sceptre-mastery', Desc, Ranks);

Title = 'Staff Mastery';
Type = 'Passive';
Desc = 'You\'ve learned to channel incredible amounts of energy through your Staff, increasing its damage output considerably.';
Ranks = new Array();
Ranks[1] = '+6 Physical Damage with Staves, +5% Damage with Staves.';
Ranks[2] = '+7 Physical Damage with Staves, +10% Damage with Staves.';
Ranks[3] = '+8 Physical Damage with Staves, +15% Damage with Staves.';
Ranks[4] = '+10 Physical Damage with Staves, +20% Damage with Staves.';
Ranks[5] = '+12 Physical Damage with Staves, +25% Damage with Staves.';
Ranks[6] = '+14 Physical Damage with Staves, +30% Damage with Staves.';
Ranks[7] = '+17 Physical Damage with Staves, +35% Damage with Staves.';
Ranks[8] = '+20 Physical Damage with Staves, +40% Damage with Staves.';
SorceryCollection['a13'] = new Ability('a13', Title, Type, 6, 8, 0, null, 'sorcery/sorcery_staff-mastery', Desc, Ranks);

Title = 'Storm Bolt';
Type = 'Active';
Desc = '<font color="#bcd">Cooldown: 3.5 seconds.</font> <br>Launch a burst of electrical energy which deals Lightning and Shocking Damage. At higher levels, it can Stun enemies.';
Ranks = new Array();
Ranks[1] = '40 Lightning Damage. <br><font color="#bcd">Cost: 20 mana.</font>';
Ranks[2] = '50 Lightning Damage. <br><font color="#bcd">Cost: 23 mana.</font>';
Ranks[3] = '60 Lightning Damage, 20% Chance to Stun for 3 seconds. <br><font color="#bcd">Cost: 26 mana.</font>';
Ranks[4] = '70 Lightning Damage, 25% Chance to Stun for 4 seconds. Explosion on impact deals 12 Shocking Damage and can Stun in an area. <br><font color="#bcd">Cost: 29 mana.</font>';
Ranks[5] = '80 Lightning Damage, 30% Chance to Stun for 4 seconds. Explosion on impact deals 15 Shocking Damage and can Stun in an area. <br><font color="#bcd">Cost: 32 mana.</font>';
Ranks[6] = '90 Lightning Damage, 35% Chance to Stun for 4 seconds. Explosion on impact deals 18 Shocking Damage and can Stun in an area. <br><font color="#bcd">Cost: 35 mana.</font>';
Ranks[7] = '100 Lightning Damage, 40% Chance to Stun for 4 seconds. Explosion on impact deals 21 Shocking Damage and can Stun in an area. <br><font color="#bcd">Cost: 35 mana.</font>';
Ranks[8] = '110 Lightning Damage, 40% Chance to Stun for 4 seconds. Explosion on impact deals 24 Shocking Damage and can Stun in an area. <br><font color="#bcd">Cost: 35 mana.</font>';
SorceryCollection['a16'] = new Ability('a16', Title, Type, 6, 8, 0, null, 'sorcery/sorcery_storm-bolt', Desc, Ranks);

Title = 'Arcane Weaponry II';
Type = 'Weapon Attacks';
Desc = 'Unlocks special attacks from Block for the Staff and Sceptre';
Ranks = new Array();
Ranks[1] = 'Unlocks <b>Mage\'s Vortex</b>, and <b>Warding Blast</b>.<br>Reduce Sceptre costs to 4% of max Mana instead of 5%.';
Ranks[2] = '<b>Mage\'s Vortex</b>, and <b>Warding Blast</b> can apply damage over time in addition to their base damage.';
Ranks[3] = '<b>Mage\'s Vortex</b>, and <b>Warding Blast</b> award bonus Fate.';
SorceryCollection['a21'] = new Ability('a21', Title, Type, 3, 3, 5, SorceryCollection['a11'], 'sorcery/sorcery_arcane-weaponry', Desc, Ranks);

Title = 'Chakram Mastery';
Type = 'Passive';
Desc = 'Your unique mix of arcane and martial talent enable you to deal incredible damage with Chakrams.';
Ranks = new Array();
Ranks[1] = '+2 Physical Damage with Chakrams, +5% Damage with Chakrams.';
Ranks[2] = '+3 Physical Damage with Chakrams, +10% Damage with Chakrams.';
Ranks[3] = '+4 Physical Damage with Chakrams, +15% Damage with Chakrams.';
Ranks[4] = '+6 Physical Damage with Chakrams, +20% Damage with Chakrams.';
Ranks[5] = '+8 Physical Damage with Chakrams, +25% Damage with Chakrams.';
Ranks[6] = '+10 Physical Damage with Chakrams, +30% Damage with Chakrams.';
Ranks[7] = '+13 Physical Damage with Chakrams, +35% Damage with Chakrams.';
Ranks[8] = '+16 Physical Damage with Chakrams, +40% Damage with Chakrams.';
SorceryCollection['a22'] = new Ability('a22', Title, Type, 6, 8, 5, null, 'sorcery/sorcery_chakram-mastery', Desc, Ranks);

Title = 'Sphere of Protection';
Type = 'Sustained';
Desc = 'While active, Sphere of Protection creates a magical barrier that blocks a percentage of damage from each incoming attack.';
Ranks = new Array();
Ranks[1] = '+5% Damage Resistance while active. <br><font color="#bcd">Sustained Cost: 30% Mana.</font>';
Ranks[2] = '+6% Damage Resistance while active. <br><font color="#bcd">Sustained Cost: 30% Mana.</font>';
Ranks[3] = '+7% Damage Resistance while active. <br><font color="#bcd">Sustained Cost: 30% Mana.</font>';
Ranks[4] = '+8% Damage Resistance while active. <br><font color="#bcd">Sustained Cost: 30% Mana.</font>';
Ranks[5] = '+10% Damage Resistance while active. <br><font color="#bcd">Sustained Cost: 30% Mana.</font>';
Ranks[6] = '+12% Damage Resistance while active. <br><font color="#bcd">Sustained Cost: 30% Mana.</font>';
Ranks[7] = '+14% Damage Resistance while active. <br><font color="#bcd">Sustained Cost: 30% Mana.</font>';
Ranks[8] = '+16% Damage Resistance while active. <br><font color="#bcd">Sustained Cost: 30% Mana.</font>';
SorceryCollection['a24'] = new Ability('a24', Title, Type, 6, 8, 5, null, 'sorcery/sorcery_sphere-of-protection', Desc, Ranks);

Title = 'Mark of Flame';
Type = 'Active';
Desc = '<font color="#bcd">Cooldown: 0.5 seconds.</font> <br>Tap the button to tag your targets with a magical Mark. Press and hold the button to detonate all marked enemies with a fiery explosion.';
Ranks = new Array();
Ranks[1] = 'Tag up to 3 targets. When executed, Mark of Flame deals 100 Fire Damage and 10 Burning Damage. <br><font color="#bcd">Cost to Mark: 10 Mana. Cost to Execute: 30 Mana.</font>';
Ranks[2] = 'Tag up to 3 targets. When executed, Mark of Flame deals 130 Fire Damage and 15 Burning Damage. <br><font color="#bcd">Cost to Mark: 10 Mana. Cost to Execute: 33 Mana.</font>';
Ranks[3] = 'Tag up to 4 targets. When executed, Mark of Flame deals 160 Fire Damage and 20 Burning Damage. <br><font color="#bcd">Cost to Mark: 10 Mana. Cost to Execute: 36 Mana.</font>';
Ranks[4] = 'Tag up to 4 targets. When executed, Mark of Flame deals 190 Fire Damage and 25 Burning Damage. <br><font color="#bcd">Cost to Mark: 10 Mana. Cost to Execute: 39 Mana.</font>';
Ranks[5] = 'Tag up to 5 targets. When executed, Mark of Flame deals 220 Fire Damage and 30 Burning Damage. <br><font color="#bcd">Cost to Mark: 10 Mana. Cost to Execute: 42 Mana.</font>';
Ranks[6] = 'Tag up to 5 targets. When executed, Mark of Flame deals 250 Fire Damage and 30 Burning Damage. <br><font color="#bcd">Cost to Mark: 10 Mana. Cost to Execute: 45 Mana.</font>';
Ranks[7] = 'Tag up to 5 targets. When executed, Mark of Flame deals 280 Fire Damage and 30 Burning Damage. <br><font color="#bcd">Cost to Mark: 10 Mana. Cost to Execute: 48 Mana.</font>';
SorceryCollection['a25'] = new Ability('a25', Title, Type, 5, 7, 5, null, 'sorcery/sorcery_mark-of-flame', Desc, Ranks);

Title = 'Conservative Casting';
Type = 'Passive';
Desc = 'Having unlocked countless arcane secrets, you are able to power your Abilities with far less Mana.';
Ranks = new Array();
Ranks[1] = 'All Casting costs reduced by 10%.';
Ranks[2] = 'All Casting costs reduced by 13%.';
Ranks[3] = 'All Casting costs reduced by 16%.';
Ranks[4] = 'All Casting costs reduced by 19%.';
Ranks[5] = 'All Casting costs reduced by 22%.';
Ranks[6] = 'All Casting costs reduced by 25%.';
Ranks[7] = 'All Casting costs reduced by 28%.';
SorceryCollection['a27'] = new Ability('a27', Title, Type, 5, 7, 5, null, 'sorcery/sorcery_conservative-casting', Desc, Ranks);

Title = 'Summon Faer Gorta';
Type = 'Active';
Desc = '<font color="#bcd">Cooldown: 4 seconds.</font> <br>Use magic to rapidly construct a Faer Gorta who will fight by your side. Summon lasts for 120 seconds.';
Ranks = new Array();
Ranks[1] = 'Summon a Faer Gorta. <br><font color="#bcd">Cost: 50 Mana.</font>';
Ranks[2] = 'Summoned Faer Gorta has +10% Health and Total Damage. <br><font color="#bcd">Cost: 60 Mana.</font>';
Ranks[3] = 'Summoned Faer Gorta has +25% Health and Total Damage. <br><font color="#bcd">Cost: 65 Mana.</font>';
Ranks[4] = 'Summoned Faer Gorta has +50% Health and Total Damage. <br><font color="#bcd">Cost: 70 Mana.</font>';
Ranks[5] = 'Summoned Faer Gorta has +75% Health and Total Damage. <br><font color="#bcd">Cost: 75 Mana.</font>';
Ranks[6] = 'Summoned Faer Gorta has +100% Health and Total Damage. <br><font color="#bcd">Cost: 80 Mana.</font>';
Ranks[7] = 'Summoned Faer Gorta has +125% Health and Total Damage. <br><font color="#bcd">Cost: 80 Mana.</font>';
Ranks[8] = 'Summoned Faer Gorta has +150% Health and Total Damage. <br><font color="#bcd">Cost: 80 Mana.</font>';
SorceryCollection['a32'] = new Ability('a32', Title, Type, 6, 8, 20, null, 'sorcery/sorcery_summon-faer-gorta', Desc, Ranks);

Title = 'Healing Surge';
Type = 'Active';
Desc = '<font color="#bcd">Cooldown: 30 seconds.</font> <br>Your magic knits together flesh and bone, healing your wounds. Holding the button longer restores more health.';
Ranks = new Array();
Ranks[1] = 'Restores 20% HP upon cast, 10% HP by charging, and 10% HP upon completion. <br><font color="#bcd">Costs 30% Max Mana to Cast, and up to 20% Max Mana to sustain the charge.</font>';
Ranks[2] = 'Restores 20% HP upon cast, 20% HP by charging, and 10% HP upon completion. <br><font color="#bcd">Costs 30% Max Mana to Cast, and up to 20% Max Mana to sustain the charge.</font>';
Ranks[3] = 'Restores 20% HP upon cast, 30% HP by charging, and 10% HP upon completion. <br><font color="#bcd">Costs 30% Max Mana to Cast, and up to 20% Max Mana to sustain the charge.</font>';
Ranks[4] = 'Restores 20% HP upon cast, 40% HP by charging, and 10% HP upon completion. <br><font color="#bcd">Costs 30% Max Mana to Cast, and up to 20% Max Mana to sustain the charge.</font>';
Ranks[5] = 'Restores 20% HP upon cast, 50% HP by charging, and 10% HP upon completion. <br><font color="#bcd">Costs 30% Max Mana to Cast, and up to 20% Max Mana to sustain the charge.</font>';
Ranks[6] = 'Restores 20% HP upon cast, 60% HP by charging, and 10% HP upon completion. <br><font color="#bcd">Costs 30% Max Mana to Cast, and up to 20% Max Mana to sustain the charge.</font>';
Ranks[7] = 'Restores 20% HP upon cast, 70% HP by charging, and 10% HP upon completion. <br><font color="#bcd">Costs 30% Max Mana to Cast, and up to 20% Max Mana to sustain the charge.</font>';
SorceryCollection['a33'] = new Ability('a33', Title, Type, 5, 7, 20, null, 'sorcery/sorcery_healing-surge', Desc, Ranks);

Title = 'Chain Lightning';
Type = 'Upgrade';
Desc = 'Increases Storm Bolt Damage, and causes Shocking Damage to bounce between your enemies more frequently.';
Ranks = new Array();
Ranks[1] = '+10% chance for Shocking Damage to propogate between enemies and increases Storm Bolt damage by 10%.';
Ranks[2] = '+20% chance for Shocking Damage to propogate between enemies and increases Storm Bolt damage by 20%.';
Ranks[3] = '+30% chance for Shocking Damage to propogate between enemies and increases Storm Bolt damage by 30%.';
Ranks[4] = '+40% chance for Shocking Damage to propogate between enemies and increases Storm Bolt damage by 40%.';
Ranks[5] = '+50% chance for Shocking Damage to propogate between enemies and increases Storm Bolt damage by 50%.';
Ranks[6] = '+60% chance for Shocking Damage to propogate between enemies and increases Storm Bolt damage by 55%.';
Ranks[7] = '+70% chance for Shocking Damage to propogate between enemies and increases Storm Bolt damage by 60%.';
SorceryCollection['a36'] = new Ability('a36', Title, Type, 5, 7, 20, SorceryCollection['a16'], 'sorcery/sorcery_chain-lightning', Desc, Ranks);

Title = 'Ice Barrage';
Type = 'Active';
Desc = '<font color="#bcd">Cooldown: 2.5 seconds.</font> <br>Sends a scattered blast of ice shards into the air to crash down upon your foes, dealing Ice and Freezing Damage.';
Ranks = new Array();
Ranks[1] = 'Fires 5 projectiles dealing 15 Ice Damage and 3 Freezing Damage each. <br><font color="#bcd">Cost: 25 mana.</font>';
Ranks[2] = 'Fires 5 projectiles dealing 18 Ice Damage and 4 Freezing Damage each. <br><font color="#bcd">Cost: 30 mana.</font>';
Ranks[3] = 'Fires 7 projectiles dealing 21 Ice Damage and 4 Freezing Damage each. <br><font color="#bcd">Cost: 35 mana.</font>';
Ranks[4] = 'Fires 7 projectiles dealing 24 Ice Damage and 5 Freezing Damage each. <br><font color="#bcd">Cost: 40 mana.</font>';
Ranks[5] = 'Fires 9 projectiles dealing 27 Ice Damage and 5 Freezing Damage each. <br><font color="#bcd">Cost: 45 mana.</font>';
Ranks[6] = 'Fires 9 projectiles dealing 30 Ice Damage and 6 Freezing Damage each. <br><font color="#bcd">Cost: 45 mana.</font>';
Ranks[7] = 'Fires 9 projectiles dealing 33 Ice Damage and 6 Freezing Damage each. <br><font color="#bcd">Cost: 45 mana.</font>';
SorceryCollection['a37'] = new Ability('a37', Title, Type, 5, 7, 20, null, 'sorcery/sorcery_ice-barrage', Desc, Ranks);

Title = 'Arcane Weaponry III';
Type = 'Weapon Attacks';
Desc = 'Unlocks Delayed special attacks for the Staff and Chakrams.';
Ranks = new Array();
Ranks[1] = 'Unlocks <b>Arcane Fury</b>, and <b>Elemental Escape</b>.<br>Reduce Sceptre costs to 3% of max Mana instead of 4%.';
Ranks[2] = '<b>Arcane Fury</b>, and <b>Elemental Escape</b> can apply damage over time in addition to their base damage.';
Ranks[3] = '<b>Arcane Fury</b>, and <b>Elemental Escape</b> award bonus Fate.';
SorceryCollection['a41'] = new Ability('a41', Title, Type, 3, 3, 35, SorceryCollection['a21'], 'sorcery/sorcery_arcane-weaponry', Desc, Ranks);

Title = 'Transference';
Type = 'Upgrade';
Desc = 'Summoned Faer Gorta\'s attacks have a chance to siphon health from enemies and send it to you.';
Ranks = new Array();
Ranks[1] = '+25% chance to siphon health.';
Ranks[2] = '+35% chance to siphon health.';
Ranks[3] = '+45% chance to siphon health.';
Ranks[4] = '+55% chance to siphon health.';
Ranks[5] = '+70% chance to siphon health.';
Ranks[6] = '+85% chance to siphon health.';
Ranks[7] = '+100% chance to siphon health.';
SorceryCollection['a42'] = new Ability('a42', Title, Type, 5, 7, 35, SorceryCollection['a32'], 'sorcery/sorcery_transference', Desc, Ranks);

Title = 'Sphere of Reprisal';
Type = 'Upgrade';
Desc = 'While Sphere of Protection is active, ethereal orbs are created around you which deal damage to enemies they hit.';
Ranks = new Array();
Ranks[1] = 'Invokes 2 ethearal orbs that each deal 50 Physical Damage.';
Ranks[2] = 'Invokes 2 ethearal orbs that each deal 55 Physical Damage.';
Ranks[3] = 'Invokes 2 ethearal orbs that each deal 60 Physical Damage.';
Ranks[4] = 'Invokes 4 ethearal orbs that each deal 65 Physical Damage.';
Ranks[5] = 'Invokes 4 ethearal orbs that each deal 70 Physical Damage.';
Ranks[6] = 'Invokes 4 ethearal orbs that each deal 75 Physical Damage.';
Ranks[7] = 'Invokes 4 ethearal orbs that each deal 80 Physical Damage.';
SorceryCollection['a44'] = new Ability('a44', Title, Type, 5, 7, 35, SorceryCollection['a24'], 'sorcery/sorcery_sphere-of-reprisal', Desc, Ranks);

Title = 'Smolder';
Type = 'Upgrade';
Desc = 'Your mastery over the power of fire allows you to increase the effectiveness of all Burning effects, as well as the damage done by Mark of Flame.';
Ranks = new Array();
Ranks[1] = 'All Burning Damage increased by 20% and Mark of Flame damage by 10%.';
Ranks[2] = 'All Burning Damage increased by 40% and Mark of Flame damage by 20%.';
Ranks[3] = 'All Burning Damage increased by 60% and Mark of Flame damage by 30%.';
Ranks[4] = 'All Burning Damage increased by 80% and Mark of Flame damage by 40%.';
Ranks[5] = 'All Burning Damage increased by 100% and Mark of Flame damage by 50%.';
Ranks[6] = 'All Burning Damage increased by 120% and Mark of Flame damage by 55%.';
Ranks[7] = 'All Burning Damage increased by 140% and Mark of Flame damage by 60%.';
SorceryCollection['a45'] = new Ability('a45', Title, Type, 5, 7, 35, SorceryCollection['a25'], 'sorcery/sorcery_smolder', Desc, Ranks);

Title = 'Frostshackle';
Type = 'Upgrade';
Desc = 'Your knowledge of eldritch frost allows you to extend the duration of all Freezing effects, slowing enemies down for a longer time. Also increases the damage caused by Ice Barrage.';
Ranks = new Array();
Ranks[1] = 'Increase duration of all Freezing effects by 25% and Ice Barrage damage by 10%.';
Ranks[2] = 'Increase duration of all Freezing effects by 50% and Ice Barrage damage by 20%.';
Ranks[3] = 'Increase duration of all Freezing effects by 75% and Ice Barrage damage by 30%.';
Ranks[4] = 'Increase duration of all Freezing effects by 100% and Ice Barrage damage by 40%.';
Ranks[5] = 'Increase duration of all Freezing effects by 150% and Ice Barrage damage by 50%.';
Ranks[6] = 'Increase duration of all Freezing effects by 200% and Ice Barrage damage by 55%.';
Ranks[7] = 'Increase duration of all Freezing effects by 250% and Ice Barrage damage by 60%.';
SorceryCollection['a47'] = new Ability('a47', Title, Type, 5, 7, 35, SorceryCollection['a37'], 'sorcery/sorcery_frostshackle', Desc, Ranks);

Title = 'Arcane Weaponry IV';
Type = 'Weapon Attacks';
Desc = 'Unlocks Dodge special attacks for the Chakrams.';
Ranks = new Array();
Ranks[1] = 'Unlocks <b>Orbital Blades</b>.<br>Reduce Sceptre costs to 2% of max Mana instead of 3%.';
Ranks[2] = '<b>Orbital Blades</b> can apply damage over time in addition to their base damage.';
Ranks[3] = '<b>Orbital Blades</b> awards bonus Fate.';
SorceryCollection['a51'] = new Ability('a51', Title, Type, 3, 3, 50, SorceryCollection['a41'], 'sorcery/sorcery_arcane-weaponry', Desc, Ranks);

Title = 'Masterful Construction';
Type = 'Upgrade';
Desc = 'Your summoned Faer Gorta swings for more hits in its attack chain, and gains a chance to critical hit.';
Ranks = new Array();
Ranks[1] = '+7% chance to critical hit. Chain attack is now 3 hits.';
Ranks[2] = '+10% chance to critical hit. Chain attack is now 3 hits.';
Ranks[3] = '+13% chance to critical hit. Chain attack is now 5 hits.';
Ranks[4] = '+16% chance to critical hit. Chain attack is now 5 hits.';
Ranks[5] = '+19% chance to critical hit. Chain attack is now 7 hits.';
Ranks[6] = '+22% chance to critical hit. Chain attack is now 7 hits.';
Ranks[7] = '+25% chance to critical hit. Chain attack is now 7 hits.';
SorceryCollection['a52'] = new Ability('a52', Title, Type, 5, 7, 50, SorceryCollection['a42'], 'sorcery/sorcery_masterful-construction', Desc, Ranks);

Title = 'Elemental Rage';
Type = 'Active';
Desc = '<font color="#bcd">Cooldown: 6 seconds.</font> <br>Combine the mystic elements of Fire, Lightning, and Ice into a devastating chain of attacks.';
Ranks = new Array();
Ranks[1] = 'Attack 1: Lightning pulses, pulls enemies towards you, causing 90 damage in an area. <br><font color="#bcd">Cost: 55 mana. </font><br><br>Attack 2: Fire torches enemies in the area for 130 damage. <br><font color="#bcd">Cost: 55 mana. </font><br><br>Attack 3: Finished with an Icy explosion, dealing 100 more damage and slowing enemies. <br><font color="#bcd">Cost: 60 mana.</font>';
Ranks[2] = 'Attack 1: Lightning pulses, pulls enemies towards you, causing 105 damage in an area. <br><font color="#bcd">Cost: 60 mana. </font><br><br>Attack 2: Fire torches enemies in the area for 150 damage. <br><font color="#bcd">Cost: 60 mana. </font><br><br>Attack 3: Finished with an Icy explosion, dealing 110 more damage and slowing enemies. <br><font color="#bcd">Cost: 65 mana.</font>';
Ranks[3] = 'Attack 1: Lightning pulses, pulls enemies towards you, causing 120 damage in an area. <br><font color="#bcd">Cost: 65 mana. </font><br><br>Attack 2: Fire torches enemies in the area for 170 damage. <br><font color="#bcd">Cost: 65 mana. </font><br><br>Attack 3: Finished with an Icy explosion, dealing 125 more damage and slowing enemies. <br><font color="#bcd">Cost: 70 mana.</font>';
Ranks[4] = 'Attack 1: Lightning pulses, pulls enemies towards you, causing 135 damage in an area. <br><font color="#bcd">Cost: 70 mana. </font><br><br>Attack 2: Fire torches enemies in the area for 190 damage. <br><font color="#bcd">Cost: 70 mana. </font><br><br>Attack 3: Finished with an Icy explosion, dealing 145 more damage and slowing enemies. <br><font color="#bcd">Cost: 75 mana.</font>';
Ranks[5] = 'Attack 1: Lightning pulses, pulls enemies towards you, causing 150 damage in an area. <br><font color="#bcd">Cost: 75 mana. </font><br><br>Attack 2: Fire torches enemies in the area for 210 damage. <br><font color="#bcd">Cost: 75 mana. </font><br><br>Attack 3: Finished with an Icy explosion, dealing 170 more damage and slowing enemies. <br><font color="#bcd">Cost: 80 mana.</font>';
Ranks[6] = 'Attack 1: Lightning pulses, pulls enemies towards you, causing 165 damage in an area. <br><font color="#bcd">Cost: 75 mana. </font><br><br>Attack 2: Fire torches enemies in the area for 230 damage. <br><font color="#bcd">Cost: 75 mana. </font><br><br>Attack 3: Finished with an Icy explosion, dealing 200 more damage and slowing enemies. <br><font color="#bcd">Cost: 80 mana.</font>';
Ranks[7] = 'Attack 1: Lightning pulses, pulls enemies towards you, causing 180 damage in an area. <br><font color="#bcd">Cost: 75 mana. </font><br><br>Attack 2: Fire torches enemies in the area for 250 damage. <br><font color="#bcd">Cost: 75 mana. </font><br><br>Attack 3: Finished with an Icy explosion, dealing 230 more damage and slowing enemies. <br><font color="#bcd">Cost: 80 mana.</font>';
SorceryCollection['a53'] = new Ability('a53', Title, Type, 5, 7, 50, null, 'sorcery/sorcery_elemental-rage', Desc, Ranks);

Title = 'Tempest';
Type = 'Active';
Desc = '<font color="#bcd">Cooldown: 3.5 seconds.</font> <br>Hold the button for Storm Bolt to summon forth lightning from the heavens, smiting all nearby foes.';
Ranks = new Array();
Ranks[1] = 'Deals 360 Lightning Damage and 30 Shocking Damage in an area. <br><font color="#bcd">Cost: 135 mana.</font>';
Ranks[2] = 'Deals 400 Lightning Damage and 35 Shocking Damage in an area. <br><font color="#bcd">Cost: 145 mana.</font>';
Ranks[3] = 'Deals 440 Lightning Damage and 40 Shocking Damage in an area. <br><font color="#bcd">Cost: 155 mana.</font>';
Ranks[4] = 'Deals 480 Lightning Damage and 45 Shocking Damage in an area. <br><font color="#bcd">Cost: 165 mana.</font>';
Ranks[5] = 'Deals 520 Lightning Damage and 50 Shocking Damage in an area. <br><font color="#bcd">Cost: 175 mana.</font>';
Ranks[6] = 'Deals 560 Lightning Damage and 55 Shocking Damage in an area. <br><font color="#bcd">Cost: 175 mana.</font>';
Ranks[7] = 'Deals 600 Lightning Damage and 60 Shocking Damage in an area. <br><font color="#bcd">Cost: 175 mana.</font>';
SorceryCollection['a56'] = new Ability('a56', Title, Type, 5, 7, 50, SorceryCollection['a36'], 'sorcery/sorcery_tempest', Desc, Ranks);

Title = 'Sphere of Retribution';
Type = 'Upgrade';
Desc = 'Sphere of Protection gains the power to fire off deadly ethereal splinters when enemies draw near.';
Ranks = new Array();
Ranks[1] = 'Ethereal Splinters deal 110 Physical Damage, interrupting the target.';
Ranks[2] = 'Ethereal Splinters deal 120 Physical Damage, interrupting the target.';
Ranks[3] = 'Ethereal Splinters deal 130 Physical Damage, staggering the target.';
Ranks[4] = 'Ethereal Splinters deal 140 Physical Damage, staggering the target.';
Ranks[5] = 'Ethereal Splinters deal 150 Physical Damage, knocking down the target.';
Ranks[6] = 'Ethereal Splinters deal 160 Physical Damage, knocking down the target.';
Ranks[7] = 'Ethereal Splinters deal 170 Physical Damage, knocking down the target.';
SorceryCollection['a64'] = new Ability('a64', Title, Type, 5, 7, 70, SorceryCollection['a44'], 'sorcery/sorcery_sphere-of-retribution', Desc, Ranks);

Title = 'Meteor';
Type = 'Active';
Desc = '<font color="#bcd">Cooldown: 25 seconds.</font> <br>Calls forth a meteor from the skies, dealing massive damage to the area before you.';
Ranks = new Array();
Ranks[1] = 'Deals 500 Fire and 75 Burning Damage in an area, at target\'s location. <br><font color="#bcd">Cost: 250 mana.</font>';
Ranks[2] = 'Deals 550 Fire and 80 Burning Damage in an area, at target\'s location. <br><font color="#bcd">Cost: 260 mana.</font>';
Ranks[3] = 'Deals 600 Fire and 85 Burning Damage in an area, at target\'s location. <br><font color="#bcd">Cost: 270 mana.</font>';
Ranks[4] = 'Deals 650 Fire and 90 Burning Damage in an area, at target\'s location. <br><font color="#bcd">Cost: 280 mana.</font>';
Ranks[5] = 'Deals 700 Fire and 95 Burning Damage in an area, at target\'s location. <br><font color="#bcd">Cost: 290 mana.</font>';
Ranks[6] = 'Deals 750 Fire and 100 Burning Damage in an area, at target\'s location. <br><font color="#bcd">Cost: 290 mana.</font>';
Ranks[7] = 'Deals 800 Fire and 105 Burning Damage in an area, at target\'s location. <br><font color="#bcd">Cost: 290 mana.</font>';
SorceryCollection['a65'] = new Ability('a65', Title, Type, 5, 7, 70, SorceryCollection['a45'], 'sorcery/sorcery_meteor', Desc, Ranks);

Title = 'Winter\'s Embrace';
Type = 'Active';
Desc = '<font color="#bcd">Cooldown: 2.5 seconds.</font> <br>Hold the button for Ice Barrage to launch a persistent cloud of ice shards which lasts for a duration. Enemies in the blizzard suffer periodic Ice, Piercing and Freezing Damage.';
Ranks = new Array();
Ranks[1] = '10 Ice and 5 Piercing Damage per second. Duration: 15 seconds. <br><font color="#bcd">Cost: 180 mana.</font>';
Ranks[2] = '15 Ice and 10 Piercing Damage per second. Duration: 15 seconds. <br><font color="#bcd">Cost: 190 mana.</font>';
Ranks[3] = '20 Ice and 15 Piercing Damage per second. Duration: 15 seconds. <br><font color="#bcd">Cost: 200 mana.</font>';
Ranks[4] = '25 Ice and 20 Piercing Damage per second. Duration: 15 seconds. <br><font color="#bcd">Cost: 210 mana.</font>';
Ranks[5] = '30 Ice and 25 Piercing Damage per second. Duration: 15 seconds. <br><font color="#bcd">Cost: 220 mana.</font>';
Ranks[6] = '35 Ice and 30 Piercing Damage per second. Duration: 15 seconds. <br><font color="#bcd">Cost: 220 mana.</font>';
Ranks[7] = '40 Ice and 35 Piercing Damage per second. Duration: 15 seconds. <br><font color="#bcd">Cost: 220 mana.</font>';
SorceryCollection['a67'] = new Ability('a67', Title, Type, 5, 7, 70, SorceryCollection['a47'], 'sorcery/sorcery_winters-embrace', Desc, Ranks);

function Ability(_0xbee3x11, _0xbee3x12, _0xbee3x13, _0xbee3x14, _0xbee3x15, _0xbee3x16, _0xbee3x17, _0xbee3x18, _0xbee3x19, _0xbee3x1a) {
	this['ID'] = 0;
	this['GridPosition'] = _0xbee3x11;
	this['Name'] = _0xbee3x12;
	this['Type'] = _0xbee3x13;
	this['Count'] = 0;
	this['Max'] = _0xbee3x14;
	this['CountB'] = 0;
	this['Ultimate'] = _0xbee3x15;
	this['Required'] = _0xbee3x16;
	this['Prereq'] = _0xbee3x17;
	this['Image'] = new Object();
	this['Image']['On'] = new Image();
	this['Image']['On']['src'] = 'http://' + document.location.host + '/KOAS_Calc/images/' + _0xbee3x18 + '_on.png';
	this['Image']['Off'] = new Image();
	this['Image']['Off']['src'] = 'http://' + document.location.host + '/KOAS_Calc/images/' + _0xbee3x18 + '_off.png';
	this['Description'] = _0xbee3x19;
	this['RequiredBy'] = null;
	this['Ranks'] = _0xbee3x1a;
	if (_0xbee3x17 != null) {
		_0xbee3x17['RequiredBy'] = this;
	};
};

function AbilityClick(_0xbee3x1b, _0xbee3x1c) {
	if (currenttree == 'might') {
		var _0xbee3x1d = TryTreeUpdate(_0xbee3x1b, _0xbee3x1c, MightCollection, mightpoints);
		if (_0xbee3x1d > 0) {
			AdjustMight(_0xbee3x1b, _0xbee3x1d, _0xbee3x1c, MightCollection[_0xbee3x1c]);
			if (initialized) {
				UpdateEligible(MightCollection, mightpoints);
			};
		};
	} else {
		if (currenttree == 'finesse') {
			var _0xbee3x1d = TryTreeUpdate(_0xbee3x1b, _0xbee3x1c, FinesseCollection, finessepoints);
			if (_0xbee3x1d > 0) {
				AdjustFinesse(_0xbee3x1b, _0xbee3x1d, _0xbee3x1c, FinesseCollection[_0xbee3x1c]);
				if (initialized) {
					UpdateEligible(FinesseCollection, finessepoints);
				};
			};
		} else {
			var _0xbee3x1d = TryTreeUpdate(_0xbee3x1b, _0xbee3x1c, SorceryCollection, sorcerypoints);
			if (_0xbee3x1d > 0) {
				AdjustSorcery(_0xbee3x1b, _0xbee3x1d, _0xbee3x1c, SorceryCollection[_0xbee3x1c]);
				if (initialized) {
					UpdateEligible(SorceryCollection, sorcerypoints);
				};
			};
		};
	};
};

function TryTreeUpdate(_0xbee3x1b, _0xbee3x1c, _0xbee3x1e, _0xbee3x1f) {
    if (_0xbee3x1b['button'] == 0 || _0xbee3x1b['button'] == 1) {
		if (TryAddPoint(_0xbee3x1e[_0xbee3x1c], _0xbee3x1f)) {
			return 1;
		};
	} else {
		if (TrySubtractPoint(_0xbee3x1e[_0xbee3x1c], _0xbee3x1f)) {
			return 2;
		};
	};
	return 0;
};

function TryAddPoint(_0xbee3x20, _0xbee3x21) {
	return (_0xbee3x20['Count'] < _0xbee3x20['Max'] && _0xbee3x20['Required'] <= _0xbee3x21 && pointsspent < 153 && (_0xbee3x20['Prereq'] == null || _0xbee3x20['Prereq']['Count'] > 0));
};

function TrySubtractPoint(_0xbee3x20, _0xbee3x21) {
	return (_0xbee3x20['Count'] > 0 && (_0xbee3x20['RequiredBy'] == null || _0xbee3x20['RequiredBy']['Count'] == 0 || _0xbee3x20['Count'] > 1) && CheckUpperTier(_0xbee3x20) > 0);
};

function CheckUpperTier(_0xbee3x20) {
	if (currenttree == 'might') {
		return CheckUpperTier2(_0xbee3x20, MightCollection, mightpoints);
	} else {
		if (currenttree == 'finesse') {
			return CheckUpperTier2(_0xbee3x20, FinesseCollection, finessepoints);
		} else {
			return CheckUpperTier2(_0xbee3x20, SorceryCollection, sorcerypoints);
		};
	};
};

function CheckUpperTier2(_0xbee3x20, _0xbee3x1e2, _0xbee3x1f) {
	var _0xbee3x22 = _0xbee3x20['Count'];
	for (var _0xbee3x23 in _0xbee3x1e2) {
		var _0xbee3x20Elem = _0xbee3x1e2[_0xbee3x23];
		if (_0xbee3x20Elem['Count'] > 0 && _0xbee3x20Elem['Required'] > _0xbee3x20['Required']) {
			if (_0xbee3x1f - GetPointsInTierUp(_0xbee3x20Elem, _0xbee3x1e2) - _0xbee3x20Elem['Required'] < _0xbee3x22) {
				_0xbee3x22 = Math.max(0, _0xbee3x1f - GetPointsInTierUp(_0xbee3x20Elem, _0xbee3x1e2) - _0xbee3x20Elem['Required']);
			};
		};
	};
	return _0xbee3x22;
};

function GetPointsInTierUp(_0xbee3x20, _0xbee3x1e2) {
	var _0xbee3x22 = 0;
	for (var _0xbee3x23 in _0xbee3x1e2) {
		var _0xbee3x20Elem = _0xbee3x1e2[_0xbee3x23];
		if (_0xbee3x20Elem['Required'] >= _0xbee3x20['Required']) {
			_0xbee3x22 += _0xbee3x20Elem['Count'];
		};
	};
	return _0xbee3x22;
};

function AdjustMight(_0xbee3x1b, _0xbee3x1d2, _0xbee3x1c, _0xbee3x20) {
	if (_0xbee3x1d2 == 1) {
		if (_0xbee3x1b['shiftKey']) {
			var _0xbee3x24 = Math.min(153 - pointsspent, _0xbee3x20['Max'] - _0xbee3x20['Count']);
		} else {
			var _0xbee3x24 = 1;
		}
		mightpoints += _0xbee3x24;
		_0xbee3x20['Count'] += _0xbee3x24;
		if (_0xbee3x20['Count'] + mightbonuspoints <= _0xbee3x20['Ultimate']) {
			_0xbee3x20['CountB'] = _0xbee3x20['Count'] + mightbonuspoints;
		} else {
			_0xbee3x20['CountB'] = _0xbee3x20['Ultimate'];
		}

	} else {
		if (_0xbee3x1b['shiftKey']) {
			var _0xbee3x24 = -CheckUpperTier(_0xbee3x20);
			if (_0xbee3x20['RequiredBy'] != null && _0xbee3x20['RequiredBy']['Count'] > 0 && (_0xbee3x20['Count'] + _0xbee3x24 == 0)) {
				_0xbee3x24 += 1
			}
		} else {
			var _0xbee3x24 = -1;
		}
		mightpoints += _0xbee3x24;
		_0xbee3x20['Count'] += _0xbee3x24;
		if (_0xbee3x20['Count'] > 0) {
			if (_0xbee3x20['Count'] + mightbonuspoints <= _0xbee3x20['Ultimate']) {
				_0xbee3x20['CountB'] = _0xbee3x20['Count'] + mightbonuspoints;
			} else {
				_0xbee3x20['CountB'] = _0xbee3x20['Ultimate'];
			}
		} else {
			_0xbee3x20['CountB'] = 0;
		}
	};
	document['getElementById']('calc_mightcounter')['innerHTML'] = mightpoints;
	UpdateHash(_0xbee3x20);
	AdjustPoints(_0xbee3x24);
};

function AdjustFinesse(_0xbee3x1b, _0xbee3x1d2, _0xbee3x1c, _0xbee3x20) {
	if (_0xbee3x1d2 == 1) {
		if (_0xbee3x1b['shiftKey']) {
			var _0xbee3x24 = Math.min(153 - pointsspent, _0xbee3x20['Max'] - _0xbee3x20['Count']);
		} else {
			var _0xbee3x24 = 1;
		}
		finessepoints += _0xbee3x24;
		_0xbee3x20['Count'] += _0xbee3x24;
		if (_0xbee3x20['Count'] + finessebonuspoints <= _0xbee3x20['Ultimate']) {
			_0xbee3x20['CountB'] = _0xbee3x20['Count'] + finessebonuspoints;
		} else {
			_0xbee3x20['CountB'] = _0xbee3x20['Ultimate'];
		}

	} else {
		if (_0xbee3x1b['shiftKey']) {
			var _0xbee3x24 = -CheckUpperTier(_0xbee3x20);
			if (_0xbee3x20['RequiredBy'] != null && _0xbee3x20['RequiredBy']['Count'] > 0 && (_0xbee3x20['Count'] + _0xbee3x24 == 0)) {
				_0xbee3x24 += 1
			}
		} else {
			var _0xbee3x24 = -1;
		}
		finessepoints += _0xbee3x24;
		_0xbee3x20['Count'] += _0xbee3x24;
		if (_0xbee3x20['Count'] > 0) {
			if (_0xbee3x20['Count'] + finessebonuspoints <= _0xbee3x20['Ultimate']) {
				_0xbee3x20['CountB'] = _0xbee3x20['Count'] + finessebonuspoints;
			} else {
				_0xbee3x20['CountB'] = _0xbee3x20['Ultimate'];
			}
		} else {
			_0xbee3x20['CountB'] = 0;
		}
	};
	document['getElementById']('calc_finessecounter')['innerHTML'] = finessepoints;
	UpdateHash(_0xbee3x20);
	AdjustPoints(_0xbee3x24);
};

function AdjustSorcery(_0xbee3x1b, _0xbee3x1d2, _0xbee3x1c, _0xbee3x20) {
	if (_0xbee3x1d2 == 1) {
		if (_0xbee3x1b['shiftKey']) {
			var _0xbee3x24 = Math.min(153 - pointsspent, _0xbee3x20['Max'] - _0xbee3x20['Count']);
		} else {
			var _0xbee3x24 = 1;
		}
		sorcerypoints += _0xbee3x24;
		_0xbee3x20['Count'] += _0xbee3x24;
		if (_0xbee3x20['Count'] + sorcerybonuspoints <= _0xbee3x20['Ultimate']) {
			_0xbee3x20['CountB'] = _0xbee3x20['Count'] + sorcerybonuspoints;
		} else {
			_0xbee3x20['CountB'] = _0xbee3x20['Ultimate'];
		}

	} else {
		if (_0xbee3x1b['shiftKey']) {
			var _0xbee3x24 = -CheckUpperTier(_0xbee3x20);
			if (_0xbee3x20['RequiredBy'] != null && _0xbee3x20['RequiredBy']['Count'] > 0 && (_0xbee3x20['Count'] + _0xbee3x24 == 0)) {
				_0xbee3x24 += 1
			}
		} else {
			var _0xbee3x24 = -1;
		}
		sorcerypoints += _0xbee3x24;
		_0xbee3x20['Count'] += _0xbee3x24;
		if (_0xbee3x20['Count'] > 0) {
			if (_0xbee3x20['Count'] + sorcerybonuspoints <= _0xbee3x20['Ultimate']) {
				_0xbee3x20['CountB'] = _0xbee3x20['Count'] + sorcerybonuspoints;
			} else {
				_0xbee3x20['CountB'] = _0xbee3x20['Ultimate'];
			}
		} else {
			_0xbee3x20['CountB'] = 0;
		}
	};
	document['getElementById']('calc_sorcerycounter')['innerHTML'] = sorcerypoints;
	UpdateHash(_0xbee3x20);
	AdjustPoints(_0xbee3x24);
};

function UpdateHash(_0xbee3x20) {
	if (initialized) {
		var _0xbee3x2f = hash[_0xbee3x20['ID']];
		_0xbee3x2f = _0xbee3x20['Count'];
		hash = hash['substring'](0, _0xbee3x20.ID) + _0xbee3x2f + hash['substring'](_0xbee3x20['ID'] + 1);
		window['location']['hash'] = '#' + hash;
	};
};

function UpdateEligible(_0xbee3x1e, _0xbee3x1f) {
	ClearTree();
	for (var _0xbee3x23 in _0xbee3x1e) {
		var _0xbee3x20 = _0xbee3x1e[_0xbee3x23];
		if ((_0xbee3x20['Count'] > 0) && ((currenttree == 'might' && mightbonuspoints > 0) || (currenttree == 'finesse' && finessebonuspoints > 0) || (currenttree == 'sorcery' && sorcerybonuspoints > 0))) {
			if (_0xbee3x20['CountB'] < _0xbee3x20['Ultimate']) {
				var _0xbee3x25 = '<span class="calc_iconcounterbonus">' + '&#8202;(' + _0xbee3x20['CountB'] + ')' + '</span>';
			} else {
				var _0xbee3x25 = '<span class="calc_iconcounterbonus calc_iconcounterultimate">' + '&#8202;(' + _0xbee3x20['CountB'] + ')' + '</span>';
			}
		} else {
			var _0xbee3x25 = ''
		}
		if (_0xbee3x20['Count'] < _0xbee3x20['Max'] && _0xbee3x20['Required'] <= _0xbee3x1f && (_0xbee3x20['Prereq'] == null || _0xbee3x20['Prereq']['Count'] > 0) && pointsspent < 153) {
			document['getElementById'](_0xbee3x23)['innerHTML'] = '<div class="calc_icon" oncontextmenu="return false"><img src="' + _0xbee3x20['Image']['On']['src'] + '"/><div class="calc_iconcounter calc_iconcounter1">' + _0xbee3x20['Count'] + _0xbee3x25 + '</div></div>';
		} else {
			if (_0xbee3x20['Count'] == _0xbee3x20['Max'] || (pointsspent == 153 && _0xbee3x20['Count'] > 0)) {
				document['getElementById'](_0xbee3x23)['innerHTML'] = '<div class="calc_icon" oncontextmenu="return false"><img src="' + _0xbee3x20['Image']['On']['src'] + '"/><div class="calc_iconcounter calc_iconcounter2">' + _0xbee3x20['Count'] + _0xbee3x25 + '</div></div>';
			} else {
				document['getElementById'](_0xbee3x23)['innerHTML'] = '<div class="calc_icon" oncontextmenu="return false"><img src="' + _0xbee3x20['Image']['Off']['src'] + '"/><div class="calc_iconcounter calc_iconcounter0">' + _0xbee3x20['Count'] + '</div></div>';
			};
		};
	};
};

function AdjustPoints(_0xbee3x24) {
	pointsspent += _0xbee3x24;
	document['getElementById']('calc_pointscounter')['innerHTML'] = pointsspent;
	var _0xbee3x26 = Math['round']((pointsspent - 2) / 3);
	if (_0xbee3x26 < 0) {
		_0xbee3x26 = 0;
	};
	document['getElementById']('calc_levelcounter')['innerHTML'] = _0xbee3x26;
	var _0xbee3x27 = Math['round']( (50*Math.pow(1.036, _0xbee3x26)) * (1 + 0.02*mightpoints + 0.014*finessepoints + 0.008*sorcerypoints) );
	document['getElementById']('calc_HPcounter')['innerHTML'] = _0xbee3x27;
	var _0xbee3x28 = Math['round']( (50*Math.pow(1.036, _0xbee3x26)) * (1 + 0.008*mightpoints + 0.014*finessepoints + 0.02*sorcerypoints) );
	document['getElementById']('calc_MPcounter')['innerHTML'] = _0xbee3x28;
};

function FillOutTree(_0xbee3x29, _0xbee3x1c) {
	ClearTree();
	if (_0xbee3x1c == 0) {
		if (currenttree == 'might') {
			currenttree = 'finesse';
			document['getElementById']('calc_headertable')['style']['background'] = 'url("' + 'http://' + document.location.host + '/KOAS_Calc/images/finesseactive.png")';
			document['getElementById']('calc_abilitytree')['style']['background'] = 'url("' + 'http://' + document.location.host + '/KOAS_Calc/images/finessetree.png")';
			UpdateEligible(FinesseCollection, finessepoints);
		} else {
			if (currenttree == 'finesse') {
				currenttree = 'sorcery';
				document['getElementById']('calc_headertable')['style']['background'] = 'url("' + 'http://' + document.location.host + '/KOAS_Calc/images/sorceryactive.png")';
				document['getElementById']('calc_abilitytree')['style']['background'] = 'url("' + 'http://' + document.location.host + '/KOAS_Calc/images/sorcerytree.png")';
				UpdateEligible(SorceryCollection, sorcerypoints);
			} else {
				currenttree = 'might';
				document['getElementById']('calc_headertable')['style']['background'] = 'url("' + 'http://' + document.location.host + '/KOAS_Calc/images/mightactive.png")';
				document['getElementById']('calc_abilitytree')['style']['background'] = 'url("' + 'http://' + document.location.host + '/KOAS_Calc/images/mighttree.png")';
				UpdateEligible(MightCollection, mightpoints);
			};
		};
	} else {
		if (_0xbee3x1c == 1) {
			if (currenttree == 'might') {
				currenttree = 'sorcery';
				document['getElementById']('calc_headertable')['style']['background'] = 'url("' + 'http://' + document.location.host + '/KOAS_Calc/images/sorceryactive.png")';
				document['getElementById']('calc_abilitytree')['style']['background'] = 'url("' + 'http://' + document.location.host + '/KOAS_Calc/images/sorcerytree.png")';
				UpdateEligible(SorceryCollection, sorcerypoints);
			} else {
				if (currenttree == 'finesse') {
					currenttree = 'might';
					document['getElementById']('calc_headertable')['style']['background'] = 'url("' + 'http://' + document.location.host + '/KOAS_Calc/images/mightactive.png")';
					document['getElementById']('calc_abilitytree')['style']['background'] = 'url("' + 'http://' + document.location.host + '/KOAS_Calc/images/mighttree.png")';
					UpdateEligible(MightCollection, mightpoints);
				} else {
					currenttree = 'finesse';
					document['getElementById']('calc_headertable')['style']['background'] = 'url("' + 'http://' + document.location.host + '/KOAS_Calc/images/finesseactive.png")';
					document['getElementById']('calc_abilitytree')['style']['background'] = 'url("' + 'http://' + document.location.host + '/KOAS_Calc/images/finessetree.png")';
					UpdateEligible(FinesseCollection, finessepoints);
				};
			};
		} else {
			if (currenttree == 'might') {
				document['getElementById']('calc_headertable')['style']['background'] = 'url("' + 'http://' + document.location.host + '/KOAS_Calc/images/mightactive.png")';
				document['getElementById']('calc_abilitytree')['style']['background'] = 'url("' + 'http://' + document.location.host + '/KOAS_Calc/images/mighttree.png")';
				UpdateEligible(MightCollection, mightpoints);
			} else {
				if (currenttree == 'finesse') {
					document['getElementById']('calc_headertable')['style']['background'] = 'url("' + 'http://' + document.location.host + '/KOAS_Calc/images/finesseactive.png")';
					document['getElementById']('calc_abilitytree')['style']['background'] = 'url("' + 'http://' + document.location.host + '/KOAS_Calc/images/finessetree.png")';
					UpdateEligible(FinesseCollection, finessepoints);
				} else {
					document['getElementById']('calc_headertable')['style']['background'] = 'url("' + 'http://' + document.location.host + '/KOAS_Calc/images/sorceryactive.png")';
					document['getElementById']('calc_abilitytree')['style']['background'] = 'url("' + 'http://' + document.location.host + '/KOAS_Calc/images/sorcerytree.png")';
					UpdateEligible(SorceryCollection, sorcerypoints);
				};
			};
		};
	};
};

function Bonus(_0xbee3x2a, _0xbee3x1b) {
	if (_0xbee3x2a == 1) {
		if (_0xbee3x1b['button'] == 0 || _0xbee3x1b['button'] == 1) {
			if (_0xbee3x1b['shiftKey']) {
				mightbonuspoints = bonusmax;
			} else {
				mightbonuspoints = Math.min(bonusmax, mightbonuspoints + 1);
			}
		} else {
			if (_0xbee3x1b['shiftKey']) {
				mightbonuspoints = 0;
			} else {
				mightbonuspoints = Math.max(0, mightbonuspoints - 1);
			}
		}
		BonusTree(MightCollection, 1);
		if (mightbonuspoints == bonusmax) {
			document['getElementById']('calc_mightbonuscounter')['innerHTML'] = '<font color="#0ec">(+' + mightbonuspoints + ')</font>';
		} else {
			if (mightbonuspoints == 0) {
				document['getElementById']('calc_mightbonuscounter')['innerHTML'] = '';
			} else {
				document['getElementById']('calc_mightbonuscounter')['innerHTML'] = '<font color="#0ae">(+' + mightbonuspoints + ')</font>';
			}
		}
		hash = hash['substring'](0, 76) + mightbonuspoints + hash['substring'](77);
		window['location']['hash'] = '#' + hash;
	} else {
		if (_0xbee3x2a == 2) {
			if (_0xbee3x1b['button'] == 0 || _0xbee3x1b['button'] == 1) {
				if (_0xbee3x1b['shiftKey']) {
					finessebonuspoints = bonusmax;
				} else {
					finessebonuspoints = Math.min(bonusmax, finessebonuspoints + 1);
				}
			} else {
				if (_0xbee3x1b['shiftKey']) {
					finessebonuspoints = 0;
				} else {
					finessebonuspoints = Math.max(0, finessebonuspoints - 1);
				}
			}
			BonusTree(FinesseCollection, 2);
			if (finessebonuspoints == bonusmax) {
				document['getElementById']('calc_finessebonuscounter')['innerHTML'] = '<font color="#0ec">(+' + finessebonuspoints + ')</font>';
			} else {
				if (finessebonuspoints == 0) {
					document['getElementById']('calc_finessebonuscounter')['innerHTML'] = '';
				} else {
					document['getElementById']('calc_finessebonuscounter')['innerHTML'] = '<font color="#0ae">(+' + finessebonuspoints + ')</font>';
				}
			}
			hash = hash['substring'](0, 77) + finessebonuspoints + hash['substring'](78);
			window['location']['hash'] = '#' + hash;
		} else {
			if (_0xbee3x1b['button'] == 0 || _0xbee3x1b['button'] == 1) {
				if (_0xbee3x1b['shiftKey']) {
					sorcerybonuspoints = bonusmax;
				} else {
					sorcerybonuspoints = Math.min(bonusmax, sorcerybonuspoints + 1);
				}
			} else {
				if (_0xbee3x1b['shiftKey']) {
					sorcerybonuspoints = 0;
				} else {
					sorcerybonuspoints = Math.max(0, sorcerybonuspoints - 1);
				}
			}
			BonusTree(SorceryCollection, 3);
			if (sorcerybonuspoints == bonusmax) {
				document['getElementById']('calc_sorcerybonuscounter')['innerHTML'] = '<font color="#0ec">(+' + sorcerybonuspoints + ')</font>';
			} else {
				if (sorcerybonuspoints == 0) {
					document['getElementById']('calc_sorcerybonuscounter')['innerHTML'] = '';
				} else {
					document['getElementById']('calc_sorcerybonuscounter')['innerHTML'] = '<font color="#0ae">(+' + sorcerybonuspoints + ')</font>';
				}
			}
			hash = hash['substring'](0, 78) + sorcerybonuspoints;
			window['location']['hash'] = '#' + hash;
		};
	};
	ClearTree();
	FillOutTree(null, 2);
};

function BonusTree(_0xbee3x1e, _0xbee3x2a) {
	if (_0xbee3x2a == 1) {
		var _0xbee3x2b = mightbonuspoints;
	} else {
		if (_0xbee3x2a == 2) {
			var _0xbee3x2b = finessebonuspoints;
		} else {
			var _0xbee3x2b = sorcerybonuspoints;
		}
	}
	for (var _0xbee3x23 in _0xbee3x1e) {
		var _0xbee3x20 = _0xbee3x1e[_0xbee3x23];
		if (_0xbee3x20['Count'] > 0) {
			_0xbee3x20['CountB'] = Math.min(_0xbee3x20['Ultimate'], _0xbee3x20['Count'] + _0xbee3x2b);
		}
	};
};

function Reset(_0xbee3x2a) {
	if (_0xbee3x2a == 0) {
		hash = hash['substring'](0, 76) + '000';
		ResetTree(MightCollection);
		mightpoints = 0;
		document['getElementById']('calc_mightcounter')['innerHTML'] = mightpoints;
		mightbonuspoints = 0;
		document['getElementById']('calc_mightbonuscounter')['innerHTML'] = '';
		ResetTree(FinesseCollection);
		finessepoints = 0;
		document['getElementById']('calc_finessecounter')['innerHTML'] = finessepoints;
		finessebonuspoints = 0;
		document['getElementById']('calc_finessebonuscounter')['innerHTML'] = '';
		ResetTree(SorceryCollection);
		sorcerypoints = 0;
		document['getElementById']('calc_sorcerycounter')['innerHTML'] = sorcerypoints;
		sorcerybonuspoints = 0;
		document['getElementById']('calc_sorcerybonuscounter')['innerHTML'] = '';
	} else {
		if (_0xbee3x2a == 1) {
			hash = hash['substring'](0, 76) + '0' + hash['substring'](77);
			ResetTree(MightCollection);
			mightpoints = 0;
			document['getElementById']('calc_mightcounter')['innerHTML'] = mightpoints;
			mightbonuspoints = 0;
			document['getElementById']('calc_mightbonuscounter')['innerHTML'] = '';
		} else {
			if (_0xbee3x2a == 2) {
				hash = hash['substring'](0, 77) + '0' + hash['substring'](78);
				ResetTree(FinesseCollection);
				finessepoints = 0;
				document['getElementById']('calc_finessecounter')['innerHTML'] = finessepoints;
				finessebonuspoints = 0;
				document['getElementById']('calc_finessebonuscounter')['innerHTML'] = '';
			} else {
				hash = hash['substring'](0, 78) + '0';
				ResetTree(SorceryCollection);
				sorcerypoints = 0;
				document['getElementById']('calc_sorcerycounter')['innerHTML'] = sorcerypoints;
				sorcerybonuspoints = 0;
				document['getElementById']('calc_sorcerybonuscounter')['innerHTML'] = '';
			};
		};
	};
	var _0xbee3x26 = Math['round']((pointsspent - 2) / 3);
	if (_0xbee3x26 < 0) {
		_0xbee3x26 = 0;
	};
	document['getElementById']('calc_levelcounter')['innerHTML'] = _0xbee3x26;
	var _0xbee3x27 = Math['round']( (50*Math.pow(1.036, _0xbee3x26)) * (1 + 0.02*mightpoints + 0.014*finessepoints + 0.008*sorcerypoints) );
	document['getElementById']('calc_HPcounter')['innerHTML'] = _0xbee3x27;
	var _0xbee3x28 = Math['round']( (50*Math.pow(1.036, _0xbee3x26)) * (1 + 0.008*mightpoints + 0.014*finessepoints + 0.02*sorcerypoints) );
	document['getElementById']('calc_MPcounter')['innerHTML'] = _0xbee3x28;
	ClearTree();
	if (currenttree == 'might') {
		FillOutTree(null, 2);
	} else {
		if (currenttree == 'finesse') {
			FillOutTree(null, 2);
		} else {
			FillOutTree(null, 2);
		};
	};
};

function ResetTree(_0xbee3x1e, _0xbee3x1f) {
	for (var _0xbee3x23 in _0xbee3x1e) {
		var _0xbee3x20 = _0xbee3x1e[_0xbee3x23];
		pointsspent -= _0xbee3x20['Count'];
		_0xbee3x1f = 0;
		_0xbee3x20['Count'] = 0;
		_0xbee3x20['CountB'] = 0;
		UpdateHash(_0xbee3x20);
	};
	UpdateEligible(_0xbee3x1e, _0xbee3x1f);
	document['getElementById']('calc_pointscounter')['innerHTML'] = pointsspent;
};

function PopUp(_0xbee3x1c) {
	if (currenttree == 'might') {
		return oPopUp(MightCollection[_0xbee3x1c], 0);
	} else {
		if (currenttree == 'finesse') {
			return oPopUp(FinesseCollection[_0xbee3x1c], 1);
		} else {
			return oPopUp(SorceryCollection[_0xbee3x1c], 2);
		};
	};
};

function oPopUp(_0xbee3x20, _0xbee3x2a) {
	var _0xbee3x3f = null;
	if (_0xbee3x2a == 0) {
		_0xbee3x3f = mightpoints;
	} else {
		if (_0xbee3x2a == 1) {
			_0xbee3x3f = finessepoints;
		} else {
			_0xbee3x3f = sorcerypoints;
		};
	};
	if (typeof _0xbee3x20 != 'undefined') {
		var _0xbee3x40 = '<font color="orange">' + _0xbee3x20['Name'] + '</font><font color="#dcb"> [' + _0xbee3x20['Type'] + ']</font><br/>';
		var _0xbee3x41 = false;
		var _0xbee3x42 = _0xbee3x20['Required'] > _0xbee3x3f;
		var _0xbee3x43 = _0xbee3x20['Prereq'] != null && _0xbee3x20['Prereq']['Count'] == 0;
		if (_0xbee3x42 || _0xbee3x43) {
			_0xbee3x40 += '<b><font color="red">' + _0xbee3x20['CountB'] + '/' + _0xbee3x20['Max'] + '</font></b></br>';
			if (_0xbee3x42) {
				_0xbee3x40 += '<font color="red">Requires ' + _0xbee3x20['Required'] + ' points.</font></br>';
			};
			if (_0xbee3x43) {
				_0xbee3x40 += '<font color="red">Requires ' + _0xbee3x20['Prereq']['Name'] + '.</font></br>';
			};
			_0xbee3x40 += _0xbee3x20['Description'] + '<br/><br/><font color="orange">Next Rank: </font>' + _0xbee3x20['Ranks'][1];
		} else {
			if (_0xbee3x20['CountB'] == _0xbee3x20['Ultimate']) {
				if ((currenttree == 'might' && mightbonuspoints > 0) || (currenttree == 'finesse' && finessebonuspoints > 0) || (currenttree == 'sorcery' && sorcerybonuspoints > 0)) {
					_0xbee3x40 += '<b><font color="#0ec">' + _0xbee3x20['CountB'] + '/' + _0xbee3x20['Max'] + '</font></b></br>' + _0xbee3x20['Description'] + '<br/><br/><font color="#0cd">Current Rank: </font>' + _0xbee3x20['Ranks'][_0xbee3x20['CountB']];
				} else {
					_0xbee3x40 += '<b><font color="#f8f800">' + _0xbee3x20['CountB'] + '/' + _0xbee3x20['Max'] + '</font></b></br>' + _0xbee3x20['Description'] + '<br/><br/><font color="orange">Current Rank: </font>' + _0xbee3x20['Ranks'][_0xbee3x20['CountB']];
				};
			} else {
				if (_0xbee3x20['CountB'] > _0xbee3x20['Max']) {
					_0xbee3x40 += '<b><font color="#0ae">' + _0xbee3x20['CountB'] + '/' + _0xbee3x20['Max'] + '</font></b></br>' + _0xbee3x20['Description'] + '<br/><br/><font color="#0cd">Current Rank: </font>' + _0xbee3x20['Ranks'][_0xbee3x20['CountB']] + '<br/><br/><font color="#0cd">Next Rank:</font> ' + _0xbee3x20['Ranks'][_0xbee3x20['CountB'] + 1];
				} else {
					if (_0xbee3x20['CountB'] == _0xbee3x20['Max']) {
						_0xbee3x40 += '<b><font color="#f8f800">' + _0xbee3x20['CountB'] + '/' + _0xbee3x20['Max'] + '</font></b></br>' + _0xbee3x20['Description'] + '<br/><br/><font color="orange">Current Rank: </font>' + _0xbee3x20['Ranks'][_0xbee3x20['CountB']] + '<br/><br/><font color="#0cd">Next Rank:</font> ' + _0xbee3x20['Ranks'][_0xbee3x20['CountB'] + 1];
					} else {
						if (_0xbee3x20['Count'] == 0) {
							_0xbee3x40 += '<b><font color="#00e800">' + _0xbee3x20['CountB'] + '/' + _0xbee3x20['Max'] + '</font></b></br>' + _0xbee3x20['Description'] + '<br/><br/><font color="orange">Next Rank: </font>' + _0xbee3x20['Ranks'][1];
						} else {
							_0xbee3x40 += '<b><font color="#00e800">' + _0xbee3x20['CountB'] + '/' + _0xbee3x20['Max'] + '</font></b></br>' + _0xbee3x20['Description'] + '<br/><br/><font color="orange">Current Rank: </font>' + _0xbee3x20['Ranks'][_0xbee3x20['CountB']] + '<br/><br/><font color="orange">Next Rank:</font> ' + _0xbee3x20['Ranks'][_0xbee3x20['CountB'] + 1];
						};
					};
				};
			};
		};
		return _0xbee3x40;
	};
};

function ClearTree() {
	document['getElementById']('a61')['innerHTML'] = '';
	document['getElementById']('a62')['innerHTML'] = '';
	document['getElementById']('a63')['innerHTML'] = '';
	document['getElementById']('a64')['innerHTML'] = '';
	document['getElementById']('a65')['innerHTML'] = '';
	document['getElementById']('a66')['innerHTML'] = '';
	document['getElementById']('a67')['innerHTML'] = '';
	document['getElementById']('a51')['innerHTML'] = '';
	document['getElementById']('a52')['innerHTML'] = '';
	document['getElementById']('a53')['innerHTML'] = '';
	document['getElementById']('a54')['innerHTML'] = '';
	document['getElementById']('a55')['innerHTML'] = '';
	document['getElementById']('a56')['innerHTML'] = '';
	document['getElementById']('a57')['innerHTML'] = '';
	document['getElementById']('a41')['innerHTML'] = '';
	document['getElementById']('a42')['innerHTML'] = '';
	document['getElementById']('a43')['innerHTML'] = '';
	document['getElementById']('a44')['innerHTML'] = '';
	document['getElementById']('a45')['innerHTML'] = '';
	document['getElementById']('a46')['innerHTML'] = '';
	document['getElementById']('a47')['innerHTML'] = '';
	document['getElementById']('a31')['innerHTML'] = '';
	document['getElementById']('a32')['innerHTML'] = '';
	document['getElementById']('a33')['innerHTML'] = '';
	document['getElementById']('a34')['innerHTML'] = '';
	document['getElementById']('a35')['innerHTML'] = '';
	document['getElementById']('a36')['innerHTML'] = '';
	document['getElementById']('a37')['innerHTML'] = '';
	document['getElementById']('a21')['innerHTML'] = '';
	document['getElementById']('a22')['innerHTML'] = '';
	document['getElementById']('a23')['innerHTML'] = '';
	document['getElementById']('a24')['innerHTML'] = '';
	document['getElementById']('a25')['innerHTML'] = '';
	document['getElementById']('a26')['innerHTML'] = '';
	document['getElementById']('a27')['innerHTML'] = '';
	document['getElementById']('a11')['innerHTML'] = '';
	document['getElementById']('a12')['innerHTML'] = '';
	document['getElementById']('a13')['innerHTML'] = '';
	document['getElementById']('a14')['innerHTML'] = '';
	document['getElementById']('a15')['innerHTML'] = '';
	document['getElementById']('a16')['innerHTML'] = '';
	document['getElementById']('a17')['innerHTML'] = '';
};

function Import() {
	if (window.innerWidth >=1023) {
		window.scrollTo(0,260);
	} else {
		window.scrollTo(0,290);
	}
	var _0xbee3x1e = new Array();
	GetAllAbilities(_0xbee3x1e);
	var _0xbee3x46 = window['location']['hash']['substring'](1);
	if ((_0xbee3x46 == '') || (_0xbee3x46 == 'm1') || (_0xbee3x46 == 'm2') || (_0xbee3x46 == 'Top')) {
		hash = hash_init;
		window['location']['hash'] = '#' + hash;
		initialized = true;
		return;
	} else {
		hash = _0xbee3x46;
	};
	if (hash['length'] != 79) {
		alert('Error with importing. Invalid build.');
		hash = hash_init;
		window['location']['hash'] = '#' + hash;
		initialized = true;
		return;
	};
	var _0xbee3x47 = new Object();
	_0xbee3x47['button'] = new Object();
	_0xbee3x47['button'] = 0;
	for (var _0xbee3x48 = 0; _0xbee3x48 < 76; _0xbee3x48++) {
		if (_0xbee3x48 == 25) {
			currenttree = 'finesse';
		} else {
			if (_0xbee3x48 == 51) {
				currenttree = 'sorcery';
			};
		};
		for (var _0xbee3x49 = 0; _0xbee3x49 < hash[_0xbee3x48]; _0xbee3x49++) {
			AbilityClick(_0xbee3x47, _0xbee3x1e[_0xbee3x48].GridPosition);
		};
	};
	initialized = true;
	if (mightpoints >= finessepoints && mightpoints >= sorcerypoints) {
		currenttree = 'might';
		FillOutTree(null, 2);
	} else {
		if (finessepoints >= sorcerypoints) {
			currenttree = 'finesse';
			FillOutTree(null, 2);
		} else {
			currenttree = 'sorcery';
			FillOutTree(null, 2);
		};
	};
	mightbonuspoints = parseInt(hash[76]);
	finessebonuspoints = parseInt(hash[77]);
	sorcerybonuspoints = parseInt(hash[78]);
	BonusTree(MightCollection, 1);
	if (mightbonuspoints == bonusmax) {
		document['getElementById']('calc_mightbonuscounter')['innerHTML'] = '<font color="#0ec">(+' + mightbonuspoints + ')</font>';
	} else {
		if (mightbonuspoints == 0) {
			document['getElementById']('calc_mightbonuscounter')['innerHTML'] = '';
		} else {
			document['getElementById']('calc_mightbonuscounter')['innerHTML'] = '<font color="#0ae">(+' + mightbonuspoints + ')</font>';
		}
	}
	BonusTree(FinesseCollection, 2);
	if (finessebonuspoints == bonusmax) {
		document['getElementById']('calc_finessebonuscounter')['innerHTML'] = '<font color="#0ec">(+' + finessebonuspoints + ')</font>';
	} else {
		if (finessebonuspoints == 0) {
			document['getElementById']('calc_finessebonuscounter')['innerHTML'] = '';
		} else {
			document['getElementById']('calc_finessebonuscounter')['innerHTML'] = '<font color="#0ae">(+' + finessebonuspoints + ')</font>';
		}
	}
	BonusTree(SorceryCollection, 3);
	if (sorcerybonuspoints == bonusmax) {
		document['getElementById']('calc_sorcerybonuscounter')['innerHTML'] = '<font color="#0ec">(+' + sorcerybonuspoints + ')</font>';
	} else {
		if (sorcerybonuspoints == 0) {
			document['getElementById']('calc_sorcerybonuscounter')['innerHTML'] = '';
		} else {
			document['getElementById']('calc_sorcerybonuscounter')['innerHTML'] = '<font color="#0ae">(+' + sorcerybonuspoints + ')</font>';
		}
	}
	ClearTree();
	FillOutTree(null, 2);
};

function GetAllAbilities(_0xbee3x1e) {
	var _0xbee3x2e = 0;
	_0xbee3x2e = LoopTree(_0xbee3x1e, MightCollection, _0xbee3x2e);
	_0xbee3x2e = LoopTree(_0xbee3x1e, FinesseCollection, _0xbee3x2e);
	_0xbee3x2e = LoopTree(_0xbee3x1e, SorceryCollection, _0xbee3x2e);
};

function LoopTree(_0xbee3x4c, _0xbee3x1e, _0xbee3x2e) {
	for (var _0xbee3x23 in _0xbee3x1e) {
		var _0xbee3x20 = _0xbee3x1e[_0xbee3x23];
		_0xbee3x4c[_0xbee3x2e] = _0xbee3x20;
		_0xbee3x20['ID'] = _0xbee3x2e;
		_0xbee3x2e++;
	};
	return _0xbee3x2e;
};

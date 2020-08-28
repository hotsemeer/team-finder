import Boss from '@/classes/Boss';

export default [
  new Boss('Barrows: Rise of the six', 650, 'rise_of_the_six.png'),
  new Boss('Corporeal Beast', 785, 'corporeal_beast.png'),
  new Boss('Kalphite King', 650, 'kalphite_king.png'),
  new Boss('Solak', 7000, 'solak.png'),
  new Boss('Vorago', 10000, 'vorago.png'),
  new Boss('Nex', 1001, 'nex.png', ['Gwd1']),
  new Boss("K'ril Tsutsaroth", 650, 'kril_tsutsaroth.png', ['Gwd1']),
  new Boss('General Graardor', 624, 'general_graardor.png', ['Gwd1']),
  new Boss('Commander Zilyana', 569, 'commander_zilyana.png', ['Gwd1']),
  new Boss("kree'arra", 580, 'kree_arra.png', ['Gwd1']),
  new Boss(
    'Nex: Angel of Death',
    7000,
    'angel_of_death.png',
    ['Gwd1'],
    [7, 10],
    [
      'Base1',
      'Base2',
      'Minion tank (U)',
      'Minion tank (G)',
      'Minion tank (C)',
      'Minion tank (F)',
      'Free mage'
    ]
  ),
  new Boss('Gregorovic', 1000, 'gregorovic.png', ['Gwd2']),
  new Boss('Twin Furies', 1000, 'twin_furies.png', ['Gwd2']),
  new Boss('Vindicta', 1000, 'vindicta.png', ['Gwd2']),
  new Boss('Helwyr', 1000, 'helwyr.png', ['Gwd2']),
  new Boss('Temple of Aminishi', 0, 'seiryu.png', ['Elite Dungeons']),
  new Boss('Dragonkin Laboratory', 0, 'black_stone_dragon.png', [
    'Elite Dungeons'
  ]),
  new Boss('The shadow reef', 0, 'ambassador.png', ['Elite Dungeons']),
  new Boss('Beastmaster Durzag', 2000, 'beastmaster_durzag.png', ['Raids']),
  new Boss('Full Raid', 10000, 'yakamaru.png', ['Raids'])
];

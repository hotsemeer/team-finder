import Boss from './Boss';
import uniqueId from 'lodash/uniqueId';
import RunescapeAccount from './RunescapeAccount';

export default class Team {
  id: String = uniqueId();
  _boss: Boss;
  host: RunescapeAccount;
  size: Number = 2;
  members_left: Number = 1;
  required_roles: Array<String> = [];
  required_experience: ExperienceType = ExperienceType.Experienced;
  lootshare_type: LootshareType = LootshareType.FreeForAll;
  members: Array<String> = [];
  created_at: Date = new Date()

  constructor(boss: Boss, host: RunescapeAccount) {
    this._boss = boss;
    this.size = boss.team_sizes[0];
    this.host = host;
  }

  set boss(newBoss: Boss) {
    this._boss = newBoss;
    this.size = newBoss.team_sizes[0];
  }
  get boss(): Boss {
    return this._boss;
  }
}

export enum LootshareType {
  FreeForAll = 'Free For All',
  LootShare = 'LootShare',
  CoinShare = 'CoinShare'
}

export enum ExperienceType {
  BeginnerFriendly = 'Beginner friendly',
  Experienced = 'Experienced',
  Pro = 'Pro',
  Elitist = 'Elitist'
}
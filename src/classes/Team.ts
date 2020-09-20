import Boss from './Boss';
import uniqueId from 'lodash/uniqueId';
import RunescapeAccount from './RunescapeAccount';

export default class Team {
  public id: string = uniqueId();
  public _boss: Boss;
  public host: RunescapeAccount;
  public size: Number = 2;
  public members_left: Number = 1;
  public required_roles: string[] = [];
  public required_experience: ExperienceType = ExperienceType.Experienced;
  public lootshare_type: LootshareType = LootshareType.FreeForAll;
  public members: string[] = [];
  public created_at: Date = new Date();

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
  CoinShare = 'CoinShare',
}

export enum ExperienceType {
  BeginnerFriendly = 'Beginner friendly',
  Experienced = 'Experienced',
  Pro = 'Pro',
  Elitist = 'Elitist',
}

import uniqueId from 'lodash/uniqueId';

export default class Boss {
  public id: string = uniqueId();
  public name: string;
  public combat_level: Number;
  public image: string;
  public tags: string[] = [];
  public team_sizes: Number[] = [2, 3, 4, 5];
  public roles: string[] = [];

  constructor(
    name: string,
    combatLvl: Number,
    img: string,
    tags: string[] = [],
    team_sizes: Number[] = [2, 3, 4, 5],
    roles: string[] = []
  ) {
    this.name = name;
    this.combat_level = combatLvl;
    this.image = img;
    this.tags = tags;
    this.team_sizes = team_sizes;
    this.roles = roles;
  }
}

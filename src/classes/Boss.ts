import uniqueId from 'lodash/uniqueId';

export default class Boss {
  public id: String = uniqueId();
  public name: String;
  public combat_level: Number;
  public image: String;
  public tags: String[] = [];
  public team_sizes: Number[] = [2, 3, 4, 5];
  public roles: String[] = [];

  constructor(
    name: String,
    combatLvl: Number,
    img: String,
    tags: String[] = [],
    team_sizes: Number[] = [2, 3, 4, 5],
    roles: String[] = []
  ) {
    this.name = name;
    this.combat_level = combatLvl;
    this.image = img;
    this.tags = tags;
    this.team_sizes = team_sizes;
    this.roles = roles;
  }
}

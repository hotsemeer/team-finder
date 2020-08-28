import uniqueId from 'lodash/uniqueId';

export default class Boss {
  id: String = uniqueId();
  name: String;
  combat_level: Number;
  image: String;
  tags: Array<String> = [];
  team_sizes: Array<Number> = [2, 3, 4, 5];
  roles: Array<String> = [];

  constructor(
    name: String,
    combatLvl: Number,
    img: String,
    tags: Array<String> = [],
    team_sizes: Array<Number> = [2, 3, 4, 5],
    roles: Array<String> = []
  ) {
    this.name = name;
    this.combat_level = combatLvl;
    this.image = img;
    this.tags = tags;
    this.team_sizes = team_sizes;
    this.roles = roles;
  }
}

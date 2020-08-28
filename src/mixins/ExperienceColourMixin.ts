export default {
  methods: {
    expColour(experience: String): string {
      switch (experience) {
        case 'Experienced':
          return 'text--darken-3 blue';
        case 'Pro':
          return 'text--darken-3 orange';
        case 'Elitist':
          return 'text--darken-3 red';
        case 'Beginner friendly':
        default:
          return 'text--darken-3 green';
      }
    }
  }
};
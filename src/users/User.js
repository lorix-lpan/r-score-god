class User {
  constructor(id) {
    // Each user lives for at most two hours
    this.expired = (new Date().getHours()) + 1;
    // Initialize as conversation step is 1
    this.step = 0;
    this.id = id;
    this.rScore = null;

    this.addStep = this.addStep.bind(this);
    this.setRScore = this.setRScore.bind(this);
  }

  addStep() {
    this.step ++;
  }

  setRScore(score) {
    this.rScore = score;
  }
}

export default User;

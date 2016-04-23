class User {

  constructor(id) {
    this.id = id;
    this.step = 0;
    this.rScore = null;

    // Each user lives for at most two hours
    this.expired = (new Date().getHours()) + 1;

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

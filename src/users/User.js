class User {
  constructor(id) {
    // Each user lives for at most two hours
    this.expired = (new Date().getHours()) + 1
    // Initialize as conversation step is 1
    this.step = 0;
    this.id = id;

    this.addStep = this.addStep.bind(this);
  }

  addStep() {
    this.step ++;
  }
}

export default User;

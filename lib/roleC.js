class role {

    constructor (id, title, salary, department_id) {
  
      this.id            = id;
      this.title         = title;
      this.salary        = salary;
      this.department_id = department_id
      this.category      = "role";
    }
}

module.exports = role;
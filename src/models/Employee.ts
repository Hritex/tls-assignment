
class Employee {
    public name: String
    public email: String
    public work: String
    private pwd: String
    private ID: Number

    constructor()
    constructor(email: String)
    constructor(name: String, email: String)
    constructor(name: String, email: String, pwd: String, work: String)
    constructor(name?: String, email?: String, pwd?: String, work?: String) {
        this.pwd = pwd!
        this.name = name!
        this.email = email!
        this.work = work!
    }

    register() {
        this.ID = Math.round(Math.random() * 10000)
    }

    getJsonObject(): Object {
        return {
            email: this.email,
            name: this.name,
            pwd: this.pwd,
            work: this.work,
            ID: this.ID
        }
    }
}

export default Employee;
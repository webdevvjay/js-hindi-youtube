class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get password() {
            return `${this._password}vijay`
    }

    set password(value) {
        this._password = value
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }
    }

const vijay = new User("vijay@gmail.com", "abc")
console.log(vijay.email)
console.log(vijay.password)
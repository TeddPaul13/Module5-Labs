class Message {
    constructor(){
        this.id = Math.round(Math.random() * 1000)
    }
    logMessage =(result) =>{
        console.log(`Result for calculation ID: ${this.id} is ${result}`)
    }
}

module.exports = Message;
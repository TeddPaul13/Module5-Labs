class Message {
    constructor(){
        this.id = Math.round(Math.random() * 1000)
        
    }
    logMessage =(result) =>{
        console.log(`[The result for Calculation ID: ${this.id}]:${result}`) // This line is not logging to the console as required.
    }
}

module.exports = Message;
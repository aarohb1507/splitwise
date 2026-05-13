class User{
    constructor(id, name){
        this.id = id 
        this.name = name
    }
}

class SplitwiseService{
    constructor(){
        this.balances = {}
    }
    
    addBalance(fromUser, toUser, amount){
        if(!(fromUser in this.balances)){
            this.balances[fromUser] = {}
        }
        if(!(toUser in this.balances)){
            this.balances[toUser] = {}
        }
        if(!(toUser in this.balances[fromUser])){
            this.balances[fromUser][toUser] = amount
        }else{
            this.balances[fromUser][toUser] += amount
        }
        if(!(fromUser in this.balances[toUser])){
            this.balances[toUser][fromUser] = -amount
        }else{
            this.balances[toUser][fromUser] -= amount
        }
    }
    
    addExpense(paidBy, amount, participants){
        const perHead = amount/participants.length
        participants.forEach((guy)=> {
            if(guy != paidBy){
                this.addBalance(paidBy, guy, perHead)
            }
            
        })
    }
    showBalances(){
    for (const fromUser in this.balances){
        for (const toUser in this.balances[fromUser]){
             const amount = this.balances[fromUser][toUser]
        
        if (amount > 0){
            console.log(`${toUser} owes ${amount} to ${fromUser}`)
        }
        }
       
    }
}
}
const s1 = new SplitwiseService()

s1.addExpense("Aaroh", 600, ["Aaroh", "Anup", "Sourav"])
console.log(s1)
console.log(s1.showBalances())
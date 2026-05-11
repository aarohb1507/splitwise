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
}
const s1 = new SplitwiseService()
s1.addBalance("Aaroh", "Sourav", 300)
console.log(s1)

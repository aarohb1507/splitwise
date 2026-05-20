class User {
	constructor(id, name) {
		this.id = id
		this.name = name
	}
}

class SplitwiseService {
	constructor() {
		this.balances = {}
	}

	addBalance(fromUser, toUser, amount) {
		if(!(fromUser in this.balances)) {
			this.balances[fromUser] = {}
		}
		if(!(toUser in this.balances)) {
			this.balances[toUser] = {}
		}
		if(!(toUser in this.balances[fromUser])) {
			this.balances[fromUser][toUser] = amount
		} else {
			this.balances[fromUser][toUser] += amount
		}
		if(!(fromUser in this.balances[toUser])) {
			this.balances[toUser][fromUser] = -amount
		} else {
			this.balances[toUser][fromUser] -= amount
		}
	}

	addEqualExpense(paidBy, amount, participants) {
		const perHead = amount/participants.length
		participants.forEach((guy)=> {
			if(guy != paidBy) {
				this.addBalance(paidBy, guy, perHead)
			}

		})
	}
	showBalances() {
		for (const fromUser in this.balances) {
			for (const toUser in this.balances[fromUser]) {
				const amount = this.balances[fromUser][toUser]

				if (amount > 0) {
					console.log(`${toUser} owes ${amount} to ${fromUser}`)
				}
			}

		}
	}
	
	exactPayment(payee, peopleWhoOwe){
	    for(const [key, value] of Object.entries(peopleWhoOwe)){
	        this.addBalance(payee, key, value)
	    }
	}
	
}
const s1 = new SplitwiseService()

s1.exactPayment("Aaroh", {"Sourav": 200, "Anup":500})
console.log(s1)
console.log(s1.showBalances())

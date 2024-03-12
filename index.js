// A visual representation of a linked list to help understanding what the goal is.

/* 
const list = {
    head: {
        value: 6
        next: {
            value: 10                                             
            next: {
                value: 12
                next: {
                    value: 3
                    next: null	
                    }
                }
            }
        }
    }
};
*/

// class constructor for a the nodes of the list

class ListNode {
	constructor(data) {
		// data node will be the element of data this node keeps.
		this.data = data
		// next will be the pointer to the next node in the list
		this.next = null
	}
}

// class constructor for a linked list(the final product)

class LinkedList {
	// If a head is not passed, initialise to null. (empty linked list)
	constructor(head = null) {
		// head points to the first node, starting at null( see parameter )
		this.head = head
		// tail points to the last node, starting at null
		this.tail = null
		// length determines the length of the current list, set to 0 initially.
		this.length = 0
	}
	// Using the power of classes, we can include some methods to help use the linked lists

	// Method for adding a node to the end of the list.
	append(value) {
		// Create a new node using the value provided
		const node = new ListNode(value)
		// check if the list is currently empty, if so, set both the head and the tail to the new node.
		if (!this.head) {
			this.head = this.tail = node
		} else {
			// if the list is not empty, updadte the next property of the current list node to this new node.
			this.tail.next = node
			// update the tail of the linked list to the new node
			this.tail = node
		}
		// update the length of the linked list, increment by 1.
		this.length++
	}

	// Method for adding a node to the beginning of the list.
	prepend(value) {
		// Follows alot of the same process as append()
		const node = new ListNode(value)

		if (!this.head) {
			this.head = this.tail = node
		} else {
			// Difference is here:
			// assign the current head of the list to prevHead
			let prevHead = this.head
			// set the new node to be the first after the head
			this.head.next = node
			// set the new head nodes link to the previous head node
			node.next = prevHead
		}
		this.length++
	}

	// method for adding
	// method to return the number of nodes present in the list:
	size() {
		// start counting at 0, from the head of the list.
		let count = 0
		let node = this.head
		// While node is true, keep counting, and incrementing to the next node.
		while (node) {
			count++
			node = node.next
		}
		// until node is false, (or null) return the count.
		return count
	}

	// method returning the first node of the list.
	head() {
		// much like clear, just return the first node of the list.
		return this.head
	}

	// method to return the last node of the linked list
	tail() {
		// Much like size, start at the head of the linked list.
		let lastNode = this.head
		// if lastNode is true, continue.
		if (lastNode) {
			// while the next node of the current node we are checking is truthy(not null)
			while (lastNode.next) {
				// set lastNode to the node next linked node we are currently on.
				lastNode = lastNode.next
			}
		}
		// do this until we reach null, then return null.
		return lastNode
	}

	// method to clear the linked list, cutting the link so to speak.
	clear() {
		this.head = null
	}
}

// testing below:

// create nodes
let node1 = new ListNode(2)
let node2 = new ListNode(8)

// link node 1 to node 2 with next pointer
node1.next = node2

// create a linked list with node1
let list1 = new LinkedList(node1)

// Resulting list:
console.log(list1) // LinkedList {head: ListNode { data: 2, next: ListNode { data: 8, next: null } }}

// Look familiar? See the visual representation of what we were going for in the start of this file.

// Can also dig through the linked list to get some specific data:
console.log(list1.head.next.data) // 8

console.log(list1.getLast()) // ListNode { data: 8, next: null }

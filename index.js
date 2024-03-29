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

// TODO: Optimise process by making functions for repeated code blocks (e.g. finding a node index)

// class constructor for a the nodes of the list

class ListNode {
	constructor(data) {
		// data node will be the element of data this node keeps.
		this.data = data
		// next will be the pointer to the next node in the list
		this.next = null
		// prev will be the pointed to the previous node in the list
		this.prev = null
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
		// Create a new node using the provided value
		let node = new ListNode(value)

		// if the list is empty, assign node as new head
		if (!this.head) {
			this.head = node
			this.tail = node
		}

		// if list is not empty, add node to tail of list
		this.tail.next = node

		// set the previous nodes tail to this node
		node.prev = this.tail

		// set this node to the tail of the list
		this.tail = node

		// increment hte length of the list
		this.length++

		// return the list
		return this
	}

	// Method for adding a node to the beginning of the list.
	prepend(value) {
		// Follows alot of the same process as append()
		let node = new ListNode(value)

		// if the list is empty...
		if (!this.head) {
			this.head = node
			this.tail = this.head
		}
		// if the list is not empty
		// assign the new node as the node before the current head node
		this.head.prev = node
		// assign the old head node as the next node of the new node
		node.next = this.head
		// assign the new node as the head node.
		this.head = node

		//increment the length of the list
		this.length++
		return this
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
	// method that returns the node of the provided index
	at(index) {
		// variable representing the currently selected node
		let currentNode

		// check for input validity.
		if (index < 0 || index >= this.length) return undefined

		// now for the actual search:
		// Since the list is double linked, we can leverage a split search approach.
		// So we will use for/ while loops to search from either the head or tail of the list.
		// this halves the search time effectively
		if (index <= this.length / 2) {
			currentNode = this.head
			for (let i = 0; i < index; i++) currentNode = currentNode.next
		} else {
			currentNode = this.tail
			for (let i = this.length; i > index; i--) currentNode = currentNode.prev
		}
		return currentNode
	}

	// method to clear the linked list, cutting the link so to speak.
	clear() {
		this.head = null
	}

	// Method similar to pop() for arrays, remove the last node of the chain
	pop() {
		// set the target of the operation, the tail.
		let removed = this.tail
		// if no tail exists
		if (!this.tail) return undefined

		// if we happened to remove the last item in the list, reset the list head/tail to null
		if (this.length === 1) {
			this.head = null
			this.tail = null
		}

		// set the tail of the list to the node before the removed node.
		this.tail = removed.prev
		// set the new tails next to null (because it is the tail) effectively cutting off the node.
		this.tail.next = null

		// decrement the length of the list
		this.length--
		// return the removed node ( dunno, use it somewhere else? )
		return removed
	}
	// Much like at, but returns true if the value exist in the linked list.
	contains(value) {
		if (!this.head) return null
		let currentNode = this.head

		while (currentNode) {
			if (currentNode.data === value) return true
			currentNode = currentNode.next
		}
		return false
	}

	// method for finding the node containing the provided value.
	find(value) {
		if (!this.head) return -1 // return -1 if list is empty.
		let currentNode = this.head // start counting from first node.
		let index = 0 // start counting index at 0

		while (currentNode) {
			if (currentNode.data === value) return index
			currentNode = currentNode.next
			index++ // increment index for each iteration
		}
		return null
	}
	toString() {
		if (!this.head) return null
		let currentNode = this.head
		let str = ''
		while (currentNode) {
			str += currentNode.data + ' '
			currentNode = currentNode.next
		}
		return str
	}

	// much like prepend and append, but with a specific part of the chain provided
	// This method is very much a mix of alot of the above methods in terms of checks
	insertAt(value, index) {
		let node = new ListNode(value)
		let currentNode

		// if the list is empty, just assign the new node as the head.
		if (!this.head) {
			this.head = node
			this.tail = node
		}

		// Check for valid index provided
		if (index < 0 || index >= this.length) return undefined

		// Search for the provided index
		if (index <= this.length / 2) {
			currentNode = this.head
			for (let i = 0; i < index; i++) currentNode = currentNode.next
		} else {
			currentNode = this.tail
			for (let i = this.length; i > index; i--) currentNode = currentNode.prev
		}
		// figure out the next node of the current node
		let nextNode = currentNode.next

		// append the current node with the new node
		currentNode.next = node

		// append the new node, with current nodes previous next node ( sorry for this sentence )
		node.next = nextNode
		// set the new nodes previous node to the currentNode
		node.prev = currentNode

		// increment the length of the list
		this.length++

		// return the new list
		return this
	}
	removeAt(index) {
		// the node we traverse the list with
		let currentNode
		// First some checks as usual for validity
		if (!this.head) return null

		if (index < 0 || index >= this.length) return undefined

		// now, just like insertAt, but cut a node off.
		// find the given index
		if (index <= this.length / 2) {
			currentNode = this.head
			for (let i = 0; i < index; i++) currentNode = currentNode.next
		} else {
			currentNode = this.tail
			for (let i = this.length; i > index; i--) currentNode = currentNode.prev
		}

		// Fetch the previous node before this one
		let prevNode = currentNode.prev

		// and the next one after it
		let nextNode = currentNode.next

		// Tie the two neighbouring nodes together, cutting off the currentNode
		prevNode.next = nextNode

		// decrement length of list
		this.length--
	}
}

// testing below:

//create list

list1 = new LinkedList()

list1.append(4) // head, index 0
list1.append(2) // index 1
list1.append(8) // index 2
list1.append(17) // index 3
list1.append(20)
list1.append(1)
list1.append(3)
list1.append(14)
list1.append(7)
list1.append(6) // tail
// null

console.log('List1 length at start test ' + list1.length) // 10
console.log('Find index 3 node ' + list1.at(3)) // 17
list1.pop()
console.log('list length after pop() ' + list1.length) // 9
console.log('did the list contain the value 14? ' + list1.contains(14)) // true
console.log('What is the index of value 7? ' + list1.find(7))
console.log('The linked list as string: ' + list1.toString())
list1.insertAt(69, 5)
console.log(' list after insertAt at index 5 input 69: ' + list1)
list1.removeAt(5)
console.log('list after removing index 5(69) ' + list1)

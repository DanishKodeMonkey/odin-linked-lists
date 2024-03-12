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
		this.head = head
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

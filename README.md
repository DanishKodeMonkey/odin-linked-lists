# Linked lists

## An exercise in common data structures

### specifically the creation and use for linked lists.

## What is a linked list?

A linked list is a linear collection of data elements, called nodes, that contain some data, and a "pointer" that serves to reference, or "point" to the next node.

A linked list comes in a few forms.

#### A single linked list

- Each node of the list includes a single element of data, and a pointer to the next node in the list.

#### A doubly linked list

- Each node of the list includes a pointer towards the previous node in the list, a element of data, and a pointer to the next element of the list.

Each of the above lists include a head node, that contains no data, only a pointer to the first element node in the list.
As well as a tail node, with a value of null, indicating the end of the list.

#### Another type of linked list is a circular linked list

- Here, the last node of the list, points to the first node, or the head, of the list.

#### What can they do?

Common features of a linked list includes the functionality to traverse the list,
as well as add, and remove list elements to the head, or tail of the list.

More advanced features that could be included would be
searching for specific nodes in the list,
insert a new node somewhere in the middle of the list,
and remove nodes in the middle of the list

## Isn't this just arrays?

In short, yes and no.

The main difference between arrays and linked lists is the way that they take up memory and add/remove nodes/items.

Arrays by nature is static in the sense that it takes up a certain amount of memory representing the array, in order. And that array is now contained to the single block of memory.
If the array is in any way edited, items added, removed etc. A new array is formed with the edits, and the old one discarded( unless specifically saved as a third variable. )

Linked lists however, are dynamic data structures. Seperated bytes of data, referencing to other seperated bytes of data somewhere else in memory with it's pointer.
Linked lists dont need to take up a single block of memory this way, but are instead scattered throughout.

#### This does comes with it's pros and const ofcouse.

While linked lists does make better use of memory, the linked nature of the list results in slower search times.
This is due to the fact that while arrays have indexes associated with each item in it, and can be searched for by way of this. Linked lists do not.
Because of this, searching through a linked list requires iterating through the entire list. Traversing node after node, which can be time consuming.

Furthermore linked lists take up more memory by nature of it's pointers.
Where arrays instead are easy to traverse as they will always be in the same block of memory, needing no pointers.

## Which one is best?

As always it's a matter of use case, arrays are plenty sufficient in most cases however. But it's always good to have more options in the tool belt.
In the end I've come to understand the importance of reviewing a project during development, and weight the pros and cons of different solutions to a problem.

# check it out!

My little exercise in the implementation of a linked list can be found here, have a look!

### Some thank yous

While naturally this project is an exercise I've done during [the odin projects curriculum on the topic](https://www.theodinproject.com/lessons/javascript-linked-lists)

[one particular article by Vaidehi Joshi](https://dev.to/vaidehijoshi/whats-a-linked-list-anyway) provided in the course, really helped getting the materials to stick. So thanks!

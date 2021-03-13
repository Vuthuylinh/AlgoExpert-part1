/*
Remove Duplicates Frome Linked List

You are given the head of a singly Linked lIst whose nodes are in sorted order with respect to their values. Write a function that returns a modified version of the Linked List that doesn't contain any nodes with duplicate values. The Linked List should be modified in place (you shouldn't create a brand new list) and the modified Linked List should still have its nodes sorted with respect to their values.
Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None/Null if it's the tail of the list


input: linkedList sorted
output: the input linkedList that already remove the duplicate value node.

Example:
input: 1->1->2->3->3->4
output: 1->2->3->4
*/

class LinkedListNode{
  constructor(val){
    this.value =val;
    this.next =null
  }
}
// Solution 1: for input= sorted linkedlist
// O(n) time | O(1) space - where n is the number of nodes in the linked list
function removeDuplicatesFromLinkedList(headLinkedList){
 let currentNode = headLinkedList;
 while(currentNode){
   let nextDistinctNode = currentNode.next;
   while(nextDistinctNode !==null && nextDistinctNode.value === currentNode.value){
     nextDistinctNode = nextDistinctNode.next
   }
   currentNode.next = nextDistinctNode
   currentNode = nextDistinctNode
 }

  return headLinkedList
}


// Solution 2: for input= NOT sorted linkedlist => use hash table
function removeDuplicatesFromLinkedList2(linkedList){

  let lastNode = linkedList
  let set ={}
  set[linkedList.value] = true

  let currentNode = lastNode.next  //start from the second node

 while(currentNode !==null){
  if(set[currentNode.value]){
    lastNode.next = currentNode.next
  }else{
    set[currentNode.value]=true
    lastNode = currentNode
  }
   currentNode = currentNode.next
 }

 return linkedList;
}

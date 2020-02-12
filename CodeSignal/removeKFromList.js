class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new Node(element);
        let current;
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    removeElement(element) {
        let current = this.head;
        let prev = null;
        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
}

function removeKFromList(l, k) {
    const linkedList = new LinkedList();
    for(let element of l){
        linkedList.add(element);
    }
    linkedList.removeElement(k);
    let answer = [], current = linkedList.head;
    while(current){
        answer.push(current.element);
        current = current.next;
    }
    console.log("ansarr", answer);
}

let answer = removeKFromList([3, 1, 2, 3, 4, 5], 3);
console.log("answer", answer);
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const node1 = new Node(11);
const node2 = new Node(12);
const node3 = new Node(13);

node1.next = node2;
node2.next = node3;

console.log(node1.data + "->" + node1.next.data + "->" + node1.next.next.data + "->" + null);
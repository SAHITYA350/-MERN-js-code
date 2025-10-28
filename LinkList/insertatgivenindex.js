class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.head === null;
    }

    getSize(){
        return this.size;
    }

    // Prepend: Insert at beginning
    prepend(data){
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    // Append: Insert at end
    append(data){
        const node = new Node(data);
        if(this.isEmpty()){
            this.head = node;
        } else {
            let cur = this.head;
            while(cur.next !== null){
                cur = cur.next;
            }
            cur.next = node;
        }
        this.size++;
    }

    print(){
        let cur = this.head;
        let str = '';
        while(cur){
            str += cur.data + ' -> ';
            cur = cur.next;
        }
        console.log(str + 'null');
    }
}

const list = new LinkList();
list.append(1);
list.append(2);
list.prepend(0);
list.print();
console.log("Size:", list.getSize());

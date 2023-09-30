/**
 * Queue
 * FIFO (First In First Out)
 */

function Queue(list = []) { 
    let collection = [];

    this.peek = () => { 
        return collection;
    }
    this.enqueue = (e) => { 
        collection.push(e);
    }
    this.dequeue = () => { 
        return collection.shift();
    }
    this.front = () => { 
        return collection[0];
    }
    this.tail = () => { 
        return collection[this.size() - 1];
    }
    this.size = () => { 
        return collection.length;
    }
    this.isEmpty = () => { 
        return (collection.length === 0);
    }
    list.forEach(e => { 
        this.enqueue(e);
    })
}

const q = new Queue([4, 5, 6]);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.peek(), q.size());
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q.peek(), q.front(), q.tail(), q.size(), q.isEmpty());
q.enqueue(0);
console.log(q.peek(), q.front(), q.tail(), q.size(), q.isEmpty());

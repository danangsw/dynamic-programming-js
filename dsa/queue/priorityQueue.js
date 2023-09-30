/**
 * Queue
 * FIFO (First In First Out)
 */

function PriorityQueue(list = []) { 
    let collection = [];

    this.peek = () => { 
        return collection;
    }
    this.enqueue = (e) => { 
        if (this.isEmpty()) {
            collection.push(e);
        }
        else { 
            let isAdded = false;
            for (let i = 0; i < this.size(); i++) {
                if (collection[i][1] > e[1]) { 
                    collection.splice(i, 0, e);
                    isAdded = true;
                    break;
                }
            }

            if (!isAdded) {
                collection.push(e);   
            }
        }
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

const pq = new PriorityQueue([['Bono', 5], ['Udin', 4], ['Jaka', 3]]);
pq.enqueue(['Wan Sutri', 2]);
pq.enqueue(['Sugeng', 1]);
pq.enqueue(['Bayu', 0]);
console.log(pq.peek(), pq.size());
pq.dequeue();
pq.dequeue();
pq.dequeue();
pq.dequeue();
pq.dequeue();
pq.dequeue();
console.log(pq.peek(), pq.front(), pq.tail(), pq.size(), pq.isEmpty());
pq.enqueue(['Joko', 2]);
pq.enqueue(['Bono', 0]);
console.log(pq.peek(), pq.front(), pq.tail(), pq.size(), pq.isEmpty());

class SegmentTree {
    array: any;
    tree: any
    constructor(array: any) {
        this.array = array;
        this.tree = new Array(array.length * 4 - 1);
        this.buildTree(0, 0, array.length - 1);
    }

    buildTree(node: any, start: any, end: any):void {
        if (start === end) {
            this.tree[node] = this.array[start];
            return;
        }

        const mid = Math.floor((start + end) / 2);
        this.buildTree(2 * node + 1, start, mid);
        this.buildTree(2 * node + 2, mid + 1, end);

        this.tree[node] = Math.min(this.tree[2 * node + 1], this.tree[2 * node + 2]);
    }

    query(node: any, start: any, end: any, left: any, right: any): number {
        if (start > right || end < left) {
            return Infinity;
        }

        if (start >= left && end <= right) {
            return this.tree[node];
        }

        const mid = Math.floor((start + end) / 2);
        const leftValue = this.query(2 * node + 1, start, mid, left, right);
        const rightValue = this.query(2 * node + 2, mid + 1, end, left, right);

        return Math.min(leftValue, rightValue);
    }
}

const heights = [ 1, 3, 4, 3, 0 ];
const k = 2;
const queries = [ [ 0, 1 ], [ 1, 3 ], [ 0, 4 ] ];

const segmentTree = new SegmentTree(heights);

console.log(segmentTree.array)

for (const query of queries) {
    const left = query[0];
    const right = query[1];
    let count = 0;

    for (let i = left; i <= right; i++) {
        for (let j = i + 1; j <= right; j++) {
            const diff = Math.abs(heights[i] - heights[j]);
            if (diff <= k) {
                count++;
            }
        }
    }

    console.log(count);
}

/**
 * WORK IN PROGRESS
 */
// limit for array size 
    let N = 100000;  
        
    let n = 0; // array size 
        
    // Max size of tree 
    let tree = new Array(2 * N); 
    tree.fill(0); 
        
    // function to build the tree 
    function build(arr:number[])  
    {  
            
        // insert leaf nodes in tree 
        for (let i = 0; i < n; i++)  
            tree[n + i] = arr[i]; 
            
        // build the tree by calculating 
        // parents 
        for (let i = n - 1; i > 0; --i) { 
            const x = i << 1;
            const y = i << 1 | 1;
            const a = tree[x];
            const b = tree[y]
            const res = Math.abs(a - b) <= 2 ? 1 : 0;
            tree[i] = res;
        }  

        console.log({ tree });
    } 
        
    // function to update a tree node 
    function updateTreeNode(p:number, value:number)  
    {  
        // set value at position p 
        tree[p + n] = value; 
        p = p + n; 
            
        // move upward and update parents 
        for (let i = p; i > 1; i >>= 1) 
            tree[i >> 1] = tree[i] + tree[i^1]; 
    } 
        
    // function to get sum on 
    // interval [l, r) 
    function query(l:number, r:number)  
    {  
        let res = 0; 
            
        // loop to find the sum in the range 
        for (l += n, r += n; l < r;
            l >>= 1, r >>= 1) 
        { 
            if ((l & 1) > 0)  
                res += tree[l++]; 
            
            if ((r & 1) > 0)  
                res += tree[--r]; 
        } 
            
        return res; 
    }
    
    // [ 1, 3, 4, 3, 0 ]
    let a = [ 1, 3, 4, 3, 0]; 
        
    // n is global 
    n = a.length; 
  
    // build tree  
    build(a); 
  
    // print the sum in range(1,2) 
    // index-based 
    console.log(query(0, 2)); 
    console.log(query(1, 3)); 
    console.log(query(0, 4));
    // // modify element at 2nd index 
    // updateTreeNode(2, 1); 
  
    // // print the sum in range(1,2) 
    // // index-based 
    // console.log(query(1, 3));  
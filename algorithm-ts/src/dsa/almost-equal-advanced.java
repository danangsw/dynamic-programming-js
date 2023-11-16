import java.io.*;
import java.util.*;

public class Solution {

  static int nn;
  static int block;
  static int[] fenwick;
  static long cnt = 0;

  static class B implements Comparable<B> {
    int l;
    int r;
    int id;
    
    @Override
    public int compareTo(B o) {
      int i = l/block;
      int j = o.l/block;
      if (i != j) {
        return i - j;
      }
      if (r != o.r) {
        return r - o.r;
      }
      return l - o.l;
    }
  }
  
  static int getSum(int x) {
    int s = 0;
    for (; x != 0; x &= x-1)
      s += fenwick[x-1];
    return s;
  }

  static class Node {
    int l;
    int r;
    int h;

    public Node(int l, int r, int h) {
      this.l = l;
      this.r = r;
      this.h = h;
    }

    void remove() {
      add(h, -1);
      cnt -= getSum(r) - getSum(l);
    }

    void add() {
      cnt += getSum(r) - getSum(l);
      add(h, 1);
    }

    void add(int x, int v) {
      for (; x < nn; x |= x+1)
        fenwick[x] += v;
    }
  }

    
  static public int lowerBound(int[] arr, int len, int key) {
    if (key <= arr[0]) {
      return 0;
    }
    if (key > arr[len - 1]) {
      return 0;
    }
    
    int index = Arrays.binarySearch(arr, 0, len, key);
    if (index < 0) {
      index = - index - 1;
      if (index < 0) {
        return 0;
      }
    } 
    return index;
  }
  
  static public int upperBound(int[] arr, int len, int key) {
    int index = Arrays.binarySearch(arr, 0, len, key+1);
    if (index < 0) {
      index = - index - 1;
      if (index < 0 || index > len) {
        return 0;
      }
    }
    return index;
  }
  
  public static int unique(int[] arr) {
    if (arr.length == 1) return 1;
    int len = 1;
    while (len < arr.length && arr[len] != arr[len-1]) { 
      len++;
    }
    for (int i = len + 1; i < arr.length; i++) {
      if (arr[i] != arr[len - 1]) {
        len++;
        arr[len - 1] = arr[i];
      }
    }
    return len;
  }

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    StringTokenizer st = new StringTokenizer(br.readLine());
    int n = Integer.parseInt(st.nextToken());
    int k = Integer.parseInt(st.nextToken());

    st = new StringTokenizer(br.readLine());
    int[] a = new int[n];
    int[] c = new int[n];
    for (int i = 0; i < n; i++) {
      int item = Integer.parseInt(st.nextToken());
      c[i] = a[i] = item;
    }
    Arrays.sort(c);
    nn = unique(c);
    
    Node[] nodes = new Node[n];
    for (int i = 0; i < n; i++) {
      int l = lowerBound(c, nn, a[i]-k);
      int r = upperBound(c, nn, a[i]+k);
      int h = lowerBound(c, nn, a[i]);
      nodes[i] = new Node(l, r, h);
    }
    
    st = new StringTokenizer(br.readLine());
    int q = Integer.parseInt(st.nextToken());
    
    B[] b = new B[q];
    block = (int) Math.max(1.0, Math.sqrt((double)(n)*n/Math.max(1, q)));
    for (int i = 0; i < q; i++) {
      st = new StringTokenizer(br.readLine());
      b[i] = new B();
      b[i].id = i;
      b[i].l = Integer.parseInt(st.nextToken());
      b[i].r = Integer.parseInt(st.nextToken()) + 1;
    }
    Arrays.sort(b);
    int l = 0;
    int r = 0;
    fenwick = new int[n];
    long[] result = new long[q];
    for (int i = 0; i < q; i++) {
      while (l < b[i].l) {
        nodes[l++].remove();
      }
      while (b[i].l < l) {
        nodes[--l].add();
      }
      while (b[i].r < r) {
        nodes[--r].remove();
      }
      while (r < b[i].r) {
        nodes[r++].add();
      }
      result[b[i].id] = cnt;
    }

    for (int i = 0; i < result.length; i++) {
      bw.write(String.valueOf(result[i]));

      if (i != result.length - 1) {
        bw.write("\n");
      }
    }

    bw.newLine();

    bw.close();
    br.close();
  }
}
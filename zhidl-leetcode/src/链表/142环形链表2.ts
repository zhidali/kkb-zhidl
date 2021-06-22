/*
 * @author: zhidl
 * @Date: 2021-06-22 15:16:29
 * @description: 
 * @LastEditTime: 2021-06-22 17:55:05
 * @LastEditors: zhidl
 */


/*  
    A → B → C → D → E
            ↑       ↓ 
            H ← G ← F
*/

// 解法 思路点
// 快指针2 慢指针1
// 等快指针与慢指针相遇点到入口的距离 与 起点到入口点的距离相当
// 也就是如上图所示 C为入口点， AC与GC距离相等

// 时间复杂度 O(N)
// 空间复杂度 O(1) 只使用 pre cur temp三个指针
function detectCycle(head: ListNode | null): ListNode | null {
    if(!head) return null;
    // pre 慢指针 cur快指针
    let pre = head, cur = head;
    while(cur && cur.next) {
      pre = pre.next as ListNode;
      cur = cur.next.next as ListNode;
      // 相遇点
      if(pre === cur) {
        // 声明起点temp 
        let temp = head;
        // 慢指针从相遇点开始走 
        // temp 从起点开始走
        // 相同的速度 如果temp === pre 就表示为入口点
        while(temp !== pre) {
          temp = temp.next as ListNode;
          pre =  pre.next as ListNode;
        }
        return temp;
      }
    }
    return null;
};




// 解法2 
// 使用has表 存储每个指针
// 判断中止 如果当前第一个已经存储过则表示为入口点
function l2(head: ListNode | null): ListNode | null {
  let s = new Set();
  while(head !== null) {
    if(s.has(head)) {
      return head;
    }
    s.add(head);
    head = head.next;
  }
  return null;
}
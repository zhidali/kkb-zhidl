/*
 * @author: zhidl
 * @Date: 2021-06-22 14:43:21
 * @description:
 * @LastEditTime: 2021-06-22 15:18:20
 * @LastEditors: zhidl
 */

/**
 * Definition for singly-linked list.
 */

// 此题思路 创建两个指针；快指针 慢指针
// 慢指针是每次循环单个
// 快指针是每次指向第二个
// 如果 两个指针重合表示有环 不会重合就表示无环
function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;
  // pre 慢指针 cur快指针
  let pre = head,
    cur = head;
  while (cur && cur.next) {
    pre = pre.next as ListNode;
    cur = cur.next.next as ListNode;
    if (cur === pre) {
      return true;
    }
  }
  return false;
}


// 解法2 打标示
function h(head: ListNode | null): boolean {
  if (!head) return false;
  let cur = head;
  while (cur) {
    if (cur.val === Infinity) {
      return true;
    }
    cur.val = Infinity;
    cur = cur.next as ListNode;
  }
  return false;
}


export {}
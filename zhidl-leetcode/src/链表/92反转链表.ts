/*
 * @author: zhidl
 * @Date: 2021-05-19 16:22:18
 * @description: 
 * @LastEditTime: 2021-06-22 14:34:50
 * @LastEditors: zhidl
 */
// @ts-nocheck

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

let obj = {
	val: 1,
	next: {
		val: 2,
		next: {
			val: 3,
			next: {
				val: 4,
				next: {
					val: 5,
					next: {
						val: 6,
						next: null
					}
				}
			}
		}
	}
};

function js(s:any) {
  return console.log(JSON.stringify(s));
}

function reverseBetween(head: ListNode | null, m: number, n: number): ListNode | null {
	// 递归反转函数
	let reverse = (pre, cur) => {
		if (!cur) return pre;
		// 保存 next 节点
		let next = cur.next;
		cur.next = pre;
		return reverse(cur, next);
	};
  // 创建空格式
	let p = new ListNode();
	let r = p;
  
  // 先让r.next 保存head
	r.next = head;

	let start, end;
	let front;
  
  // 链表特性 每个节点都有next，每次循环即可变动到下个next上
	for (let i = 0; i < m - 1; i++) {
		p = p.next;
	}
  
  // 保存前半截
	front = p;
	start = front.next;
	for (let i = m - 1; i < n; i++) {
		p = p.next;
	}
	end = p.next;
  // 接触与end关联
	p.next = null;

  js(front)

	front.next = reverse(null, start);
	start.next = end;
	return r.next;
}

let j = JSON.stringify(reverseBetween(obj, 3, 5));
// console.log(j);

export default {};

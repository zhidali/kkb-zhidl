/*
 * @author: zhidl
 * @Date: 2021-05-19 16:22:18
 * @description: 
 * @LastEditTime: 2021-05-19 18:00:43
 * @LastEditors: zhidl
 */

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

function reverseBetween(head: ListNode | null, m: number, n: number): ListNode | null {
	// 递归反转函数
	let reverse = (pre, cur) => {
		if (!cur) return pre;
		// 保存 next 节点
		let next = cur.next;
		cur.next = pre;
		return reverse(cur, next);
	};
	let p = new ListNode();
	let r = p;

	r.next = head;

	let start, end;
	let front;

	for (let i = 0; i < m - 1; i++) {
		p = p.next;
	}
	front = p;
	start = front.next;

	for (let i = m - 1; i < n; i++) {
		p = p.next;
	}
	end = p.next;
	p.next = null;

	front.next = reverse(null, start);
	start.next = end;
	return r.next;
}

let j = JSON.stringify(reverseBetween(obj, 3, 5));
console.log(j);

export default {};

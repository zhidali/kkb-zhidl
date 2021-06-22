/*
 * @author: zhidl
 * @Date: 2021-05-19 15:39:03
 * @description: 
 * @LastEditTime: 2021-06-22 14:34:30
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
	val: 2,
	next: {
		val: 3,
		next: {
			val: 4,
			next: null
		}
	}
};

// 使用while 相互调换
const reverseListA = (head: ListNode | null): ListNode | null => {
	if(!head) {
		return null;
	}
	let prev = null;
	let cur = head;
	while (cur) {
		const { next } = cur;
		// 保存next
		cur.next = prev;
		// @ts-ignore
		prev = cur;
		cur = next;
	}

	return prev;
};


const reverseListB = (head: ListNode | null): ListNode | null => {
	
	let reverse = (pre: ListNode | null, cur: ListNode | null) => {
		if (!cur) return pre;
		let next = cur.next;
		cur.next = pre;
		return reverse(cur, next);
	};

	return reverse(null, head);
};

 
console.log(obj = reverseListA(obj), 'b1');
console.log(obj = reverseListA(obj), 'b2');


export default {}
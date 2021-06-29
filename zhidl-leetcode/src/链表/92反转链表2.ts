



function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
	if(!head) return null;
	// 虚拟头
	let ret = {
		val: 0,
		next: head
	} as ListNode;

	let pre = ret;
	
	let cnt = right - left + 1;
	pre.next = reverse(pre.next as ListNode, cnt)
	return ret.next;
}



function reverse(head:ListNode, n) {
	let pre:ListNode | null = null, cur = head;
	while(n--) {
		[cur.next, cur, pre] = [pre, cur.next as ListNode, cur];
	}
	head.next = cur;
	return pre;
}




function reverseBetween(head: ListNode | null, m: number, n: number): ListNode | null {
	if(!head) return null;
	// 虚拟头
	let hair = {
		val: 0,
		next: null
	} as ListNode;
	hair.next = head;
	let h = head;

	for(let i = 0; i < m -1; i++) {
		h = h.next as ListNode;
	}
	let dl = h;
	let dr = h.next;
	
	for(let i = m - 1; i < n; i++) {
		
	}

	return null;
}
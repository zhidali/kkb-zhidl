



// pre 指向空
// cur 指向头
// next 指向cur下一个节点


// 解题思路
// 创建pre 初始化为空
// cur为当前头 next指向下一个节点
// 每次循环 先保存下一个节点内存， 防止丢失
// 让头部cur.next执行上一层pre
// cur继续保持下一次链表头


// pre | cur  | cur.next
//     | pre  | cur      | cur.next

function reverseList(head: ListNode | null): ListNode | null {
	if(!head) return null 
	let pre:ListNode | null = null, cur = head;

	while(cur) {
		
		[cur.next, cur, pre] = [pre, cur.next as ListNode, cur]

		// let next = cur.next;
		// cur.next = pre;
		// pre = cur;
		// cur = next as ListNode;
	}

	return pre;
};
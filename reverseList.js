/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    if (!pHead) return null
    if (pHead && pHead.next === null) return pHead
    // initialize
    let pre = pHead,
        cur = pHead.next,
        tmp = cur
    pHead.next = null
    do {
        // 顺序不能错
        tmp = tmp.next
        cur.next = pre
        pre = cur
        cur = tmp
    } while (tmp !== null)
    return pre
}

function ListNode(x) {
    this.val = x;
    this.next = null;
}

// 测试
let l = new ListNode(1)
let m = new ListNode(2)
let r = new ListNode(3)
let rz = new ListNode(4)
l.next = m
m.next = r

// 功能
console.log(ReverseList(l));
// 边界
console.log(ReverseList(rz));
// 负面
console.log(ReverseList());

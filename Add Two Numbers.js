var addTwoNumbers = function(l1, l2) {
    let resultList = new ListNode()
    let currentNode = resultList
    let carry = 0
    while(l1 !== null || l2 !== null || carry > 0){
        let val1 = (l1 !== null) ? l1.val : 0
        let val2 = (l2 !== null) ? l2.val : 0
        let currentTotal = val1 + val2 + carry
        carry = Math.floor(currentTotal / 10)
        currentNode.next = new ListNode(currentTotal % 10)
        currentNode = currentNode.next
        if(l1 !== null){
            l1 = l1.next
        }
        if(l2 !== null){
            l2 = l2.next
        }
    }
    return resultList.next
};
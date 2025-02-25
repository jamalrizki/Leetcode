// var deleteDuplicates = function(head) {
//     let arr = [];
    
//     for(let i = 0; i < head.length; i++) {
//         let isDuplicate = false;

//         for(let j = 0; j < arr.length; j++) {
//             if (head[i] === arr[j]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }
        
//         if (!isDuplicate) {
//             arr.push(head[i]);
//         }
//     }
    
//     return arr;
// };
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return null;

    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};

deleteDuplicates([1,1,2])
import { defaultToString } from './util.js';
import { ValuePair } from './models/value-pair.js';
export default class HashTableLinearProbing {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    loseloseHashCode(key) {
        if (typeof key === 'number') {
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }
    hashCode(key) {
        return this.loseloseHashCode(key);
    }

    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key)
            console.log('come in put', position)
            if (this.table[position] == null) {
                this.table[position] = new ValuePair(key, value)
            } else {
                let index = position + 1
                while (this.table[index] != null) {
                    index++
                }
                this.table[index] = new ValuePair(key, value)
            }
            return true
        }
        return false
    }
    get(key) {
        const position = this.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key == key) {
                return this.table[position].value
            }
            let index = position + 1
            while (this.table[index] != null && this.table[index].key != key) {
                index++
            }
            if (this.table[index] != null && this.table[index].key == key) {
                return this.table[index].value
            }
            return undefined
        }
        return undefined
    }
    remove(key) {
        const position = this.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                delete this.table[position];
                this.verifyRemoveSideEffect(key, position);
                return true;
            }
            let index = position + 1;
            while (this.table[index] != null && this.table[index].key !== key) {
                index++;
            }
            if (this.table[index] != null && this.table[index].key === key) {
                delete this.table[index];
                this.verifyRemoveSideEffect(key, index);
                return true;
            }
        }
        return false;
    }
    // 参数：被删除的 key 和该 key 被删除的位置
    verifyRemoveSideEffect(key, removedPosition) {
        const hash = this.hashCode(key);
        let index = removedPosition + 1;//从下一个位置开始遍历
        while (this.table[index] != null) { // 当对应的值不为空
            // 当前key对应的hash值
            const posHash = this.hashCode(this.table[index].key);

            // 如果当前元素的 hash 值小于或等于原始的 hash 值
            // 或者当前元素的hash值小于或者等于上一个被移除 key 的 hash 值
            if (posHash <= hash || posHash <= removedPosition) {

                // 当前元素移动至 removedPosition 的位置
                this.table[removedPosition] = this.table[index];

                // 删除当前元素的值，removedPosition 更新为当前的 index，重复此过程。
                delete this.table[index];
                removedPosition = index;
            }
            index++;
        }
    }

}
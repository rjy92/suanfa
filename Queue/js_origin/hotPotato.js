import { Queue } from './queue.js'
function hotPotato(elementList, num) {
    const queue = new Queue()
    const eliminatedList = []

    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i])
    }
    console.log(queue)
    while(queue.size()>1){
        for(let i =0;i<num;i++){
            queue.enqueue(queue.dequeue())
        }
        
        eliminatedList.push(queue.dequeue())
        console.log('while',queue,eliminatedList)
    }

    return {
        eliminated:eliminatedList,
        winner:queue.dequeue()
    }
    
}

const name = ['Jhon','Jack','Camila','Ingrid','Carl']
const result = hotPotato(name,7)

console.log('come ',result) // { eliminated: [ 'Camila', 'Jack', 'Carl', 'Ingrid' ], winner: 'Jhon' }
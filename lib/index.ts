
// It's a linked list
export interface Node {
    parent: Node
    value: any
}



const mapers = [
    {
        type (obj) {
            
        },
        key () {},
        map (obj, key) {
            return obj[key]
        }
    }
]

function traverse (nodes: Node[], fn, opts) {
    var iter = middlewares(nodes, opts)

}


export default traverse
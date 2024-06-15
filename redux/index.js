const redux = require("redux")
const createStore = redux.legacy_createStore;
const combineReducer = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

function buycake(){
    return {
        type: BUY_CAKE,
        info:"first redux action"
    }
}
function buyicecream(){
    return {
        type: BUY_ICECREAM
    }
}

// const initialState = {
//     numOfCakes:10,
//     numOfIceCream:20
// }

// instead of above we use below for combine reducer
const initialCakeState = {
    numOfCakes:10
}
const initialIceCreamState = {
    numOfIceCream:20
}

// const reducer = (state = initialState,action)=>{
//     switch(action.type){
//         case BUY_CAKE: return{
//             ...state,
//             numOfCakes:state.numOfCakes-1
//         }
//         case BUY_ICECREAM: return{
//             ...state,
//             numOfIceCream:state.numOfIceCream-1
//         }
//         default: return state
//     }
// }

// another method for the reducer to do this task
const cakereducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
const icecreamreducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}

const rootreducer = combineReducer({
    cake:cakereducer,
    icecream:icecreamreducer
})

const store = createStore(rootreducer)
console.log("Initial state",store.getState());
const unsubscribe = store.subscribe(()=> console.log("updated state", store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
unsubscribe()
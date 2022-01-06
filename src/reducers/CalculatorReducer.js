const initState = {
    value: 0,
    lastValue: 0,
    sum: '',
    list: [],
    idSelected: ''
}

// Actions to manipulate the calculator Pad and List
const calculatorReducer = (state = initState, action) => {
    switch(action.type) {
        case 'one':
            return {
                ...state,
                value: (state.value === 0) ? 1 : state.value.toString().concat(1)
            }
        case 'two':
            return {
                ...state,
                value: (state.value === 0) ? 2 : state.value.toString().concat(2)
            }
        case 'three':
            return {
                ...state,
                value: (state.value === 0) ? 3 : state.value.toString().concat(3)
            }
        case 'four':
            return {
                ...state,
                value: (state.value === 0) ? 4 : state.value.toString().concat(4)
            }
        case 'five':
            return {
                ...state,
                value: (state.value === 0) ? 5 : state.value.toString().concat(5)
            }
        case 'six':
            return {
                ...state,
                value: (state.value === 0) ? 6 : state.value.toString().concat(6)
            }
        case 'seven':
            return {
                ...state,
                value: (state.value === 0) ? 7 : state.value.toString().concat(7)
            }
        case 'eight':
            return {
                ...state,
                value: (state.value === 0) ? 8 : state.value.toString().concat(8)
            }
        case 'nine':
            return {
                ...state,
                value: (state.value === 0) ? 9 : state.value.toString().concat(9)
            }
        case 'zero':
            return {
                ...state,
                value: (state.value === 0) ? state.value : state.value.toString().concat(0)
            }
        case 'increment':
            return {
                ...state,
                value: parseFloat(state.value) + 1
            }
        case 'decrement':
            return {
                ...state,
                value: parseFloat(state.value) - 1
            }
        case 'AC':
            if(state.lastValue === 0){
                state.lastValue = 0
                return {
                    ...state,
                    value: 0,
                    lastValue: 0,
                }
            }
            else if(state.idSelected === '') {
                const newArr = [...state.list];
                newArr.push(state.lastValue);
                return {
                    ...state,
                    list: newArr,
                    value: 0,
                    lastValue: 0,
                }
            }
            else {
                const newArr = [...state.list];
                newArr[state.idSelected] = state.lastValue;
                return {
                    ...state,
                    list: newArr,
                    value: 0,
                    lastValue: 0,
                    idSelected: ''
                }
            }
        case 'DEL':
            return {
                ...state,
                value: (state.value.toString().length === 1) ? 0 : state.value.toString().slice(0, -1),
            }
        case 'SUM':
            return {
                ...state,
                lastValue: parseFloat(state.value) + parseFloat(state.lastValue),
                value: 0,
                operation: 'SUM'
            }
        case 'REST':
            return {
                ...state,
                lastValue: parseFloat(state.lastValue) - parseFloat(state.value),
                value: 0,
                operation: 'SUM'
            }
        case 'EQUAL':
            return {
                ...state,
                lastValue: parseFloat(state.value),
                value: 0
            }
        case 'DOT':
            return {
                ...state,
                value: (state.value.includes('.')) ? state.value : state.value.toString().concat('.')
            }
        case 'MULT':
            return {
                ...state,
                lastValue: (parseFloat(state.lastValue) === 0) ? parseFloat(state.value) :( parseFloat(state.value) === 0) ? state.lastValue : parseFloat(state.value) * parseFloat(state.lastValue) ,
                value: 0,
                operation: 'MULT'
            }
        case 'DIV':
            return {
                ...state,
                lastValue: (parseFloat(state.lastValue) === 0) ? parseFloat(state.value) : (parseFloat(state.value) === 0) ? state.lastValue : (parseFloat(state.value) / parseFloat(state.lastValue)).toFixed(2),
                value: 0,
                operation: 'DIV'
            }
        case 'DELET':
            console.log(state.list);
            state.list.splice(action.index, 1);
            return {
                ...state,
                list: [
                    ...state.list
                ],
            }
        case 'REPLACE':
            return {
                ...state,
                lastValue: action.index,
                idSelected: action.id
            }
        default:
            return {...state}
    }
}

export default calculatorReducer;
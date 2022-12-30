const initState = {
    value: 0,
    lastValue: 0,
    sum: '',
    list: [],
    idSelected: '',
    dark_mode: false
}

// Actions to manipulate the calculator Pad and List
const calculatorReducer = (state = initState, action) => {
    /* eslint-disable no-eval */

    function valConcat(num){
        return state.value.toString().concat(num)
    }

    switch(action.type) {
        case 'one':
            return {
                ...state,
                value: (state.value === 0) ? 1 : valConcat(1),
                lastValue: (state.lastValue === 0) ? 1 : eval(valConcat(1))
            }
        case 'two':
            return {
                ...state,
                value: (state.value === 0) ? 2 : valConcat(2),
                lastValue: (state.lastValue === 0) ? 2 : eval(valConcat(2))
            }
        case 'three':
            return {
                ...state,
                value: (state.value === 0) ? 3 : valConcat(3),
                lastValue: (state.lastValue === 0) ? 3 : eval(valConcat(3))
            }
        case 'four':
            return {
                ...state,
                value: (state.value === 0) ? 4 : valConcat(4),
                lastValue: (state.lastValue === 0) ? 4 : eval(valConcat(4))
            }
        case 'five':
            return {
                ...state,
                value: (state.value === 0) ? 5 : valConcat(5),
                lastValue: (state.lastValue === 0) ? 5 : eval(valConcat(5))
            }
        case 'six':
            return {
                ...state,
                value: (state.value === 0) ? 6 : valConcat(6),
                lastValue: (state.lastValue === 0) ? 6 : eval(valConcat(6))
            }
        case 'seven':
            return {
                ...state,
                value: (state.value === 0) ? 7 : valConcat(7),
                lastValue: (state.lastValue === 0) ? 7 : eval(valConcat(7))
            }
        case 'eight':
            return {
                ...state,
                value: (state.value === 0) ? 8 : valConcat(8),
                lastValue: (state.lastValue === 0) ? 8 : eval(valConcat(8))
            }
        case 'nine':
            return {
                ...state,
                value: (state.value === 0) ? 9 : valConcat(9),
                lastValue: (state.lastValue === 0) ? 9 : eval(valConcat(9))
            }
        case 'zero':
            return {
                ...state,
                value: (state.value === 0) ? state.value : valConcat(0),
                lastValue: (state.lastValue === 0) ? 0 : eval(valConcat(0))
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
                value: (/[+*/-]/.test(state.value.toString().charAt(state.value.toString().length - 1)) ? state.value : state.value.toString().concat('+')),
                operation: 'SUM'
            }
        case 'REST':
            return {
                ...state,
                value: (/[+*/-]/.test(state.value.toString().charAt(state.value.toString().length - 1)) ? state.value : state.value.toString().concat('-')),
                operation: 'REST'
            }
        case 'EQUAL':
            return {
                ...state,
                lastValue: 0,
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
            value: (/[+*/-]/.test(state.value.toString().charAt(state.value.toString().length - 1)) ? state.value : state.value.toString().concat('*')),
                operation: 'MULT'
            }
        case 'DIV':
            return {
                ...state,
                value: (/[+*/-]/.test(state.value.toString().charAt(state.value.toString().length - 1)) ? state.value : state.value.toString().concat('/')),
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
                value: action.index,
                idSelected: action.id
            }
        case 'DARK-MODE':
            return {
                ...state,
                dark_mode: true
            }
        default:
            return {...state}
    }
}

export default calculatorReducer;
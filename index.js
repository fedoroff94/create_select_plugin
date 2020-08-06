import {Select} from './select/select.js';
import '/select/select.scss';

const select = new Select('#select', {
    placeholder: 'Choose the element, please',
    selectedId: '4',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Angular'},
        {id: '3', value: 'Vue JS'},
        {id: '4', value: 'Node JS'},
        {id: '5', value: 'JS'},
        {id: '6', value: 'ReaReact native'}
    ],
    onSelect(item){
        console.log('Selected item: ', item)
    }
})

window.s = select

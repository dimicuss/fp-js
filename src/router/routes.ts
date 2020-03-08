import { Currying } from '@/pages/Currying';
import { FunctionalForm } from '@/pages/FunctionalForm'
import { Conceptions } from '@/pages/Conceptions';


export const routes = [
    {
        title: 'Основные концепции ФП',
        path: '/conceptions',
        component: Conceptions,
    },
    {
        title: 'Каррирование',
        path: '/currying',
        component: Currying,
    },
    {
        title: 'Форма в ФП стиле',
        path: '/functional-form',
        component: FunctionalForm,
    },
];
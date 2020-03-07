import { Currying } from '@/pages/Currying';
import { FunctionalForm } from '@/pages/FunctionalForm'
import { PureFunctions } from '@/pages/PureFunctions'


export const routes = [
    {
        title: 'Чистые функции',
        path: '/pure-functions',
        component: PureFunctions,
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
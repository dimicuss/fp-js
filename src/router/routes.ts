import { Currying } from '@/pages/Currying';
import { FunctionalForm } from '@/pages/FunctionalForm'
import { Conceptions } from '@/pages/Conceptions';
import { Composition } from '@/pages/Composition';
import { CreateCookie } from '@/pages/CreateCookie'


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
        title: 'Композиция',
        path: '/composition',
        component: Composition,
    },
    {
        title: 'Создание cookie строки',
        path: '/create-cookie',
        component: CreateCookie,
    },
    {
        title: 'Форма в ФП стиле',
        path: '/functional-form',
        component: FunctionalForm,
    },
];
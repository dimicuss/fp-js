import * as R from 'ramda';


interface Product {
    productType: string,
    maxTerm: number,
    minTerm: number,
    step: number,
}


function getTerms({ maxTerm, minTerm, step, result = [] }) {
    const nextResult = [...result, { value: maxTerm, label: `${maxTerm} месяцев` }];
    return maxTerm <= minTerm
        ? nextResult
        : getTerms({ maxTerm: maxTerm - step, minTerm, step, result: nextResult });
}


export function handleDictionaries(dictionary) {
    return {
        ...dictionary,
        uaProducts: dictionary.uaProducts.reduce((acc, product: Product) => ({
            ...acc,
            [product.productType]: (acc[product.productType] || []).concat(getTerms(product)),
        }), {}),
    }
}


export const handleDictionariesFunctonal = R.evolve({ // evolve - преобразует объект по ключу и заданной функции, копируя неизмененные поля
    uaProducts: R.pipe(
        R.groupBy<Product>(R.prop('productType')), // Группируем продукты по типу
        R.mapObjIndexed(R.pipe(R.map(getTerms), R.flatten)), // Преобразуем продукт в набор сроков
    ),
});

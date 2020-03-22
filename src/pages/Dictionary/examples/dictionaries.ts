export const dictionaries = {
    uaProducts: [
        {
            productType: 'Cash',
            maxTerm: 60,
            minTerm: 24,
            step: 12,
        },
        {
            productType: 'Card',
            maxTerm: 48,
            minTerm: 48,
            step: null,
        },
        {
            productType: 'Refinance',
            maxTerm: 60,
            minTerm: 24,
            step: 12,
        },
    ],
};


export const months = [
    {
        label: '60 месяцев',
        value: 60,
    },
    {
        label: '48 месяцев',
        value: 48,
    },
    {
        label: '36 месяцев',
        value: 36,
    },
    {
        label: '24 месяцев',
        value: 24,
    },
];


export const handledDictionaries = {
    uaProducts: {
        Cash: months,
        Card: [months[1]],
        Refinance: months,
    },
};

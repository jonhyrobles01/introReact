const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

const owners = ['DC', 'Marvel'];

// de esta manera se exporta como default y en cualquier impo no es necesario poner entre llaves
// export default heroes;

// en caso que ya se tenga una exportacion por defecto y se necesite una individual se agrega de la siguiente manera
export {
    heroes as default,
    owners
}
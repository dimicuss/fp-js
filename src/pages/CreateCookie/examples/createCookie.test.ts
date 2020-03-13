import createCookie,  { createCookieFunctional } from './createCookie.raw';


describe('create cookie test', () => {
    it('shuoul return serialized cookie object', () => {
        const cookieObjMock = {
            a: 'mockA',
            b: 'mockB',
            c: 'mockC',
        };
        const expectation = 'a=mockA; b=mockB; c=mockC;'


        expect(createCookie(cookieObjMock)).toBe(expectation);
        expect(createCookieFunctional(cookieObjMock)).toBe(expectation);
    })
});

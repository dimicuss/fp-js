import createCookie,  { createCookieFunctional } from './createCookie';
import cookie, { handledCookie } from './cookie'


describe('create cookie test', () => {
    it('shuould return serialized cookie object', () => {
        expect(createCookie(cookie)).toBe(handledCookie);
    })
    it('shuould return serialized cookie object (functional)', () => {
        expect(createCookieFunctional(cookie)).toBe(handledCookie);
    })
});

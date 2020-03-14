import telephones, { handledTelephones } from './telephones.raw';
import handleTelephones, { handleTelephonesFunctional } from './handleTelephones';

describe('handle telephones test', () => {
    it('should return otp telephone and unique handled telephones', () => {
        expect(handleTelephones(telephones)).toEqual(handledTelephones);
    });

    it('should return otp telephone and unique handled telephones (functional)', () => {
        expect(handleTelephonesFunctional(telephones)).toEqual(handledTelephones);
    });
});
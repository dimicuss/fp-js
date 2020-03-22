import { dictionaries, handledDictionaries } from './dictionaries';
import { handleDictionaries, handleDictionariesFunctonal } from './handleDictionaries';


describe('handleDictionaries test', () => {
    it('handleDictionaries test', () => {
        expect(handleDictionaries(dictionaries)).toEqual(handledDictionaries);
    })

    it('handleDictionaries test (functional)', () => {
        expect(handleDictionariesFunctonal(dictionaries)).toEqual(handledDictionaries);
    });
});

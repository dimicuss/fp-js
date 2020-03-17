import { dictionaries, handledDictionaries } from './dictionaries';
import { handleDictionaries } from './handleDictionaries';


describe('handleDictionaries test', () => {
    it('handleDictionaries test', () => {
        expect(handleDictionaries(dictionaries)).toEqual(handledDictionaries);
    });
});

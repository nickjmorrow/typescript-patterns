import { findKeyPhrases } from './find-key-phrases';
import { ParagraphKeyPhraseIndex } from './graphs/types';

const generateTestCase = (
	text: string,
	keyPhrases: string[],
	expectedOutput: ParagraphKeyPhraseIndex[],
	description: string,
) =>
	it(description, () => {
		const output = findKeyPhrases(text, keyPhrases);
		expect(output).toEqual(expectedOutput);
	});

describe('find key phrases', () => {
	it('base case', () => {
		const output = findKeyPhrases('hello world', ['hello']);
		expect(output).toEqual([{ paragraphIndex: 0, keyPhraseIndex: 0 }]);
	});
	it('with punctuation', () => {
		const output = findKeyPhrases('hello, world', ['hello']);
		expect(output).toEqual([{ paragraphIndex: 0, keyPhraseIndex: 0 }]);
	});
	it('with punctuation', () => {
		const output = findKeyPhrases('hello, world. nice to meet you. world is great.', ['world', 'word', 'meet']);
		expect(output).toEqual([
			{ paragraphIndex: 1, keyPhraseIndex: 0 },
			{ paragraphIndex: 4, keyPhraseIndex: 2 },
			{ paragraphIndex: 6, keyPhraseIndex: 0 },
		]);
	});

	generateTestCase(
		'I enjoy using Redux.',
		['Some Technology', 'Redux'],
		[{ paragraphIndex: 3, keyPhraseIndex: 1 }],
		'Key phrase is last word.',
	);

	generateTestCase(
		'Designed in C# Selenium for React application',
		['C#', 'Selenium', 'React'],
		[
			{ paragraphIndex: 2, keyPhraseIndex: 0 },
			{ paragraphIndex: 3, keyPhraseIndex: 1 },
			{ paragraphIndex: 5, keyPhraseIndex: 2 },
		],
		'Key phrases are adjacent',
	);

	generateTestCase(
		'Worked in a team of 7 on a React .NET application',
		['React', '.NET', 'C#'],
		[{ paragraphIndex: 8, keyPhraseIndex: 0 }, { paragraphIndex: 9, keyPhraseIndex: 1 }],
		'Key phrase contains punctuation',
	);
});

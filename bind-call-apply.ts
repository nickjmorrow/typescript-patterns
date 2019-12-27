// https://www.codementor.io/dariogarciamoya/understanding--this--in-javascript-du1084lyn?icn=post-8i1jca6jp&ici=post-du1084lyn

export function myOldFunc() {
	// @ts-ignore
	console.log(this);
}

export const myArrowFunc = () => {
	// @ts-ignore
	console.log(this);
};

export const myOldObj = { myOldFunc };
export const myArrowObj = { myArrowFunc };

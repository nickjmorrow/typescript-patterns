interface NestedObject {
	Level1?: {
		Level2?: {
			Level3?: number;
		};
	};
}

const actualObject: NestedObject = {
	Level1: {
		Level2: {
			Level3: 5,
		},
	},
};

const otherObject: NestedObject = {
	Level1: {},
};

const firstOutput = otherObject.Level1?.Level2?.Level3;

const otherOutput = otherObject.Level1?.Level2?.Level3;

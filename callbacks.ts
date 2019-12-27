const executeSynchronously = (callback: (data: any) => any) => {
	// do something
	const data = 'hello, world';
	callback(data);
};

executeSynchronously(data => console.log(data));

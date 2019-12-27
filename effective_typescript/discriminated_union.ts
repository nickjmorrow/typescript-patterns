/* This is also called a tagged union. p. 182 */

interface UploadEvent {
	type: 'upload';
	getEventInfo: () => void;
}

interface DownloadEvent {
	type: 'download';
	getEventInfo: () => void;
}

const doSomethingWithEvennt = (event: UploadEvent | DownloadEvent): void => {
	switch (event.type) {
		case 'download':
			console.log("It's a download event!", event);
			break;
		case 'upload':
			console.log("It's an upload event!", event);
			break;
	}
};

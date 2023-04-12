import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	seconds: number,
	hhmmss: string,
	// test: any
}

function toHHMMSS(time: number) {
	// cheeky math time
	let seconds: any = time % 60;
	let minutes: any = ((time - seconds) / 60) % 60;
	let hours = (time - (minutes * 60) - seconds) / 3600;

	// padding
	if (seconds < 10) seconds = `0${seconds}`;
	if (minutes < 10) minutes = `0${minutes}`;

	return `${hours}:${minutes}:${seconds}`;
}

export default function handler(
	_req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({
		seconds: Math.floor(process.uptime()),
		hhmmss: toHHMMSS(Math.floor(process.uptime())),
	});
}
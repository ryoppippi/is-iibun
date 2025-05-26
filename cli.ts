#!/usr/bin/env node

import { isIibun } from ".";
import { name, description, version } from "./package.json";
import { define, cli } from "gunshi";

const command = define({
	args: {
		number: {
			type: "positional",
			description: "Integer",
			required: true,
		},
	},
	run(ctx) {
		const { number } = ctx.values;
		// biome-ignore lint/suspicious/noConsole: <explanation>
		console.log(isIibun(number as unknown as number));
	},
});

await cli(process.argv.slice(2), command, {
	name,
	description,
	version,
});

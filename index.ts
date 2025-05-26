import isPrime from "prime-number";
import randomItem from "random-item";
import isEven from "is-even";

export function isIibun(number: number): string {
	if (!isInteger(number)) {
		return "整数を入力してください。小数点や文字列はダメです！";
	}

	if (isEven(number)) {
		return `${number}は偶数です（当たり前）`;
	}

	return iibunForOdd(number);
}

function iibunForOdd(number: number): string {
	if (number === 1) {
		return "1は最初の数だから、偶数の始祖みたいなもんです";
	}

	if (isPrime(number)) {
		return `${number}は素数なので、偶数奇数の概念を超越してます`;
	}

	if (number < 0) {
		return `${number}は負の数なので、マイナス偶数ということで`;
	}

	return randomOddReason(number);
}

function randomOddReason(number: number): string {
	const day = new Date().getDay();
	const hour = new Date().getHours();
	const reasons = [
		`${number}は偶数じゃないけど、2で割ったら小数点が出るから実質偶数みたいなもんでしょ`,
		`${number}は奇数だけど、気持ち的には偶数寄りです`,
		`1を足したら偶数になるので、${number}は偶数です。異論は認めません。`,
		isEven(day) ? `今日は偶数の日なので、${number}も偶数扱いで` : null,
		isEven(hour) ? `今は偶数時なので、${number}も偶数扱いで` : null,
	].filter((v) => v !== null);

	return randomItem(reasons);
}

function isInteger(val: unknown): boolean {
	return typeof val === "number" && Number.isInteger(val);
}

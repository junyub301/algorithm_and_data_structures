//최대공약수 (유클리드 호제법)
export function gcb(a, b) {
    return b > 0 ? gcb(b, a % b) : a;
}

//최소공배수
export function lcm(a, b) {
    return (a * b) / gcb(a, b);
}

//N개의 최소공배수
export function nLcm(arr) {
    let answer = 0;
    for (let i = 1; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }
    return answer;
}

//소수 찾기 (에라토스테네스의 체)
export function isPrime(n) {
    let result = new Array(n + 1).fill(true);
    result[0] = result[1] = false;

    // 2부터 각각의 배수들을 지워간다.
    // i*i <= n 대신 i <= Math.sqrt(n)으로 대체 가능
    for (let i = 2; i * i <= n; i++) {
        if (result[i]) {
            for (let j = i * i; j <= n; j += i) {
                result[j] = false;
            }
        }
    }
    return result.filter((val) => val);
}

// 약수 구하기
// + 제곱근의 값이 정수이면 약수의 개수는 홀수, 정수가 아니면 약수의 개수는 짝수
export function divisor(num) {
    let result = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            result.push(i);
            if (num / i !== i) {
                result.push(num / i);
            }
        }
    }

    return result;
}

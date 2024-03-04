function MyMathPower(base, num) {
    let result = 1;
  
    if (num < 0) {
        console.error("Показник степеня має бути невід'ємним числом");
        return;
    }

    for (let i = 0; i < num; i++) {
        result *= base;
    }

    console.log(`The ${num}th power of ${base} equals ${result}`);
}

function MyMathPowerDefault1(base, num) {
    base = base || 2;
    num = num || 3;
    MyMathPower(base, num);
}

function MyMathPowerDefault2(base = 2, num = 3) {
    MyMathPower(base, num);
}

function TestAllFunctions() {
    MyMathPowerDefault1(2, 3);
    MyMathPowerDefault1(2);
    MyMathPowerDefault1(undefined, 3);
    MyMathPowerDefault1();
    MyMathPowerDefault2(2, 3);
    MyMathPowerDefault2(2);
    MyMathPowerDefault2(undefined, 3);
    MyMathPowerDefault2();
}

TestAllFunctions();
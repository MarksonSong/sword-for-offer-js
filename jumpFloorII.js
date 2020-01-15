function jumpFloorII(number) {
    let f = []
    f[0] = 1
    f[1] = 2
    for (let i = 2; i < number; i++) {
        f[i] = 0
        for (let j = 0; j < i; j++)
            f[i] += f[j]
        // 加上可以跳n级
        f[i] += 1
    }
    return f[number - 1]
}

jumpFloorII(4)
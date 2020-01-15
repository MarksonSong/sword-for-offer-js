function Fibonacci(n)
{
    // 确定状态
    let f= []
    // 初始条件，边界情况
    f[0]=0
    f[1]=1
    // 计算顺序
    for(let i=2;i<=n;i++){
        // 转移方程
        f[i]=f[i-1]+f[i-2]
    }
    return f[n]
}

console.log(Fibonacci(0))
console.log(Fibonacci(4))
console.log(Fibonacci(7))
console.log(Fibonacci(39))
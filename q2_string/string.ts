const verify = process.env.STRING as string
const verify_low_case: string = verify.toLowerCase()

const a_count: number = verify_low_case.split("a").length - 1
console.log(verify.length - a_count)
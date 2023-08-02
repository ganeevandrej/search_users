

export const compose = (...func: any) => (comp: any) => {
    return func.reduceRight((prevRes: any ,fn: any) => fn(prevRes), comp);
}
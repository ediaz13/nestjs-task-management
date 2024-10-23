function add(a: number, b: number): number {
    return a + b;
}

describe('Example Test', () => {
    it('should be true', () => {
        expect(add(2, 2)).toEqual(4);
    });
});
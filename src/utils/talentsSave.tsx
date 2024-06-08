export function isClientSide(): boolean {
    return typeof window !== 'undefined';
}

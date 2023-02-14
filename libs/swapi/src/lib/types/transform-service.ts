export interface TransformService<D, T> {
    transform (dto: D): T; 
}
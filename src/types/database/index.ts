
type UUID = string;
export enum DbEnum{
    lowdb
}

export type Drop = { //this is for a deaddrop, probably contains a encrypted message, and a uuid

}
export type Schema = { //move to types safe place not here
    theMap: Map<UUID, Drop>;
}

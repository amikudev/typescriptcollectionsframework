import { Comparator } from "./Comparator";
import { MapEntry } from "./MapEntry";
import { NavigableMap } from "./NavigableMap";
export declare class NaiveMap<K, V> implements NavigableMap<K, V> {
    private topNode;
    private comparator;
    constructor(iComparator: Comparator<K>);
    /**
     * Returns the number of key-value mappings in this map.
     * @return {number} the number of key-value mappings in this map
     */
    size(): number;
    private sizeTree(n);
    /**
     * Associates the specified value with the specified key in this map. If the map previously contained a mapping for the key, the old value is replaced.
     * @param {K} key key with which the specified value is to be associated
     * @param {V} value value to be associated with the specified key
     * @return {V} the previous value associated with key, or null if there was no mapping for key. (A null return can also indicate that the map previously associated null with key.)
     */
    put(key: K, value: V): V;
    private putNode(node, key, value);
    /**
     * Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
     * @param {K} key the key whose associated value is to be returned
     * @return {V} the value to which the specified key is mapped, or null if this map contains no mapping for the key
     */
    get(key: K): V;
    private getNode(node, key);
    /**
    * Returns the first (lowest) key currently in this map.
    * @return {K} the first (lowest) key currently in this map, returns undefined if the Map is empty
    */
    firstKey(): K;
    /**
    * Returns a key-value mapping associated with the least key in this map, or null if the map is empty.
    * @return {MapEntry} an entry with the least key, or null if this map is empty
    */
    firstEntry(): MapEntry<K, V>;
}
export declare class NaiveMapNode<K, V> {
    private key;
    private value;
    private leftNode;
    private rightNode;
    private parentNode;
    constructor(iKey: K, iValue: V, iParent: NaiveMapNode<K, V>);
    getKey(): K;
    getValue(): V;
    setValue(v: V): void;
    getLeftNode(): NaiveMapNode<K, V>;
    setLeftNode(n: NaiveMapNode<K, V>): void;
    getRightNode(): NaiveMapNode<K, V>;
    setRightNode(n: NaiveMapNode<K, V>): void;
    getParentNode(): NaiveMapNode<K, V>;
    setParentNode(n: NaiveMapNode<K, V>): void;
    getMapEntry(): MapEntry<K, V>;
}

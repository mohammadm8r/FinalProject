export default function Range(start, end, inverse) {
    var len_array = end ? end - start : start;
    var list = Array.apply(null, { length: len_array }).map(function(
        item,
        index
    ) {
        return inverse ? end - index : start + index;
    });
    return list;
}
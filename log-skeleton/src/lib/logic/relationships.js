
export const filterRelationships = (logSkeleton, relationships) => {
    var filteredLogSkeleton = {}

    // Set the set of activities
    // filteredLogSkeleton['activities'] = logSkeleton['activities']

    // Filter the relationships
    for (let key of relationships) {
        filteredLogSkeleton[key] = logSkeleton[key]
    }

    // Set the counter
    filteredLogSkeleton['counter'] = logSkeleton['counter']

    return filteredLogSkeleton
}
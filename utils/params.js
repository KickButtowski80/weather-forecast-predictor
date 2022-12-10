

const validParams = (paramsQ) => {

    let { loc, unitGroup } = paramsQ
    loc = loc || 'los angeles'
    unitGroup = unitGroup || 'us'
    paramsQ = { ...{ loc, unitGroup } }

    return paramsQ
}

module.exports = {
    validParams
}
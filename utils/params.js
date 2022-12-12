

const validParams = (paramsQ) => {
    let { loc, unitGroup } = paramsQ
    
    loc = (loc !== 'undefined' && loc)  || 'los angeles'
    unitGroup = (unitGroup !== 'undefiend' && unitGroup)  || 'us'
    paramsQ = { ...{ loc, unitGroup } }
    return paramsQ
}


module.exports = {
    validParams
}
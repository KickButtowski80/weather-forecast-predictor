

const validParams =(paramsQ) => {
    console.log('here in params utils', paramsQ)
    let {loc, unitGroup} = paramsQ
    loc =  loc ||'los angeles'
    unitGroup= unitGroup || 'us'
    paramsQ = {...{loc, unitGroup}}
    console.log('here in params utils', paramsQ)
    return paramsQ
}

module.exports = {
    validParams
}
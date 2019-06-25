import LinesEllipsis from 'react-lines-ellipsis';

import React, { Fragment} from 'react'

const ellipsis = (value) => {
    return (
      <Fragment>
       <LinesEllipsis
        text={value}
        maxLine='3'
        ellipsis='...'
        trimRight
        basedOn='letters'
        />   
        </Fragment>
    )
}

export default ellipsis;

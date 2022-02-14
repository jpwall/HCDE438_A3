import React from 'react'
import { useDB } from './db'

function DBLoad(Component) {
    return function WrappedComponent(props) {
        return <Component {...props} otherMessages={useDB()} />
    }
}

export default DBLoad
import { useEffect } from "react";
import { NextPage } from "next";
import action from '../../store/actions/index'
import store from '../../store'

const Msg:NextPage = () => {

    // store.dispatch(action.msg.increase())
    // let { msg } = store.getState()
    // console.log(msg)
    useEffect(() => {
        store.dispatch(action.msg.increase())
        let { msg } = store.getState()
        console.log(msg)
    }, [])

    return (
        <div>
            {/* {msg.count}
            <button onClick={() => {store.dispatch(action.msg.increase(90))}} >1231</button> */}
            1
        </div>
    )
}

export default Msg
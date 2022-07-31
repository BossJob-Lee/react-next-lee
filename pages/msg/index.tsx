import { useEffect } from "react";
import { NextPage, GetServerSideProps} from "next";
import action from '../../store/actions/index'
import { wrapper } from '../../store'
import { END } from 'redux-saga'
import  superjson from 'superjson'
import { useDispatch, useSelector } from 'react-redux'

interface IJobDetail {
    jobDetail: any
    config: any
}

const Msg: NextPage = (props) => {
    const dispatch = useDispatch()
    console.log(props)
    // store.dispatch(action.msg.increase())
    // let { msg } = store.getState()
    // console.log(msg)
    // useEffect(() => {
    //     dispatch(action.msg.increase())
    // }, [])

    let msg = useSelector(
        (store: any) => store.msg
      )
    console.log(msg)
    return (
        <div>
            {/* {msg.count}
            <button onClick={() => {store.dispatch(action.msg.increase(90))}} >1231</button> */}
            1
        </div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ query, req }) => {
    return {
        props: {
            ui: 1,
            bb: 2
        }
      }
  });
  

export default Msg
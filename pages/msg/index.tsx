import { useEffect } from "react";
import { NextPage, GetServerSideProps} from "next";
import action from '../../store/actions/index'
import { wrapper } from '../../store'
import { END } from 'redux-saga'
import  superjson from 'superjson'

interface IJobDetail {
    jobDetail: any
    config: any
}

const Msg = ({
    jobDetail,
    config
}: IJobDetail) => {

    // store.dispatch(action.msg.increase())
    // let { msg } = store.getState()
    // console.log(msg)
    // useEffect(() => {
    //     store.dispatch(action.msg.increase())
    //     let { msg } = store.getState()
    //     console.log(msg)
    // }, [])

    return (
        <div>
            {/* {msg.count}
            <button onClick={() => {store.dispatch(action.msg.increase(90))}} >1231</button> */}
            1
        </div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
    // Code here
    let propss: {
        jobDetail: 'wq',
            config: 'pp'
    }
    const data = null
    // if (!data) {
    //     return {
    //       redirect: {
    //         jobDetail: '/',
    //         config: false,
    //       },
    //     }
    //   }
    const ui = superjson.stringify({
        jobDetail: 1,
        config: 2,
    });
      return {
        props: ui, // will be passed to the page component as props
      }
})
  

export default Msg
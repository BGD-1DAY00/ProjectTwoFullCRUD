import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HOLD_DATA } from '../../Store/reducers/actions/actions';
import { Todo } from './Todo';
import { useFetch } from './useFetch';

export const TrendingPanel = ({_useDispatch, _useSelector}) => {
    const dispatch = _useDispatch()
    const search= _useSelector(state=> state.searchReducer.search)
    const {dataFromApi, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts')
    const data = dataFromApi.filter((val)=> val.title.includes(search))    
  return (
    <div className= 'TrendingPage'>
        <h2 className='trendingPage-title'>Trending Page</h2>
        <div className='trendingPage-todos'>
            <div className='display-trending-items'>
                {data ? data.map((val)=>{
                    const {userId, id, title,body} = val
                    return(
                        <div className='TrendingPage-Card'>
                            <div className= 'trendingPage-info'>
                                <p>{id}</p>
                                <h3>{title}</h3>
                            </div>
                                <h3 className= 'trendingPage-body-info'>{body}</h3>
                        </div>
                    )
                }):dataFromApi.map((val)=>{
                    const {userId, id, title,body} = val
                    return(
                        <div className='TrendingPage-Card'>
                            <div className= 'trendingPage-info'>
                                <p>{id}</p>
                                <h3>{title}</h3>
                            </div>
                                <h3 className= 'trendingPage-body-info'>{body}</h3>
                        </div>
                    )
                })}
            </div>
            <div>
                <Todo />
            </div>
        </div>
    </div>
  )
}

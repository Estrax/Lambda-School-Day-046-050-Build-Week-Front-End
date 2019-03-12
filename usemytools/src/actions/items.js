import {
    // ERROR,
    ITEM_FETCH_REQUEST,
    ITEM_FETCH_SUCCESS,
    ITEM_FETCH_FAILURE,
    ITEMS_FETCH_REQUEST,
    ITEMS_FETCH_SUCCESS,
    ITEMS_FETCH_FAILURE,
    ITEM_ADD_REQUEST,
    ITEM_ADD_SUCCESS,
    ITEM_ADD_FAILURE,
    ITEM_UPDATE_REQUEST,
    ITEM_UPDATE_SUCCESS,
    ITEM_UPDATE_FAILURE,
    ITEM_DELETE_REQUEST,
    ITEM_DELETE_SUCCESS,
    ITEM_DELETE_FAILURE
} from '../constants/actionTypes';
import axios from 'axios';
import { API_URL } from '../constants/config';
import { history } from '../';

export function fetchTools(){
    return dispatch => {
        dispatch(requestFetch());
        
        axios
            .get(API_URL+'/tools/', {headers: {authorization: localStorage.getItem('jwt')}})
            .then(res => {
                if(res.status===200){
                    dispatch(receiveFetch(res.data));
                }else{
                    dispatch(errorFetch(res.data.error));
                    return Promise.reject(res.data);
                }
            })
            .catch(err => console.log(err));
        
    }


    function requestFetch(){
        return {
            type: ITEMS_FETCH_REQUEST
        }
    }

    function receiveFetch(items){
        return {
            type: ITEMS_FETCH_SUCCESS,
            payload: items
        }
    }

    function errorFetch(err){
        return {
            type: ITEMS_FETCH_FAILURE,
            payload: err
        }
    }
}

export function fetchTool(id){
    return dispatch => {
        dispatch(requestFetch());
        
        return axios
            .get(API_URL+`/tools/${id}`, {headers: {authorization: localStorage.getItem('jwt')}})
            .then(res => {
                if(res.status===200){
                    dispatch(receiveFetch(res.data));
                }else{
                    dispatch(errorFetch(res.data.error));
                    return Promise.reject(res.data);
                }
            })
            .catch(err => console.log(err));
        
    }


    function requestFetch(){
        return {
            type: ITEM_FETCH_REQUEST
        }
    }

    function receiveFetch(item){
        return {
            type: ITEM_FETCH_SUCCESS,
            payload: item
        }
    }

    function errorFetch(err){
        return {
            type: ITEM_FETCH_FAILURE,
            payload: err
        }
    }
}
////////////
export function addNewTool(tool){
    return dispatch => {
        dispatch(requestAddNewTool());
        
        axios
            .post(API_URL+'/tools/', tool, {headers: {authorization: localStorage.getItem('jwt')}})
            .then(res => {
                if(res.status===200){
                    dispatch(receiveAddNewTool(res.data));
                    history.push(`/tools/${res.data.id}`);
                }else{
                    dispatch(errorAddNewTool(res.data.error));
                    return Promise.reject(res.data);
                }
            })
            .catch(err => console.log(err));
        
    }


    function requestAddNewTool(){
        return {
            type: ITEM_ADD_REQUEST
        }
    }

    function receiveAddNewTool(item){
        return {
            type: ITEM_ADD_SUCCESS,
            payload: item
        }
    }

    function errorAddNewTool(err){
        return {
            type: ITEM_ADD_FAILURE,
            payload: err
        }
    }
}

////////

export function updateTool(tool){
    return dispatch => {
        dispatch(requestUpdateTool());
        
        axios
            .put(API_URL+`/tools/${tool.id}`, tool, {headers: {authorization: localStorage.getItem('jwt')}})
            .then(res => {
                if(res.status===200){
                    dispatch(receiveUpdateTool(res.data));
                    history.push(`/tools/${tool.id}`);
                }else{
                    dispatch(errorUpdateTool(res.data.error));
                    return Promise.reject(res.data);
                }
            })
            .catch(err => console.log(err));
        
    }


    function requestUpdateTool(){
        return {
            type: ITEM_UPDATE_REQUEST
        }
    }

    function receiveUpdateTool(item){
        return {
            type: ITEM_UPDATE_SUCCESS,
            payload: item
        }
    }

    function errorUpdateTool(err){
        return {
            type: ITEM_UPDATE_FAILURE,
            payload: err
        }
    }
}

export function deleteTool(id){
    return dispatch => {
        dispatch(requestDeleteTool());
        
        axios
            .delete(API_URL+`/tools/${id}`, {headers: {authorization: localStorage.getItem('jwt')}})
            .then(res => {
                if(res.status===200){
                    dispatch(receiveDeleteTool(id));
                    history.push('/tools');
                }else{
                    dispatch(errorDeleteTool(res.data.error));
                    return Promise.reject(res.data);
                }
            })
            .catch(err => console.log(err));
        
    }


    function requestDeleteTool(){
        return {
            type: ITEM_DELETE_REQUEST
        }
    }

    function receiveDeleteTool(id){
        return {
            type: ITEM_DELETE_SUCCESS,
            payload: id
        }
    }

    function errorDeleteTool(err){
        return {
            type: ITEM_DELETE_FAILURE,
            payload: err
        }
    }
}
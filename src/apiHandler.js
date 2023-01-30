import axiosClient from './apiClient';

export function getCandidates(){
    return axiosClient.get('/candidates')
}

export function addCandidates(data){
    return axiosClient.post('/candidates', JSON.stringify(data));
}
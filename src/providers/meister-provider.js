import dataService from '../../service/index';

export const loadDataAPI = () => {
    // Wrap callback handler in the promise API for
    // consistent behavior in the action creator layer
    return new Promise((resolve, reject) => {
        dataService.fetchData((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

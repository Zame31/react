import * as master from '../components/master/import';


export function postAPI(url,form,callback) {
    master.axios.post(process.env.API_URL+url, form)
    .then(function (res) {
        console.log(res);
        if (typeof callback == 'function') {
            callback("", res);
        }        
    })
    .catch(function (jqXHR, textStatus, errorThrown) {
        if (jqXHR.status === 401){
            window.location.replace("/login");
        }else {
            if (typeof callback == 'function') {
                callback(jqXHR.status, null);
            }
        }
    });
}
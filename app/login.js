import * as master from '../components/master/import';
import * as global from './global';

export function setLogin(e) {
    e.preventDefault();
    var formData = document.getElementById("login_form");
    var objData = new FormData(formData);

    global.postAPI('/api/login',objData, function (msg, res){
        if (res == null){
            toastr.warning(res.data.rm);
        }else {
            if(res.data.rc === 200){
                toastr.success(res.data.rm);
                console.log(res.data.token);
                localStorage.setItem('token', res.data.data.token);
                console.log(localStorage.getItem('token'));
                master.Router.push('/home');
            }else{
                toastr.warning(res.data.rm);
            }
        }
    });
}
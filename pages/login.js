import * as master from '../components/master/import';
import * as ActLogin from '../app/login';

const Login = () => {
    return(
        <>
        <master.Header />
            <video className="full-screen" src="img/login_vid.mp4" autoPlay loop playsInline muted></video> 
            <div className="banner banner_video_bg full-screen" id="banner">
                <header className="viewport-header banner full-screen">
                    <div className="text-center" style={{marginTop:"10%"}}>
                        <h3 className="text-uppercase" style={{fontSize:"43px",color:"#ffffff"}}>SAHATE</h3>
                        <p>Your Best Property Partner</p>
                        <div className="inline-search-area isa-5 clearfix">
                            <form id="login_form">
                            
                                <div className="row p-5">
                                    <div className="col-md-4 col-sm-12 col-12">
                                        <div className="form-group text-left">
                                            <input type="text" name="username" id="username" className="form-control search-fields sf" placeholder="Username / E-Mail" />
                                        </div>

                                    </div>
                                    <div className="col-md-4 col-sm-12 col-12">
                                        <div className="form-group text-left">
                                            <input name="password" id="password" className="form-control search-fields sf" type="password" placeholder="Password" />
                                        </div>
                                    </div>

                                    <div className="col-md-2 col-sm-12 col-12 mb-2">
                                        <button  type="submit" onClick={ActLogin.setLogin} id="btn_login" className="btn button-theme btn-search btn-block mb-0">
                                            <strong>Login</strong>
                                        </button>
                                    </div>
                                    <div className="col-md-2 col-sm-12 col-12 mb-2">
                                        <a href="#" className="btn button-theme btn-search btn-block mb-0" style={{padding: "15px",background: "#3a3737"}}>
                                            <strong>CMS Admin</strong>
                                        </a>
                                    </div>
                                
                                    <div className="offset-xl-1 col-md-4 col-sm-6 col-6">

                                        <a className="zn-text-login" href="#">Lupa Username ?</a>
                                    </div>
                                    <div className="col-md-4 col-sm-6 col-6">

                                        <a className="zn-text-login" href="#">Lupa Password ?</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </header>
            </div>
        <master.Footer />
        </>

    )
}

export default Login;
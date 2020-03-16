export const userStatus = (state,user)=>{
    if(user){
        state.currentUser = user
        state.isLogin = true
    }else if(user==null){
        //等出的时候，清空sessionStorage里面的东西
        sessionStorage.setItem('userName',null);
        sessionStorage.setItem("userToken","");
        state.currentUser = null;
        state.isLogin = false;
        state.token = "";
    }
}
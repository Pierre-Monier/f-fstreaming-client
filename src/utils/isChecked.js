export const isChecked = (history, isChecked, redirect) => {
    if(history.location.pathname !== "/" && !isChecked){
        if(redirect){
            history.push("/")
        }else{
            return false
        }
    }else{
        return true
    }
}
export const checkUser = (user, callback) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", user.username);
    urlencoded.append("pw", user.pw);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
    };
    fetch(process.env.REACT_APP_API_CHECKUSER, requestOptions)
    .then(response => response.json())
    .then(result => {
        if(result.isChecked){
            callback.success(result)
        }else{
            callback.error()
        }}
    )
    .catch(error => console.log('error', error));

}
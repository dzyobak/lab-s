function Gcookie(name){
    var start = document.cookie.indexOf(name+"=");
    var len = start+name.length+1;
    if ((!start) && (name !=document.cookie.substring(0,name.length))) return null;
    if (start == -1) return null;
        var end =document.cookie.indexOf(";",len);
    if (end == -1) end =document.cookie.length;
        return unescape(document.cookie.substring(len,end));
        }
function set_cookie (name, value){
    var argv = set_cookie.arguments;
    var argc = set_cookie.arguments.length;
    var expires = (argc > 2) ? argv[2] :null;
    var path = (argc > 3) ? argv[3] : null;
}
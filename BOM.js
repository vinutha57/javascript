window.open("", height=50, width=50)
window.close()

function navigatorProperty() {
    document.write("navigator name is:"+navigator.appName)
    document.write("<br>navigator code name is:"+navigator.appCodeName)
    document.write("<br>navigator cookie:"+navigator.cookieEnabled)
    document.write("<br>navigator product:"+navigator.product)
    document.write("<br>navigator platform:"+navigator.platform)
    
}
navigatorProperty()

function fnLocation() {
    console.log(location.href)
    console.log(location.protocol)
    console.log(location.pathname)
    console.log(location.hostname)
    console.log(location.assign)
}
fnLocation()


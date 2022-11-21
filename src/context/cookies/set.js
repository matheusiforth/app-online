export function SetCookie(name, value, duration) {

    var cookie = name + "=" + escape(value) +
    ((duration) ? "; duration=" + duration.toGMTString() : "");
  
    document.cookie = cookie;
  }
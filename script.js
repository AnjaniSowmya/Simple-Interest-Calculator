function calc(){
    var p, r, t,s,a;
    p=Number(document.getElementById("iprincipal").value);
    r=Number(document.getElementById("irate").value);
    t=Number(document.getElementById("itime").value);
    s= (p*t*r)/(100*12);
    a=s+p;
    sans=document.getElementById('sans');
    ans=document.getElementById('pans');
    sans.innerHTML="<p><b><i>Simple Interest at the end of "+t+" months is ₹"+s.toFixed(3)+"</i></b></p>";
    pans.innerHTML="<p><b><i>Total Amount at the end of "+t+" months is ₹"+a.toFixed(3)+"</i></b></p>";

}

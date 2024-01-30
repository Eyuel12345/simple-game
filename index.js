function generatepassword(length,includeupper,includelower,includenums,includesymbols){
    let allowedchars='';
    if (includeupper){
        allowedchars=allowedchars+'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if(includelower){
        allowedchars=allowedchars+'abcdefghijklmnopqrstuvwxyz';
    }
    if(includenums){
        allowedchars=allowedchars+'0123456789';
    }
    if(includesymbols){
        allowedchars=allowedchars+'@';
    }
    let password='';
    for(let i=1;i<=length;i=i+1){
        let index = Math.floor(Math.random()*allowedchars.length);
        password=password+allowedchars[index];
    }
    return password;
}

const button = document.getElementById('button');

button.onclick = function(){
    const length = document.getElementById('length');
    const uppertrue = document.getElementById('uppertrue');
    const upperfalse = document.getElementById('upperfalse');
    const lowertrue = document.getElementById('lowertrue');
    const lowerfalse = document.getElementById('lowerfalse');
    const numstrue = document.getElementById('numstrue');
    const numsfalse = document.getElementById('numsfalse');
    const symstrue = document.getElementById('symstrue');
    const symsfalse = document.getElementById('symsfalse');
    const result = document.getElementById('result');

    let l,ut,lt,nt,st;

    l=Number(length.value);

    if(uppertrue.checked){
        ut=true;
    }
    if(upperfalse.checked){
        ut=false;
    }
    if(lowertrue.checked){
        lt=true;
    }
    if(lowerfalse.checked){
        lt=false;
    }
    if(numstrue.checked){
        nt=true;
    }
    if(numsfalse.checked){
        nt=false;
    }
    if(symstrue.checked){
        st=true;
    }
    if(symsfalse.checked){
        st=false;
    }
    result.textContent=`${generatepassword(l,ut,lt,nt,st)}`;
}


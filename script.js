        let icon = document.getElementById('icon1')
        let icone2 = document.getElementById('icon2')
        let pwd = document.getElementById('ip')
        let ic = document.getElementById('ic')

        let c1 = document.getElementById('cb1')
        let c2 = document.getElementById('cb2')
        let c3 = document.getElementById('cb3')
        let c4 = document.getElementById('cb4')
        let c5 = document.getElementById('cb5')

        pwd.focus();
        let c = 0;
        icon.addEventListener('click',()=>{
            if(c==0)
            {
                icon.setAttribute("class","fa-regular fa-eye-slash");
                pwd.setAttribute('type','text');
                c=1;
            }
            else{
                icon.setAttribute("class","fa-solid fa-eye");
                pwd.setAttribute('type','password');
                c=0
            }
        })

        //chech validation
        function checkvalid()
        {
            let lc = document.getElementById('lc');
           
            if(ip.value.match(/[a-z]/))
             {
                lc.style.color = 'green';
                let cb1 = document.getElementById('cb1').checked = true;
             }
            else
            { lc.style.color = 'red';
            let cb1 = document.getElementById('cb1').checked = false;
            }

             //

            let up = document.getElementById('up');
            if(ip.value.match(/[A-Z]/))
             {
                 up.style.color = 'green';
                 let cb2 = document.getElementById('cb2').checked = true;
             }
            else
            { up.style.color = 'red';
            let cb2 = document.getElementById('cb2').checked = false;
            }

            //

            let num = document.getElementById('num');
            if(ip.value.match(/[0-9]/))
             {
            num.style.color = 'green';
            let cb3 = document.getElementById('cb3').checked = true;
             }
            else
            { num.style.color = 'red';
            let cb3 = document.getElementById('cb3').checked = false;
            }

            //

            let spchar = document.getElementById('spchar');
            if(ip.value.match(/[!\@\#\$\%\^\&\*\(\)\_\+\=\?\>\<\.\,]/))
             {
                spchar.style.color = 'green';
                let cb4 = document.getElementById('cb4').checked = true;
             }
            else
            { spchar.style.color = 'red';
            let cb4 = document.getElementById('cb4').checked = false;
            }

            let len = document.getElementById('len');
            if(ip.value.length > 8)
             {
            len.style.color = 'green';
            let cb5 = document.getElementById('cb5').checked = true;
                cb5.style.color = 'yellow';
             }
            else
            { len.style.color = 'red';
            let cb5 = document.getElementById('cb5').checked = false;
            }

            //set password
            let btn=document.getElementById('btn');
            let alert = document.getElementById('alert');
            function Submitbtn(){
                 if(ip.value.length <1)
                {    alert.innerHTML = "Password is incorrect";
                setTimeout(()=>{alert.innerHTML = "" },2000);
                }
                else{
                alert.innerHTML = "Yor Password is Valid"
                setTimeout(()=>{alert.innerHTML = "" },2000);
                ip.value = null;
                c1.checked = false;
                c2.checked = false;
                c3.checked = false;
                c4.checked = false;
                c5.checked = false;
            }
            }   
            btn.addEventListener('click',Submitbtn);
        }

const result = document.getElementById('result');
        const inputValue = document.getElementById('input-value');
        document.getElementById('search-input').addEventListener('click', function(){
            fetch("https://api.lyrics.ovh/suggest/"+inputValue.value+" ")
            .then(response => response.json())
            .then(resData => {
                for (let i = 0; i < 10; i++) {
                    const pTag = document.createElement('p');
                    const strongTag = document.createElement('strong');
                    const span = document.createElement('span');
                    const btn = document.createElement('button');
                    strongTag.innerText = resData.data[i].title;
                    span.innerText = " Author By "+resData.data[i].artist.name;
                    btn.innerText = "FindLyrics";

                    result.appendChild(pTag);  
                    pTag.appendChild(strongTag);
                    pTag.appendChild(span);
                    pTag.appendChild(btn);              
                }
                console.log(resData.data[0].title);

            })            
        })
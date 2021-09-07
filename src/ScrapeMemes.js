
export default async function ScrapeMemes() {
    
        try{
            
            let parentDiv = document.createElement('div')
            parentDiv.id='memes';

            fetch('https://www.reddit.com/r/memes.json')
            .then(response => response.json())
            .then(body => {
                for(let index=0;index<body.data.children.length;index++){
                    if(body.data.children[index].data.post_hint==='image'){
                        let div=document.createElement('div');
                        let image=document.createElement('img');
                        image.src=body.data.children[index].data.url_overriden_by_dest
                        div.appendChild(image);
                        parentDiv.appendChild(div);

                    }
                }
                document.body.appendChild(parentDiv);

            })


              }catch (error) {
          console.error(error);
        }
        
      }
      ScrapeMemes();
    
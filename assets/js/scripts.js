document.querySelectorAll('.reactions').forEach(react=>{
    react.querySelectorAll('.plus').forEach(plus=>{
        plus.addEventListener('click', ()=>{
            react.querySelectorAll('span').forEach(span=>{
                let spanValue = span.getAttribute('value')
                    spanValue++
                    span.innerHTML = spanValue
            })
        })
    })

    react.querySelectorAll('.minus').forEach(minus =>{
        minus.addEventListener('click', ()=>{
            react.querySelectorAll('span').forEach(span=>{
                let spanValue = span.getAttribute('value')
                span.innerHTML = spanValue
            })
        })
    })
})

document.querySelectorAll('.li-comments').forEach(listas=>{
    listas.querySelectorAll('.reply').forEach(reply=>{
        reply.addEventListener('click', ()=>{

            let divReply = document.createElement('div')
            divReply.classList.add('div-reply')
            let replyImg = document.createElement('img')
            replyImg.src = 'assets/images/image-juliusomo.png'
            divReply.appendChild(replyImg)
            let textReply = document.createElement('textarea')
            textReply.classList.add('text-reply')
            divReply.appendChild(textReply)
            let buttonReply = document.createElement('button')
            buttonReply.classList.add('button-reply')
            buttonReply.innerHTML = 'reply'
            divReply.appendChild(buttonReply)
            listas.appendChild(divReply)
            
            if(document.querySelector('.div-reply').classList.contains('show')){
                document.querySelector('.div-reply').classList.remove('show')
                listas.removeChild(document.querySelector('.div-reply'))
            }else{
                document.querySelector('.div-reply').classList.add('show')
            }
           
            
            document.querySelectorAll('.button-reply').forEach(item=>{
                item.addEventListener('click', (e)=>{
                    if(textReply.value == ''){

                    }else{
                        
                        let ulResponse = document.createElement('ul')
                        ulResponse.classList.add('ul-response')
                        let liResponse = document.createElement('li')
                        liResponse.classList.add('li-response')
                        ulResponse.appendChild(liResponse)
                        let divResponse = document.createElement('div')
                        let divReactions = document.createElement('div')
                        divReactions.classList.add('reactions')
                        let svg1 = document.createElement('svg')
                        svg1.classList.add('plus')
                        svg1.innerHTML = `<svg class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/></svg>`
                        let span = document.createElement('span')
                        span.classList.add('value')
                        span.setAttribute('value', 0)
                        let spanValue = span.getAttribute('value')
                        span.innerHTML = spanValue
                        let svg2 = document.createElement('svg')
                        svg2.classList.add('minus')
                        svg2.innerHTML = `<svg class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/></svg>`
                        divReactions.appendChild(svg1)
                        divReactions.appendChild(span)
                        divReactions.appendChild(svg2)
                        divResponse.appendChild(divReactions)
                        let divInfo = document.createElement('div')
                        divInfo.classList.add('geral-info')
                        let divPerson = document.createElement('div')
                        let timeCommenter = document.createElement('p')
                        timeCommenter.classList.add('date')
                        timeCommenter.innerHTML = '0 second ago'

                        let dTime = 0
                        setInterval(()=>{
                        dTime += 1000
                        let seconds = dTime / 1000
                        let minutes = Math.floor(dTime / (1000 * 60))
                        let hours = Math.floor(dTime / (1000 * 60 * 60))
                        let day = Math.floor(dTime/ (1000 * 60 * 60 * 24))
                        let week = Math.floor(dTime / (1000 * 60 * 60 * 24 * 7))
                    
                        if(seconds <60){
                            if(seconds == 1){
                                timeCommenter.innerHTML = seconds + ' second ago'
                            }else{
                                timeCommenter.innerHTML = seconds +  ' seconds ago'
                            }
                        }
                        if(minutes <60 && minutes >= 1){
                            if(minutes == 1){
                                timeCommenter.innerHTML = minutes + ' minute ago'
                            }else{
                                timeCommenter.innerHTML = minutes + ' minutes ago'
                            }
                        }   
                        if(hours < 24 && hours >= 1){
                            if(hours == 1){
                                timeCommenter.innerHTML = hours + ' hour ago'
                            }else{
                                timeCommenter.innerHTML = hours + ' hours ago'
                            }
                        }

                        if(day < 7 && day >= 1){
                            if(day == 1){
                                timeCommenter.innerHTML = day + ' day ago'
                            }else{
                                timeCommenter.innerHTML = day + ' days ago'
                            }
                        }

                        if(week >= 1){
                            if(week == 1){
                                timeCommenter.innerHTML = week + ' week ago'
                            }else{
                                timeCommenter.innerHTML = week + ' weeks ago'
                            }
                        }
                    
                        },1000)

                        divPerson.classList.add('person')
                        divPerson.innerHTML = `<div class="person"><img src="/assets/images/image-juliusomo.png" alt=""><p class="name">juliosomo</p><p id="you">you</p>`
                        divPerson.appendChild(timeCommenter)
                        let pInfo = document.createElement('p')
                        pInfo.classList.add('paragraph')
                        pInfo.innerHTML = `${textReply.value}`
                        let buttonUpdate = document.createElement('button')
                        buttonUpdate.classList.add('update')
                        buttonUpdate.innerHTML = 'Update'
                        divInfo.appendChild(buttonUpdate)
                        divInfo.appendChild(divPerson)
                        divInfo.appendChild(pInfo)
                        divResponse.appendChild(divInfo)
                        let divDelete = document.createElement('div')
                        divDelete.classList.add('delete')
                        let pDel = document.createElement('p')
                        let svgDel = document.createElement('svg')
                        svgDel.innerHTML = '<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>'
                        pDel.innerHTML = 'Delete'
                        pDel.classList.add('del')
                        divDelete.appendChild(svgDel)
                        divDelete.appendChild(pDel)
                        divResponse.appendChild(divDelete)
                        let divEdit = document.createElement('div')
                        divEdit.classList.add('edit')
                        let svgEdit = document.createElement('svg')
                        let pEdit = document.createElement('p')
                        pEdit.innerHTML = 'Edit'
                        svgEdit.innerHTML = '<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>'
                        divEdit.appendChild(svgEdit)
                        divEdit.appendChild(pEdit)
                        divResponse.appendChild(divEdit)
                        liResponse.appendChild(divResponse)
                        divResponse.classList.add('response')
                        divResponse.classList.add('you')
                        listas.appendChild(ulResponse)
                        listas.removeChild(divReply)
    
                        //
    
                        svg1.addEventListener('click', ()=>{
                            spanValue = +1
                            span.innerHTML = spanValue
                        })
    
                        svg2.addEventListener('click', ()=>{
                            if(spanValue > 0){
                                spanValue --
                                span.innerHTML = spanValue
                            }
                        })
    
                        divDelete.addEventListener('click', ()=>{
                            document.querySelector('.delete-comment').style.display = 'block'
                            document.querySelector('.back').style.display = 'block'
                            window.scroll({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                              });
    
                              document.querySelector('.yes-delete').addEventListener('click', (e)=>{
                                   liResponse.style.display = 'none'
                                   document.querySelector('.delete-comment').style.display = 'none'
                            document.querySelector('.back').style.display = 'none'
                              })
                        })
    
                        divEdit.addEventListener('click', ()=>{
                            let inputForm = document.createElement('textarea')
                            inputForm.classList.add('input-form')
                            inputForm.value = pInfo.innerText
                            pInfo.innerHTML = ''
                            pInfo.appendChild(inputForm)
                            buttonUpdate.style.display = 'block'
                            divResponse.style.paddingBottom = '60px'
    
                            buttonUpdate.addEventListener('click', ()=>{
                                pInfo.innerHTML = inputForm.value
                                buttonUpdate.style.display = 'none'
                                divResponse.style.paddingBottom = '25px'
                            })
                        })
                    }

                    
                    
                })
            })
        })
    })
})

function newCommenter(){
    if(document.querySelector('#add-comment').value != ''){
        let li = document.createElement('li')
        li.classList.add('li-comments')
        let divComments = document.createElement('div')
        divComments.classList.add('comments')
        divComments.classList.add('you')
        li.appendChild(divComments)
        let divReactions = document.createElement('div')
        divReactions.classList.add('reactions')
        let svg1 = document.createElement('svg')
        svg1.classList.add('plus')
        svg1.innerHTML = `<svg class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/></svg>`
        let span = document.createElement('span')
        span.classList.add('value')
        span.setAttribute('value', 0)
        let spanValue = span.getAttribute('value')
        span.innerHTML = spanValue
        let svg2 = document.createElement('svg')
        svg2.classList.add('minus')
        svg2.innerHTML = `<svg class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/></svg>`
        divReactions.appendChild(svg1)
        divReactions.appendChild(span)
        divReactions.appendChild(svg2)
        divComments.appendChild(divReactions)
        let divInfo = document.createElement('div')
        divInfo.classList.add('geral-info')
        let divPerson = document.createElement('div')
        let timeCommenter = document.createElement('p')
        timeCommenter.classList.add('date')
        timeCommenter.innerHTML = '0 second ago'
        let dTime = 0
        setInterval(()=>{
        dTime += 1000
        let seconds = dTime / 1000
        let minutes = Math.floor(dTime / (1000 * 60))
        let hours = Math.floor(dTime / (1000 * 60 * 60))
        let day = Math.floor(dTime/ (1000 * 60 * 60 * 24))
        let week = Math.floor(dTime / (1000 * 60 * 60 * 24 * 7))
     
        if(seconds <60){
            if(seconds == 1){
                timeCommenter.innerHTML = seconds + ' second ago'
            }else{
                timeCommenter.innerHTML = seconds +  ' seconds ago'
            }
        }
        if(minutes <60 && minutes >= 1){
            if(minutes == 1){
                timeCommenter.innerHTML = minutes + ' minute ago'
            }else{
                timeCommenter.innerHTML = minutes + ' minutes ago'
            }
        }   
        if(hours < 24 && hours >= 1){
            if(hours == 1){
                timeCommenter.innerHTML = hours + ' hour ago'
            }else{
                timeCommenter.innerHTML = hours + ' hours ago'
            }
        }

        if(day < 7 && day >= 1){
            if(day == 1){
                timeCommenter.innerHTML = day + ' day ago'
            }else{
                timeCommenter.innerHTML = day + ' days ago'
            }
        }

        if(week >= 1){
            if(week == 1){
                timeCommenter.innerHTML = week + ' week ago'
            }else{
                timeCommenter.innerHTML = week + ' weeks ago'
            }
        }
    
        },1000)

        divPerson.classList.add('person')
        divPerson.innerHTML = `<div class="person"><img src="/assets/images/image-juliusomo.png" alt=""><p class="name">juliosomo</p><p id="you">you</p>`
        divPerson.appendChild(timeCommenter)
        let pInfo = document.createElement('p')
        pInfo.classList.add('paragraph')
        pInfo.innerHTML = `${document.querySelector('#add-comment').value}`
        let buttonUpdate = document.createElement('button')
        buttonUpdate.classList.add('update')
        buttonUpdate.innerHTML = 'Update'
        divInfo.appendChild(buttonUpdate)
        divInfo.appendChild(divPerson)
        divInfo.appendChild(pInfo)
        divComments.appendChild(divInfo)
        let divDelete = document.createElement('div')
        divDelete.classList.add('delete')
        let pDel = document.createElement('p')
        let svgDel = document.createElement('svg')
        svgDel.innerHTML = '<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>'
        pDel.innerHTML = 'Delete'
        pDel.classList.add('del')
        divDelete.appendChild(svgDel)
        divDelete.appendChild(pDel)
        divComments.appendChild(divDelete)
        let divEdit = document.createElement('div')
        divEdit.classList.add('edit')
        let svgEdit = document.createElement('svg')
        let pEdit = document.createElement('p')
        pEdit.innerHTML = 'Edit'
        svgEdit.innerHTML = '<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>'
        divEdit.appendChild(svgEdit)
        divEdit.appendChild(pEdit)
        divComments.appendChild(divEdit)
        document.querySelector('ul').appendChild(li)
        document.querySelector('#add-comment').value = ''

       

        svg1.addEventListener('click', ()=>{
            spanValue = +1
            span.innerHTML = spanValue
        })

        svg2.addEventListener('click', ()=>{
            if(spanValue > 0){
                spanValue --
                span.innerHTML = spanValue
            }
        })

        divDelete.addEventListener('click', ()=>{
            document.querySelector('.delete-comment').style.display = 'block'
            document.querySelector('.back').style.display = 'block'
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });

              document.querySelector('.yes-delete').addEventListener('click', (e)=>{
                   li.style.display = 'none'
                   document.querySelector('.delete-comment').style.display = 'none'
                document.querySelector('.back').style.display = 'none'
              })

            })
            divEdit.addEventListener('click', ()=>{
              let inputForm = document.createElement('textarea')
              inputForm.classList.add('input-form')
              inputForm.value = pInfo.innerText
              pInfo.innerHTML = ''
              pInfo.appendChild(inputForm)
              buttonUpdate.style.display = 'block'
              divComments.style.paddingBottom = '60px'

              buttonUpdate.addEventListener('click', ()=>{
                  pInfo.innerHTML = inputForm.value
                  buttonUpdate.style.display = 'none'
                  divComments.style.paddingBottom = '25px'
              })
        })



    }
   
}


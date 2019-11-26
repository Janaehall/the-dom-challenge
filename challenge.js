let isPaused = false

document.addEventListener('DOMContentLoaded', function(){
  const counter = document.getElementById('counter')
  timer(counter)
  allButtons(counter)
  commentForm()
})

function timer(counter) {
    setInterval(function(){
      if(isPaused == false) {
      counter.innerText = parseInt(counter.innerText) + 1
      }
    }, 1000)
}

function allButtons(counter) {
  incrementButton(counter)
  decrementButton(counter)
  loveButton(counter)
  togglePause(counter)
}

function incrementButton(counter){
  const plus = document.getElementById('+')
  plus.addEventListener('click', function(){
    counter.innerText = parseInt(counter.innerText) + 1
  })
}

function decrementButton(counter) {
  const minus = document.getElementById('-')
  minus.addEventListener('click', function(){
    counter.innerText = parseInt(counter.innerText) - 1
  })
}

function loveButton(counter) {
  const loveButton = document.getElementById('<3')
  const likes = document.querySelector('.likes')
  obj = {}
  loveButton.addEventListener('click', function(){
    const counterVal = parseInt(counter.innerText)
    if (!obj[counterVal]) {
      obj[counterVal] = 1
      likes.insertAdjacentHTML('beforeend', `<li id="${counterVal}-likes">${counterVal} has been liked ${obj[counterVal]} times!</li>`)
    }
    else {
      obj[counterVal]++
      const numLike = document.getElementById(`${counterVal}-likes`)
      numLike.innerText = `${counterVal} has been liked ${obj[counterVal]} times!`
    }
  })
}

function togglePause(counter){
  const pause = document.getElementById('pause')
  pause.addEventListener('click', function(){
    if (pause.innerText==='pause'){
      console.log(isPaused)
      isPaused = true
      pause.innerText = 'resume'
    }
    else if (pause.innerText==='resume'){
      console.log(isPaused)
      isPaused = false
      pause.innerText = 'pause'
    }
  })
}

function commentForm(){
  const commentForm = document.getElementById('comment-form')
  commentForm.addEventListener('submit', function(){
    event.preventDefault()
    const comment = document.getElementById('comment').value
    const commentList = document.getElementById('list')
    commentList.insertAdjacentHTML('beforeend', `<p>${comment}</p>`)
  })
}
import react from 'react'
import loadingStyle from '../styles/loading.css'

const LoadingModal = () => {
  return (
    <div class="modal-loading">
      <div class="container-loading">
        <div class="bars-loading">
          <div class="bar-loading bar1-loading"></div>
          <div class="bar-loading bar2-loading"></div>
          <div class="bar-loading bar3-loading"></div>
          <div class="bar-loading bar4-loading"></div>
          <div class="bar-loading bar5-loading"></div>
          <div class="bar-loading bar6-loading"></div>
          <div class="bar-loading bar7-loading"></div>
          <div class="bar-loading bar8-loading"></div>
          <div class="bar-loading bar9-loading"></div>
          <div class="bar-loading bar10-loading"></div>
          <div class="bar-loading bar11-loading"></div>
          <div class="bar-loading bar12-loading"></div>
          <div class="bar-loading bar13-loading"></div>
          <div class="bar-loading bar14-loading"></div>
          <div class="bar-loading bar15-loading"></div>
        </div>
        <p class="text-loading">Loading <span class="dot-loading dot1-loading">. </span><span
          class="dot-loading dot2-loading">. </span><span class="dot-loading dot3-loading">.
        </span>
        </p>
      </div>
    </div>
  )
}
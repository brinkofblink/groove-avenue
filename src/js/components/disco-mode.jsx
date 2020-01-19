import Ready from 'ready'
import Flip  from 'data-flip'

Ready(() => {
  const logo = document.querySelector('.homepage__logo');
  logo.onclick = () => {
    Flip('discoMode');
  }
})
